# Prop Firm Operator - Prototype Risk Register

Date: 2026-04-24
Status: exploration

## 核心判断

这个原型最大的风险不是做不出来。

更真实的风险是：

- 做出来以后不像一台会诱惑人的机器
- 玩家只是在调数值
- 事件像随机惩罚
- UI 把复杂性变成噪音
- playtest 测到的是美术完成度，而不是毒性循环

这份文档的目标是：

**把实现和玩法验证中最可能失败的风险列出，包括触发信号、缓解方案和停损标准。**

## 风险分级

### Severity

- `S1`: 会让原型核心验证失效
- `S2`: 会显著误导 playtest 结果
- `S3`: 会影响体验但不阻断验证

### Likelihood

- `High`: 很容易发生
- `Medium`: 有明显概率
- `Low`: 当前阶段概率较低

## Product Loop Risks

### Risk 1: 坏决定不够诱人

Severity: `S1`
Likelihood: `High`

触发信号：

- 玩家 Week 1-3 不愿意推营销或大促
- 玩家觉得干净路线显然更好
- 玩家没有说出“先撑过这周”这类自我辩护

根因：

- 脏增长的即时 cash / flow 不够甜
- promo 事件写得太像道德测试
- 早期惩罚太明显

缓解方案：

- 提高 promo immediate cash
- 提高 marketing tone 对 signups 的影响
- 降低 Week 1-3 的 complaint 可见度
- 把事件文案改得更像经营救火，而不是邪恶选择

停损标准：

- 连续 3 名玩家没有任何一次主动选择短期有毒按钮，停止扩内容，回调 Week 1-3。

### Risk 2: 延迟反噬像随机惩罚

Severity: `S1`
Likelihood: `High`

触发信号：

- 玩家说“这怎么突然发生”
- 玩家无法回忆 Week 3 promo 或 Week 6 winner thread
- 玩家觉得 payment warning 是系统强行扣分

根因：

- delayed effect 没有 narrative hint
- Digest 没有显示“来自 Week X 的回声”
- 反噬 timing 太晚或太早

缓解方案：

- 每个 delayed effect 加 `createdWeek` 和 hint
- Digest 显示一条 echo line
- Week 5-6 先给轻信号，Week 8-10 再给硬反噬

停损标准：

- 如果 5 人里 3 人以上认为主要事件随机，暂停 UI polish，重做 delayed consequence 可见化。

### Risk 3: 赢家被理解成纯奖励

Severity: `S1`
Likelihood: `Medium`

触发信号：

- 玩家看到 winner thread 只想最大化传播
- 玩家不理解 `Payout Liability`
- 玩家不把 skilled cluster 当风险

根因：

- payout liability 上升太慢
- winner feed 只给正面语气
- silent winners 事件不够压迫

缓解方案：

- 提高 winner visibility 对 skilled cluster 的影响
- 提高 skilled 对 payout requests 的系数
- Digest 同时显示 `Trust ↑` 和 `Payout Liability ↑`
- Winner feed 必须一正一负成对出现

停损标准：

- 如果第二轮调参后玩家仍普遍把赢家当纯好事，核心经济模拟需要回炉。

### Risk 4: 三条路线太像

Severity: `S1`
Likelihood: `Medium`

触发信号：

- Dirty Growth、Pseudo Fair、Rational Tightening 都进入同一种 diagnosis
- Week 6 / 9 / 12 横向差异不明显
- 玩家结束后无法描述自己“活成了什么平台”

根因：

- formula 系数过于平均
- event scoring 没有读 route 风格
- diagnosis 规则过粗

缓解方案：

- 用 route tuning matrix 做 assertions
- 加强三条路线的 signature counters
- diagnosis evidence 必须引用玩家 flags

停损标准：

- 如果 scripted routes 无法稳定产生至少 2 种 diagnosis，不进入 playtest。

## Simulation Risks

### Risk 5: 唯一最优解过早出现

Severity: `S1`
Likelihood: `Medium`

触发信号：

- 某一套 controls 连续 12 周明显最好
- route assertions 显示该路线 cash/trust/heat 全部占优
- 玩家第二局开始只重复同一套打法

根因：

- 资源之间没有真实 tradeoff
- 体面路线太便宜
- 脏增长反噬太弱

缓解方案：

- 每个改善至少绑定一个 shadow counter
- 提高 high trust / high split 的 payout cost
- 提高 high marketing 的 complaint / heat 延迟

停损标准：

- 如果 3 条 scripted routes 中有一条在 4 个以上关键指标同时占优，不能进入 UI polish。

### Risk 6: 数值暴毙

Severity: `S2`
Likelihood: `Medium`

触发信号：

- 玩家 Week 3 前 cash 或 trust 崩盘
- Route A 因早期反噬无法形成诱惑
- 玩家只剩求生，没有经营姿态

