# 加密交易所是垂直垄断的利益冲突复合体

**单句论点**：一个加密交易所同时扮演**交易所 + 经纪商 + 托管方 + 做市商 + 上市审核 + 清算方**六重角色。这六重角色在传统金融里被法律强制分开是因为 1929 + 2008 的教训 —— 加密 2017 年起重新发明中心化金融时，**系统性跳过了这些教训**。FTX 2022 年的崩溃不是异常，是这个结构的**必然输出**。

## 一、传统金融的"角色分离"

美国 1934 年 Securities Exchange Act 之后，这几个角色被法律强制分开：

| 角色 | 典型机构 |
|---|---|
| 交易所（Exchange）| NYSE、NASDAQ、CME |
| 经纪商（Broker-Dealer）| Goldman、Morgan Stanley、Schwab |
| 做市商（Market Maker）| Citadel Securities、Virtu |
| 托管方（Custodian）| State Street、BNY Mellon、DTCC |
| 清算方（Clearing House）| DTCC、CME Clearing |
| 上市审核（Listing）| NYSE Listing Committee、NASDAQ Listing Qualifications |

**为啥强制分离**：

- **1929 股市崩盘**：投行同时做市、经纪、投资银行，利益冲突导致系统性欺诈。Glass-Steagall Act 1933 强制分离
- **2008 金融危机**：投行 + 做市 + 自营交易混合触发系统性风险。Dodd-Frank 2010 Volcker Rule 进一步限制
- 每一次分离都是在**重大损失之后**才被立法

这些分离是"防火墙"—— 一个角色出问题不会拖垮另一个。

## 二、加密所的六合一

一个 Binance / Coinbase / Bybit / OKX / Kraken 同时是：

### 1. Exchange（交易所）

- 撮合买卖订单
- 维护订单簿
- 收交易手续费（0.01-0.2%）

### 2. Broker-Dealer（经纪商）

- 零售用户的开户 + KYC 方
- "Easy Buy"、"市价买入"这类零售 UI
- Binance P2P、Coinbase Commerce 等面向零售 / 商户的服务

### 3. Market Maker（做市商）

- 自营做市 desk（Binance Labs 下 Sigma Chain、Coinbase's proprietary 做市）
- 在自家平台上给用户报价 —— **对手盘可能就是交易所自己**
- 2020 年 CFTC 调查发现 Binance 做市商 Sigma Chain 占其平台交易量的 40%+

### 4. Custodian（托管方）

- 用户的币 / 资金存在交易所钱包（冷 + 热）
- 用户没有真实的 private key（除非提现到 self-custody 钱包）
- "Not your keys, not your coins" —— 用户存的 BTC 在交易所账上只是 **IOU**

### 5. Clearing / Settlement

- 没有独立的清算所 —— 交易所自己记账
- Binance 内部的 USDT 转账是数据库记录，不上链
- 你"成交"的 BTC 也不上链，只是交易所账本里的数字

### 6. Listing（上市审核）

- 交易所决定什么币可以交易
- 收上币费（$1-5M per token）—— OKX、Binance 等过去明确披露过
- 同时可以持有该代币的初始供应（投资或"上币捐赠"）
- 在 FTT（FTX 自家代币）案中，FTX 既是上市方又是持有方又是做市方

### 加上：资金费 / 借贷 / Staking / Launchpad

- 保证金交易的资金费率（funding rate）—— 交易所可以调整
- 借贷业务 —— 你借出的币可能被借给做市 desk
- Staking 收益 —— 交易所抽成
- Launchpad / IEO —— 新代币首发的"发行平台"，交易所拿管理费 + 代币分配

## 三、每个冲突的机制

### 冲突 1：Exchange + Market Maker

**你的买单被谁成交？**

- 理想情况：另一个零售用户的卖单
- 实际：越来越多是交易所自营 MM desk
- MM desk 有**信息优势**：看得见订单簿深度、看得见即将到来的大单、看得见 liquidation levels

**典型操纵方式**（CFTC 在 Binance 2023 和解里提到）：
- **Stop hunting**：MM desk 有查询用户止损位的能力，推动价格到止损然后反向
- **Wash trading**：MM desk 做自我对敲成交，营造虚假流动性
- **Front-running**：看到大单来了，先自己买入再让大单推价

Binance 2023 年 11 月和 DOJ + CFTC 达成 **$4.3B 和解**，其中包括这些操纵指控 —— CZ 认罪并辞去 CEO。

### 冲突 2：Exchange + Custodian

**你的币到底在哪？**

- 交易所的"cold wallet"（冷钱包）存大部分资产
- "hot wallet"（热钱包）处理日常提现
- **但**：没有独立审计证明冷钱包的币**只归用户**
- 交易所可以**再抵押**（rehypothecation）—— 拿用户的币去做自己的 yield farming、借贷、做市

