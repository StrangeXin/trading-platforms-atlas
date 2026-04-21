# 06 Research Notes

Raw material index + primary citation collection. Distinct from the written overviews in `01`–`05`: this is the **unprocessed data layer**, for traceability and easy updating.

## Structure

```
06-research-notes/
├── README.md              (this file)
├── raw-sources.md         original URLs + key quotes by platform / event
├── interviews.md          interview / oral excerpts (person-level industry knowledge)
└── monitoring.md          RSS / subscriptions tracking regulatory / industry dynamics
```

> Because the research agent stalled before auto-filling this directory, it's left as a skeleton for now. Populate manually during day-to-day research.

## Maintenance Cadence

- **Monthly**: sweep Finance Magnates / FXStreet / LeapRate, log new events to `raw-sources.md`
- **Quarterly**: rewrite platform profiles that have new changes
- **Semi-annually**: update the relationship graphs in `04-relationships/04-visual-graph.md`

## Recommended Subscriptions

### Text News
- [Finance Magnates](https://www.financemagnates.com/) — retail FX industry portal
- [FinanceFeeds](https://financefeeds.com/)
- [LeapRate](https://www.leaprate.com/)
- [FXStreet](https://www.fxstreet.com/)

### Crypto / Derivatives
- [The Block](https://www.theblock.co/)
- [Messari](https://messari.io/research)
- [CoinDesk](https://www.coindesk.com/)

### Regulatory
- [CFTC Press Releases](https://www.cftc.gov/PressRoom/PressReleases)
- [FCA News](https://www.fca.org.uk/news)
- [ESMA Statements](https://www.esma.europa.eu/press-news)
- [ASIC Media Releases](https://asic.gov.au/about-asic/news-centre/)

### Social Signals
- X / Twitter: @FT_FX, @BloombergFX, @FxMagnates
- Reddit: r/Forex, r/algotrading, r/CryptoCurrency
- Discord: official channels of each prop firm

## Writing Style

Notes can be loose (drafts, unverified). But anything promoted to the `01`–`05` overview docs must:
1. Have a traceable URL source
2. Provide publication / event date
3. Explicit first-hand vs second-hand labeling
4. Contested claims flagged with "per X report" rather than "the fact is"

## TODO

- A static site built with Hugo / MkDocs to turn these Markdown files into a searchable knowledge base
- Integrate Obsidian relationship graph (built-in graph view)
- Semi-automated monthly update script (`git log --since=1.month.ago` reminder)