根因：

- support cost 太高
- complaint echo 太早伤 trust
- payment/reg heat 过早介入

缓解方案：

- Week 1-3 加 early safety band
- 降低 early complaint 可见影响
- payment warning 不早于 Week 10

停损标准：

- 任一 baseline route 在 Week 3 前进入不可恢复状态，必须先调公式。

### Risk 7: Hidden counters 永远太隐藏

Severity: `S2`
Likelihood: `High`

触发信号：

- 玩家不理解 complaint echo
- 玩家不理解 winner visibility
- 玩家不知道为什么 delayed effects 出现

根因：

- Debug panel 有，但玩家界面没有 shadow
- RiskCard 没有把 hidden counters 翻译成人话

缓解方案：

- RiskCard 用“pressure”语言显示 hidden counter 影子
- Digest 加 delayed effect hint
- Diagnosis evidence 引用 hidden counter shadow

停损标准：

- 如果玩家只看 visible resources 仍无法理解事件，必须补 narrative shadow，不要加新资源条。

## UI Risks

### Risk 8: UI 像后台表格，不像经营决策

Severity: `S2`
Likelihood: `Medium`

触发信号：

- 玩家说“像填表”
- 玩家只看 slider，不读风险
- 按钮没有经营姿态

根因：

- 方向提示太技术化
- 文案太像设置页
- Control Room 缺少主风险

缓解方案：

- 每个 control 加 audience sentence
- 按钮文案动词化
- 每周只突出一个主风险

停损标准：

- 如果玩家不能在 15 秒内说出本周最大风险，Control Room 信息层级不过关。

### Risk 9: UI 太像游戏卡牌，失去可信感

Severity: `S2`
Likelihood: `Medium`

触发信号：

- 玩家把事件当剧情抽卡
- 玩家不相信这是平台运营问题
- 金融/交易背景玩家觉得味道浮夸

根因：

- Event modal 视觉过戏剧化
- 文案太评判玩家
- 风险提示太像任务说明

缓解方案：

- 事件正文保持经营语气
- 降低装饰性视觉
- 用内部邮件、支付提醒、用户帖来承载后果

停损标准：

- 如果熟悉金融平台的测试者普遍说“不像真实压力”，事件层需要重写。

### Risk 10: 信息密度压垮新手

Severity: `S2`
Likelihood: `High`

触发信号：

- 玩家 Week 1 不知道先看哪里
- 玩家频繁问每个资源是什么意思
- 玩家跳过 digest 因为太多

根因：

- Week 1 开放信息太多
- Narrative feed 太长
- 资源解释全靠 hover

缓解方案：

- Week 1 只高亮 Cash / Flow / Pass Rate
- Feed 限制 3-5 条
- locked controls 显示简短 unlock reason

停损标准：

- 如果 5 人里 3 人不能在 5 分钟内说清业务，onboarding/IA 必须回炉。

## Playtest Risks

### Risk 11: 测试者被主持人教会

Severity: `S2`
Likelihood: `Medium`

触发信号：

- 主持人频繁解释系统
- 玩家理解来自口头讲解而不是界面
- 访谈答案重复主持人措辞

根因：

- 主持人忍不住补设定
- 原型缺失基础说明
- 观察问题太引导

缓解方案：

- 使用 runbook 开场脚本
- 主持人只问“你怎么看”
- 记录所有主持人介入

停损标准：

- 如果一场测试中主持人解释核心机制超过 3 次，该样本不计入 clarity 分数。

### Risk 12: 测到的是 UI polish，不是 loop

Severity: `S2`
Likelihood: `Medium`

触发信号：

- 反馈集中在颜色、字体、按钮位置
- 没有关于选择理由和后果的记录
- 观察表缺少 first dirty choice / delayed consequence 数据

根因：

- 测试目标没有说清
- 原型太早追求视觉完成度
- 访谈问题跑偏

缓解方案：

- 每场先重申这是 loop test
- 观察表必须记录事件选择理由
- 访谈优先问 temptation / consequence / winner

停损标准：

- 如果一批 playtest 无法回答核心 5 个目标，重测，不根据该批做产品判断。

## Risk Review Cadence

### 开发中

每完成一个 milestone，复查：

- 是否引入新的随机感
- 是否让 hidden counters 更可读
- 是否让路线差异更清晰

### Playtest 前

必须检查：

- Route assertions
- UI QA
- Export
- Host script
- Debug panel

### Playtest 后

根据 Green / Yellow / Red Light 更新风险：

- Green：进入 polish 和第二轮内容
- Yellow：只改 loop / timing / digest
- Red：回到 onboarding 和 Week 1-3

## 一句话总结

Prototype Risk Register 的目标，不是把风险写得吓人，

而是保护原型最值得验证的东西：

**玩家必须先被诱惑，之后才有资格被系统反咬。**
