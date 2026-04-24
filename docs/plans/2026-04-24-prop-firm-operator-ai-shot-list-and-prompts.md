# Prop Firm Operator - AI Shot List and Prompt Library

Date: 2026-04-24
Status: exploration

## Purpose

This document turns the AI design pack into a practical generation queue.

It answers:

- which screens need which AI assets
- which assets are mandatory for v0
- what prompt should be used for each asset batch
- what order to generate in

Use this together with:

- `docs/plans/2026-04-24-prop-firm-operator-ai-design-pack-v0.md`
- `docs/plans/2026-04-24-prop-firm-operator-visual-interaction.md`
- `docs/plans/2026-04-24-prop-firm-operator-event-deck.md`
- `docs/plans/2026-04-24-prop-firm-operator-narrative-tone-pack.md`

## Production Rule

Generate by screen priority, not by artistic whim.

The order is:

1. `Control Room`
2. `Week Digest`
3. `Event Modal`
4. `Buy Page`
5. `Unlock Page`

If the first three screens feel authored, the prototype already feels real.

## Screen Shot List

### 1. `Control Room`

#### Goal

Make the player feel they are sitting in a credible late-night operations desk.

#### Required Assets

1. master background plate
2. `HyperGrowth Capital` brand strip
3. resource/risk glyph pack
4. subtle surface decor pack
5. one ambient side-panel texture

#### Optional Assets

- secondary heat map overlay
- low-contrast desk reflection plate

#### Notes

This screen should feel expensive, sober, and calm under pressure.

Do not put figurative characters here.

### 2. `Week Digest`

#### Goal

Make the weekly recap feel like a reality report, not a spreadsheet.

#### Required Assets

1. digest background plate
2. user complaint card pack
3. KOL/social proof card pack
4. internal memo strip
5. processor / regulator notice strip

#### Optional Assets

- funnel texture panel
- stamped archive label set

#### Notes

This screen can hold more narrative texture than the Control Room.

### 3. `Event Modal`

#### Goal

Make each event feel like a pressure test with a distinct visual identity.

#### Required Assets

1. event frame system
2. 6 event artworks
3. option direction chip set

#### Notes

The event art should feel editorial and procedural, not action-game dramatic.

### 4. `Buy Page`

#### Goal

Make Founder Access feel premium and slightly dangerous, not cheap or scammy.

#### Required Assets

1. founder access brand hero strip
2. payment method panel backgrounds
3. proof-of-world trust strip
4. founder access badge

#### Optional Assets

- campaign poster fragments
- user quote cards

### 5. `Unlock Page`

#### Goal

Make activation feel official and controlled.

#### Required Assets

1. restrained unlock background
2. access granted badge / seal
3. license motif strip

## Mandatory v0 Generation Batch

Generate these first before anything else.

### Batch A: Environment

1. control room master background
2. week digest background
3. buy page background
4. unlock page background

### Batch B: Brand

1. `HyperGrowth Capital` header strip
2. founder access badge
3. access granted seal

### Batch C: Event

1. weekend promo temptation
2. feels rigged forum post
3. viral winner thread
4. silent winners cluster
5. payment processor warning
6. first regulator letter

### Batch D: Narrative Inserts

1. user complaint cards
2. KOL promo cards
3. internal operations memo strips
4. payment warning strips
5. regulator note strips

### Batch E: UI Support

1. risk glyph pack
2. surface decor pack
3. event modal frame
4. direction chip motif

## Batch Order

### Round 1

Generate:

- 3 control room backgrounds
- 3 brand strips
- 2 digest plates

Choose one style family and discard the rest.

### Round 2

Generate:

- 6 event artworks
- 2 complaint card packs
- 2 KOL card packs
- 1 internal memo pack

### Round 3

Generate:

- buy page assets
- unlock page assets
- glyph pack
- decor pack

### Round 4

Normalize:

- crop
- grade
- contrast
- grain
- accent color levels

## Prompt Library

All prompts assume:

- serious management simulation
- financial operations room aesthetic
- polished but contaminated undertone
- no cyberpunk
- no generic fintech marketing

## Environment Prompts

### 1. Control Room Background

```text
wide environment plate for a browser-based management simulation interface, credible financial operations room at midnight,
smoked glass surfaces, graphite metal panels, dim monitor reflections, oxidized teal-black shadows, restrained green signal traces,
subtle amber heat bloom spreading in one corner, empty room, no characters, no readable UI text,
clean central composition with open space for overlay cards and right-side controls,
serious, cinematic, premium, tense, quietly contaminated,
avoid cyberpunk neon, meme crypto aesthetics, exaggerated holograms, purple gradients, cluttered futuristic HUD
```

