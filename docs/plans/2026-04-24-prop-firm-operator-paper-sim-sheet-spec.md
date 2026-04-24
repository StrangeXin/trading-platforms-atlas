# Prop Firm Operator — Paper Sim Sheet Spec

Date: 2026-04-24
Status: exploration

## 核心判断

在真正写原型前，最便宜也最重要的一步，

不是画 UI，也不是补更多事件，

而是先让这台机器能在纸面上稳定跑出：
- 甜头
- 延迟
- 反噬
- 不同死法

这份规格的目标就是：

**把原型最小纸面模拟需要的字段、顺序、隐藏计数器和公式草模整理成一张可直接搭表的说明。**

## 纸面模拟的目标

一张 sheet 至少要能回答 4 个问题：

1. 五个旋钮会不会很快出现唯一最优解
2. 延迟后果能不能在 3–5 周内形成可感知反噬
3. 不同路线能不能走出不同死法
4. “坏决定短期有效”是不是稳定成立

## Sheet 结构建议

建议只做 4 个 tab：

1. `Setup`
2. `Weekly Sim`
3. `Events`
4. `Run Summary`

## 1. Setup Tab

### 作用

- 定义初始状态
- 定义旋钮档位
- 定义基础系数

### 推荐字段

#### 基础资源

- `start_cash`
- `start_flow`
- `start_pass_rate`
- `start_payout_liability`
- `start_trust`
- `start_reg_heat`

#### 隐藏计数器

- `start_complaint_echo`
- `start_winner_visibility`

#### 玩家旋钮默认档位

- `challenge_fee_level`
- `profit_target_level`
- `max_drawdown_level`
- `payout_split_level`
- `marketing_tone_level`

#### 人群基础分布

- `novice_share`
- `gambler_share`
- `real_skilled_share`

### 原型默认值建议

- `start_cash = 62`
- `start_flow = 74`
- `start_pass_rate = 11`
- `start_payout_liability = 14`
- `start_trust = 48`
- `start_reg_heat = 22`
- `start_complaint_echo = 8`
- `start_winner_visibility = 6`

人群默认分布：
- `novice_share = 0.58`
- `gambler_share = 0.30`
- `real_skilled_share = 0.12`

## 2. Weekly Sim Tab

### 作用

这是核心 tab。

每一行 = 一周。

建议原型至少先跑 `14` 行。

### 列结构建议

按 8 组列来排，避免后面失控。

## A 组：周编号与阶段

- `week`
- `phase`

`phase` 建议：
- `temptation`
- `crack`
- `reveal`
- `reckoning`

原型 10–14 周可简化为：
- Week 1–3 = `temptation`
- Week 4–8 = `crack`
- Week 9–14 = `reveal/reckoning`

## B 组：玩家输入

- `fee_level`
- `target_level`
- `drawdown_level`
- `split_level`
- `tone_level`
- `chosen_event_option`

每个 level 建议只用 5 档：
- `1 = very_low`
- `2 = low`
- `3 = standard`
- `4 = high`
- `5 = extreme`

这样最利于纸面模拟。

## C 组：人群变化

- `novice_inflow`
- `gambler_inflow`
- `skilled_inflow`
- `novice_retry`
- `gambler_retry`
- `skilled_retry`

### 创意重点

纸面模拟不要只算总报名。

必须拆成三类人，否则不会有“平台在经营人性”的感觉。

### 简化公式草模

- `novice_inflow = flow * tone_bias * trust_bias`
- `gambler_inflow = flow * desperation_bias * fee_bias`
- `skilled_inflow = flow * trust_bias * payout_split_bias * winner_visibility_bias`

## D 组：结果结算

- `signups_total`
- `failures_total`
- `passes_total`
- `payout_requests`
- `successful_payouts`

### 最小公式思想

先求一个本周“有效通过率”：

`effective_pass_rate = base_pass_rate + skilled_bonus - target_penalty - drawdown_penalty + trust_momentum`

然后：

- `passes_total = signups_total * effective_pass_rate`
- `failures_total = signups_total - passes_total`

### 关键创意

`effective_pass_rate` 不能只由规则决定。

还要受：
- 人群结构
- 上周赢家是否可见
- 平台当前信任

影响。

否则平台不像社会系统，只像考试系统。

## E 组：财务结算

- `fee_revenue`
- `promo_cost`
- `support_cost`
- `payout_cost`
- `weekly_cash_delta`
- `cash_end`

### 简化公式草模

- `fee_revenue = signups_total * fee_unit`
- `promo_cost = tone_level * promo_multiplier`
- `support_cost = signups_total * support_load_factor + complaint_echo * echo_support_factor`
- `payout_cost = successful_payouts * payout_unit * split_multiplier`
- `weekly_cash_delta = fee_revenue - promo_cost - support_cost - payout_cost`

## F 组：结构资源更新

- `flow_end`
- `trust_end`
- `pass_rate_end`
- `payout_liability_end`
- `reg_heat_end`

### 更新逻辑建议

#### `flow_end`

由：
- 本周增长叙事
- winner_visibility
- trust
- reg_heat

共同决定。

#### `trust_end`

由：
- payout 成功与否
- complaint_echo
- marketing aggressiveness
- support 压力

