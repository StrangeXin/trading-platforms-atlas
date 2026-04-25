# Prop Firm Operator - Asset Production System

Date: 2026-04-24
Status: v0-assets

## Purpose

This document defines how AI-generated assets should be stored, named, reviewed, and handed off.

It exists to prevent three common failures:

1. good images getting lost
2. inconsistent crops and ratios
3. implementation slowing down because assets are not production-ready

Use this together with:

- `docs/plans/2026-04-24-prop-firm-operator-ai-design-pack-v0.md`
- `docs/plans/2026-04-24-prop-firm-operator-ai-shot-list-and-prompts.md`

## Core Rule

Every generated asset should have:

- one clear purpose
- one stable filename
- one canonical crop
- one review status

Do not keep a folder full of unnamed variations and hope the UI phase sorts it out later.

## Recommended Directory Structure

If assets live inside the future prototype project:

```text
prototype/prop-firm-operator/
  assets/
    ai/
      moodboards/
      environments/
      events/
      narrative/
      brand/
      glyphs/
      decor/
      exports/
    ui/
      optimized/
      thumbnails/
      masks/
```

If assets are still in planning phase, use:

```text
docs/
  design-assets/
    prop-firm-operator/
      ai/
        moodboards/
        environments/
        events/
        narrative/
        brand/
        glyphs/
        decor/
        exports/
```

## Folder Meanings

### `moodboards/`

Use for:

- style exploration only
- non-final references
- direction lock images

Do not import directly into product UI from here.

### `environments/`

Use for:

- control room backgrounds
- digest plates
- buy page backgrounds
- unlock page backgrounds

### `events/`

Use for:

- event key art
- modal visuals
- event detail variants

### `narrative/`

Use for:

- user complaint cards
- KOL cards
- internal memo strips
- processor notice strips
- regulator note strips

### `brand/`

Use for:

- wordmarks
- badges
- seals
- campaign strips

### `glyphs/`

Use for:

- icons
- symbols
- warning marks
- resource glyphs

### `decor/`

Use for:

- overlays
- audit marks
- borders
- divider motifs
- stamped labels

### `exports/`

Use for:

- approved and cropped delivery files
- web-ready versions
- final picked variants only

## Naming Convention

Use this pattern:

```text
pfo_<family>_<asset-name>_<variant>_<ratio>_vNN.ext
```

### Meaning

- `pfo`: project prefix
- `family`: environment, event, narrative, brand, glyph, decor
- `asset-name`: stable descriptive slug
- `variant`: a, b, c or descriptive short tag
- `ratio`: landscape, portrait, square, card, strip
- `vNN`: version number

### Examples

```text
pfo_environment_control-room-master_a_landscape_v01.png
pfo_environment_digest-plate_b_landscape_v02.png
pfo_event_payment-processor-warning_a_card_v01.png
pfo_event_viral-winner-thread_b_card_v03.png
pfo_narrative_user-complaint-pack_a_card_v01.png
pfo_brand_hypergrowth-strip_a_strip_v01.png
pfo_brand_founder-access-badge_b_square_v02.png
pfo_glyph_risk-pack_a_square_v01.svg
pfo_decor_audit-mark-pack_a_square_v01.png
```

## Asset Families and Slugs

Use these stable slugs.

### Environment

- `control-room-master`
- `digest-plate`
- `buy-page-backdrop`
- `unlock-page-backdrop`
- `side-panel-texture`

### Event

- `weekend-promo-temptation`
- `feels-rigged-forum-post`
- `viral-winner-thread`
- `silent-winners-cluster`
- `payment-processor-warning`
- `first-regulator-letter`

### Narrative

- `user-complaint-pack`
- `kol-promo-pack`
- `internal-memo-pack`
- `payment-warning-pack`
- `regulator-note-pack`

### Brand

- `hypergrowth-strip`
- `founder-access-badge`
- `access-granted-seal`
- `license-motif-strip`

### Glyph

- `risk-pack`
- `resource-pack`
- `warning-pack`

### Decor

- `surface-pack`
- `stamp-pack`
- `divider-pack`

## Ratios

Keep ratios stable across generations.

### `landscape`

Use for:

- page backgrounds
- environment plates

Suggested target:

- `1920x1080`

### `card`

Use for:

- event art
- narrative insert packs

Suggested target:

- `1200x900`

### `strip`

Use for:

- brand headers
- memo strips
- notice strips

Suggested target:

- `1600x480`

### `square`

Use for:

- badges
- seals
- glyph packs

Suggested target:

- `1024x1024`

### `portrait`

Use for:

- optional poster fragments
- buy page campaign art

Suggested target:

- `1024x1536`

## Delivery Formats

### Preferred Working Formats

- `.png` for raster assets
- `.svg` for icon or glyph systems where possible
- `.webp` only after optimization stage

### Keep Both

For each approved asset, keep:

1. original generation output
2. cropped master
3. web-optimized export

## Review Status Tags

Append one internal review marker in your tracking sheet, not in the final filename.

Suggested statuses:

- `exploring`
- `candidate`
- `approved`
- `rejected`
- `exported`

Do not encode status into the filename itself.

## Tracking Sheet Fields

Every generated asset should be tracked with:

- `asset_id`
- `filename`
- `family`
- `screen`
- `prompt_source`
- `model_used`
- `ratio`
- `status`
- `review_notes`
- `approved_by`
- `export_path`

## Prompt Source IDs

Reference prompt origins like this:

- `shotlist-01`
- `shotlist-08`
- `shotlist-14`

If you customize a prompt, log:

- `shotlist-08-custom-a`

This keeps iterations traceable.

## Crop Rules

### Environment Assets

- keep center area calm for UI overlay
- avoid bright hotspots behind text
- preserve right-side empty space for controls when relevant

### Event Assets

- keep title-safe area near top
- avoid detailed faces or text in crop center
- preserve side margins for frame treatment

### Narrative Inserts

- make modules readable at small sizes
- do not let fake micro-text become muddy noise
- preserve strong silhouette and hierarchy

### Brand Assets

- keep logo zone clean
- keep decorative linework secondary
- avoid edge clutter that breaks responsive layout

## Export Rules

When an asset is approved:

1. crop it
2. normalize contrast
3. remove extra borders
4. export a web-ready version
5. place final file in `exports/`

Use this pattern for final exports:

```text
pfo_<family>_<asset-name>_<ratio>_final.ext
```

Examples:

```text
pfo_environment_control-room-master_landscape_final.webp
pfo_event_payment-processor-warning_card_final.webp
pfo_brand_hypergrowth-strip_strip_final.png
```

## First Production Batch Checklist

Before calling the first batch done, confirm:

- all 4 environment assets exist
- all 6 event artworks exist
- at least 3 narrative packs exist
- brand strip is approved
- founder badge is approved
- risk glyph pack is usable
- every approved asset has a final export

## Visual QA Checklist

Reject assets that:

- are too purple
- are too glossy
- feel like crypto exchange ads
- feel like cyberpunk game menus
- feel like generic SaaS illustrations
- break readability
- contain distracting fake UI text

Approve assets that:

- feel credible and expensive
- stay restrained on dark backgrounds
- preserve quiet menace
- support layout without overwhelming it
- look consistent with the chosen family

## Handoff Checklist

Before implementation begins, the asset pack should provide:

- final filename
- preview thumbnail
- target screen
- intended layer position
- ratio
- background removal note if needed

## Recommendation

Treat AI asset generation like a production pipeline, not a moodboard hobby.

If naming, ratios, and exports are stable early, the UI build will move much faster.
