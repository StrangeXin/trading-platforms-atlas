# Prop Firm Operator - China Payout Options

Date: 2026-04-24
Status: exploration

## 核心判断

如果你是中国大陆个人或中国大陆主体，网页版收费最麻烦的地方不是 checkout。

真正麻烦的是：

**国外用户付钱后，钱如何合规、稳定、低摩擦地进入你的中国银行卡。**

这份文档的目标是：

**把中国人做网页版收费时，几种提现到银行卡的路径、限制、费用和推荐选择说清楚。**

## 结论先说

### 如果你现在是中国大陆个人

最现实的三条路：

1. `Lemon Squeezy -> PayPal China -> 中国大陆银行卡`
2. `Paddle -> Wire Transfer / Payoneer -> 中国大陆银行卡`
3. `itch.io -> PayPal / Payoneer -> 中国大陆银行卡`

其中：

- 最快验证付费：`itch.io`
- 自有网页 + license：`Lemon Squeezy + PayPal`
- 更正式、更像软件产品：`Paddle`

### 不建议你一开始用 Stripe

原因：

- Stripe 官方全球可用地区列表没有中国大陆。
- 你可以用香港、新加坡、美国等主体开 Stripe，但这会引入公司注册、银行账户、税务和维护成本。
- 对 v0 付费验证来说太重。

## Path A: Lemon Squeezy -> PayPal China -> 中国银行卡

### 适合

- 自有官网卖 Founder Access
- 想用 license key
- 想让 MoR 帮你处理税/VAT/退款/账单复杂度
- 当前没有海外公司主体

### 钱怎么走

```text
玩家付款
  -> Lemon Squeezy
  -> Lemon Squeezy payout to PayPal
  -> PayPal China balance
  -> Withdraw USD to Mainland China bank
  -> 银行入账/结汇
```

### 关键事实

Lemon Squeezy 官方说明：

- 支持 bank payout 和 PayPal payout。
- payout 通常每月 1 日和 15 日创建，净销售额 hold 13 天后，在 14 日和 28 日支付。
- 最低 payout threshold 是 `US$50`。
- PayPal payouts 是 USD。
- bank payouts 可转成本地货币，但中国大陆不在其 bank payout 支持国家列表里。

PayPal China 官方说明：

- 可以将 PayPal 资金提现到中国大陆银行账户。
- USD wire 到中国银行账户最低提现金额是 `US$150`。
- 到账通常 `3-7` 个工作日。
- PayPal China 页面显示这类 USD wire 有提现费用。

### 优点

- 不需要海外公司。
- Lemon Squeezy 帮你处理很多销售税/VAT/MoR 事务。
- License key 功能很适合网页解锁 Founder Access。

### 缺点

- 多一层 PayPal，费用和汇率损耗更高。
- PayPal 账户风控、提现审核、银行入账都可能有摩擦。
- 中国大陆直连银行卡不是 Lemon Squeezy 主路径。

### 适合阶段

- v1 Founder Access
- 小规模付费验证

## Path B: Paddle -> Wire Transfer / Payoneer -> 中国银行卡

### 适合

- 更正式的软件/数字产品销售
- 想让 Paddle 做 MoR
- 希望收全球付款，尤其希望支持更多本地支付方式
- 准备认真做 web product

### 钱怎么走

```text
玩家付款
  -> Paddle
  -> monthly payout
  -> Wire Transfer 或 Payoneer
  -> 中国大陆银行卡
```

### 关键事实

Paddle 官方说明：

- Paddle 支持软件商家在全球 200+ 国家/地区销售。
- Paddle 的 unsupported supplier countries 列表没有中国。
- payout 是月结，不是随时提现。
- 最低 payout threshold 是 `US$100`。
- Paddle payout 可通过 wire transfer 或 Payoneer。
- Paddle 通常不额外收 payout fee，但跨境 SWIFT 或银行中间行可能产生费用。
- 如果 payout currency 与银行所在国家不一致，可能走 SWIFT，并可能产生 `$/€/£15` 一类费用或银行费用。

### 优点

- 比 Lemon + PayPal 更像正式软件收款。
- MoR 处理税务/VAT/付款复杂度。
- 支持多支付方式，对中国买家也可能支持支付宝/微信支付等方式。
- 月结和报表更适合长期运营。

### 缺点

- 上手可能比 Lemon/itch 重。
- 审核可能更严格。
- 需要准备清晰的产品、网站、退款政策、主体和银行信息。

### 适合阶段

- Founder Access 有真实收入后
- 你准备长期运营网页版时

## Path C: itch.io -> PayPal / Payoneer -> 中国银行卡

### 适合

- 最快上线付费验证
- 独立游戏/原型
- 不想先做账号、license、webhook

### 钱怎么走

```text
玩家在 itch.io 购买
  -> itch.io
  -> payout method
  -> PayPal / Payoneer
  -> 中国银行卡
```