**FTX 2022 年 11 月崩溃的直接原因**：
- FTX 把用户的资产（主要是 USDC / BTC）借给姊妹公司 Alameda Research
- Alameda 用这些做高风险投资（Luna、3AC loans、high-leverage 衍生品）
- Luna 5 月崩盘 + 3AC 6 月破产 → Alameda 资不抵债
- 用户开始大规模提现 → FTX 发现自己**用户资产已经不在**
- CZ 一条推文引发挤兑 → FTX 11 月 11 日 破产

**Chapter 11 文件披露**：$8B 用户资产缺口。创始人 SBF（Sam Bankman-Fried）2023 年被定罪 7 项，2024 年被判 25 年徒刑。

### 冲突 3：Exchange + Listing

**谁决定哪些币可以在平台交易？**

- 交易所审核团队（业务决策，不是监管决策）
- 审核标准不透明
- 上币费 $1-5M（业内数字，交易所否认或模糊化）
- 交易所投资部门（Binance Labs、Coinbase Ventures）**先投资**再**上市**自己投资的项目 → 拉盘获利

**典型案例**：
- **SafeMoon 2021 / Shib 2021**：上市前 24 小时交易所自家地址的买入活动
- **Base 生态代币 2023-2024**：Coinbase 自己推出的 L2，Coinbase 在 listing 和做市都有角色
- **BNB 本身**：Binance 发行、Binance 交易、Binance 官方钱包持有一部分初始供应

2024 SEC 对 Coinbase 的起诉（后撤诉）核心就是"未注册 securities exchange + broker-dealer + clearing agency"三重身份。

### 冲突 4：Exchange + Derivatives

**保证金交易中的爆仓机制**

- 你开 100 倍杠杆 long BTC
- 交易所看得见你的 liquidation price
- 交易所有能力通过 MM desk 让价格短暂触及 liquidation
- 触发爆仓 → 你的保证金归"insurance fund"（交易所账）
- 2022 年 Bybit 被指 "stop hunting" —— 价格在 liquidation 前瞬间"闪跌"再回弹的现象太普遍

**更深层**：
- 交易所的 insurance fund 每月增长百万美元级
- 这些钱表面是"保护其他用户的穿仓风险"
- 实际上是交易所自留的**资金来源**
- Bybit 2025 年的 $1.5B 黑客损失就是用 insurance fund 部分补足的

## 四、Proof of Reserves 是剧场

FTX 崩盘后，所有交易所都推出 "Proof of Reserves"（PoR）。本质上：

**技术上**：
- Merkle tree 证明用户余额总和
- 公布冷钱包地址

**问题**：
1. **时间点问题**：只证明"在这一刻"资产足够。第二天可以挪走
2. **负债面不透明**：交易所可以有大量链下负债（借贷、对赌、表外结构），PoR 不披露
3. **内部账户问题**：交易所可以开内部 IOU 账户虚增用户余额
4. **FTX 有 "Proof of Reserves"**：2022 年 7 月发过 PoR 报告，11 月就破产

**真正的信任基础应该是**：独立审计（四大会计师事务所）+ 持续审计 + 分离托管方 —— **全部 crypto 行业都不具备**。

## 五、为啥没有第三方托管

传统金融：
- Schwab / Fidelity 代你持股 → DTC / DTCC 实际存放股票
- 三方都独立：券商不能动 DTC 的股票账户
- 如果 Schwab 破产 → 你的股票仍在 DTC → 监管转到新券商

加密：
- 原本设计（比特币白皮书）：每个人自己托管
- 实际（方便性驱动）：大多数用户把币放在交易所
- 没有 DTC 类的中间人
- Fireblocks、BitGo、Copper、Anchorage 等机构托管存在但**零售几乎不用**（操作复杂、有最低资产门槛）

**如果加密行业要"成熟"**，必须强制**交易所 ≠ 托管方**。但这会：
- 降低交易所的利润（托管费和借贷业务）
- 增加用户的操作摩擦（提现到托管 → 交易 → 存回托管）
- 行业不愿意做

## 六、中心化加密所 vs 传统金融 vs 去中心化（DEX）

| 维度 | 传统金融（NYSE + Schwab + DTC）| 中心化加密所（Binance）| DEX（Uniswap + MetaMask）|
|---|---|---|---|
| 角色分离 | 法律强制 | 完全混合 | 链上合约（无中间人）|
| 托管 | 第三方（DTC）| 交易所自己 | 用户自己（self-custody）|
| 清算透明度 | 监管报送 | 完全黑盒 | 链上可查 |
| 价格发现 | 撮合 + 订单簿 | 订单簿 + 交易所 MM | AMM（常数乘积公式）|
| Listing | 委员会 + SEC 注册 | 交易所内部 | 任何人可创建池子 |
| 监管 | SEC + FINRA | 模糊（多辖区）| 几乎无 |
| 用户保护 | SIPC（up to $500K）| 无，除了可能的 "insurance fund" | 无 |
| 被黑风险 | 监管清算保护 | 2014 Mt. Gox、2025 Bybit $1.5B 等 | 合约 bug 是主要风险 |

**结论**：加密中心化所处于"法律保护最弱，利益冲突最严重"的象限。DEX 在技术上更接近"无中介"的原始愿景，但 UX + 流动性让大多数零售停留在 CEX。

