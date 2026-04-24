# Prop Firm Operator - Web Payment Integration Spec

Date: 2026-04-24
Status: exploration

## 核心判断

网页版收费的关键不是“能不能收钱”。

真正关键的是：

- 支付成功后如何给玩家 access
- 退款后如何撤销 access
- 不做复杂账号时如何不被卡住
- 未来移动端和 Steam 如何迁移
- 不让支付系统拖慢 v0 playable 的验证

这份文档的目标是：

**把网页版收费具体对接方式拆成可实现的 checkout、webhook、license、entitlement 和 access flow。**

## 推荐方案

### v0 / v1 首选

**Lemon Squeezy + License Key + Serverless entitlement check**

原因：

- Merchant of Record，减轻全球税务/VAT/退款/账单支持负担
- 支持一次性数字产品
- 支持 license keys
- 支持 checkout custom data
- 支持 webhooks
- 对小团队自有网页收费比 Stripe 自接更省心

### 更快但更像商店的方案

**itch.io paid build**

适合：

- 快速 paid validation
- 不想做账号/授权
- 可以接受玩家去 itch 页面购买/下载或打开付费 build

### 后续更正式方案

**Paddle / Stripe**

适合：

- Paddle：更 SaaS/software-like 的 web entitlement 和全球 MoR
- Stripe：你愿意自己处理更多税务/合规/退款责任，换取更强控制和较低基础费率

## MVP 收费路线图

### Step 0: Free Demo

不用支付。

功能：

- 12-week demo
- local save
- export route optional

目的：

- 证明 loop
- 收 email
- 等待 Green / Yellow Light

### Step 1: Founder Access - No Account

最小收费方案。

流程：

1. 玩家点击 `Get Founder Access`
2. 跳到 Lemon Squeezy checkout
3. 付款成功
4. Lemon Squeezy 生成 license key
5. 玩家在 receipt/email 或 redirect URL 中拿到 license key
6. 回到网页 `/unlock`
7. 输入 license key 或 URL 自动带入
8. 网页调用 `/api/license/validate`
9. serverless endpoint 调 Lemon License API
10. valid 后前端保存本地 access token
11. 解锁 Founder Access

优点：

- 不需要账号系统
- 能很快上线
- 支持用户换设备时重新输入 license

缺点：

- 体验不如登录账号
- license 可能被共享
- 退款撤销需要 webhook + DB 才更稳

适用：

- 第一批付费验证
- 小规模 Founder Access

### Step 2: Founder Access - Email Login

更稳的正式 web 方案。

流程：

1. 玩家先输入 email 或 magic link 登录
2. 创建本地 `user_id`
3. 点击购买
4. 后端创建 checkout，并传 `checkout_data.custom.user_id`
5. Lemon Squeezy webhook 收到 `order_created` / `license_key_created`
6. 后端写入 `entitlements`
7. 前端在 success page 查询 `/api/me/entitlement`
8. 解锁 paid features

优点：

- access 绑定用户
- refund/revoke 更容易
- 支持跨设备
- 未来 mobile web / Steam upgrade 更容易

缺点：

- 需要 auth 和数据库
- 实现略重

适用：

- 付费用户超过 50-100
- 准备长期运营 web build

## 推荐 v1 架构

```text
Frontend
  /demo
  /buy
  /unlock
  /app

Serverless API
  POST /api/checkout/create
  POST /api/webhooks/lemonsqueezy
  POST /api/license/validate
  GET  /api/me/entitlement

Database
  users
  purchases
  entitlements
  license_keys
  webhook_events
```

## Lemon Squeezy 具体对接

### Dashboard 设置

1. 创建 Store
2. 创建 Product: `Prop Firm Operator - Founder Access`
3. 创建 Variant:
   - `Founder Access`
   - price: `US$8-12`
   - one-time payment
4. 开启 License Keys
5. 设置 activation limit:
   - MVP: `3`
   - 更严格：`1`
6. 设置 post-order button link:
   - `https://yourdomain.com/unlock?license_key=[license_key]`

说明：

- Lemon Squeezy 支持在 receipt / confirmation button URL 中带 `[license_key]`。
- License key 会出现在 order receipt / My Orders。

### Checkout Link 方案

最简单：

```text
https://STORE.lemonsqueezy.com/checkout/buy/VARIANT_ID
```

带 custom data：

```text
https://STORE.lemonsqueezy.com/checkout/buy/VARIANT_ID?checkout[custom][user_id]=USER_ID
```

适合：

- 已有 user id
- 想通过 webhook 把订单和用户绑定

### API Create Checkout 方案

适合：

- 要动态传 user id
- 要预填 email
- 要加 campaign/referral
- 要生成一次性 checkout URL

请求要点：

- `store_id`
- `variant_id`
- `checkout_data.email`
- `checkout_data.custom.user_id`
- `checkout_data.custom.campaign_id`

## Webhook 具体接法

### 必接事件

一次性购买最少：

