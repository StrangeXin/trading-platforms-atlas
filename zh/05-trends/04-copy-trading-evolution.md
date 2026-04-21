# 跟单（Copy Trading）社交化演变

零售交易的"人类智能分发层"。从 2006 eToro 的 OpenBook 到现在，社交 + 算法 + 跟单混合，用户不再需要自己做决策。

## 阶段 1：MetaTrader Signals（2006-2012）

- **2006** MetaQuotes 推出 MetaTrader Signals 服务：
  - 信号提供者（Signal Provider）把自己的交易历史公开
  - 订阅者支付月费（$30-200）自动复制其交易
- **技术**：MT4/MT5 server 直连两边，订阅者的账户自动镜像信号者的每一笔单
- **规模**：2015 年 MetaQuotes Signals 超过 **4000 个活跃信号提供者**，用户数十万

**问题**：
- 完全基于历史回测 + 真实交易混杂，无法区分 paper trade
- "生存偏差"：只有赚钱的提供者还在上面
- Cherry pick 时间窗口展示业绩

## 阶段 2：社交 + 跟单（2007-2014）

- **2007 eToro** 创立以色列，发明"社交交易"概念：
  - 用户档案 + 业绩公开
  - 不只复制交易，还有 feed / 评论 / 关注
  - 2011 OpenBook 功能让每个用户的每笔单实时可见
- **2011 ZuluTrade** 希腊：类似跟单网络，接入多家 broker
- **2012 Tradency**：以色列做 Mirror Trader（多家 broker 白标）

**技术突破**：不再依赖 MT server 的跟单功能，而是用**中心化后台 + broker API 路由**。跟单者和信号者可以在不同 broker。

## 阶段 3：机构化（2015-2020）

- **eToro 融资** 2014 E 轮，估值 $800M
- **CopyTrader 算法**：按风险权重自动按比例复制，不是简单镜像
- **交易者评分**：风险评分 / 夏普比率 / 最大回撤全公开
- 机构加入：**Darwinex**（西班牙）做"信号代币化"——把信号打包成可投资产品

## 阶段 4：加密 + 高频跟单（2020-)

- **Bybit Copy Trading**：2022 上线，快速超过 eToro 加密跟单规模
- **Binance Copy Trading**：2023 上线 OKX、MEXC 跟进
- **BingX 跟单**：专注加密跟单细分

**加密跟单的优势**：
- REST / WS API 成熟，低延迟镜像
- 24/7 无休，信号者和跟单者都不用等市场开盘
- 永续合约杠杆 + 小额本金吸引零售

**技术栈**：
- 跟单引擎**在交易所内部**（Bybit / Binance 原生功能，不依赖第三方）
- 跟单延迟 < 1 秒
- 自动按比例复制（1:1 手数不可行，按本金比例）

## 阶段 5：AI + 跟单（2024-）

**GPT 时代跟单的新形态**：
- **AI 信号提供者**（不是人类）：基于模型给出交易信号
- **Narrative 分析**：LLM 解析 X / Reddit 情绪转换成信号
- **Multi-modal**：结合图表识别 + 新闻 sentiment + 链上数据
- **tokenized signals**：WEB3 风格，信号打包成 NFT 或代币

代表产品（2024-2025）：
- **Numerai**（机器学习信号市场，比赛制）
- **Dash2Trade** / **SingularityDAO** 等 AI 交易协议
- **Kaito AI**（加密情绪分析 → 跟单）

## 各平台跟单规模（2024 年数据）

| 平台 | 活跃跟单者 | 信号 / 策略提供者 |
|---|---|---|
| eToro | ~30M 用户，50% 用跟单 | ~2M "Popular Investors" |
| ZuluTrade | ~2M 活跃 | ~80k signals |
| Bybit Copy | ~5M 活跃（2024 上半年） | ~20k |
| Binance Copy | ~3M 活跃 | ~10k |
| MetaTrader Signals | ~500k 活跃 | ~15k |
| Darwinex | 小众机构 | ~5k DARWIN 产品 |

## 模式对比

| 模式 | 代表 | 特点 |
|---|---|---|
| **信号订阅** | MT Signals | 月费 + 自动复制；信号者历史透明但无监督 |
| **社交跟单** | eToro | 按比例跟单 + 社交 feed；新手入门友好 |
| **算法跟单** | ZuluTrade | 评分系统 + 智能风险管理 |
| **代币化信号** | Darwinex | 信号变成可投资产品；机构级 |
| **AI 信号** | Numerai / Dash2Trade | 机器学习模型 + on-chain 执行 |
| **交易所原生** | Bybit / Binance | 零摩擦 + 原生 UI；加密赛道主流 |

## 监管挑战

- **欧洲 ESMA**：2019 起把"跟单交易"归入 MiFID II 受监管范畴，提供者需持 portfolio management 牌照
- **美国 SEC**：严控跟单宣传（不能承诺历史业绩 → 暗示未来业绩）
- **英国 FCA**：2022 对 eToro 警告社交交易风险披露不足
- **中国**：跟单服务不在合规 retail FX 监管范围内（因为零售 FX 本身不合法）

## 为啥跟单持续增长

- **零售持续亏损**（ESMA 调查 74-89% 亏损）→ 找"更懂的人带"
- **AI 工具让信号生产边际成本降低**
- **24/7 市场**更需要自动化（跟单 + 复制策略）
- **TikTok / YouTube 金融网红**把跟单当变现路径

## 预测 2025-2028

1. **跟单 × AI**：人类 trader 和 AI bot 并列在跟单榜单，用户不管谁，看夏普率
2. **加密所自营吞食第三方**：eToro / ZuluTrade 的加密业务被 Bybit / Binance 跟单取代
3. **代币化信号**爆发（如果监管允许）：信号本身成资产
4. **跨 broker 聚合**再起：类似 TradingView 的"跨 broker 前端"模式会有"跨 broker 跟单聚合"

## 参考

- [eToro SPAC 2023 招股书](https://www.sec.gov/Archives/edgar/data/1849417/000114554923002551/s1-etoro.htm)
- [Bybit Copy Trading Data](https://www.bybit.com/en/copytrading/)
- ESMA《Mirror trading / Copy trading》2019
- Numerai 白皮书 + 论坛
