# 研究笔记索引

原始资料、引用来源、背景访谈、未成文的素材先堆在这里。成文后搬到对应主题目录的 footnote。

## 结构

```
06-research-notes/
├── 00-index.md                   本文件
├── raw-sources.md                一手引用（URL + 摘要 + 日期）
├── interviews/                   口述 / 访谈 / 引用业内人士
├── regulatory/                   监管文档（PDF 链接 + 关键段落）
├── earnings/                     公司财报摘抄
└── scratchpad/                   临时笔记、未归类想法
```

> 目前是种子状态，内容靠持续积累。

## 重点追踪主题（2024-2026）

标 🔴 的是**最关键但信息稀缺**的主题，遇到相关资料立刻归档到这里。

- 🔴 **MetaQuotes 清洗 Prop Firm 的具体时间线** —— 哪些公司被撤 license、在什么时间、公告文本
- 🔴 **FTMO 收购 OANDA 2025-12 的交易结构** —— 金额、股权、OANDA 运营保留程度
- 🔴 **MyForexFunds 2023 年被 CFTC 起诉的诉状细节** —— 为后续 Prop Firm 合规参考
- 🔴 **MetaQuotes 实际所有权** —— 俄罗斯背景的深度披露、UBO（Ultimate Beneficial Owner）
- 🟡 **TradingView 真实用户规模 + 下单流量** —— 数据几乎不公开，只能靠第三方推测
- 🟡 **Binance 2024 DOJ 和解后的全球牌照进度**
- 🟡 **Kraken IPO 进度** —— 招股书细节
- 🟢 **Coinbase / Robinhood 季度营收** —— 公开，易追踪
- 🟢 **零售 FX 市场 BIS 数据更新**（2025 年 9 月发布下一期 Triennial）

## 已知信息盲区

这些在 2024 Q4 研究中**找不到可靠数据**的点，一旦发现相关资料优先归档：

1. **MetaQuotes 年度总营收**：从未公开披露，行业估算 $300M 以上
2. **MT4/MT5 全球激活账号数**：没有权威数据，只有"几百万到几千万"区间估算
3. **Prop Firm 行业总规模**：各公司都不披露月收入，FTMO 2024 $329M 是唯一可靠锚点
4. **B-Book 比例行业平均**：ESMA 间接数据建议 "零售 retail flow 80%+ 被内部对冲"，但没人给具体公司数据
5. **加密所做市商返佣占 fee 多大比例**：Binance / OKX 从未披露

## 素材标准

一条资料要进 `raw-sources.md` 至少有：
- URL（或可追溯的发布源 + 日期）
- 原文 1-3 句摘抄
- 发布日期
- 可信度标签（`primary` / `secondary` / `rumor`）

例子：
```
### MetaQuotes 撤销 True Forex Funds license
- URL: https://fxnewsgroup.com/forex-news/retail-forex/exclusive-prop-trading-firm-true-forex-funds-shut-down-by-metaquotes-move/
- Date: 2024-02-06
- Quote: "True Forex Funds CEO Richard Nagy confirmed MetaQuotes terminated MT4/MT5 licenses over equity sync provider..."
- Trust: primary（CEO 公开声明）
```

## 下次更新计划

本 atlas 计划每 3-6 个月全面刷新一次。下次更新要做：

- [ ] 扫 Finance Magnates / LeapRate / FX News Group 最近 90 天 Prop Firm 新闻
- [ ] 查 SEC EDGAR 新财报（Coinbase / IBKR / IG / Plus500）
- [ ] 查 Companies House MetaQuotes Cyprus 年度备案
- [ ] 重跑 last30days skill 采集社区声音
- [ ] 更新关系图（新并购 / 倒闭 / 融资）

## 贡献方式

发现好素材：
1. 加到 `raw-sources.md` 带日期 + URL
2. 相关主题文档里引用（footnote 或 inline）
3. 如果引发重大认知更新，写到对应章节

## 参考工具

- **ripgrep (`rg`)**：全文检索最快
- **Obsidian / VS Code**：打开整个目录，Mermaid 图能渲染
- **pandoc**：转换 md → PDF / docx 打包分享
