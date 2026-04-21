# Crypto Exchanges Are Vertically Integrated Conflict-of-Interest Monopolies

**One-sentence thesis**: A crypto exchange simultaneously plays **exchange + broker + custodian + market maker + listing authority + clearinghouse** — six roles in one. In traditional finance these roles are forcibly separated by law, because of the lessons of 1929 and 2008. When crypto reinvented centralized finance starting in 2017, it **systematically skipped those lessons.** FTX's 2022 collapse wasn't an anomaly — it was the **inevitable output** of this structure.

## 1. "Role Separation" in Traditional Finance

After the US Securities Exchange Act of 1934, these roles were forcibly separated by law:

| Role | Typical institution |
|---|---|
| Exchange | NYSE, NASDAQ, CME |
| Broker-dealer | Goldman, Morgan Stanley, Schwab |
| Market maker | Citadel Securities, Virtu |
| Custodian | State Street, BNY Mellon, DTCC |
| Clearinghouse | DTCC, CME Clearing |
| Listing authority | NYSE Listing Committee, NASDAQ Listing Qualifications |

**Why mandatory separation**:

- **1929 crash**: Investment banks simultaneously market-made, brokered, and did investment banking — the conflicts produced systemic fraud. Glass-Steagall Act 1933 forced separation.
- **2008 financial crisis**: Investment bank + market maker + prop trading mix triggered systemic risk. Dodd-Frank 2010's Volcker Rule added further restrictions.
- Every separation was legislated **after** a major loss.

These separations are "firewalls" — one role blowing up shouldn't drag another down.

## 2. The Crypto Exchange Six-in-One

A Binance / Coinbase / Bybit / OKX / Kraken is simultaneously:

### 1. Exchange

- Matches buy / sell orders
- Maintains the order book
- Charges trading fees (0.01-0.2%)

### 2. Broker-Dealer

- Account opening + KYC for retail users
- "Easy Buy," "Market Buy" retail UI
- Services like Binance P2P, Coinbase Commerce targeting retail / merchants

### 3. Market Maker

- Proprietary market-making desks (Binance Labs' Sigma Chain, Coinbase's proprietary market making)
- Quoting prices to users on its own platform — **the counterparty may be the exchange itself**
- A 2020 CFTC investigation found Binance's market maker Sigma Chain accounted for 40%+ of platform volume

### 4. Custodian

- Users' coins / funds sit in the exchange's wallets (cold + hot)
- Users don't hold real private keys (unless they withdraw to self-custody)
- "Not your keys, not your coins" — BTC you deposit on an exchange is just an **IOU** on its books.

### 5. Clearing / Settlement

- No independent clearinghouse — the exchange keeps its own books
- USDT transfers inside Binance are database entries, not on-chain
- The BTC you "match" is not on-chain either — it's a number in the exchange's ledger

### 6. Listing Authority

