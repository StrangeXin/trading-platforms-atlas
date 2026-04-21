# Research Notes Index

Raw material, citation sources, background interviews, un-edited material all get dumped here first. Once written up, they're moved to footnotes in the corresponding topic directory.

## Structure

```
06-research-notes/
├── 00-index.md                   this file
├── raw-sources.md                primary citations (URL + quote + date)
├── interviews/                   oral / interview / quoted industry insiders
├── regulatory/                   regulatory documents (PDF links + key passages)
├── earnings/                     company earnings excerpts
└── scratchpad/                   temporary notes, uncategorized thoughts
```

> Currently in seed state; content grows through sustained accumulation.

## Priority Tracking Topics (2024–2026)

Items marked 🔴 are **most critical but information-scarce** topics — when relevant material is found, file it here immediately.

- 🔴 **MetaQuotes prop firm cleanup exact timeline** — which companies got license pulls, when, announcement text
- 🔴 **FTMO OANDA acquisition deal structure (2025-12)** — amount, equity, degree of OANDA operational retention
- 🔴 **MyForexFunds 2023 CFTC lawsuit complaint details** — reference material for prop firm compliance
- 🔴 **MetaQuotes actual ownership** — deep disclosure of Russian background, UBO (Ultimate Beneficial Owner)
- 🟡 **TradingView actual user scale + order flow** — data is nearly never public, only third-party inference
- 🟡 **Binance 2024 post-DOJ-settlement global licensing progress**
- 🟡 **Kraken IPO progress** — S-1 details
- 🟢 **Coinbase / Robinhood quarterly revenue** — public, easy to track
- 🟢 **Retail FX market BIS data updates** (September 2025 release of next Triennial)

## Known Information Gaps

These points had **no reliable data** as of Q4 2024 research — prioritize archiving when relevant material is found:

1. **MetaQuotes annual total revenue**: never publicly disclosed, industry estimate $300M+
2. **MT4/MT5 global active account count**: no authoritative data, only "several million to tens of millions" range estimates
3. **Total prop firm industry size**: no company discloses monthly revenue; FTMO 2024 $329M is the only reliable anchor
4. **Industry-average B-Book ratio**: ESMA indirect data suggests "80%+ of retail flow is internally hedged," but no per-company data
5. **Crypto exchange market-maker rebate share of fees**: Binance / OKX have never disclosed

## Material Standards

A record entering `raw-sources.md` must have at minimum:
- URL (or traceable publication source + date)
- 1–3 sentence excerpt from the original
- Publication date
- Trust label (`primary` / `secondary` / `rumor`)

Example:
```
### MetaQuotes revokes True Forex Funds license
- URL: https://fxnewsgroup.com/forex-news/retail-forex/exclusive-prop-trading-firm-true-forex-funds-shut-down-by-metaquotes-move/
- Date: 2024-02-06
- Quote: "True Forex Funds CEO Richard Nagy confirmed MetaQuotes terminated MT4/MT5 licenses over equity sync provider..."
- Trust: primary (CEO public statement)
```

## Next Update Plan

This atlas is scheduled for a full refresh every 3–6 months. Next update will:

- [ ] Scan Finance Magnates / LeapRate / FX News Group last 90 days of prop firm news
- [ ] Check SEC EDGAR new filings (Coinbase / IBKR / IG / Plus500)
- [ ] Check Companies House MetaQuotes Cyprus annual filings
- [ ] Re-run last30days skill to capture community voice
- [ ] Update relationship graphs (new M&A / shutdowns / funding rounds)

## Contributing

When you find good material:
1. Add to `raw-sources.md` with date + URL
2. Reference in the relevant topic doc (footnote or inline)
3. If it triggers a major rethink, write it into the corresponding chapter

## Reference Tools

- **ripgrep (`rg`)**: fastest full-text search
- **Obsidian / VS Code**: open the whole directory, Mermaid graphs render
- **pandoc**: convert md → PDF / docx for sharing