## 七、为啥零售仍然选 CEX

尽管上述问题，2026 年 CEX 仍处理 ~70% 加密交易量：

- **UX 更好**（法币入金、手机 app）
- **流动性更深**（订单簿 vs AMM pool）
- **高杠杆衍生品**（CEX 上 50-100x 杠杆，DEX 上典型 <10x）
- **客服 + 帮助**（DEX 几乎没有）
- **品牌信任**（CZ/Binance、Armstrong/Coinbase 的公众形象）
- **无需技术背景**（不用搞 gas fee、seed phrase、wallet）

零售的选择是**"已知的便利 vs 理论上的风险"**。对绝大多数用户，便利胜出 —— 直到下一个 FTX 事件再打消一部分人的侥幸。

## 八、Bybit 2025 年黑客事件：技术角度的补充

**2025 年 2 月 21 日** Bybit 被盗 $1.5B ETH —— 加密史上最大单笔黑客事件。

**攻击方式**（Lazarus 朝鲜黑客组织）：
- **不**是 Bybit 代码有 bug
- **不**是冷钱包私钥泄露
- **是** Safe Wallet 的 UI 前端代码被篡改
- 用户在 Safe UI 上"确认"看起来正常的交易签名，实际签的是恶意合约
- 这就是 "Supply chain attack"（供应链攻击）

**为啥这对"垂直垄断"是加分题**：
- Bybit 用 Safe Wallet 做多签托管
- Safe 是独立的开源项目，不是 Bybit 内部的
- 如果 Bybit 自己做 UI，早就被内部安全审计抓到
- 加密行业**依赖第三方工具**导致供应链风险成为系统性风险
- 而 CEX 们又**集中了大量的用户资产**放大单点故障

**Bybit 用 insurance fund + 借款 + 战略储备**赔付 $1.5B 给用户，2 周内恢复服务 —— 展示了 CEX 在危机应对上的优势。但也暴露了 "$1.5B 资金能不能随时拿出来" 这个问题的严重性。

## 九、历史类比：这个游戏以前怎么结束

**1934 年之前的美国**：
- 投资银行 + 经纪 + 做市 + 托管混合
- 1929 崩盘前，J.P. Morgan 等大银行同时做以上所有事
- 崩盘后，Glass-Steagall Act（1933）强制分离
- 投资者损失了 80%+ 资产，许多人自杀

**21 世纪初**：
- 衍生品 + 投行混合
- 2008 Bear Stearns、Lehman、AIG 崩盘
- Dodd-Frank（2010）+ Volcker Rule 限制

**加密的下一次？**
- 每次都是**结构性崩盘 → 立法分离**
- 2022 FTX 崩盘只是第一次警告
- 2025 Bybit 事件证明 CEX 仍集中着致命风险
- 历史规律：还会再来 1-2 次大事件，才会真正形成有效监管

## 十、实操建议

作为用户：

1. **不要把交易所当银行**。提现到自持钱包，只留交易所用的部分
2. **了解交易所的"insurance fund" 机制**：这不是保险，是交易所的备用金
3. **衍生品杠杆不要超过 10 倍**（即便交易所允许 100 倍）
4. **关注 Proof of Reserves 但别完全信任**：FTX 有过 PoR
5. **分散到 2-3 个头部交易所**：不要把所有资产放一家（特别是中型交易所）
6. **备份 seed phrase 的重要性**：如果你真的用自持钱包，这是你的最后防线

作为开发者 / 研究者：

- **DEX 是理论正确的方向**，但需要 5-10 年 UX 赶上 CEX
- **中间方案**是 **Hybrid**（前端 DEX，后端有 custodian 选项），2025-2027 可能是主流
- **监管逐步跟上**：美国 2024 年通过 FIT21 给加密商品/证券分类，2025-2026 SEC + CFTC 开始更清晰地执法
- **个人机会**：**监管合规服务**、**独立审计**、**托管基础设施** 都是未充分开发的市场

## 参考

- [Bybit 2025 hack - Chainalysis 分析](https://www.chainalysis.com/blog/bybit-exchange-hack-february-2025-crypto-security-dprk/)
- [Bybit 2025 hack - NCC Group 技术分析](https://www.nccgroup.com/research/in-depth-technical-analysis-of-the-bybit-hack/)
- [Bybit hack - Wilson Center 政治分析](https://www.wilsoncenter.org/article/bybit-heist-what-happened-what-now)
- [SEC v. Coinbase 起诉文件](https://www.sec.gov/litigation/complaints/2023/comp-pr2023-102.pdf)
- [FTX Restructuring Documentation - Kroll](https://restructuring.ra.kroll.com/FTX/)
- [Binance $4.3B 和解 - CFTC](https://www.cftc.gov/PressRoom/PressReleases)
- `../02-platforms/binance.md` / `coinbase.md` / `bybit.md` / `kraken.md` / `okx.md`：加密所档案
- `../04-relationships/01-ownership.md`：加密所的母公司 / 股东结构
- `../05-trends/02-crypto-native-wins.md`：加密为啥超过传统零售 FX
