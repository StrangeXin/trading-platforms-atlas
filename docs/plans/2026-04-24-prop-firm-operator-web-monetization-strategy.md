# Prop Firm Operator - Web Monetization Strategy

Date: 2026-04-24
Status: exploration

## 核心判断

如果产品路径是：

1. 先做网页版
2. 再做移动端
3. 最后上 Steam

那么第一个真正要解决的商业问题不是 Steam 定价，而是：

**网页版如何收费，同时不把早期团队拖进支付、税务、退款、盗版、账号系统和平台迁移的泥潭。**

这份文档的目标是：

**定义网页版 v0 / v1 的收费方式、支付方案、定价梯度、权限模型，以及如何为移动端和 Steam 留迁移空间。**

## 推荐结论

网页版第一阶段建议采用：

**Free Demo + Paid Founder Access**

当前更贴近团队偏好的支付路径是：

**manual QR payments + manual fulfillment**

推荐顺序：

1. `支付宝二维码`、`Bybit Pay`、`Binance Pay` 先验证付费意愿
2. 使用人工审核和 `license key` 解锁 Founder Access
3. 当 paid volume 上来后，再评估更自动化的商户支付方案
4. Steam 等 v1 证明后再上，不要第一站就上

## 为什么网页版收费要先解决

网页版不是“Steam 前的免费 demo”。

它可以承担三个任务：

1. 验证核心 loop
2. 建立早期玩家名单
3. 验证真实付费意愿

如果网页版只免费，会遇到一个问题：

- 玩家说喜欢，不等于愿意为这类题材付钱

所以 v0/v1 应该很早就测试一个小额付费门槛。

## 收费产品形态

### Tier 0: Free Demo

价格：

- Free

内容：

- 12-week run
- 1 founder
- 1 scenario
- limited route export
- no save slots or only local save

目的：

- 降低进入门槛
- 用来传播
- 收集 playtest feedback

限制：

- 不给长期 replay breadth
- 不给后续 scenario
- 不给 founder variants

### Tier 1: Founder Access

价格建议：

- `US$8-12`

内容：

- 当前 playable web build
- 所有 v0 updates
- route export
- changelog access
- playtest feedback form
- name in early supporter credits if desired

目的：

- 验证真实付费
- 找到愿意看系统深度的早期玩家
- 建立邮件名单

### Tier 2: Supporter Bundle

价格建议：

- `US$18-25`

内容：

- Founder Access
- future Steam key if Steam launch happens
- behind-the-scenes design notes
- extra scenario/founder when available

风险：

- “future Steam key” 会制造履约义务

建议：

- 只有在确实计划 Steam 且能承诺 key 管理时再开。

### Tier 3: Studio / Research License

暂不做。

可能未来适合：

- 金融教育
- game design teaching
- platform economics workshop

但 v0 不该为这个复杂化。

## 价格策略

### 不建议订阅

原因：

- 这是一个 indie strategy prototype，不是持续服务型 SaaS。
- 订阅会提高心理门槛。
- 订阅会增加退款、取消、账单支持复杂度。

### 建议一次性购买

更适合：

- early access
- downloadable build
- web account unlock
- future Steam transition

### 建议小额但不太低

不要低到 `US$1-3`。

原因：

- 支付固定费用会吃掉比例
- 太低无法验证真实商业兴趣
- 太低吸引来的反馈可能更随机

`US$8-12` 是更合理的第一道门槛。

## 支付方案比较

### Option A: itch.io

适合：

- 最快上线
- 独立游戏受众
- pay-what-you-want
- demo + paid build
- 不想先做账号系统

优势：

- 上传和卖独立游戏很快
- 创作者可设置最低价格
- 默认平台抽成较低，且有 open revenue sharing 模式
- 玩家对原型和 early access 容忍度较高

劣势：

- 品牌感更像 indie storefront，不像自有 web product
- 自定义账号/授权弱
- 对长期 web SaaS 式权限不够理想

推荐用法：

- 第一轮 paid validation
- Free demo + paid web/download build

### Option B: Lemon Squeezy

适合：

- 卖数字产品
- 想用 checkout link / embedded checkout
- 希望 Merchant of Record 处理税务、VAT、退款/争议等负担

优势：

- MoR 模式减轻全球税务和付款责任
- 支持数字产品、订阅、优惠码、checkout links
- 集成成本比自建低

劣势：

- 交易费高于纯 Stripe
- 授权/账号仍要自己设计
- 游戏行业生态不如 itch / Steam

推荐用法：

- 自有官网 + checkout link
- Founder Access
- Supporter Bundle

### Option C: Paddle

适合：

- 更 SaaS / software-like 的 web product
- 需要更成熟 MoR、税务、发票、订阅和全球合规

优势：

- MoR 处理全球销售税/VAT 等复杂度
- 更适合软件和数字产品商业化
- 对后续账号、web entitlement、订阅/升级更友好

劣势：

- 对小型 indie game 原型可能偏重
- 上手和审核可能比 itch/Lemon Squeezy 慢

推荐用法：

- 当网页版从 prototype 变成正式 web product 时评估

### Option D: Stripe Checkout

适合：

- 已有公司主体
- 想完全控制 checkout、账号、授权、退款体验
- 有能力处理税务和合规，或使用 Stripe Tax / Managed Payments

优势：

- 开发体验成熟
- 可控性强
- 费用低于 MoR 基础费率
- 适合后续自有账号系统

劣势：

- 如果不用 MoR，全球销售税、VAT、退款、争议、合规责任更多在自己身上
- 早期会把团队拖进支付 plumbing

推荐用法：

- 不作为第一选择
- 等付费需求被验证后再考虑

### Option E: Xsolla

适合：

