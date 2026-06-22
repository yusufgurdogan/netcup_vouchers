---
title: Hetzner Raised Prices a Third Time in 2026 - Now Netcup Costs 4x Less for Dedicated Cores
date: 2026-06-22
author: Yusuf Gürdoğan
description: On June 15, 2026 Hetzner raised prices for the third time this year, and the dedicated vCPU (CCX) line nearly tripled. Netcup hasn't moved since May. Here's the updated head-to-head with verified current pricing.
tags: netcup, hetzner, vps, root server, comparison, pricing, 2026, price increase
---

# Hetzner Raised Prices a Third Time in 2026: Now Netcup Costs 4x Less for Dedicated Cores

Hetzner just raised prices again. On **June 15, 2026**, the company pushed through its **third** price adjustment of the year, and this one is the most aggressive yet for anyone who buys dedicated CPU power. The dedicated vCPU (CCX) line nearly **tripled**.

Meanwhile, Netcup hasn't touched its pricing since the May 1 increase we covered in our [RAMpocalypse comparison](/blog/netcup-vs-hetzner-after-rampocalypse-2026.html). The result: the gap between the two providers, already wide in March, has now blown wide open.

If you were leaning toward Hetzner for a dedicated-core server, the math has changed completely. Here's the verified, up-to-date breakdown.

---

## What Happened on June 15

This is Hetzner's third pricing action of 2026:

1. **February 23 announcement → April 1:** a broad increase across all products, new and existing, with cloud servers in Germany and Finland up roughly 30-37% per tier.
2. **April (dedicated setup fees):** adjustments to one-time dedicated server setup fees.
3. **June 15:** a **standardization + price increase** for new orders, hitting the dedicated vCPU (CCX) and shared AMD (CPX) lines hardest.

Alongside the price changes, Hetzner standardized its dedicated server catalog. Models now carry `-1`, `-2`, and `-3` designations instead of custom RAM/storage configs, and a new **`-1-Ltd` "limited"** tier uses components sourced at lower prices. Setup fees on most dedicated servers came down to partly offset the monthly increases.

