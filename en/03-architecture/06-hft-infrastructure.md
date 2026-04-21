# HFT Infrastructure: The Millisecond / Microsecond / Nanosecond War

**One-line thesis**: HFT (high-frequency trading) isn't a software race — it's a **physics + engineering + real estate** race. The top HFT firms globally (Citadel, Jane Street, Virtu, Jump Trading) **spend billions of dollars a year** to preserve a speed edge of a few dozen microseconds. For nearly all retail / small-quant players, HFT is a **separate universe that will never be accessible**.

## 1. Why Speed Is Everything

### The market maker's basic logic

A market maker quotes bid and ask simultaneously. If bid = $100.00 / ask = $100.02:

```
Scenario A (good case):
Someone market-buys → hits the MM's ask at $100.02 → MM is short
Shortly after, someone market-sells → hits the MM's bid at $100.00 → MM flat again
MM pockets the $0.02 spread
    
Scenario B (bad case):
News drops (e.g., a FED announcement) → fair value is really $100.50
MM's ask is still at $100.02 → an informed trader hits the ask
MM is now short at $100.02, but true fair value is $100.50
MM is down $0.48
```

**Scenario B is "adverse selection."** What a market maker **fears most** is getting picked off by an informed trader after news drops but before the quote updates.

### The core of HFT is "faster response"

- **Informed traders** (those with information) **will always know before the MM does**
- The MM's survival tactic: **faster quote updates** → cancel or adjust quotes before getting picked off
- Whoever has the shorter "quote-update latency" wins
- This is **not** "execute buys faster" — it's **"modify and cancel orders faster"**

## 2. The Anatomy of Latency: War by the Microsecond

### A complete "order → fill" path

```
An event occurs (economic data, a big order, news)
    ↓
Exchange matching engine processes the event
    ↓
Exchange emits a market data update (multicast packet)
    ↓
[Network transit]: 50–500 ns inside a datacenter, 100 μs+ cross-datacenter
    ↓
HFT firm's receive side (NIC gets the packet)
    ↓
Ingress parsing (FPGA or kernel bypass)
    ↓
HFT firm's strategy model computes the new quote
    ↓
Egress (new order / cancel / modify)
    ↓
[Network transit]: back to the exchange
    ↓
Exchange matching engine processes the new order
    ↓
total latency = "tick-to-trade"
```

### Typical "tick-to-trade" benchmarks (2024)

| Firm | US equities NYSE / Nasdaq tick-to-trade |
|---|---|
| **Top HFT (Citadel, Jane Street, Jump Trading)** | ~3–15 microseconds |
| **First-tier HFT (Virtu, Tower Research, IMC)** | 15–50 microseconds |
| **Second-tier HFT / big-bank prop** | 50–200 microseconds |
| **Cloud-native quant (not HFT)** | 1–10 milliseconds |
| **Retail algo (Python + API)** | 10–500 milliseconds |

**Top HFT is 1,000–100,000× faster than retail.** This is not "optimize your Python code" territory — it's a different universe.

## 3. The Infrastructure Stack (bottom up)

### 1. Physical location (co-location)

**The exchange puts its matching engine inside its own datacenter. HFTs put their servers in** that same datacenter.

**New York area (home of NYSE + Nasdaq)**:
- **NY4 / NY5 / NY6** (Secaucus NJ, Equinix): Nasdaq and other exchanges + HFT colo
- **NY2 / NY11** (NJ): NYSE exchanges
- **1U rack / cage rental**: $5K–50K / month
- **Cross-connect (a data line direct from your server to the exchange)**: $500–5K / month / connection
- **Rack position**: the closer to the exchange matching engine, the better ("equidistant cable" rule)

**Chicago (home of CME)**:
- **CBO Aurora** (Illinois): CME matching engine
- **Cermak** (Chicago downtown)
- The main stage for futures HFT

**London**:
- **LD4 / LD5 / LD6** (Slough, UK): multiple exchanges + HFT
- **Basildon**: ICE / Euronext

**Tokyo**:
- **TY3** (Tokyo Stock Exchange)

**Hong Kong**:
- **HK2 / HK5** (HKEx)

### 2. Network: microwave + laser + dedicated lines

**Cross-datacenter transit latency** (NY-CHI, 833 miles):