- The exchange decides which tokens can trade
- Charges listing fees ($1-5M per token) — OKX, Binance, etc. have acknowledged this in the past
- Can simultaneously hold initial supply of the token (as investment or "listing donation")
- In the FTT (FTX's own token) case, FTX was listing authority, holder, and market maker all at once

### Plus: Funding / Lending / Staking / Launchpad

- Margin-trading funding rates — the exchange can adjust them
- Lending business — coins you lend may be re-lent to the market-making desk
- Staking yield — the exchange takes a cut
- Launchpad / IEO — new-token issuance platform; exchange takes management fees + token allocation

## 3. Each Conflict's Mechanism

### Conflict 1: Exchange + Market Maker

**Who fills your buy order?**

- Ideal case: another retail user's sell order
- Actual case: increasingly the exchange's proprietary MM desk
- The MM desk has **information asymmetry**: it sees order-book depth, incoming large orders, and liquidation levels

**Typical manipulation tactics** (referenced in CFTC's 2023 Binance settlement):
- **Stop hunting**: MM desk can query user stop-loss levels, push price to trigger stops, then reverse
- **Wash trading**: MM desk trades with itself to manufacture fake liquidity
- **Front-running**: sees a large order coming, buys first, lets the large order push price

Binance reached a **$4.3B settlement** with DOJ + CFTC in November 2023, which included these manipulation allegations — CZ pled guilty and resigned as CEO.

### Conflict 2: Exchange + Custodian

**Where are your coins, exactly?**

- The exchange's "cold wallet" holds the bulk of assets
- "Hot wallet" handles day-to-day withdrawals
- **But**: there's no independent audit proving the cold wallet coins **belong exclusively to users**
- The exchange can **rehypothecate** — take user coins for its own yield farming, lending, market making

**Direct cause of FTX's November 2022 collapse**:
- FTX lent user assets (mainly USDC / BTC) to sister company Alameda Research
- Alameda made high-risk bets with them (Luna, 3AC loans, high-leverage derivatives)
- Luna collapsed in May + 3AC bankrupted in June → Alameda became insolvent
- Users started withdrawing en masse → FTX discovered **user assets were gone**
- A CZ tweet triggered a bank run → FTX filed for bankruptcy on November 11

**Chapter 11 filings revealed**: $8B gap in user assets. Founder SBF (Sam Bankman-Fried) was convicted on 7 counts in 2023 and sentenced to 25 years in 2024.

### Conflict 3: Exchange + Listing

**Who decides which tokens trade?**

- Exchange review team (a business decision, not a regulatory one)
- Review standards are opaque
- Listing fees $1-5M (industry numbers — exchanges deny or obscure them)
- Exchange investment arms (Binance Labs, Coinbase Ventures) **invest first**, then list projects they invested in → price-pump + profit

**Typical cases**:
- **SafeMoon 2021 / Shib 2021**: unusual exchange-address buy activity in the 24 hours pre-listing
- **Base ecosystem tokens 2023-2024**: Coinbase launched its own L2; Coinbase plays roles in listing and market making
- **BNB itself**: issued by Binance, traded on Binance, with Binance's official wallet holding part of the initial supply

The core of the 2024 SEC suit against Coinbase (since dropped) was precisely the "unregistered securities exchange + broker-dealer + clearing agency" triple-hat.

### Conflict 4: Exchange + Derivatives

**The liquidation mechanism in margin trading**

- You open 100× long BTC
- Exchange sees your liquidation price
- Exchange has the ability to use its MM desk to briefly touch your liquidation price
- Triggers your liquidation → your margin goes to the "insurance fund" (exchange's account)
- Bybit was accused of "stop hunting" in 2022 — the phenomenon of price briefly "flashing down" right before liquidations then recovering is too common

**Going deeper**:
- The exchange's insurance fund grows by millions per month
- Surface purpose: "protect other users from counterparty bankruptcy risk"
- Actual purpose: a **capital source** the exchange keeps for itself
- Bybit's $1.5B 2025 hack loss was partially made up using the insurance fund

## 4. Proof of Reserves Is Theater

After FTX's collapse, every exchange pushed out "Proof of Reserves" (PoR). What it actually is:

**Technically**:
- Merkle tree proving sum of user balances
- Publish cold wallet addresses

**Problems**:
1. **Point-in-time problem**: only proves "at this moment" assets are sufficient. Next day they can be moved.
2. **Liability-side opacity**: exchange can have massive off-chain liabilities (lending, derivatives bets, off-balance-sheet structures); PoR doesn't disclose them.
3. **Internal accounts problem**: exchange can open internal IOU accounts to inflate user balances.
4. **FTX had "Proof of Reserves"**: published a PoR report in July 2022; went bankrupt in November.

**What a real trust basis should look like**: independent audit (Big Four firm) + continuous audit + separate custodian — **none of which the crypto industry has.**

## 5. Why There's No Third-Party Custody

Traditional finance:
- Schwab / Fidelity hold your shares on your behalf → DTC / DTCC actually stores the shares
- All three are independent: the broker can't touch DTC's share accounts
- If Schwab goes bankrupt → your shares still sit at DTC → regulator transfers them to a new broker

Crypto:
- Original design (Bitcoin whitepaper): each person self-custodies
- Actual practice (driven by convenience): most users park coins on exchanges
- No DTC-equivalent intermediary
- Fireblocks, BitGo, Copper, Anchorage, etc. institutional custody exists but **retail barely uses it** (operationally complex, minimum asset thresholds)

**For crypto to "mature,"** it needs to mandate **exchange ≠ custodian**. But this would:
- Cut exchange profits (custody fees and lending business)
- Add user operational friction (withdraw to custody → trade → redeposit to custody)
- So the industry won't do it voluntarily.

## 6. Centralized Crypto vs. Traditional Finance vs. Decentralized (DEX)

| Dimension | TradFi (NYSE + Schwab + DTC) | Centralized crypto (Binance) | DEX (Uniswap + MetaMask) |
|---|---|---|---|
| Role separation | Legally mandated | Fully merged | On-chain contracts (no middleman) |
| Custody | Third-party (DTC) | Exchange itself | User (self-custody) |
| Clearing transparency | Regulatory reporting | Total black box | On-chain verifiable |
| Price discovery | Matching + order book | Order book + exchange MM | AMM (constant-product formula) |
| Listing | Committee + SEC registration | Exchange internal | Anyone can create a pool |
| Regulation | SEC + FINRA | Fuzzy (multi-jurisdictional) | Almost none |
| User protection | SIPC (up to $500K) | None, beyond possible "insurance fund" | None |
| Hack risk | Regulatory bankruptcy protections | 2014 Mt. Gox, 2025 Bybit $1.5B, etc. | Contract bugs are main risk |

**Conclusion**: Centralized crypto exchanges occupy the "weakest legal protection, worst conflicts of interest" quadrant. DEXs are technically closer to the original "no middleman" vision, but UX + liquidity keep most retail on CEXs.

## 7. Why Retail Still Chooses CEX

Despite all the above, CEXs handled ~70% of crypto volume in 2026:

- **Better UX** (fiat on-ramps, mobile apps)
- **Deeper liquidity** (order book vs. AMM pool)
- **High-leverage derivatives** (CEXs offer 50-100×; DEX typically < 10×)
- **Customer service + support** (DEXs have almost none)
- **Brand trust** (CZ/Binance, Armstrong/Coinbase public images)
- **No technical background needed** (no gas fees, seed phrases, wallets)

Retail's choice is **"known convenience vs. theoretical risk."** For the vast majority, convenience wins — until the next FTX event shakes some of them out.

## 8. Bybit's 2025 Hack: A Technical Addendum

**On 2025-02-21** Bybit lost $1.5B in ETH — the largest single hack in crypto history.

**Attack method** (Lazarus Group, North Korean):
- **Not** a bug in Bybit's code
- **Not** a cold-wallet private-key leak
- **Was** the Safe Wallet UI front-end code being tampered with
- Users "confirmed" what looked like normal signatures on the Safe UI; they were actually signing malicious contracts
- This is a "supply chain attack"

**Why this compounds the vertical-integration problem**:
- Bybit used Safe Wallet for multisig custody
- Safe is an independent open-source project, not Bybit-internal
- If Bybit owned the UI, an internal security audit would have caught it
- The crypto industry's **dependence on third-party tooling** turns supply-chain risk into systemic risk
- And CEXs **concentrate huge pools of user assets**, amplifying single points of failure

**Bybit made users whole with insurance fund + borrowing + strategic reserves** — $1.5B in reimbursements, service restored in 2 weeks — demonstrating CEX crisis-response advantages. But it also exposed the severity of the question: "can $1.5B really be produced on demand?"

## 9. Historical Analogy: How This Game Has Ended Before

**Pre-1934 US**:
- Investment banking + brokerage + market making + custody all mixed
- Before the 1929 crash, JP Morgan and others simultaneously did all of the above
- After the crash, Glass-Steagall Act (1933) forced separation
- Investors lost 80%+ of assets; many people took their own lives

**Early 21st century**:
- Derivatives + investment banking mixed
- 2008 Bear Stearns, Lehman, AIG blew up
- Dodd-Frank (2010) + Volcker Rule imposed limits

**Crypto's next time?**
- The pattern is consistent: **structural collapse → legislative separation**
- 2022 FTX was only the first warning
- 2025 Bybit showed CEXs still concentrate catastrophic risk
- Historical precedent: expect 1-2 more major events before effective regulation actually takes shape.

## 10. Practical Guidance

As a user:

1. **Don't treat an exchange like a bank.** Withdraw to self-custody; leave only what you're actively trading.
2. **Understand the "insurance fund" mechanism**: it's not insurance — it's the exchange's contingency reserve.
3. **Don't use more than 10× leverage on derivatives** (even if the exchange allows 100×).
4. **Pay attention to Proof of Reserves, but don't fully trust it**: FTX had a PoR.
5. **Distribute across 2-3 top exchanges**: don't put all assets at one place (especially mid-tier exchanges).
6. **Seed phrase backups matter**: if you actually use self-custody, this is your last line of defense.

As a developer / researcher:

- **DEX is the theoretically correct direction**, but needs 5-10 years for UX to catch up to CEX
- **The intermediate solution** is **hybrid** (DEX front end with custodian option on the back end) — probably mainstream 2025-2027
- **Regulation is catching up**: the US passed FIT21 in 2024 classifying crypto commodities/securities; 2025-2026 should see clearer SEC + CFTC enforcement
- **Personal opportunity**: **regulatory compliance services**, **independent audit**, **custody infrastructure** are all underdeveloped markets

## Sources

- [Bybit 2025 hack - Chainalysis analysis](https://www.chainalysis.com/blog/bybit-exchange-hack-february-2025-crypto-security-dprk/)
- [Bybit 2025 hack - NCC Group technical analysis](https://www.nccgroup.com/research/in-depth-technical-analysis-of-the-bybit-hack/)
- [Bybit hack - Wilson Center political analysis](https://www.wilsoncenter.org/article/bybit-heist-what-happened-what-now)
- [SEC v. Coinbase complaint](https://www.sec.gov/litigation/complaints/2023/comp-pr2023-102.pdf)
- [FTX Restructuring Documentation - Kroll](https://restructuring.ra.kroll.com/FTX/)
- [Binance $4.3B settlement - CFTC](https://www.cftc.gov/PressRoom/PressReleases)
- `../02-platforms/binance.md` / `coinbase.md` / `bybit.md` / `kraken.md` / `okx.md`: crypto exchange profiles
- `../04-relationships/01-ownership.md`: crypto exchange parent companies / shareholder structures
- `../05-trends/02-crypto-native-wins.md`: why crypto has eclipsed traditional retail FX