### 优点

- 最快。
- 玩家理解 paid prototype / early access。
- 不需要自己做支付对接。
- 可以先验证“有没有人愿意付钱”。

### 缺点

- 不是自有 web paywall。
- 权限和账号体系不在你自己手里。
- 长期做网页版会员/授权不如 Lemon/Paddle。

### 适合阶段

- 第一次收费实验
- paid validation

## Path D: Stripe -> 海外主体/账户 -> 中国

### 适合

- 你已有香港/新加坡/美国等支持地区公司或个人主体
- 有对应银行账户
- 想完全控制 checkout 和 payment stack

### 不适合现在的原因

Stripe 官方可用地区没有中国大陆。

如果你想用 Stripe，通常要走：

```text
海外公司/个人主体
  -> Stripe account
  -> 海外银行账户
  -> 再考虑汇回中国
```

这会引入：

- 公司注册
- 税务
- 银行账户维护
- 跨境汇款
- 合规申报

对 v0 来说太重。

## 中国银行卡提现注意事项

### 1. 银行入账可能问资金来源

你的收入是数字产品/游戏销售收入。

建议保留：

- 平台 payout invoice / statement
- Lemon/Paddle/itch 销售记录
- PayPal 提现记录
- 网站和产品说明
- 购买记录

### 2. 个人结汇有年度便利化额度

境内个人结汇通常有每人每年等值 `US$50,000` 的便利化额度。

这个额度不是绝对上限，但超过便利化额度后，银行通常需要你提供真实性、合规性的交易证明材料。

对于早期 indie 产品收入，一开始大概率不会触碰这个上限，但要知道它存在。

### 3. 个人 vs 个体户/公司

如果只是小额验证：

- 个人收款可能够用。

如果收入稳定：

- 应考虑个体工商户、公司主体或海外主体。

原因：

- 税务更清楚
- 银行入账更顺
- 平台 KYC 更稳定
- 后续 Steam / 移动端合作更方便

### 4. PayPal 不是银行账户

PayPal 只是中间钱包/支付账户。

真正到账还是要：

- 提现到中国大陆银行
- 或通过 RMB Transfer / wire 等方式结算

### 5. 不要用亲友账户乱收

不要用别人的 PayPal、别人的银行卡、多人拆分来规避限制。

这会制造：

- KYC 风险
- 税务风险
- 外汇合规风险
- 账户冻结风险

## 推荐实操路径

### 阶段 1: 付费验证

如果只想最快知道有没有人付费：

```text
itch.io paid build
  -> PayPal / Payoneer
  -> 中国银行卡
```

### 阶段 2: 自有网页 Founder Access

如果你想做自己的网页：

```text
Lemon Squeezy checkout
  -> license key
  -> PayPal China payout
  -> 中国银行卡
```

### 阶段 3: 正式 web product

如果有稳定收入：

```text
Paddle
  -> wire / Payoneer
  -> 中国银行卡
```

或：

```text
成立合适主体
  -> Stripe / Paddle / Lemon
  -> 企业账户
```

## 当前推荐

对你现在这个项目，我建议：

### 短期

先不要纠结银行卡直连。

先做：

- 免费 demo
- waitlist
- itch.io 或 Lemon Squeezy Founder Access

### 收费第一版

优先：

- Lemon Squeezy + PayPal payout

备选：

- itch.io paid build

### 收入开始稳定后

评估：

- Paddle
- 个体户/公司主体
- 企业银行账户
- 税务申报路径

## Sources Checked

- Lemon Squeezy supported countries: `https://docs.lemonsqueezy.com/help/getting-started/supported-countries`
- Lemon Squeezy getting paid: `https://docs.lemonsqueezy.com/help/getting-started/getting-paid`
- Lemon Squeezy currencies: `https://docs.lemonsqueezy.com/help/payments/currencies`
- PayPal China withdraw funds: `https://www.paypal.com/c2/cshelp/article/how-do-i-withdraw-funds-from-my-paypal-account-help394`
- PayPal China business withdrawals: `https://www.paypal.com/c2/webapps/mpp/using-paypal`
- PayPal China fees: `https://www.paypal.cn/portal/fees`
- Paddle supported countries: `https://www.paddle.com/help/legal/sanctions/which-countries-are-supported-by-paddle`
- Paddle getting paid: `https://www.paddle.com/help/manage/get-paid/when-and-how-do-i-get-paid`
- Paddle payout fees: `https://www.paddle.com/help/manage/get-paid/is-there-a-fee-taken-for-payouts`
- Stripe global availability: `https://stripe.com/global`

## 一句话总结

如果你是中国大陆个人，最现实的提现路径不是“支付平台直接打到银行卡”，而是：

**早期 Lemon/itch 收款，经 PayPal 或 Payoneer/电汇进入中国银行卡；收入稳定后再考虑 Paddle 或正式主体。**