### 2. Week Digest Background

```text
background plate for a weekly platform digest in a management simulation, editorial operations report mood,
dark graphite paper, smoked steel panels, subtle dossier texture, archive-like framing, faint amber heat stains,
calm, expensive, procedural, slightly unsettling, designed for heavy text overlay,
clean composition with left and right zones for metric cards and narrative inserts,
avoid terminal screens, loud charts, startup landing page style, cartoon business illustration
```

### 3. Buy Page Background

```text
premium purchase page background for Founder Access to a fictional prop challenge platform simulation,
financial brand confidence with a quiet predatory undertone, dark graphite field, muted gold and controlled green accents,
subtle desk reflection, minimal abstract line system, high-end but not luxury, not obviously a payment page template,
space reserved for pricing and payment method cards,
avoid bright exchange visuals, glossy startup gradients, cartoon crypto motifs, purple tech glow
```

### 4. Unlock Page Background

```text
official activation screen background for a fictional platform access system,
dark restrained institutional mood, smoked metal, clean approval surface, low-contrast line work, muted gold and pale blue accents,
precise, calm, validated, slightly severe, designed for a license key form overlay,
avoid celebratory gamer unlock graphics, neon effects, gaudy success icons, generic SaaS empty states
```

## Brand Prompts

### 5. HyperGrowth Capital Brand Strip

```text
brand strip for HyperGrowth Capital, fictional prop challenge platform,
credible financial platform identity with subtle aggression, condensed typography zone, graphite and smoked steel background,
controlled green accent line, muted gold secondary accent, premium institutional feel with faint moral contamination,
minimal, sharp, reusable for web app header and buy page hero,
avoid cartoon mascots, wolf imagery, startup gradients, luxury marble, flashy exchange branding
```

### 6. Founder Access Badge

```text
founder access badge for an early-access management simulation about running a prop challenge platform,
dark institutional badge, muted gold, approval-seal precision, premium but not luxurious, slightly severe and exclusive,
clean edges, compact shape, suitable for web use over dark surfaces,
avoid gamer badge style, NFT look, crypto coin iconography, shiny chrome excess
```

### 7. Access Granted Seal

```text
official access granted seal for a fictional internal platform system,
restrained approval motif, dark graphite base, pale blue and muted gold highlights, subtle procedural authority,
calm, exact, secure, not celebratory, suitable for unlock page and email assets,
avoid loud success confetti, bright gradients, gaming UI tropes, cartoon security shield icons
```

## Event Prompts

### 8. Weekend Promo Temptation

```text
event artwork for weekend promo temptation in a management simulation about operating a fast-growing prop challenge platform,
marketing urgency colliding with low-quality traffic risk, promo banner fragments, discounted challenge messaging, late-night operations tension,
graphite desk, muted green conversion glow, subtle amber contamination, believable financial marketing materials,
editorial realism, framed for modal use, no characters required,
avoid meme ad aesthetics, loud crypto posters, satire, cyberpunk screens
```

### 9. Feels Rigged Forum Post

```text
event artwork for a feels rigged forum post in a prop challenge platform simulation,
credible trader forum fragments, suspicious highlighted phrases, thread replies building pressure, muted avatars, dark interface surfaces,
emotional tone: frustration, doubt, obsession, not rage-bait,
premium product design realism, framed for modal card,
avoid fake meme screenshots, exaggerated outrage faces, loud social media colors
```

### 10. Viral Winner Thread

```text
event artwork for a viral winner thread in a management simulation about prop challenge platform growth,
successful payout proof becoming social fuel, winner story fragments, screenshot collage feeling, disciplined optimism with hidden cost,
dark UI fragments, controlled green trust glow, muted gold signal accents,
credible, seductive, slightly dangerous, editorial realism,
avoid cheesy success montage, influencer caricature, bright exchange branding
```

### 11. Silent Winners Cluster

```text
event artwork for silent winners cluster in a prop platform operations simulation,
risk team discovering a small group of highly capable profitable accounts, concentrated performance implied through abstract dossier and account markers,
quiet, procedural, tense, dark steel and smoked paper surfaces, amber and pale blue accents,
subtle rather than dramatic, modal-safe composition,
avoid hacker aesthetics, spy movie clichés, flashy red alert graphics
```