- `order_created`
- `order_refunded`
- `license_key_created`
- `license_key_updated`

如果以后做订阅，再加：

- `subscription_created`
- `subscription_updated`
- `subscription_expired`
- `subscription_payment_success`
- `subscription_payment_failed`

### Webhook endpoint

```text
POST /api/webhooks/lemonsqueezy
```

必须做：

1. 读取 raw body
2. 校验 `X-Signature`
3. 读取 `X-Event-Name`
4. 幂等保存 webhook event
5. 立刻返回 200
6. 异步处理 entitlement

### 幂等键

建议使用：

```text
provider = "lemonsqueezy"
event_name
data.id
```

或如果 payload 有唯一 event id，则优先用 event id。

### 处理逻辑

#### `order_created`

写入：

- purchase
- customer email
- product / variant
- paid status
- order id
- total / currency

如果有 `custom_data.user_id`：

- 给 user grant entitlement

#### `license_key_created`

写入：

- license key id
- key short
- user email
- product / variant
- status

如果有 user_id：

- link license to user

#### `order_refunded`

处理：

- mark purchase refunded
- revoke entitlement
- optionally mark license revoked locally

#### `license_key_updated`

处理：

- sync license status
- if disabled/expired, revoke entitlement

## License Validate API

### Endpoint

```text
POST /api/license/validate
```

Request:

```json
{
  "licenseKey": "xxxx-xxxx",
  "email": "player@example.com"
}
```

Server action:

1. Call Lemon Squeezy:

```text
POST https://api.lemonsqueezy.com/v1/licenses/validate
```

2. Check:

- `valid === true`
- license status active/inactive
- product/variant matches Founder Access
- optional: `meta.customer_email` matches submitted email

3. Return:

```json
{
  "valid": true,
  "tier": "founder_access",
  "expiresAt": null
}
```

### Activate vs Validate

Use `activate` if you want device/instance tracking:

```text
POST /v1/licenses/activate
license_key=...
instance_name=browser-device-id
```

Use `validate` if you only need to check access:

```text
POST /v1/licenses/validate
license_key=...
```

MVP recommendation:

- Start with `validate`
- Add `activate` only if license sharing becomes a real issue

## Database Schema

### `users`

```sql
id text primary key
email text unique
created_at timestamp
```

For no-account MVP:

- optional
- can skip

For email login:

- required

### `purchases`

```sql
id text primary key
provider text
provider_order_id text unique
user_id text null
email text
product_id text
variant_id text
status text
currency text
amount_cents integer
refunded boolean
created_at timestamp
updated_at timestamp
```

### `entitlements`

```sql
id text primary key
user_id text null
email text
tier text
source text
status text
purchase_id text
license_key_id text null
starts_at timestamp
ends_at timestamp null
created_at timestamp
updated_at timestamp
```

Status:

- `active`
- `revoked`
- `expired`

Tier:

- `free_demo`
- `founder_access`
- `supporter_bundle`

### `license_keys`

```sql
id text primary key
provider text
provider_license_id text unique
key_hash text
key_short text
email text
status text
activation_limit integer null
activation_usage integer null
created_at timestamp
updated_at timestamp
```

Important:

- Store hash or short key for local reference.
- Avoid storing full license key unless necessary.

### `webhook_events`

```sql
id text primary key
provider text
event_name text
provider_object_id text
payload_json json
processed boolean
created_at timestamp
processed_at timestamp null
```

Purpose:

- idempotency
- debugging
- replay

## Access Control In App

### Free Demo Features

Allowed:

- 12-week run
- one route at a time
- local export maybe disabled or limited
- no route history

### Founder Access Features

Unlock:

- route export
- debug-lite route recap
- save slots
- changelog access
- future v0 updates
- supporter credit optional

### Frontend gate

```ts
const canUseFounderFeatures =
  entitlement?.tier === "founder_access" &&
  entitlement?.status === "active";
```

Do not hide the whole game behind paywall.

Recommended:

- Free demo playable
- Founder Access unlocks deeper replay/export/updates

## Checkout Success Flow

### Without account

```text
/buy
  -> Lemon checkout
  -> /unlock?license_key=...
  -> validate license
  -> store signed access token in localStorage
  -> /app?unlocked=true
```

### With account

```text
/buy
  -> require email login
  -> create checkout with custom user_id
  -> Lemon checkout
  -> /checkout/success
  -> webhook grants entitlement
  -> frontend polls /api/me/entitlement
  -> /app
```

### Polling success page

Because webhook can be delayed:

```text
GET /api/me/entitlement every 2s for 20s
```

If not found:

- show “Still confirming payment”
- offer “Enter license key manually”

## Refund / Revocation Flow

When webhook receives `order_refunded`:

1. mark purchase refunded
2. mark entitlement revoked
3. next app load sees revoked status
4. show message:

```text
Founder Access is no longer active for this purchase.
```

For no-account license MVP:

- revocation is weaker unless validation checks remote status regularly
- schedule revalidation on app load

