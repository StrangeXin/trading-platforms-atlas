# Prop Firm Operator - Alt Payment Manual Fulfillment Spec

Date: 2026-04-24
Status: phase2-commercial

## Core Decision

Do not use `PayPal`, `Paddle`, or another merchant-of-record checkout in v0.

Instead, use a manual fulfillment pipeline built around:

- `Alipay QR`
- `Bybit Pay`
- `Binance Pay`
- `Feishu webhook` review notifications
- manual approval
- email delivery of license keys

This keeps the first paid validation focused on:

1. collecting real purchase intent
2. avoiding merchant onboarding drag
3. unlocking paid access without building a full billing system

## When This Path Makes Sense

Use this path only for the first small paid cohort.

Good fit:

- `Founder Access` one-time purchase
- early audience is China-first or crypto-native
- team is willing to manually review payments
- target paid user count is still small

Bad fit:

- high-volume consumer launch
- instant self-serve access at scale
- recurring billing
- automated refunds and chargeback handling

## v0 Product Shape

### Paid Offer

`Founder Access`

- one-time purchase
- recommended price shown in `USD` and `CNY`
- unlocks paid web build
- unlocks route export and changelog access

### Payment Channels

Offer three payment methods on `/buy`:

1. `Alipay QR`
2. `Bybit Pay`
3. `Binance Pay`

Each method should have its own panel with:

- amount
- currency
- QR code or payment instructions
- expected confirmation steps
- warning that access is reviewed manually

## Recommended Access Flow

### Buyer Flow

1. User clicks `Get Founder Access`.
2. User chooses one payment method.
3. Page shows QR code or transfer instructions.
4. User completes payment.
5. User lands on `/submit-payment`.
6. User submits proof of payment and email.
7. System stores submission as `pending_review`.
8. System sends `Feishu webhook` notification to reviewer.
9. Reviewer checks payment manually.
10. Reviewer approves or rejects.
11. On approval, system generates a license key.
12. System emails the license key to the buyer.
13. Buyer goes to `/unlock` and activates access.

### Core Promise To User

Do not promise instant unlock.

Promise:

`Manual review usually completed within X hours. License key is sent by email after approval.`

## Frontend Pages

### `/buy`

Purpose:

- explain Founder Access
- let user choose payment method
- set expectation for manual review

Must include:

- one-line value proposition
- price
- three payment method cards
- FAQ:
  - how long review takes
  - what proof to upload
  - refund policy for duplicate payment or failed submission

### `/submit-payment`

Purpose:

- collect enough information to verify payment

Required fields:

- `email`
- `paymentMethod`
- `amount`
- `currency`
- `paidAt`
- `buyerNameOrHandle`
- `proofImage`

Conditional fields:

- `bybitUid`
- `binanceUid`
- `cryptoTxId`
- `alipayOrderId`
- `notes`

Validation rules:

- email required
- screenshot required
- amount required
- payment method required
- at least one channel-specific identifier required when relevant

### `/unlock`

Purpose:

- allow approved buyers to redeem a license key

Fields:

- `licenseKey`
- `email`

## Backoffice Status Model

Use a minimal status machine:

- `draft`
- `pending_review`
- `approved`
- `rejected`
- `fulfilled`

### Meaning

- `draft`: submission started but not sent
- `pending_review`: user submitted and waiting
- `approved`: reviewer confirmed payment
- `rejected`: proof invalid or not matched
- `fulfilled`: email with license key sent successfully

## Data Model

### `payment_submissions`

Suggested fields:

```ts
type PaymentSubmission = {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: "draft" | "pending_review" | "approved" | "rejected" | "fulfilled";
  email: string;
  paymentMethod: "alipay_qr" | "bybit_pay" | "binance_pay";
  amount: string;
  currency: string;
  paidAt: string;
  buyerNameOrHandle?: string;
  bybitUid?: string;
  binanceUid?: string;
  cryptoTxId?: string;
  alipayOrderId?: string;
  notes?: string;
  proofImageUrl: string;
  reviewNotes?: string;
  reviewerId?: string;
  approvedAt?: string;
  rejectedAt?: string;
  licenseKeyId?: string;
  fulfillmentEmailSentAt?: string;
};
```

### `license_keys`

Suggested fields:

