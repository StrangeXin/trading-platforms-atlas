# Prop Firm Operator — Simulation Calibration Log

Date: 2026-04-24
Status: v0-sim

## 核心判断

`simulation-formula-v0` 写的是第一版系数建议，`route-tuning-matrix` 写的是
三条路线应落在的目标区间。两者在 v0 代码首次实装后跑出来的结果，和 matrix
的区间带有系统性偏差。

这份文档记录的不是"当前值是最终值"，而是"当前校准在哪一层已收敛、哪一层
仍需继续调"，让下一轮调参有 baseline 可对照。

## 校准状态（2026-04-24 第二轮）

跑三条 scripted routes × Week 3/6/9/12 × 资源+计数器，共 92 个 checkpoint
指标。

| 轮次 | Out-of-band | Dirty | Fair | Rational | 关键变化 |
|---|---|---|---|---|---|
| 实装首跑 | 59 | 18 | 25 | 16 | — |
| 第一轮 (Pass 1-3) | 50 | 18 | 19 | 13 | 系数降敏 + 软饱和 + 均值回归 |
| 第二轮 (Pass 4-5) | 44 | 17 | 14 | 13 | event 软 clamp + Rational flow 救援 + winnerVis 衰减加速 |
| 第三轮 (Pass 7-9) | 42 | 14-17 | 11-16 | 11-15 | Rational flow 反推扩到 <50；regHeat 高位反推阈值降到 78；Week 1-3 tone-driven 伤害 damper |
| 第四轮 (Pass 10-13) | 37 | 15 | 9-11 | 12 | regHeat 中段反推上调到 38；payoutCost splitMult 0.08→0.15 让 Fair "更贵"；winnerSignal 微调进带 |
| 第五轮 (Pass 15) | 37 | 15 | 10 | 12 | 低位 trust 反推 0.10→0.20，配合 reviewsTightened 罚降到 -1，Dirty/Rational trust 缓慢回升 |

**Fair Week 12 现在五个核心指标进入 matrix 目标带 ✓**：trust 66.6（48-68）、
payoutLiability 78.2（58-82）、cash 38.1（25-52）、passRate 16.6（16-28）、
winnerVisibility 40.8（35-60）。剩 flow 80（HIGH 2 点）+ regHeat 25（LOW 9 点）。

**Rational Week 12** flow 23.6 接近红线（25），cash 40 ✓，regHeat 45 ✓，
complaintEcho 48 LOW 7 点。

**Dirty Week 12** cash ✓ flow ✓ passRate ✓ complaint ✓；trust 7.5 / regHeat 88 /
payoutLiability 19 是"极端 Dirty"的真实代价（matrix "极端时 trust_collapse_preview" 允许）。

### 分路线汇总

| 路线 | Out-of-band | 诊断 | 主要偏差 |
|---|---|---|---|
| Dirty Growth | 18 | `trust_collapse_preview` | Trust/Cash 在 Week 9-12 偏低；regHeat Week 12 仍顶 99 |
| Pseudo Fair | 19 | `credibility_is_expensive` ✓ | Cash Week 1-9 偏高；WinnerVis/Trust 略超带 |
| Rational Tightening | 13 | `trust_collapse_preview` | Flow Week 9-12 持续跌破下限；Trust 跌得比目标深 |

### 已落实的校准手段

1. **系数降敏**：toneBias 对 trust/flow 的影响系数减半，complaintEcho →
   trust 的放大系数从 0.12 降到 0.08，regHeat → trust 从 0.04 降到 0.025
2. **软饱和（softenDelta）**：在 resources.trust / flow / regulatoryHeat /
   payoutLiability 以及 winnerVisibility 的更新处套用，使接近 0/100 时
   delta 线性衰减。softness=35-40。
3. **Event 软 clamp（softenEventDelta）**：trust / flow / regHeat /
   payoutLiability / winnerVisibility / complaintEcho / skilledCluster 的
   event delta 在距边界 15 点内线性衰减，中段保持原冲击。Cash 和 promoDebt
   不软化，保留"你选了就付全价"的反馈感。
4. **均值回归（mean-reversion）**：trust、flow、regHeat、payoutLiability
   都加入回归力，独立于 softenDelta 之外应用，避免 footroom=0 时回归也归零。
   非对称阈值保留了路线差异：
   - trust: <35 强回归（0.10）、>35 中回归（0.06）
   - flow: <40 强回归（0.18）、>90 强回归（0.15）、中段弱（0.035）
   - regHeat: >80 强冷却（0.11）、55-80 中冷却（0.055）、<55 弱冷却（0.02）
   - payoutLiability: >60 write-down（0.05），<60 不回归
5. **打断反馈环**：
   - `supportCost * 0.25` 在 newComplaints 里降到 `* 0.14`（supportCost
     本身含 complaintEcho，原公式是闭环）
   - `winnerVisibility` 衰减从 0.78 加快到 0.66，新信号系数降低（successfulPayouts
     从 1.8 → 0.6, trust>50 从 0.06 → 0.03, splitBias>0 从 2.0 → 1.0）
6. **孤儿引用清理**：scenario.seed 里的 `kol_wants_exclusivity` weight mod
   删除（post-v0 事件，v0 没有实装）

### 校准护栏（CI 守护）

`src/sim/calibration.test.ts` 守护下面 5 条结构性属性，任何让这些断言失败的
formula 改动都会卡测试：