### 12. Payment Processor Warning

```text
event artwork for payment processor warning in a management simulation about a prop challenge platform,
internal compliance pressure, processor notice overlay, payout friction implied, procedural threat rather than cinematic panic,
dark steel, pale warning paper, restrained red and amber accents, refined editorial realism,
designed for modal display with safe margins,
avoid flashing alarms, comic-book crisis, generic fintech hero images
```

### 13. First Regulator Letter

```text
event artwork for first regulator letter in a management simulation about platform operations,
cold institutional inquiry, legal document fragment, official seal impression, severe spacing, dark archive desk environment,
minimal, disciplined, threatening through restraint, pale paper against graphite environment, faint red contamination,
avoid courtroom drama clichés, patriotic imagery, loud warning sirens
```

## Narrative Insert Prompts

### 14. User Complaint Card Pack

```text
set of synthetic user complaint cards for a prop challenge platform simulation,
credible retail trader frustration, dark community UI fragments, compact layouts, muted avatars, suspicious highlighted phrases,
tone mix: hope, doubt, irritation, obsession, not satire,
designed as small narrative inserts for digest and feed,
avoid meme screenshots, exaggerated crypto slang, cartoon forum aesthetics
```

### 15. KOL Promo Card Pack

```text
set of KOL promo story cards for a fictional prop challenge platform,
seductive financial opportunity framing, selective winner proof, clean high-engagement social formatting, muted but persuasive,
credible creator-finance aesthetic, dark surfaces with controlled green and gold highlights,
designed for small insert cards, not full-screen ads,
avoid influencer parody, flashy sports car crypto tropes, exaggerated clickbait
```

### 16. Internal Memo Pack

```text
set of internal operations memo strips for a platform management simulation,
cool procedural tone, short risk notes, support load warnings, payout concentration alerts,
institutional formatting fragments, smoked paper and steel, pale text blocks, amber annotations,
minimal and believable, for digest and diagnosis evidence,
avoid spy dossier clichés, overly distressed textures, dramatic classified stamps
```

### 17. Payment / Regulator Notice Pack

```text
set of payment processor and regulator notice strips for a fictional financial platform simulation,
polite but cold institutional warning language implied, dark archive aesthetic, pale notice paper, restrained red and amber edge accents,
compact, readable, procedural, unsettling through tone and layout,
avoid giant warning triangles, comic alarm motifs, exaggerated urgency graphics
```

## UI Support Prompts

### 18. Risk Glyph Pack

```text
icon set for a management simulation about running a prop challenge platform,
glyphs for complaint echo, payout liability, regulatory heat, skilled cluster, processor patience, trust decay,
sharp, compact, minimal, industrial, dark UI compatible, subtle contamination accent,
vector-like clarity, suitable for resource cards and risk panels,
avoid crypto coin icons, generic dashboard pictograms, soft rounded consumer app style
```

### 19. Surface Decor Pack

```text
surface decor pack for a dark financial operations interface,
subtle grid fragments, stamped labels, diagonal separators, quiet audit marks, dossier corners, heat-trace lines,
refined, low contrast, premium, usable behind cards and headers,
avoid noisy grunge, hacker glyphs, comic-book tech borders, heavy neon strokes
```

### 20. Event Frame System

```text
modal frame system for event cards in a serious management simulation,
dark polished panel surfaces, smoked glass edge, subtle metal trim, muted gold and amber logic accents, clean content hierarchy,
high-end product design with tension, built for one hero image plus title plus three decision options,
avoid game loot card style, overdesigned fantasy frames, bright gradient panels
```

## Suggested First Generation Run

If time is limited, run these 8 prompts first:

1. control room background
2. digest background
3. HyperGrowth Capital brand strip
4. weekend promo temptation
5. feels rigged forum post
6. payment processor warning
7. user complaint card pack
8. risk glyph pack

That set is enough to test whether the style is working.

## Review Checklist

Reject any generated asset that:

- looks like cyberpunk
- looks like generic SaaS hero art
- looks like meme crypto marketing
- is too glossy or too luxurious
- puts fake unreadable UI everywhere
- overuses purple or neon
- competes with text readability

Approve assets that:

- feel credible before dramatic
- look sharp on dark surfaces
- preserve narrative tension
- support UI instead of dominating it
- keep the machine attractive and slightly rotten

## Follow-Up

For naming conventions, folder structure, export rules, and QA handoff, see:

- `docs/plans/2026-04-24-prop-firm-operator-asset-production-system.md`
