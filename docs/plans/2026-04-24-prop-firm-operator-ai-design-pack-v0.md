# Prop Firm Operator - AI Design Pack v0

Date: 2026-04-24
Status: v0-assets

## Core Decision

The prototype should use AI to generate:

- atmosphere boards
- event art
- synthetic UI inserts
- brand fragments
- narrative artifacts
- decorative textures and iconography

But it should not use AI to generate the final interface wholesale.

The product still needs a deliberate UI system.

The right workflow is:

**AI generates visual assets and narrative surfaces. Human-designed UI arranges them into a credible control room.**

## Chosen Visual Direction

Use the restrained direction:

**credible operations room first, contaminated machine second**

The first impression should be:

- serious
- polished
- operational
- believable

The second impression should be:

- overheated
- morally compromised
- quietly dirty

This means the design language should avoid:

- flashy cyberpunk
- meme trading aesthetics
- cartoon villain energy
- overexposed neon finance visuals

## What AI Is For

AI should generate the parts that benefit from variation, mood, and volume.

### Best Uses

- control-room background plates
- abstract heat maps
- event splash art
- promo campaign posters
- fake forum screenshots
- influencer story cards
- fake compliance letters
- payment warning notices
- internal email snapshots
- icon sets and warning seals

### Bad Uses

- entire app screens
- fully functional dashboards
- precise data visualizations
- core layout decisions
- typography system decisions

If AI generates the whole screen, the result will likely look inconsistent, hard to implement, and too generic.

## Memory Image

The unforgettable image for this product should be:

**a polished midnight control desk where green revenue pulses and amber heat quietly spreads through the same machine**

That image should guide every generated asset.

## Asset Families

Build the first pack around 6 asset families.

### 1. Atmosphere Plates

Purpose:

- create the environmental skin behind UI

Examples:

- blurred control room wall
- dark composite panel texture
- reflective desk surface
- low-contrast heat bloom
- glass terminal grain

Use:

- page backgrounds
- section backdrops
- modal surfaces

### 2. Event Art

Purpose:

- give the 6 core events visual identity

Examples:

- weekend promo temptation
- feels rigged forum post
- viral winner thread
- silent winners cluster
- payment processor warning
- first regulator letter

Use:

- event modal
- digest highlights
- promo posts

### 3. Synthetic Narrative Inserts

Purpose:

- make consequences feel human, not abstract

Examples:

- fake user post card
- KOL thread snippet
- internal risk memo
- support escalation card
- processor notice strip
- regulator note extract

Use:

- narrative feed
- week digest
- diagnosis evidence

### 4. Brand Fragments

Purpose:

- make `HyperGrowth Capital` feel like a real platform

Examples:

- wordmark
- founder access badge
- promotional hero strip
- evaluation challenge banner
- payout approved stamp
- elite trader seal

Use:

- app shell
- buy page
- emails
- unlock page

### 5. Risk Iconography

Purpose:

- make hidden pressure readable at a glance

Examples:

- complaint echo glyph
- payout liability marker
- regulator heat badge
- skilled cluster symbol
- processor patience indicator

Use:

- resource cards
- risk card
- debug panel

### 6. Surface Decor

Purpose:

- keep the interface from feeling flat

Examples:

- subtle grid overlays
- warning tape fragments
- stamped labels
- diagonal separators
- dossier corners
- audit marks

Use:

- headers
- cards
- digest framing

## Generation Principles

Every prompt should preserve these constraints:

- dark but not pure black
- premium but not luxury
- technical but not hacker
- financial but not terminal
- realistic but slightly contaminated
- sharp, cinematic, restrained

Also preserve these anti-rules:

- no neon purple
- no anime style
- no cartoon style
- no cheesy crypto poster look
- no fake 3D dashboard mockup
- no overloaded futuristic HUD

## Base Palette

Use the same color language in prompts and final UI.

### Foundation

- graphite
- cold charcoal
- oxidized teal-black
- smoked steel
- dirty glass gray

### Positive Signals

- controlled green
- muted gold
- trust blue

### Structural Risk

- amber heat
- contaminated magenta
- restrained red

The magenta should be used only as a corruption accent, not as the main theme.

## Typography Direction

AI images that contain text should be treated as reference or texture, not as final readable UI copy.

The actual product should use a real type system:

- condensed display face for section labels
- stable sans for body text
- tabular numeric face for metrics

AI-generated text inside posters, screenshots, or notices can be partially illegible if the mood is right.

## Asset List For v0

Generate these 12 assets first.

1. control room master background
2. week digest background plate
3. event card frame system
4. `weekend_promo_temptation` art
5. `feels_rigged_forum_post` art
6. `viral_winner_thread` art
7. `silent_winners_cluster` art
8. `payment_processor_warning` art
9. `first_regulator_letter` art
10. `HyperGrowth Capital` wordmark strip
11. social proof / complaint card pack
12. risk glyph pack

