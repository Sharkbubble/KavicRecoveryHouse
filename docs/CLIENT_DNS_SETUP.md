# DNS & Email Setup Guide
## Kavic House Recovery — kavichouserecovery.ca

This guide walks through two tasks:
1. **Point your domain to the live website** (GoDaddy → Vercel)
2. **Verify your domain for email sending** (Resend → GoDaddy)

Complete Part 1 first, then Part 2.

---

## Part 1 — Point the domain to the website (GoDaddy)

### What you need
- Login access to your GoDaddy account

### Steps

**1. Log in to GoDaddy**
- Go to godaddy.com and sign in

**2. Open your domain's DNS settings**
- Click your name/account icon in the top-right corner
- Select **"My Products"**
- Find **kavichouserecovery.ca** in the list
- Click the **"DNS"** button next to it (or click the domain name, then choose the DNS tab)

**3. Add the website A records**

You need to add two records. Look for an **"Add New Record"** or **"Add"** button.

Add the first record:

| Field | Value |
|-------|-------|
| Type | `A` |
| Name | `@` |
| Value / Points To | `76.76.21.21` |
| TTL | `600 seconds` (or "1/2 Hour") |

Click **Save**, then add the second record:

| Field | Value |
|-------|-------|
| Type | `A` |
| Name | `www` |
| Value / Points To | `76.76.21.21` |
| TTL | `600 seconds` (or "1/2 Hour") |

Click **Save**.

> **Note:** If a record with the same Name already exists (e.g. an existing `@` A record pointing somewhere else), edit that existing record instead of adding a new one.

**4. Wait for it to go live**
- DNS changes usually take **5–30 minutes**, sometimes up to a few hours
- Once active, the website will be live at https://kavichouserecovery.ca and https://www.kavichouserecovery.ca
- SSL (the padlock) is provisioned automatically — no extra steps needed

---

## Part 2 — Verify the domain for email (Resend)

This lets contact form submissions arrive from `Cj@kavichouserecovery.ca` instead of a generic test address.

### Step A — Add the domain in Resend

**1. Log in to Resend**
- Go to resend.com and sign in with the account that holds the API key

**2. Open Domains**
- In the left sidebar, click **"Domains"**

**3. Add the domain**
- Click **"Add Domain"**
- Type `kavichouserecovery.ca` and click **"Add"**
- For region, choose **US East** (default is fine)

**4. Copy the DNS records Resend shows you**
- Resend will display a table of DNS records — typically 3–4 rows
- You will see records of type `TXT` (for DKIM) and possibly `MX`
- **Leave this page open** — you will copy values from it into GoDaddy

---

### Step B — Add Resend's records in GoDaddy

Go back to GoDaddy DNS (same place as Part 1, Step 2).

For **each record** shown in Resend, add a new record in GoDaddy:

| GoDaddy field | What to enter |
|---------------|---------------|
| **Type** | Copy the type shown in Resend (e.g. `TXT`) |
| **Name / Host** | Copy the Name/Host from Resend (e.g. `resend._domainkey`) |
| **Value / TXT Value** | Copy the full Value from Resend — it will be a long string |
| **TTL** | `3600` (or "1 Hour") |

> **Tip:** Copy/paste the values carefully — these are long strings and any typo will cause verification to fail.

Click **Save** after each record.

---

### Step C — Verify in Resend

**1. Back in Resend → Domains**, find `kavichouserecovery.ca`
- Click **"Verify"** (or Resend may verify automatically within a few minutes)
- Status will change from **Pending** to **Verified** once DNS has propagated
- This can take **5–60 minutes**

---

### Step D — Update the website code (developer task)

Once Resend shows the domain as **Verified**, let your developer know. They need to update one line in the code:

**File:** `server/api/contact.post.ts`, line 14

Change:
```
from: 'Kavic House Website <onboarding@resend.dev>',
```

To:
```
from: 'Kavic House Recovery <Cj@kavichouserecovery.ca>',
```

Then redeploy the site for the change to take effect.

---

## Summary checklist

- [ ] GoDaddy: Added `A` record — `@` → `76.76.21.21`
- [ ] GoDaddy: Added `A` record — `www` → `76.76.21.21`
- [ ] Website live at https://kavichouserecovery.ca
- [ ] Resend: Domain `kavichouserecovery.ca` added
- [ ] GoDaddy: Added all DNS records from Resend
- [ ] Resend: Domain status shows **Verified**
- [ ] Developer: Updated `from:` address and redeployed

---

## Troubleshooting

**The website isn't loading after an hour**
- Double-check the A records in GoDaddy — make sure the value is exactly `76.76.21.21` and the Name is `@` (not the full domain name)
- Make sure no old conflicting A record exists pointing to a different IP

**Resend domain is stuck on "Pending" after an hour**
- Go back to GoDaddy DNS and confirm each record was saved correctly
- Watch for extra spaces when pasting TXT values — GoDaddy sometimes adds them

**Emails are still coming from `onboarding@resend.dev`**
- The domain may be verified but the code hasn't been updated yet — complete Step D above