- 游戏商业化
- 全球支付方式
- web shop
- 后续移动端外部 web shop

优势：

- 游戏行业语境强
- MoR、支付、税务、欺诈、防退款等配套
- 对 mobile game web shop 有经验

劣势：

- 对 v0 小原型偏重
- 可能需要商务对接

推荐用法：

- 等移动端/web shop 变成主要收入通道时再评估

## 推荐路径

### Phase 0: Free Playtest Web Build

时间：

- 内部 dry run 到第一轮外部 playtest

收费：

- 不收费

目标：

- loop validation
- route export
- collect emails manually or via form

### Phase 1: Paid Founder Access

时间：

- v0 loop Green/Yellow Light 后

收费：

- `US$8-12`

支付：

- itch.io 或 Lemon Squeezy

推荐首选：

- 如果更像 indie game: `itch.io`
- 如果更像自有官网产品: `Lemon Squeezy`

权限：

- 购买后获得 build access link 或 license code
- 不急着做复杂账号系统

### Phase 2: Web Account Entitlement

时间：

- 有 100+ 付费用户或付费转化明确后

收费：

- `US$12-18`

支付：

- Lemon Squeezy / Paddle / Stripe 重新评估

新增：

- email login
- license key
- save slots
- supporter badge
- route history

### Phase 3: Mobile Web / App Preparation

移动端前不要急着上 app store。

先做：

- responsive web
- touch controls
- shorter run mode
- account entitlement
- web payment

移动端收费注意：

- 如果做原生 iOS/Android，平台内购规则会影响数字内容售卖。
- 如果只是 mobile web，仍可走 web checkout。
- 如果做 mobile app + external web shop，需要单独研究各平台政策和地区差异。

### Phase 4: Steam Launch

Steam 不应是第一站。

适合在：

- core loop 已通过
- 至少 2-3 scenarios
- replay value 足够
- wishlists / community signal 明确

Steam 版本可以定价：

- `US$12.99-19.99`

Founder Access 可以：

- 折扣升级
- 赠送 Steam key
- 或不承诺 key，只承诺 web early access

建议：

- 不要在第一天承诺 Steam key，除非已经明确履约流程。

## 权限模型

### v0 最小权限模型

不要做复杂账号。

可选：

1. Paid download / hosted build on itch.io
2. Lemon Squeezy purchase -> email with access link
3. Simple license code unlock

### v1 权限模型

需要：

- email login
- purchase entitlement
- cloud save optional
- route export retained

### 不建议

- DRM-heavy web lock
- always-online enforcement
- complex anti-piracy

原因：

- 独立策略原型的早期价值在于反馈和传播
- 过度防盗版会增加摩擦，减少真实测试

## Web 付费页面应该卖什么

不要只卖：

- “一个金融模拟游戏”

应该卖：

**A playable prototype about running the machine behind prop trading challenges.**

首屏信息：

- 你接手一家高速增长挑战平台
- 调整规则、费用、payout 和营销
- 赚钱很快
- 后果更慢
- 12 周后看看你活成什么平台

CTA：

- `Play Free Demo`
- `Get Founder Access`

## Web 首发指标

### Free Demo

观察：

- visitor -> start run
- start run -> Week 3
- Week 3 -> Week 12
- Week 12 -> replay
- replay -> email signup

### Paid Founder Access

观察：

- demo finish -> paid click
- paid checkout conversion
- refund rate
- route export submissions
- Discord/email feedback rate

### 早期目标

不是收入最大化。

目标是证明：

- 有人愿意付费
- 付费玩家更愿意重玩
- 付费玩家能给出有价值反馈

## 风险与防护

### Risk: 太早收费伤害 playtest

防护：

- playtest build 免费
- Founder Access 只在 loop 初步成立后开

### Risk: MoR 费用高

防护：

- v0 交易量小，节省税务/合规时间更重要
- 付费验证后再考虑 Stripe 自接

### Risk: Steam key 承诺变成债务

防护：

- Founder Access 默认不承诺 Steam key
- Supporter Bundle 才可明确写入 future key

### Risk: 网页版和 Steam 价格冲突

防护：

- Web: Founder / prototype access
- Steam: full release / expanded game
- 两者定位不同

### Risk: 移动端平台规则影响 web 支付

防护：

- 先 mobile web
- 原生 app 再单独研究 IAP 和 external link 规则

## Sources Checked

- Stripe pricing: `https://stripe.com/pricing`
- Lemon Squeezy Merchant of Record docs: `https://docs.lemonsqueezy.com/help/payments/merchant-of-record`
- Lemon Squeezy pricing: `https://www.lemonsqueezy.com/pricing`
- Paddle tax and MoR docs: `https://www.paddle.com/billing/tax-and-compliance`
- Paddle digital products: `https://www.paddle.com/solutions/sell-digital-products`
- Xsolla Web Shop / MoR: `https://webshop.xsolla.com/`
- itch.io creator FAQ: `https://itch.io/docs/creators/faq`
- itch.io open revenue sharing: `https://itch.io/updates/introducing-open-revenue-sharing`

## 推荐行动

### 现在

继续做免费 v0 playtest build。

不要马上接支付。

### v0 dry run 通过后

开：

- landing page
- email waitlist
- free demo

### 第一轮 playtest Green/Yellow Light 后

开：

- Founder Access
- itch.io 或 Lemon Squeezy checkout
- `US$8-12`

### Steam 前

确认：

- 是否承诺 Steam key
- web 购买者如何升级
- Steam 版本内容是否明显大于 web prototype

## 一句话总结

网页版收费的正确顺序不是：

**先接支付，再找用户。**

而是：

**先用免费 demo 证明机器会咬人，再用 Founder Access 证明有人愿意为这台机器付钱。**
