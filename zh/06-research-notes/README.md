# 06 研究笔记

原始资料索引 + 一手引用集合。和 `01`-`05` 的综述文档区分：这里是**未加工的数据点**，便于回溯和更新。

## 结构

```
06-research-notes/
├── README.md              （本文件）
├── raw-sources.md         每个平台 / 事件对应的原始 URL + 关键引用
├── interviews.md          访谈 / 口述摘录（人物层面的业内知识）
└── monitoring.md          追踪监管 / 业内动态的 RSS / 订阅源
```

> 由于研究 agent stall 未能自动填充本目录，先留骨架。日常研究时手动往里塞即可。

## 维护节奏

- **每月**：扫一遍 Finance Magnates / FXStreet / LeapRate，新事件记到 `raw-sources.md`
- **每季度**：重写有新变化的平台档案
- **每半年**：更新 `04-relationships/04-visual-graph.md` 关系图

## 推荐订阅源

### 文字新闻
- [Finance Magnates](https://www.financemagnates.com/) — 零售 FX 行业门户
- [FinanceFeeds](https://financefeeds.com/)
- [LeapRate](https://www.leaprate.com/)
- [FXStreet](https://www.fxstreet.com/)

### 加密 / 衍生品
- [The Block](https://www.theblock.co/)
- [Messari](https://messari.io/research)
- [CoinDesk](https://www.coindesk.com/)

### 监管
- [CFTC Press Releases](https://www.cftc.gov/PressRoom/PressReleases)
- [FCA News](https://www.fca.org.uk/news)
- [ESMA Statements](https://www.esma.europa.eu/press-news)
- [ASIC Media Releases](https://asic.gov.au/about-asic/news-centre/)

### 社交信号
- X / Twitter: @FT_FX, @BloombergFX, @FxMagnates
- Reddit: r/Forex, r/algotrading, r/CryptoCurrency
- Discord: 各 Prop Firm 官方频道

## 写作风格

笔记里允许不严谨（草稿、未验证）。但凡要晋升到 `01-05` 综述文档的内容必须：
1. 有可追溯的 URL 来源
2. 提供发布 / 事件日期
3. 明确的第一手 vs 第二手标记
4. 存在争议的说法标"据某某报道"而不是 "事实是"

## 后续 TODO

- 一个用 Hugo / MkDocs 构建的静态站，把这堆 Markdown 变成可搜索的知识库
- 接入 Obsidian 关系图（自带 graph view）
- 半自动的每月更新脚本（`git log --since=1.month.ago` 提醒）