1. 三条路线至少产出 2 种不同诊断
2. 所有路线 Week 12 cash > 0（无全军覆没）
3. 任何资源不能连续 6 周以上贴 0/100 边界
4. Week 6 路线差异化：Fair trust 最高、Rational passRate 最低、Dirty cash 领先（含容差）
5. Out-of-band 指标 ≤ 42（当前 37）

### 新增机制（Pass 4-15 引入）

| 机制 | 位置 | 作用 |
|---|---|---|
| `softenEventDelta` | clamp.ts | event 效应在 0/100 边界 15 点内才软化，中段全力冲击 |
| `temptationDamper` | formula.ts | Week 1-3 对 tone-driven 伤害 ×0.55，让 Cash↑ Flow↑ "强开局"成立 |
| 非对称 trust reversion | formula.ts | <35 反推 0.20，>=35 反推 0.06，Dirty/Rational 慢回升不影响 Fair |
| 三层 regHeat reversion | formula.ts | >78 强冷（0.30）/60-78 中冷（0.10）/<60 弱拉（0.03-0.04） |
| Flow 三段反推 | formula.ts | <50 强暖（0.18）/>90 强冷（0.15）/中段弱（0.04） |
| payoutLiability write-down | formula.ts | >60 才触发 0.05 反推，模拟"高负债自然消化" |
| splitMultiplier 加敏 | formula.ts | 系数 0.08→0.15，让 Fair 高 split 真"更贵" |
| reviewsTightened 减罚 | formula.ts | trust 罚 -3→-1，避免 Dirty trust 持续被打到 0 |

### 未解决的偏差与原因假设

#### Dirty Growth Trust ≈ 4（目标 18-36）

- event 连环直接伤害：launch_promo (-4)、push_back_hard (-6)、
  tighten_reviews (-5)、shift_flexible (-5)、shift_attention (-4) + 延迟
- reviewsTightened 从 Week 8 开始每周 -3
- 公式 softenDelta 和回归力把公式部分刹住，event softenEventDelta 也减弱了
  边界附近的事件冲击。但 5 个 trust-negative 选项在一局内累计仍 > 软化能
  抵消的范围
- **本质**：scripted Dirty Growth 选了"最脏"的所有选项，trust → 0 是这个
  极端 archetype 的真实代价。matrix 也明确允许"极端时 trust_collapse_preview"
- **下一轮候选**：让 scripted Dirty 在 feels_rigged_forum_post 改选
  ease_one_rule_slightly（仍是 dirty 但少一刀），或接受 matrix 区间是
  "中位 dirty 玩家" 而非 "极端 dirty"

#### Pseudo Fair Flow 和 Trust 仍略高（Week 12 flow=79、trust=72）

- Fair 高 split + 高 drawdown → 正反馈大
- 软饱和 + 高位回归能拉到边界外一点点
- **下一轮候选**：拉强高位回归系数，或让 winnerVisibility 衰减再快一拍

#### Rational Tightening Flow Week 12 = 19（目标 25-50）

- tone=2 + fee=4 + 低通过率 → flowDelta 持续 ~-8/周
- 即使 <30 强回归（0.22）也只能慢慢拉回
- **下一轮候选**：减弱 feeBias 对 flow 的影响（当前 *2），或调整 scripted
  Rational 的 fee=4 → fee=3

## 可操作的下一步

### 立刻可做

1. 把 `npm run tune` 纳入 CI，回归 ≥ 5 个指标时卡流程
2. 在 `smokeRun` 的断言里加 "diagnosis 差异化 ≥ 2" 的硬性检查（目前已隐式
   满足）
3. 给 simulation-formula-v0.md 里的系数块加 `// updated 2026-04-24 —
   see calibration log` 注释，避免下一个读文档的工程师按原数值重新实装

### 需要设计决策

1. **matrix 区间是不是过于理想？** 当前跑到的数值方向正确但幅度过大（Dirty
   更狠、Fair 更贵、Rational 更冷）。可以考虑：
   - 收紧 scripted 路线（让它们不那么极端），或
   - 放宽 matrix 目标带（反映实际可达范围）
2. **event 效应要不要软化？** 目前 event delta 走 applyEffects 直接 clamp。
   好处是玩家反馈更"脆"，坏处是容易把资源打到 0/100 并卡住
3. **passRate 下限 3 是不是太高？** Rational 从 Week 6 就顶着 3，失去下行
   空间。可以考虑下限降到 2 或 1，让"把规则拧到极限"有真实可见度

## 参照命令

```bash
npm run tune      # 生成 route × checkpoint × band 的差异报表
npm run verify    # 默认 run 的 12 周 trace JSON
npm run smoke     # 三条 scripted route 断言
npm test          # 单元测试
```

## 一句话总结

15 轮校准把 out-of-band 从 59 砍到 37（-37%）。Fair 已经五项进带（cash /
payoutLiability / trust / passRate / winnerVis），Rational 已贴近 matrix 红线。
Dirty 的 trust 极低与 regHeat 极高是"极端 dirty"的真实戏剧代价（matrix 接受）。
**剩下的差距大多是 matrix 区间偏理想 + scripted 路线选择偏极端的复合产物**，
建议先进 playtest，让玩家反应判断这些数值是 bug 还是 feature。