This is enough to make the prototype feel authored.

## Prompt Structure

Each prompt should include 5 parts:

1. scene
2. mood
3. material language
4. composition constraints
5. anti-style rules

Template:

```text
[asset type], for a management simulation about operating a fast-growing prop challenge platform,
serious and credible financial operations room aesthetic,
[specific scene description],
mood: polished, tense, late-night, quietly contaminated,
materials: smoked glass, graphite metal, dim monitor glow, amber heat accents, muted green signal lines,
composition: clean hierarchy, negative space for UI overlay, cinematic but restrained, high-end product design,
avoid: cyberpunk neon, meme finance, cartoon satire, cluttered HUD, purple gradient, generic SaaS illustration
```

## Example Prompts

### A. Control Room Master Background

```text
wide background plate for a browser-based management simulation control room, designed for UI overlay,
credible financial operations desk at midnight, empty but active, subtle monitor reflections, smoked glass panels,
graphite and oxidized teal-black palette, thin amber heat bloom in one corner, restrained green signal traces,
serious, elegant, tense, cinematic, no visible characters, no readable UI text,
composition leaves central and right-side breathing room for cards and controls,
avoid neon cyberpunk, meme crypto aesthetic, exaggerated holograms, cartoon style, purple gradients
```

### B. Payment Processor Warning Event

```text
event artwork for a payment processor warning in a management simulation about a prop challenge platform,
close cropped internal operations visual, muted compliance alert tone, processor notice overlay, transaction friction implied,
dark steel surfaces, pale warning paper, amber and restrained red accents, premium editorial realism,
feels procedural and threatening rather than dramatic,
composition framed for a modal card with safe margins,
avoid flashy alarms, hacker visuals, comic-book crisis style, generic fintech hero art
```

### C. Fake Forum Complaint Card Pack

```text
set of synthetic forum complaint post cards for a prop challenge platform simulation,
credible trader community aesthetic, mixed tones of frustration, suspicion, and reluctant praise,
dark forum UI fragments, muted avatars, compact post modules, visual emphasis on highlighted phrases and reply count,
refined product mockup quality, not a full screen, designed as narrative inserts,
avoid satire, fake meme screenshots, loud colors, exaggerated crypto slang, sloppy typography
```

### D. HyperGrowth Capital Brand Strip

```text
brand strip for HyperGrowth Capital, fictional prop challenge platform,
premium but slightly aggressive financial brand identity, dark graphite background, disciplined typography zone,
subtle gold and muted green accents, polished institutional confidence with a faint predatory undertone,
minimal logo area plus abstract line motif, designed for web header and purchase page reuse,
avoid startup gradient style, cartoon wolf branding, luxury marble look, bright exchange aesthetic
```

## How These Assets Map To Screens

### `Control Room`

Needs:

- master background
- risk glyphs
- brand strip
- subtle surface decor

### `Week Digest`

Needs:

- digest background plate
- social proof / complaint cards
- processor note inserts
- support escalation inserts

### `Event Modal`

Needs:

- one artwork per event
- event card frame
- choice chips

### `Buy Page`

Needs:

- brand strip
- founder access badge
- payment method panels
- trust strip using AI-generated narrative inserts

### `Unlock Page`

Needs:

- restrained branded backdrop
- approved stamp / license motif

## Practical Production Workflow

### Phase 1: Direction Lock

Generate:

- 3 master mood boards
- 3 background options
- 3 brand strip options

Choose one direction only.

### Phase 2: System Assets

Generate:

- backgrounds
- event art
- glyphs
- narrative card pack

Then normalize:

- crop ratios
- color grading
- contrast
- noise level

### Phase 3: UI Integration

After assets are chosen:

- define tokens from the chosen palette
- build card surfaces around those assets
- keep AI art behind content, never in the way of readability

## Rules For Readability

- do not place dense text over detailed AI art
- do not rely on AI-rendered typography for critical information
- keep contrast stable in all states
- use generated assets as support, not primary information carriers
- one strong image per surface is enough

## Minimum Deliverable

Before implementation starts, the design team should have:

- 1 approved mood board
- 1 approved brand strip
- 2 approved environment plates
- 6 event artworks
- 1 narrative insert pack
- 1 icon/glyph pack
- 1 palette extraction sheet

## Recommendation

The right way to use AI on this project is not:

`generate a whole screen and copy it`

The right way is:

**generate a controlled set of assets that make a sober UI feel authored, expensive, and quietly rotten**

## Follow-Up

For the production queue and screen-by-screen prompt set, see:

- `docs/plans/2026-04-24-prop-firm-operator-ai-shot-list-and-prompts.md`