```ts
type LicenseKeyRecord = {
  id: string;
  key: string;
  product: "founder_access";
  status: "available" | "assigned" | "redeemed" | "revoked";
  assignedEmail?: string;
  paymentSubmissionId?: string;
  assignedAt?: string;
  redeemedAt?: string;
};
```

## Feishu Webhook Notification Flow

### Goal

Notify you as soon as a buyer submits proof, so review does not depend on checking email manually.

### Trigger 1: New Submission

When a user submits payment proof:

- store submission
- send message to `Feishu webhook`

Recommended message fields:

- payment method
- buyer email
- amount and currency
- paid time
- UID or order id
- proof image link
- admin review link

### Trigger 2: Submission Approved

When reviewer approves:

- send a second `Feishu webhook` message
- confirm that a license key was assigned
- include buyer email and key id

### Trigger 3: Submission Rejected

When reviewer rejects:

- send a rejection notification to `Feishu webhook`
- include reason

### Feishu Message Shape

Minimal plain text is enough for v0.

Preferred richer shape:

- title
- payment method tag
- buyer email
- amount
- review status
- admin link

## Reviewer Console

Do not build a complex admin panel in v0.

A simple internal page is enough:

- list pending submissions
- open screenshot
- read submitted metadata
- mark approve
- mark reject
- add review note
- resend fulfillment email

Suggested routes:

- `/internal/reviews`
- `/internal/reviews/:id`

## Approval Logic By Channel

### `Alipay QR`

Reviewer checks:

- screenshot matches expected amount
- screenshot time is plausible
- submitted `alipayOrderId` or payer note matches
- payment landed in your receiving account

### `Bybit Pay`

Reviewer checks:

- screenshot or transfer proof
- `UID`
- amount and asset
- transfer record in receiving account

### `Binance Pay`

Reviewer checks:

- screenshot or transfer proof
- `UID`
- amount and asset
- transfer record in receiving account

## License Fulfillment

### On Approval

1. claim one unused license key
2. assign it to buyer email
3. mark submission as `approved`
4. send fulfillment email
5. mark submission as `fulfilled` after email succeeds

### Fulfillment Email

Subject example:

`Your Prop Firm Operator Founder Access Key`

Body should include:

- short thank-you line
- license key
- `/unlock` link
- support contact
- reminder that key is for Founder Access

## API Shape

Suggested minimal endpoints:

```text
POST /api/payment-submissions
POST /api/feishu/payment-review
POST /api/internal/reviews/:id/approve
POST /api/internal/reviews/:id/reject
POST /api/license/redeem
POST /api/fulfillment/resend
```

### Notes

- `POST /api/feishu/payment-review` can be internal-only helper logic if preferred.
- Do not expose internal approve and reject endpoints publicly without authentication.

## Asset Management

Store these assets centrally:

- `alipay-qr.png`
- `bybit-pay-qr.png`
- `binance-pay-qr.png`

Also keep:

- display amount per channel
- accepted asset per crypto channel
- reviewer instructions

These can live in a simple config file:

```ts
type PaymentMethodConfig = {
  id: "alipay_qr" | "bybit_pay" | "binance_pay";
  label: string;
  currency: string;
  amount: string;
  qrImageUrl: string;
  instructions: string[];
};
```

## Operational Risks

### Risk 1: Fake screenshots

Mitigation:

- require screenshot plus identifier
- manually confirm receipt in account
- do not approve from screenshot alone

### Risk 2: Slow review causes drop-off

Mitigation:

- show expected review SLA
- use `Feishu webhook`
- keep reviewer checklist short

### Risk 3: Wrong license sent

Mitigation:

- assign keys only through approval action
- log key-to-email mapping
- support resend flow

### Risk 4: Channel amount drift

Mitigation:

- keep fixed displayed prices
- update QR/payment copy in one config file
- log submitted currency and amount separately

## v0 Build Order

### Step 1

Create `/buy`, `/submit-payment`, and `/unlock` pages.

### Step 2

Create payment submission storage and screenshot upload.

### Step 3

Add `Feishu webhook` notification on submission.

### Step 4

Create internal review page with approve and reject actions.

### Step 5

Add license key assignment and email fulfillment.

### Step 6

Add resend email and audit log.

## Recommendation

For this project, the strongest v0 path is:

**manual QR payments + Feishu review notification + email license fulfillment**

This is not the final commerce stack.

It is the smallest system that can:

- collect real money
- support your preferred payment channels
- avoid merchant onboarding blockers
- preserve a clean path to future automation