## Security Notes

### Do not expose API secrets

Never put:

- Lemon API key
- webhook secret
- Stripe secret
- Paddle API key

in frontend code.

### Client-only license validation is weak

If the frontend calls a public validate endpoint directly, users can inspect and bypass logic.

Better:

- serverless validate
- signed entitlement token
- periodic remote check

### Do not overbuild DRM

Goal is paid validation, not enterprise anti-piracy.

Accept:

- some sharing risk
- manual support for early buyers

Avoid:

- invasive device lock
- always-online play requirement
- hostile DRM

## Alternative: itch.io Concrete Flow

Use if you want fastest paid validation.

Flow:

1. Create itch project
2. Upload web build or downloadable build
3. Set minimum price, e.g. `US$9.99`
4. Free demo stays public
5. Paid build available to purchasers
6. Buyers get itch download key

Pros:

- Fastest
- No custom webhook work
- Indie audience understands prototypes
- itch handles hosting/sales flow

Cons:

- Harder to gate custom web app features
- Less control over entitlement
- Less own-brand checkout

Good use:

- First paid validation before custom web entitlement

## Alternative: Stripe Concrete Flow

Use if you want full control and accept more compliance responsibility.

Flow:

1. Create Product + Price in Stripe
2. Create Checkout Session from backend
3. Redirect to Stripe Checkout
4. Listen to `checkout.session.completed`
5. Fulfill exactly once
6. Grant entitlement in DB
7. Redirect success page with `session_id`

Important:

- Stripe docs say webhook fulfillment is required; success redirect alone is not reliable.
- Fulfillment must be idempotent.

Pros:

- Very flexible
- Mature developer experience
- Lower base transaction fee than MoR options

Cons:

- You may own more tax/compliance/chargeback work unless using Stripe Managed Payments / Tax
- More plumbing than Lemon/itch for early indie validation

## Alternative: Paddle Concrete Flow

Use if web product becomes more serious and global.

Flow:

1. Create product/price in Paddle
2. Use Paddle checkout overlay
3. Pass `custom_data.user_id`
4. Listen for `transaction.completed`
5. Grant entitlement

Pros:

- MoR
- Strong tax/VAT compliance
- Good for SaaS/software-like products

Cons:

- Possibly heavier than needed for v0
- Less indie-game-native than itch

## Recommended Implementation Decision

### If you want to charge fastest

Use:

- itch.io paid build

Do:

- free demo on your web domain
- paid Founder Access on itch
- link from demo diagnosis screen to itch purchase page

### If you want own web paywall

Use:

- Lemon Squeezy license keys

Build:

- `/buy`
- `/unlock`
- `/api/license/validate`
- `/api/webhooks/lemonsqueezy`
- `entitlements` table

### If you expect subscription or B2B later

Evaluate:

- Paddle
- Stripe

But do not start there unless needed.

## MVP Build Tickets

### Ticket P1: Payment Provider Setup

Acceptance:

- Lemon product and variant created
- License keys enabled
- Test checkout works
- Test license appears in receipt

### Ticket P2: Unlock Page

Acceptance:

- `/unlock` accepts license key
- calls `/api/license/validate`
- shows success / failure
- stores access locally

### Ticket P3: Webhook Receiver

Acceptance:

- verifies signature
- handles `order_created`
- handles `license_key_created`
- handles `order_refunded`
- stores raw webhook payload

### Ticket P4: Entitlement Gate

Acceptance:

- free demo remains playable
- founder-only features locked
- valid entitlement unlocks founder features
- revoked entitlement re-locks founder features

### Ticket P5: Checkout Success Recovery

Acceptance:

- success page can wait for webhook
- manual license fallback exists
- failed confirmation does not lose customer

## Sources Checked

- Lemon Squeezy webhooks: `https://docs.lemonsqueezy.com/help/webhooks`
- Lemon Squeezy webhook event types: `https://docs.lemonsqueezy.com/help/webhooks/event-types`
- Lemon Squeezy passing custom data: `https://docs.lemonsqueezy.com/help/checkout/passing-custom-data`
- Lemon Squeezy license keys: `https://docs.lemonsqueezy.com/help/licensing/generating-license-keys`
- Lemon Squeezy License API validate: `https://docs.lemonsqueezy.com/api/license-api/validate-license-key`
- Lemon Squeezy License API activate: `https://docs.lemonsqueezy.com/api/license-api/activate-license-key`
- Stripe Checkout fulfillment: `https://docs.stripe.com/checkout/fulfillment`
- Paddle transaction completed webhook: `https://developer.paddle.com/webhooks/transactions/transaction-completed`
- itch.io download keys: `https://itch.io/docs/creators/download-keys`

## 一句话总结

网页版收费最稳的具体接法是：

**免费 demo 不拦，Founder Access 用 Lemon Squeezy 收款和发 license，webhook 写 entitlement，前端用 license/账号解锁更深功能。**
