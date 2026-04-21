# 原始引用来源（Raw Sources）

> 按主题归类的 primary / secondary 来源索引。每条条目：URL + 发布日期 + 1-3 句摘抄 + 可信度标签。
> 标签：`primary`（一手监管 / 财报 / 官网）| `secondary`（业内报道）| `rumor`（社区传言，待验证）

---

## 监管文件 / 法律诉讼

### FTMO × CFTC / ESMA

- **MyForexFunds 资产冻结令** —— CFTC v. Traders Global Group Inc. (D.N.J. Case 1:23-cv-11808)
  - URL: https://www.financemagnates.com/forex/310-million-prop-trading-fraud-regulators-freeze-assets-of-my-forex-funds/
  - URL: https://www.desilvalawoffices.com/articles/blog/2025/may/cftc-case-dismissed-my-forex-funds-controversy-h/
  - Date: 2023-08-28（complaint filed in D.N.J.）；2025-05 Special Master Report
  - 事件梗概：CFTC + OSC 起诉 Traders Global Group / Murtuza Kazmi"诈骗超 $310M"，资产冻结。2025 年 5 月特别专员报告显示 CFTC 调查存在程序问题，部分指控被驳回
  - Trust: `secondary`（Finance Magnates 报道 + 律师事务所 case dismissed 复盘）
  - 相关文档：`02-platforms/ftmo.md`、`05-trends/03-prop-firm-consolidation.md`

### MetaQuotes × Prop Firm 清洗

- **MetaQuotes 撤销多家 Prop Firm 的 MT5 license**（2024.2-3）
  - URL: https://fxnewsgroup.com/forex-news/retail-forex/exclusive-prop-trading-firm-true-forex-funds-shut-down-by-metaquotes-move/
  - URL: https://www.financemagnates.com/forex/metaquotes-did-a-huge-favor-for-prop-trading-70-of-traders-want-regulation/
  - Date: 2024-02 ~ 2024-03
  - 事件梗概：True Forex Funds / Funding Pips 等多家被撤 MT5 白标；MetaQuotes 官方未发声明，由受影响 prop firm 披露
  - Trust: `secondary`（业内多家媒体交叉报道）
  - 相关：`05-trends/03-prop-firm-consolidation.md`

### SEC / Coinbase

- **SEC v. Coinbase, Inc. (2023)**
  - URL: https://www.sec.gov/litigation/complaints/2023/comp-pr2023-102.pdf
  - Date: 2023-06-06
  - Quote: "Coinbase has operated as an unregistered national securities exchange, broker, and clearing agency..."
  - Trust: `primary`
  - 2024.3 SEC 撤诉，和解时间线详见 `02-platforms/coinbase.md`

### Bybit 2025 ETH 黑客事件

- **Safe Wallet 前端漏洞 / Lazarus Group 攻击 Bybit**
  - URL: https://www.chainalysis.com/blog/bybit-exchange-hack-february-2025-crypto-security-dprk/
  - URL: https://research.checkpoint.com/2025/the-bybit-incident-when-research-meets-reality/
  - URL: https://www.nccgroup.com/research/in-depth-technical-analysis-of-the-bybit-hack/
  - URL: https://www.wilsoncenter.org/article/bybit-heist-what-happened-what-now
  - Date: 2025-02-21
  - 事件梗概：约 401,000 ETH（$1.5B）在冷-热钱包调度过程中经篡改的 Safe Wallet 签名前端被劫走，归因 Lazarus Group
  - Trust: `secondary`（多家安全厂商独立分析）
  - 相关：`02-platforms/bybit.md`

---

## 公司招股书 / 财报

- **eToro SPAC 招股书（S-1/A）**
  - URL: https://www.sec.gov/Archives/edgar/data/1849417/000114554923002551/s1-etoro.htm
  - Date: 2023-03（撤回前最后一版）
  - Quote: "~30 million registered users; ~2.4 million funded accounts; copy trading accounts for ~60% of activity..."
  - Trust: `primary`

- **Coinbase 10-K 2024**
  - URL: https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001679788&type=10-K
  - Date: 2025-02
  - Quote: "Transaction revenue..., subscription and services revenue..."
  - Trust: `primary`

- **IG Group 2024 Annual Report**
  - URL: https://www.iggroup.com/investors
  - Date: 2024-09
  - Quote: "Revenue of £1.04 billion; net trading clients ~310,000"
  - Trust: `primary`

---

## 业内报道

### MT4 / MT5 停售 & Apple 下架