| Medium | Theoretical | Actual |
|---|---|---|
| **Fiber (straight line)** | ~4.5 ms one way | ~6.5 ms (routing + equipment) |
| **Commercial internet** | — | ~12–20 ms |
| **Dedicated fiber** | ~6.5 ms | ~6.5 ms |
| **Microwave tower chain** (2011+ HFT revolution) | ~4.2 ms | ~4.3 ms |
| **Free-space optics / laser** (FSO, 2018+) | ~4.15 ms | ~4.2 ms |

**The 2011 microwave tower arms race**:
- McKay Brothers, Jump Trading, and others built the **NY-CHI microwave tower chain** (~30 towers)
- Capex of $100M+ per project
- 2–3 ms savings vs. fiber → $100M+ per year in revenue

**The 2018+ laser revolution**:
- Anova Technologies and others built **laser relays** between NY and CHI
- **On clear days** they're 0.1 ms faster than microwave
- Fall back to microwave in rain / fog
- That **0.1 ms savings** is still worth hundreds of millions of dollars in investment

**International HFT dedicated lines**:
- **Hibernia Express** (transatlantic submarine cable): NY-LON 58 ms (vs. 72 ms commercial)
- Purpose-built for HFT, **~$300M investment**
- Later acquired by Zayo / Aqua Comms and others

### 3. Hardware: FPGA + ASIC + kernel bypass

**An ordinary server (x86 + Linux kernel + TCP/IP stack)**:
- NIC to application: **5–10 microseconds**
- Too slow

**Optimization layers**:

#### Layer 1: Kernel bypass (software)
- Use libraries like DPDK, Solarflare Onload, Mellanox VMA
- Bypass the Linux kernel TCP/IP stack
- 5–10 μs → 1–3 μs

#### Layer 2: SmartNIC
- Solarflare XtremeScale, Mellanox ConnectX
- Part of the logic runs inside the NIC
- 1–3 μs → 0.5–1 μs

#### Layer 3: FPGA
- Xilinx / Altera FPGA boards
- The entire tick-to-trade path **in hardware**
- Response time: **50–500 nanoseconds**
- Cost: $50K–500K per board + a $1M+ engineering team

#### Layer 4: ASIC
- Custom integrated circuits
- Built for a specific strategy
- Response time: **10–100 nanoseconds**
- Cost: **tens of millions** in development + $10–100K per chip

**HFT firms typically combine the layers**:
- Normal servers for **strategy decisions** (tens of microseconds)
- FPGAs for **fast order generation** (hundreds of nanoseconds)
- ASICs for the **hottest branches of the strategy** (tens of nanoseconds)

### 4. Market data ingest

**Market data protocols**:

- **UDP multicast** (the mainstream): exchanges broadcast data to HFTs in colo
- **ITCH** (Nasdaq): binary protocol, ~50 bytes per tick
- **OUCH** (Nasdaq order entry): binary order-entry protocol
- **FIX**: institutional, slow (text) — HFTs don't use it

**Full-depth data subscription cost** (2024):
- NYSE Pillar + Openbook: ~$20K / month
- Nasdaq TotalView: ~$10K / month
- CME Market Data: ~$8K / month
- International exchanges: a few thousand to tens of thousands
- **HFT firm annual data cost**: $5M–30M

### 5. Clock synchronization

HFT depends on **nanosecond-level** clock precision:
- **GPS PPS (Pulse Per Second)**: 100 ns precision
- **PTP (Precision Time Protocol)**: 10 ns precision
- **Rubidium atomic clock**: 1 ns precision
- **NTP (ordinary Network Time Protocol)**: millisecond-level — **HFTs don't use it**

Why this matters:
- Establishing the true timestamp of an event (regulatory requirement)
- Correlating data across multiple datacenters
- Latency-arb strategies need precise time

## 4. The Real Profitability of HFT

### Industry-wide revenue (2024 estimates)

- **Citadel Securities**: ~$11B
- **Jane Street**: ~$21B (already ahead)
- **Virtu Financial**: ~$1.5B (public company, disclosed)
- **Jump Trading**: ~$8B (estimated)
- **Tower Research**: ~$4B (estimated)
- **IMC / Optiver / Flow Traders**: ~$10B combined
- **DRW / XR Trading**: ~$3B
- **Hudson River Trading**: ~$3B

**Global electronic market making annual revenue**: **~$50–70B**.

### Where the money comes from

1. **Market making profit** (bid/ask spread + rebates): 40%
2. **Latency arbitrage** (capturing cross-venue price gaps): 25%
3. **Statistical arb** (short-term mean reversion, etc.): 20%
4. **News / event arb** (reacting instantly to news): 10%
5. **Other** (options market making, ETF arb, etc.): 5%