Source: [Hetzner standardization and price adjustment statement](https://www.hetzner.com/pressroom/standardization-and-price-adjustment-of-our-server-products/) and the [official price adjustment docs](https://docs.hetzner.com/general/infrastructure-and-availability/price-adjustment/).

**Important:** the June 15 increase applies to **new orders and rescales only**. If you already run a Hetzner cloud server and leave it untouched, you keep your old price. Any resize (up *or* down) re-prices it at the new rates, so don't rescale unless you have to.

---

## The June 15 Cloud Price Changes (Germany / Finland)

Net monthly prices, before and after June 15:

| Plan | Type | Old Price | **New Price** | Change |
|------|------|-----------|---------------|--------|
| **CCX13** | 2 dedicated | €15.99 | **€42.99** | **+169%** |
| **CCX23** | 4 dedicated | €31.49 | **€85.99** | **+173%** |
| **CCX33** | 8 dedicated | €62.49 | **€138.49** | **+122%** |
| **CCX43** | 16 dedicated | €124.99 | **€275.99** | +121% |
| **CCX53** | 32 dedicated | €249.99 | **€533.49** | +113% |
| CX33 | 4 shared | €6.49 | **€8.49** | +31% |
| CX43 | 8 shared | €11.99 | **€15.99** | +33% |
| CAX21 | 4 ARM | €7.99 | **€10.49** | +31% |
| CAX31 | 8 ARM | €15.99 | **€20.99** | +31% |

The pattern is clear: **dedicated vCPU servers got hammered** (more than doubling), while the shared Intel/AMD (CX) and ARM (CAX) lines saw "only" ~31-33% increases. Hetzner attributes this to the ongoing memory and component crisis, where RAM, SSD, and GPU prices swing wildly week to week.

---

## Netcup Didn't Move

Netcup's last adjustment was **May 1, 2026** (+18.51% for existing customers, +24.33% for new orders). There has been no change since. Here's the current new-order Root Server lineup, taken live from netcup.com (net price, 12-month term, IPv4 + IPv6):

| Plan | Cores | RAM | Storage | Price/mo |
|------|-------|-----|---------|----------|
| **RS 1000 G12** | 4 dedicated | 8 GB DDR5 ECC | 256 GB NVMe | **€10.74** |
| **RS 2000 G12** | 8 dedicated | 16 GB DDR5 ECC | 512 GB NVMe | **€18.01** |
| **RS 4000 G12** | 12 dedicated | 32 GB DDR5 ECC | 1 TB NVMe | **€33.55** |
| **RS 8000 G12** | 16 dedicated | 64 GB DDR5 ECC | 2 TB NVMe | **€59.97** |

All run AMD EPYC 9645 "Turin" cores with 2.5 Gbps networking and a generous traffic policy (flat rate, with throttling to 300 Mbit/s only if you push more than 3 TB in any 24-hour window — roughly 90 TB/month of headroom before anything happens).

> Note on fairness: we compare **new-order to new-order** prices throughout. A new Netcup customer pays €10.74 for the RS 1000 G12 today; existing Netcup customers pay around €10.36. Existing Hetzner customers who don't rescale keep their old rates too. The comparison below is what a buyer signing up **today** actually pays at each provider.

---

## The Headline Matchup: RS 1000 G12 vs CCX13

The cheapest dedicated-core option at each provider, side by side:

| Spec | **Netcup RS 1000 G12** | **Hetzner CCX13** |
|------|------------------------|-------------------|
| **Price** | **€10.74/mo** | **€42.99/mo** |
| **Dedicated cores** | 4 (EPYC 9645) | 2 (EPYC) |
| **RAM** | 8 GB DDR5 ECC | 8 GB |
| **Storage** | 256 GB NVMe | 80 GB NVMe |
| **Traffic** | ~90 TB/day-equiv before throttle | 20 TB |
| **Network** | 2.5 Gbps dedicated | shared |

Hetzner's cheapest dedicated-core server now costs **exactly 4x more** than Netcup's — for **half the cores** and **less than a third of the storage**.

Back in March, the same matchup (RS 1000 G12 at €10.36 vs CCX13 at ~€16.49) was a **59% gap**. After June 15, that gap is **+300%**. It quadrupled in three months.

---

## Value Per Euro

### Dedicated cores per euro

| Server | Dedicated Cores | Price | Cores/€ |
|--------|----------------|-------|---------|
| **Netcup RS 1000 G12** | 4 | €10.74 | **0.37** |
| **Hetzner CCX13** | 2 | €42.99 | **0.05** |
| **Hetzner CCX23** | 4 | €85.99 | **0.05** |

Netcup now delivers roughly **8x more dedicated cores per euro** than Hetzner's CCX line.

### Storage per euro

| Server | NVMe Storage | Price | GB/€ |
|--------|-------------|-------|------|
| **Netcup RS 1000 G12** | 256 GB | €10.74 | **23.8** |
| **Hetzner CCX13** | 80 GB | €42.99 | **1.9** |
| **Hetzner CX43** | 160 GB | €15.99 | **10.0** |

That's about **12x more storage per euro** than the CCX13, and more than **2x** even against Hetzner's shared CX43.

---

## What About Shared and ARM?

Hetzner's June 15 increase was much gentler on the shared (CX) and ARM (CAX) lines, so this is where it remains competitive:

| Plan | Specs | Price | Notes |
|------|-------|-------|-------|
| **CX43** | 8 shared vCPU, 16 GB, 160 GB | €15.99 | Shared and throttled under load |
| **CAX21** | 4 ARM vCPU, 8 GB, 80 GB | €10.49 | Great value *if* your stack runs on ARM64 |

Even so, the shared CX43 at €15.99 costs **49% more** than the RS 1000 G12 while giving you *shared* cores instead of dedicated ones. The ARM CAX21 at €10.49 is genuinely close to Netcup's price, but only makes sense for ARM-native workloads — and Netcup offers its own ARM64 VPS line if that's what you need.

Where Hetzner still wins outright: hourly billing, snapshots-as-a-service workflows, a polished cloud API, load balancers, and the dedicated server auction for high-end one-off hardware.

---

## Updated Summary Table

| Spec | Netcup RS 1000 G12 | Hetzner CCX13 | Hetzner CX43 |
|------|-------------------|---------------|--------------|
| **Price** | **€10.74/mo** | **€42.99/mo** | **€15.99/mo** |
| **CPU** | 4 dedicated (EPYC 9645) | 2 dedicated | 8 shared (throttled) |
| **RAM** | 8 GB DDR5 ECC | 8 GB | 16 GB |
| **Storage** | 256 GB NVMe | 80 GB | 160 GB |
| **Traffic** | flat (3 TB/24h soft cap) | 20 TB | 20 TB |
| **Network** | 2.5 Gbps dedicated | shared | shared |
| **2026 increases** | +18.5% (one round) | tripled over three rounds | ~30% over three rounds |

---

## The Verdict

After the RAMpocalypse in March, Netcup's RS 1000 G12 was already the budget king. After Hetzner's third hike on June 15, it's not even close anymore — at least for dedicated CPU power.

For **€10.74/month**, the RS 1000 G12 gives you 4 dedicated EPYC 9645 cores, 8 GB of DDR5 ECC RAM, 256 GB of NVMe, and 2.5 Gbps networking. Hetzner's nearest dedicated-core equivalent, the CCX13, now costs **€42.99** for half the cores and a fraction of the storage.

Hetzner remains a reasonable pick if you need hourly billing, its cloud API and tooling, ARM (CAX) instances, or the dedicated server auction. Its shared CX plans are still fine for bursty, low-utilization workloads. But for **sustained, dedicated performance per euro** — self-hosting, databases, game servers, dev environments, app servers — Netcup's G12 Root Servers are now the obvious choice by a wide margin.

If you read our earlier [RAMpocalypse comparison](/blog/netcup-vs-hetzner-after-rampocalypse-2026.html) or the [original budget-server breakdown](/blog/netcup-vs-hetzner-budget-servers-2026.html), think of this as the third act: the trend has only accelerated.

---

## Current Deals

Want to push the price down even further?

- **[Netcup Vouchers](https://netcupvoucher.com)** - RS 1000 G12 with up to 2 months free, plus deals on VPS, Root Servers, and Webhosting

Happy hosting!