共同决定。

#### `payout_liability_end`

由：
- 通过人数
- skilled_share
- payout_split
- winner_visibility

共同决定。

#### `reg_heat_end`

由：
- marketing_tone
- complaint_echo
- payout friction
- event flags

共同决定。

## G 组：隐藏计数器

- `complaint_echo_end`
- `winner_visibility_end`

### `complaint_echo` 建议公式草模

由以下项累计：
- 低通过率
- 高营销
- 低信任
- 高客服压力

再让它自然衰减一部分：

`complaint_echo_end = prior_echo * 0.72 + new_complaints`

### `winner_visibility` 建议公式草模

由以下项累计：
- 成功 payout
- trust
- KOL 放大

也自然衰减：

`winner_visibility_end = prior_visibility * 0.78 + new_winner_signal`

### 为什么这样设计

因为：
- 抱怨不会立刻消失
- 成功案例也不会立刻消失

这两个影子计数器，正是平台“会记仇 / 会发酵”的来源。

## H 组：事件触发标记

- `promo_event_flag`
- `rigged_post_flag`
- `winner_thread_flag`
- `winner_cluster_flag`
- `processor_warning_flag`
- `regulator_letter_flag`

建议只做布尔值：`0/1`

### 触发条件草模

#### `rigged_post_flag = 1` 当：

- `pass_rate_end <= 8`
- 且 `complaint_echo_end >= 20`

#### `winner_thread_flag = 1` 当：

- `successful_payouts >= 1`
- 且 `winner_visibility_end >= 18`

#### `winner_cluster_flag = 1` 当：

- `payout_liability_end >= 28`
- 且 `skilled_inflow` 连续两周增长

#### `processor_warning_flag = 1` 当：

- `complaint_echo_end >= 30`
- 或 `reg_heat_end >= 40`

#### `regulator_letter_flag = 1` 当：

- `reg_heat_end >= 55`
- 且曾出现 `processor_warning_flag`

## 3. Events Tab

### 作用

- 把事件选项映射成资源修正
- 避免 Weekly Sim 里的公式太乱

### 推荐列

- `event_name`
- `option_name`
- `cash_mod`
- `flow_mod`
- `trust_mod`
- `liability_mod`
- `reg_heat_mod`
- `complaint_echo_mod`
- `winner_visibility_mod`
- `delay_tag`

### 例子

`Weekend Promo Temptation / Launch the Promo`

- `cash_mod = +8`
- `flow_mod = +10`
- `trust_mod = -5`
- `complaint_echo_mod = +6`
- `delay_tag = week+2`

### 创意重点

不要只给即时修正。

必须给：
- 即时修正
- 延迟修正

否则事件就只是按钮，不是诱惑。

## 4. Run Summary Tab

### 作用

- 快速读出这局平台到底长成什么样

### 推荐字段

- `peak_cash`
- `lowest_trust`
- `peak_payout_liability`
- `peak_reg_heat`
- `average_pass_rate`
- `total_successful_payouts`
- `ending_type`

### `ending_type` 规则建议

#### `dirty_success`

- `cash_end >= 70`
- `trust_end <= 35`
- `reg_heat_end >= 45`

#### `trust_collapse`

- `trust_end <= 20`

#### `payout_shock`

- `payout_liability_end >= 65`
- 且 `cash_end <= 30`

#### `regulatory_freeze`

- `reg_heat_end >= 70`

## 纸面模拟的最小公式顺序

建议每周按下面顺序计算：

1. 读取玩家旋钮
2. 计算人群 inflow / retry
3. 计算 signups
4. 计算通过 / 失败 / payout 请求
5. 计算财务变化
6. 更新六大资源
7. 更新两个隐藏计数器
8. 检查事件触发
9. 应用本周事件即时修正
10. 写入下一周基线

这个顺序很关键。

因为它保持了这个世界观：
- 先有人来
- 再有人输
- 再有人赢
- 再有人说话
- 最后后果才落到账上

## 纸面模拟最值得优先验证的 3 条路线

### 路线 A：脏增长

- 高营销
- 偏高费用
- 偏紧 target
- 偏低 split

应验证：
- 短期极爽
- 中后期 trust / reg_heat 明显发臭

### 路线 B：伪公平

- 中等营销
- 中等偏宽规则
- 中高 split

应验证：
- trust 更好
- 但 payout liability 更早抬头

### 路线 C：理性勒紧

- 低营销
- 高 target
- 紧 drawdown

应验证：
- 现金不会立刻死
- 但 complaint_echo 会慢慢聚起来

## 纸面模拟的 kill criteria

如果表里出现下面情况，就说明模型还不对：

### Kill 1

某一套配置连续 10 周都明显最好

### Kill 2

事件几乎不触发，说明隐藏计数器太弱

### Kill 3

玩家不管怎么选，最终都死于同一种原因

### Kill 4

低 trust / 高 reg_heat 几乎没有真实经营摩擦

## 一句话总结

Paper Sim Sheet Spec 的目标，不是先做一张漂亮的表，

而是先把这台机器最关键的顺序、计数器和毒性链路跑通：

**先让它在表格里学会诱惑、发酵和反咬，再让它进屏幕。**