- [Apple Reinstates MetaTrader MT4/MT5 on App Store - Mirage News](https://www.miragenews.com/apple-reinstates-metatrader-mt4-mt5-on-app-store-961954/)
  - Date: 2023-03-08
  - Trust: `secondary`
  - 相关：`02-platforms/mt4.md`、`02-platforms/mt5.md`、`01-history/01-mt4-mt5-origin.md`

- [MetaQuotes to End Support for Older MetaTrader Versions in December - Finance Magnates](https://www.financemagnates.com/forex/metaquotes-to-end-support-for-older-metatrader-versions-in-december/)
  - Date: 2024-10-22
  - Quote: "MetaQuotes will discontinue support for older MetaTrader versions beginning December 1, 2024."
  - Trust: `secondary`

### 2015 瑞郎黑天鹅

- [FXCM Gets $300 Million Lifeline After Swiss Franc Chaos - WSJ](https://www.wsj.com/articles/fxcm-gets-300-million-lifeline-1421432107)
  - Date: 2015-01-16
  - Quote: "FXCM said it owed $225 million due to unprecedented volatility in the Swiss franc..."
  - Trust: `primary`（WSJ 一手采访）

- [Alpari UK files insolvency after Swiss franc move - Reuters](https://www.reuters.com/article/markets-forex-alpari-idUSL6N0UV21320150116)
  - Date: 2015-01-16
  - Trust: `primary`

### Kraken × NinjaTrader 并购

- [Kraken — NinjaTrader acquisition press release](https://www.kraken.com/press/releases/kraken-to-acquire-ninjatrader-introducing-the-next-era-of-professional-trading)
  - Date: 2025-03
  - Quote: "Acquisition positions Kraken to offer regulated futures under one umbrella..."
  - Trust: `primary`（Kraken 官方 press release，已在 `02-platforms/kraken.md` 引用）

### FTMO × OANDA

- [CVC Funds agree sale of OANDA to FTMO](https://www.cvc.com/media/news/2025/cvc-funds-agree-sale-of-oanda-to-ftmo/)
  - Date: 2025
  - Trust: `primary`（CVC 官方公告）
- [FTMO completes acquisition of OANDA — GlobeNewswire](https://www.globenewswire.com/news-release/2025/12/02/3197594/0/en/FTMO-Building-Global-Trading-Powerhouse-Completes-Acquisition-of-OANDA-from-CVC.html)
  - Date: 2025-12-02
  - Trust: `primary`
  - 🔴 待深挖：交易结构 / 股权 / OANDA 保留自主运营程度（金额未公开）

---

## 市场数据

- **BIS Triennial Central Bank Survey 2022**
  - URL: https://www.bis.org/statistics/rpfx22.htm
  - Key: 全球外汇日成交 $7.5T，零售 5-10% 估算
  - Trust: `primary`
  - 下一期：2025-09（待归档）

- **Finance Magnates Intelligence FX Broker Database 2024**
  - URL: https://www.financemagnates.com/intelligence/
  - Trust: `secondary`（年度订阅数据）

- **ESMA Retail CFD Risk Warning**
  - URL: https://www.esma.europa.eu/press-news/esma-news/esma-agrees-prohibit-binary-options-and-restrict-cfds-protect-retail-investors
  - Key: 74-89% 零售 CFD 账户亏损
  - Trust: `primary`

---

## 技术文档

- **FIX Protocol Specifications**
  - URL: https://www.fixtrading.org/standards/
  - Trust: `primary`

- **MT5 Broker-Side Documentation** (internal-only, MetaQuotes)
  - Trust: `rumor` / 业内私下流传 PDF；从未官方公开
  - 相关：`03-architecture/01-broker-architecture.md`

- **CME FIX Specifications**
  - URL: https://www.cmegroup.com/confluence/display/EPICSANDBOX/
  - Trust: `primary`

---

## 待补充（🔴 高优先）

1. MetaQuotes 实际所有权（UBO）—— 任何 CySEC / Companies House 新披露
2. Prop Firm 月度营收 benchmark —— 除 FTMO 2024 $329M 外任何可引用数据
3. MT4/MT5 全球激活账户权威估算 —— 寻找 MetaQuotes CEO 访谈或行业报告
4. Binance / OKX 做市商返佣比例 —— 需要泄露协议或前雇员证词
5. MyForexFunds 2023 诉状后续 —— 最新法庭文件

---

## 素材录入模板

复制下面到新章节：

```markdown
### <主题 / 公司 / 事件>
- URL: <链接>
- Date: <YYYY-MM-DD>
- Quote: "<1-3 句原文摘抄>"
- Trust: `primary` / `secondary` / `rumor`
- 相关文档：`<path/to/chapter.md>`
- 备注：<为何重要、验证状态>
```
