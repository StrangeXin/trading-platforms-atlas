# Settlement & Clearing: The Real World Behind the Trade

**One-line thesis**: Between clicking "Buy" and actually "owning" the stock, it's not milliseconds — it's **1-2 business days** (today's T+1), sometimes more. This invisible **post-trade clearing / settlement** plumbing is carried by three classes of institutions — **DTCC**, **CLS Bank**, and **central banks** — processing $10+ trillion of financial flow every day. It is the **true skeleton** of the global financial system, and more critical than the trade itself.

## 1. Why Trading and Settlement Are Two Different Things

### Intuition vs. reality

**Intuition**: You click "Buy 100 shares of AAPL" → you own 100 shares instantly.

**Reality**:

```
T+0 (today)
  14:30  You click Buy → broker confirms
  14:30  Broker routes order to NYSE → matched
  14:30  NYSE returns "executed" message
  14:30  Broker tells you "filled"
  ⚠️ You are NOT the owner of the shares yet ⚠️
  
  Evening  NYSE sends all of today's trades **netted** to DTCC
  Evening  DTCC internally records "broker A is owed 100 shares", "broker B owes 100 shares"
  
T+1 (tomorrow)
  Daytime  Cash + share ownership **actually transfer** inside DTCC accounts
  Afternoon Broker updates your "settled balance"
  ✅ NOW you are the legal owner ✅
```

**T+1 = Trade date + 1 business day**. Your "buy" has to wait a day before it's truly settled.

### The division of labor: trading vs. settlement

```
[Matching]
 → Exchange matches buy / sell orders (milliseconds)
 → Produces a "trade confirmation"
 → No actual asset movement

[Clearing]
 → Clearing house (CCP, Central Counterparty) guarantees each trade
 → Nets each broker's exposure
 → Manages default risk (what if a broker goes bust?)

[Settlement]
 → Cash and assets actually change hands
 → Via the central depository (DTC)
 → T+1 or longer (depending on the product)
```

**Key point**: **clearing** is the logical layer that absorbs risk; **settlement** is the execution layer that moves assets. Together they = turning **"a fill" into "ownership."**

## 2. US Equity Settlement: The DTCC System

### DTCC's trinity

**DTCC (Depository Trust & Clearing Corporation)** is the **monopoly** operator of US securities clearing and settlement. Three core subsidiaries:

| Subsidiary | Role |
|---|---|
| **DTC** (Depository Trust Company) | **Central depository** for stocks and bonds. Physically "holds" all US listed securities |
| **NSCC** (National Securities Clearing Corporation) | **Clearing house** for stocks and ETFs. Acts as CCP between buyer and seller |
| **FICC** (Fixed Income Clearing Corporation) | Clears Treasuries, MBS, and other fixed-income products |

### The full path of an equity trade

```
T+0 trade
  ↓
DTCC receives trade reports (from exchanges + ATS)
  ↓
[NSCC clearing]
  Computes each broker's net position
  (Broker A receives 100,000 shares net, pays $10M net)
  ↓
NSCC collects "margin" from brokers (pre-funded collateral)
  ↓
T+1 business day
  ↓
[DTC settlement]
  DTC internal book transfer:
    Broker A share account  +100,000 shares
    Broker A cash account   -$10M
    Broker B the opposite
  ↓
Broker updates the client's "settled balance"
```

### DTC's "your ownership isn't actually in your hands" mechanism

**A striking fact**: Over 99% of US listed equities **do not exist in physical form**. They are all recorded as **DTC book-entry**:

- DTC is the "legal registered owner" of all US stocks (**Cede & Co.** is DTC's nominee)
- Your broker has an account at DTC, holding the shares **on your behalf**
- **You are the "beneficial owner"**, not the "registered owner"

**Implications**:
- Transfer shares from one broker to another → **DTC internal book-entry adjustment** (no physical movement)
- Request "direct registration" (DRS) → Apple's transfer agent can register the shares in your name directly (only a small share of users do this)
- Corporate governance (voting): your broker votes on your behalf → broker aggregates to DTC → DTC aggregates to the company

**In 2021, GameStop retail traders discovered** the "DRS your shares" movement → **pull your shares out of brokers into Computershare** (Apple's transfer agent) as a hedge against naked short selling → millions of GME shares flowed out of DTC.

## 3. 2024-05-28: The US T+2 → T+1 Migration

### Historical arc

- **Pre-1990s**: US T+5 (5 business days)
- **1995-06-07**: T+3 begins
- **2017-09-05**: T+2 begins
- **2024-05-28**: **T+1 officially takes effect**

### Why push to T+1

- **Reduce counterparty default risk** (shorter settlement cycle = safer)
- **Release margin** (NSCC requires brokers to post margin against unsettled trades — shorter cycle, less margin)
- **Improve capital efficiency** (institutional funds rotate faster)

### The technical challenges of the migration

- Brokers had to upgrade internal systems (many still on 1990s code)
- Trade confirmation + wire instructions must be completed **on T+0 itself**
- International investors (time zone gap) **have no time to wire funds**
- In May 2024, for **weeks around the switchover**, chaos: **3%+ settlement fails** (vs. a normal <1%)
- June-July: back to normal

### Fallout

- **Institutions**: forced backend overhaul, $100M+ in costs
- **Retail**: no change in experience (the broker handles it)
- **International investors**: European / Asian institutions struggle to participate in US T+0 operations
- **Expected 2026+**: T+0 (same-day settlement) discussions → possibly rolled out 2028-2030

## 4. FX Settlement: CLS Bank

### How FX differs from equities

**Equities**: one central depository (DTC), US-internal settlement is simple.

**FX**: involves **two different currencies**, each sitting in **different countries' central bank systems**. No unified central settlement exists.

### The birth of CLS Bank (2002)

**The problem**: The 1974 **Herstatt Bank failure** gave rise to "Herstatt risk" (counterparty risk):

- Herstatt was on the receiving side of DEM (Deutsche Marks)
- The USD leg had already been paid out to Chase (New York)
- On the afternoon of June 26 in Germany, Herstatt was shut down by regulators
- **The German counterparties had already paid out DEM, but New York had not yet processed the USD leg**
- Counterparties lost $620M that day (a huge sum at the time)

**The solution** (30 years later): **CLS Bank** (Continuous Linked Settlement)
- Set up in 2002 by 20 major banks jointly
- Based in New York, but overseen by the NY Fed + global central banks collaboratively
- Core mechanism: **Payment versus Payment (PvP)**
- Settlement only completes when **both legs pay simultaneously** → eliminates Herstatt risk

### Coverage

- **18 currencies** (USD, EUR, GBP, JPY, AUD, CHF, CAD, NZD, HKD, SGD, ZAR, SEK, NOK, DKK, KRW, MXN, ILS, HUF)
- Daily volume **~$7+ trillion** (~50-60% of global FX turnover)
- Members: **~75 settlement members** (major global banks)
- Third-party members: thousands of institutions

### Not covered by CLS

- CNY (**no CLS support** — the PBoC doesn't participate)
- RUB (exited in 2022)
- Most emerging-market currencies
- FX settlement in these currencies **still carries Herstatt risk**

### CLS operating hours

- **Every business day, 7:00-12:00 US Central Time** (5-hour window)
- Within the window, each country's central bank processes in sync
- **Closed on weekends** (which is why FX is 24×5)

## 5. Crypto "Settlement": On-Chain vs. Off-Chain

### On-chain

- **UTXO / account state updates directly on the blockchain**
- Confirmation time: BTC ~10 minutes (6 blocks of consensus), ETH ~12 seconds (1 block)
- No third-party clearing house needed
- **Near-instant finality** (vs. traditional finance's T+1)

### Inside centralized exchanges (off-chain)

- Binance / Coinbase etc. record trades in **internal ledgers**
- Trades don't hit the chain — **just database entries**
- Only when a user withdraws from the exchange does it actually go on-chain
- **Counterparty risk = exchange bankruptcy risk** (FTX is the extreme case)

### Crypto "settlement" advantages (in theory)

- **Instant finality** (no T+1 wait)
- No central depository (on-chain ownership is unambiguous)
- Global 24×7 operation

### Crypto "settlement" defects (in practice)

- High volatility + low liquidity → large slippage on on-chain trades
- Centralized exchanges **reintroduce counterparty risk** (standing up a CEX is equivalent to rebuilding DTC, but without regulation)
- Cross-chain settlement (USDC vs. USDT vs. native coins) **still carries Herstatt-like risk**

## 6. Derivatives Clearing: CME / ICE / LCH

### The global top three futures clearing houses

- **CME Clearing** (Chicago): CME futures + Nymex futures + some commodity options
- **ICE Clear** (Atlanta, London, New York): ICE-family futures + energy + agricultural
- **LCH** (London): interest-rate swap clearing (largest in the world) + European equity index futures

### The CCP (Central Counterparty) mechanism

```
Trader A ↔ Trader B (fill)
    ↓
Clearing house steps in:
  Clearing house vs. Trader A (CH owes A cash / shares)
  Clearing house vs. Trader B (B owes CH cash / shares)
    ↓
The two sides are no longer each other's counterparties — the CH is counterparty to both
    ↓
If either side defaults → clearing house **guarantees** the other side gets paid
    ↓
Clearing house defaults? Has almost never happened
```

**The clearing house's own default waterfall**:
1. The defaulter's margin
2. Other members' guarantee fund
3. The clearing house's own capital
4. Extra assessments from other members ("skin in the game")
5. **Central bank lender of last resort**

### 2008 LTCM / 2011 MF Global / 2023 CS and other episodes

- **All** major clearing events were **absorbed** by the system
- Thanks to the CCP waterfall design
- But every time, it came close to the "systemic risk" edge
- In 2024, regulators pushed clearing houses to raise their own capital requirements (Basel IV)

## 7. The Future of T+0 Settlement

### 2024-2026 discussions

- **Atomic settlement**: blockchain-enabled T+0
- Bank for International Settlements (BIS) launches Project Agora in 2024
- US DTCC announces "Project Ion" in 2024 → DLT-based equity clearing pilot
- ECB rolls out EC Distributed Ledger Settlement in 2024

### Challenges

- **Cash-side synchronization** (equity moves on-chain in seconds, but fund transfers are still traditional bank T+1)
- Needs a central bank digital currency (CBDC) counterpart
- Multi-country regulatory coordination
- Realistically not scalable before 2028-2030

## 8. What This Means for the Retail Trader

### Your "buy" is not instant "ownership"

- Between T+0 and T+1, your shares are in "settling" status
- **Technically you can sell, but what you're selling are "unsettled shares"** (called "GTC selling")
- US **Good-Faith Violation** rule: you can't use unsettled cash to buy again within T+1
- Violate the rule and you get restricted to cash trading for 90 days

### The "Free Riding" rule

- You buy with **unsettled** cash and sell before settlement → "free ride"
- **Violates Reg T** (US)
- The broker will warn / restrict the account

### Crypto's "instantness" is both an advantage and a trap

- **Instant finality** gives crypto that "real ownership" feel
- But **a crypto CEX account is still an IOU**, essentially no different from a stock broker's DTC holding
- Only a self-custody wallet is truly "your own"

### ETF creation / redemption

- ETFs settle T+1
- Large APs (Authorized Participants) do **in-kind creation / redemption**
- This affects the **price slippage** on your ETF trades (usually < 1 basis point)

## 9. The Regulator's Lens: The Systemic Importance of Settlement Safety

**The "skeleton" of the financial system**:
- Equity + fixed-income clearing → if DTCC goes down, US capital markets stop
- FX settlement → if CLS goes down, $3T+ in daily global cash flow breaks
- Derivatives clearing → if LCH goes down, the global interest-rate swap market freezes

**The ultimate "Too big to fail"**:
- DTCC, CLS, CME Clearing etc. are **FMUs** (Financial Market Utilities)
- Dodd-Frank 2010 gave FMUs special status + central bank backstop
- Basel III/IV sets extremely high capital requirements on CCPs
- **In practice**: they are **not allowed** to go bankrupt

## 10. Key Facts at a Glance

- **US T+1 effective**: 2024-05-28
- **US T+2 era**: 2017-2024
- **FX CLS Bank coverage**: 18 currencies, ~$7T daily
- **DTCC daily throughput**: $2+ trillion + massive trade count
- **Major global CCPs**: DTCC, CLS, CME Clearing, ICE Clear, LCH
- **Not covered by CLS**: CNY, RUB, most emerging-market currencies
- **Primary clearing venue for crypto = the blockchain itself** (on-chain)

## References

- [DTCC official site](https://www.dtcc.com/)
- [CLS Bank official site](https://www.cls-group.com/)
- [SEC T+1 final rule 2023](https://www.sec.gov/newsroom/press-releases/2023-29)
- [T+1 settlement - Wikipedia](https://en.wikipedia.org/wiki/T%2B1_settlement)
- [Herstatt Risk history](https://www.bis.org/cpmi/publ/d01.htm)
- [DTCC Project Ion (DLT pilot)](https://www.dtcc.com/dtcc-connection/articles/2022/january/27/dtcc-announces-project-ion)
- [LCH official site](https://www.lch.com/)
- [CME Clearing](https://www.cmegroup.com/clearing/)
- `05-fx-market-structure.md`: FX market structure (CLS is the settlement layer)
- `04-market-data.md`: market data distribution (the step before settlement)
- `../02-platforms/schwab.md`: Schwab's custodian position at DTC
- `../02-platforms/binance.md` / `coinbase.md`: crypto "settlement" is an internal ledger
