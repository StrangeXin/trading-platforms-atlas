# Contributing / 贡献指南

This atlas is a living research project. Corrections, source additions, and new chapters are welcome — especially from practitioners with direct industry experience.

本 atlas 是一个持续更新的研究项目。欢迎提交修正、补充来源、新增章节 —— 尤其欢迎业内从业者的第一手资料。

---

## What's welcome / 欢迎的贡献

**✅ Good PRs / 好的 PR**

- Factual corrections with a verifiable source (URL + date)
- New platform briefs following the existing template (see `02-platforms/` for examples)
- Source URLs for claims currently uncited
- Translations: if you see an English chapter that's better-phrased than its Chinese counterpart (or vice versa), harmonize
- Typos, dead links, broken markdown
- Additions to `06-research-notes/raw-sources.md` with full citation format

**✅ 推荐提交**

- **事实修正** + 可验证来源（URL + 日期）
- **新平台档案**，按现有模板（参考 `02-platforms/` 已有文件）
- **为已有断言补充来源 URL**
- **翻译同步**：发现 en/ 和 zh/ 对应章节不一致时，补齐
- **错别字、死链、markdown 格式问题**
- **新引用**加到 `06-research-notes/raw-sources.md` 按完整格式

---

## What's not welcome / 不欢迎的贡献

**❌ Bad PRs / 不好的 PR**

- Unverified claims ("I heard that..." without a source)
- Promotional content for specific brokers / prop firms / platforms
- Adding disclaimers, hedging language, or "may be incorrect" markers — either verify and write directly, or remove the claim entirely
- Sources from AI-generated articles posing as reporting (we test-fetched many and rejected them)
- Personal opinion pieces without data backing
- PRs that touch only one language when the change is substantive — keep zh/ and en/ in sync

**❌ 不欢迎**

- **未经验证的断言**（"我听说..." 没有来源）
- **对特定 broker / Prop Firm / 平台的促销性内容**
- 加"免责声明"、"可能不准"等模糊语言 —— 要么核实后直接写，要么整段删掉
- AI 生成但伪装成真实报道的来源（已经过滤掉很多）
- 没有数据支撑的个人观点
- 只改一种语言的实质性修改 —— 必须 zh/ + en/ 同步

---

## Format standards / 格式标准

**Every citation must include**:

- A reachable URL (we test-fetch before accepting; 403 from paywalled-but-real sources like WSJ / Reuters is OK, 404 is not)
- The publication date when available
- The publisher (newspaper / blog / regulator / company)
- For quotes: exact wording, in quotes, with URL

**每条引用必须包含**：

- **可打开的 URL**（我们会 WebFetch 测试；WSJ / Reuters 等付费墙 403 可以，404 不行）
- 发布日期（如果可追溯）
- 发布方（媒体 / 博客 / 监管机构 / 公司）
- **引文**：精确原文，加引号，附 URL

**Prose style**:

- Punchy, technical, opinionated (not tabloid, not academic)
- No flattery or hedging ("arguably", "some say", "it is often noted")
- State facts; let readers draw conclusions
- Data with dates: `FTMO had $329M revenue in 2024` not `FTMO generates significant revenue`

**行文风格**：

- 简洁、技术、有观点（不要小报风、不要论文风）
- 不拍马屁、不含糊（避免"可以说"、"有人认为"、"通常而言"）
- **摆事实**，让读者自己下结论
- **带日期的数据**：写 `FTMO 2024 营收 $329M`，不写 `FTMO 营收可观`

---

## How to submit / 怎么提交

1. Fork the repo
2. Create a branch: `fix/<topic>` for corrections, `add/<topic>` for new content
3. Make the change in both `en/` and `zh/` if the change is substantive
4. Test fetch any URLs you add — dead URLs will block the PR
5. Open a PR with a short description: what you changed, why, and the source

1. Fork 仓库
2. 建分支：修正用 `fix/<主题>`，新增用 `add/<主题>`
3. 实质改动要同时改 `en/` 和 `zh/`
4. 新增 URL 必须自己实测（我们会再测一次；死链会直接 reject）
5. 开 PR，写清楚：改了什么、为什么、来源

---

## Reporting errors / 报告错误

Open an issue with:

- File path and line number
- What's wrong
- What it should be (with source)

开 issue，包含：

- 文件路径 + 行号
- 错在哪
- 应该是什么（附来源）

---

## License / 授权

By contributing, you agree your contribution is licensed under CC BY 4.0 (see `LICENSE`).

提交贡献即视为同意以 CC BY 4.0 授权（见 `LICENSE`）。