### Why these firms are **so** profitable

- No outside LPs → all profit goes to partners / shareholders
- Essentially zero customer service cost
- Return on capital routinely **>50% / year** (vs. 5–15% for traditional hedge funds)
- **Tax-advantaged** (US trader status + partnership structure)

## 5. HFT's Relationships with Other Market Participants

### Is HFT a friend or an enemy of retail?

**The "friend" case**:
- HFT has compressed bid/ask spreads (from several cents in the 1990s to a fraction of a cent today)
- Provides depth and liquidity
- Retail orders via PFOF can fill **essentially for free**

**The "enemy" case**:
- HFTs pick off informed order flow (institutions)
- That cost ultimately **gets passed down to retail by institutions** (via more expensive mutual funds / pensions)
- The "price" retail sees can be **several basis points off the true EBS price**

### The difference between HFT and market makers

- **Market makers**: continuously post bid and ask, earning the spread
- **HFT**: **strategically** posts bid and ask, + a grab bag of arb strategies
- **HFT ⊃ electronic market makers**

### Why investment bank prop desks gradually left HFT

After the 2008 Volcker Rule:
- Banks can't use proprietary capital for prop trading
- They can only run **agency flow business**
- Real HFT today is almost entirely independent firms (Citadel, Jane Street, Jump, etc.)
- This is why the Goldman / Morgan market-making business has **shrunk** post-2008

## 6. HFT's Future / What's Changing

### 1. Microwave + laser → hollow-core fiber

- 2024's new technology: hollow-core fiber
- Light travels through a hollow core at ~99% of the speed of light in vacuum
- **30–50% faster** than ordinary fiber
- Deployment is expensive, but top HFTs are investing in it across 2024–2026

### 2. The Nasdaq / NYSE counter-move

- Exchanges introduced "speed bumps" (adding millisecond-level delay to all orders)
- IEX pioneered this design in 2016
- The goal: neutralize the HFT speed advantage
- Real-world effect: **debatable** — HFTs still find other avenues to an edge

### 3. The rise of crypto HFT

- Crypto exchanges (Binance, Coinbase, Kraken) **don't have** the "fair access" rules of traditional exchanges
- HFTs can **pay directly** for better API access
- Crypto market makers (Jane Street, Citadel, Alameda pre-FTX collapse) hold large shares
- 2025–2026: crypto HFT competition is intense

### 4. AI / ML integration

- HFT firms use **a lot of ML internally** (signal discovery, risk management)
- But **the core order-entry logic is still hard-coded** (low latency + determinism)
- This is **not** "AI replacing HFT" — it's "ML augmenting classical HFT"

## 7. What This Means for Regular People

### Can you break into HFT?

**Basically no**, unless:
- You have a math / CS / physics PhD from a top school
- You can get through **at least 3–5 rounds** of Jane Street / Citadel / Jump interviews
- Starting salary $500K+ in year one
- But **you're not "hanging your own shingle"**

**Doing HFT yourself** is essentially impossible:
- $10M+ infrastructure investment
- Exchange membership / resident status required
- Regulatory / compliance staff
- Without several million in capital, don't even start

### Lessons for retail traders

- **Don't compete with HFT on HFT's time scale** (at the millisecond level, you lose by default)
- Step up to longer time scales (minutes, hours, days)
- At those scales, **HFT's advantage disappears**
- Your edge: **patience + low frequency + discipline**

## References

- [McKay Brothers (microwave-tower HFT infrastructure)](https://www.mckaybrothers.com/)
- [Hibernia Express NY-LON submarine cable](https://www.anovanetworks.com/)
- [Equinix NY4 / NY5 datacenter](https://www.equinix.com/data-centers/americas-colocation/united-states-colocation/new-york-area-data-centers/)
- [Virtu Financial public disclosures](https://www.virtu.com/)
- [Nanex research on HFT](http://www.nanex.net/)
- [Michael Lewis, *Flash Boys* (2014)](https://en.wikipedia.org/wiki/Flash_Boys)
- `05-fx-market-structure.md`: the role of HFT in FX markets
- `../02-platforms/citadel-securities.md`: one of the largest US HFTs
- `../02-platforms/jane-street.md`: crypto + ETF market-making king
- `04-market-data.md`: market data distribution architecture
