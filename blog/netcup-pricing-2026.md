---
title: Netcup Pricing 2026 - Every VPS, Root Server and Webhosting Plan with Current Prices
date: 2026-08-11
author: Yusuf Gürdoğan
description: The complete Netcup price list for August 2026. Every VPS G12, VPS Lite, ARM, Root Server G12 and Webhosting plan with verified net prices, the net vs VAT explanation, traffic limits, and the 2026 price increase history.
tags: netcup, pricing, vps, root server, webhosting, arm, 2026, price list
---

# Netcup Pricing 2026: The Complete Price List

Netcup's pricing is scattered across six product pages. Some lines are quoted net, others include 19% VAT, and one whole product family is still listed at full price despite being unavailable. This page collects everything into one place, in one unit, with the gaps flagged.

**All prices verified against netcup.com on 11 August 2026.** Netcup's last price change took effect on 1 May 2026. Nothing has moved since.

## Net vs. VAT, because Netcup mixes them

This is the single most common source of confusion when comparing Netcup to Hetzner or OVH.

Server products (VPS, VPS Lite, ARM, Root Server) are advertised at net prices, before VAT. Webhosting is advertised with 19% German VAT already included. So a "€8.71" VPS 1000 G12 and a "€4.03" Webhosting 2000 are quoted on completely different bases.

What you actually pay depends on where you are:

| Your situation | What you pay on a €10.75 net server |
|---|---|
| German consumer | €12.79 (+19% VAT) |
| EU business with valid VAT ID | €10.75 (reverse charge, no VAT) |
| Consumer elsewhere in the EU | Your own country's VAT rate |
| Outside the EU | €10.75 (no EU VAT) |

Every table below is net, including Webhosting, which I converted so the numbers are comparable. Netcup's own displayed figure is shown next to it.

## VPS G12

Shared vCores on AMD EPYC 9645 "Turin", DDR5 ECC memory, NVMe storage, 2.5 Gbit/s networking.

| Plan | vCores | RAM | Storage | Price/mo (net) | €/GB RAM |
|------|--------|-----|---------|----------------|----------|
| VPS 500 G12 | 2 | 4 GB | 128 GB NVMe | €4.97 | €1.24 |
| VPS 1000 G12 | 4 | 8 GB | 256 GB NVMe | €8.71 | €1.09 |
| VPS 2000 G12 | 8 | 16 GB | 512 GB NVMe | €16.18 | €1.01 |
| VPS 4000 G12 | 12 | 32 GB | 1 TB NVMe | €27.23 | €0.85 |
| VPS 8000 G12 | 16 | 64 GB | 2 TB NVMe | €40.29 | €0.63 |

Value per euro improves as you move up the line. The VPS 8000 G12 works out to half the cost per GB of RAM that the VPS 500 G12 does. If you're stuck between two adjacent tiers, the larger one is usually better value per unit of resource.

## VPS Lite

Price-optimised plans on SSD rather than NVMe, aimed at moderate-traffic workloads. Netcup's cheapest entry points live here.

| Plan | vCores | RAM | Storage | Price/mo (net) |
|------|--------|-----|---------|----------------|
| VPS piko G11s | 1 | 1 GB | 30 GB SSD | €1.55 |
| VPS nano G11s | 2 | 2 GB | 60 GB SSD | €2.59 |
| VPS Lite 1 G12s | 2 | 4 GB | 80 GB SSD | €4.10 |
| VPS Lite 2 G12s | 4 | 8 GB | 160 GB SSD | €6.66 |
| VPS Lite 3 G12s | 8 | 16 GB | 320 GB SSD | €11.68 |
| VPS Lite 4 G12s | 16 | 32 GB | 640 GB SSD | €21.62 |

There's a real cost to the savings. VPS Lite 1 G12s at €4.10 undercuts the VPS 500 G12 at €4.97 by 17%, and both give you 4 GB of RAM. What you give up is NVMe (you get SSD) and 48 GB of capacity. For a build agent, a small bot, or a staging box, Lite is the sensible pick. Anything doing sustained disk I/O, like a database or a busy application server, justifies the extra €0.87 for NVMe.

## VPS ARM64 G11 (currently sold out)

Netcup's ARM line cannot be ordered right now. The prices are still published, so they're recorded here, but none of these are buyable today.

| Plan | vCores | RAM | Storage | Price/mo (net) | Status |
|------|--------|-----|---------|----------------|--------|
| VPS 1000 ARM G11 | 6 | 8 GB | 256 GB NVMe | €6.53 | Sold out |
| VPS 2000 ARM G11 | 10 | 16 GB | 512 GB NVMe | €11.27 | Sold out |
| VPS 3000 ARM G11 | 12 | 24 GB | 768 GB NVMe | €15.93 | Sold out |
| VPS 4000 ARM G11 | 14 | 32 GB | 1 TB NVMe | €21.06 | Sold out |
| VPS 6000 ARM G11 | 16 | 48 GB | 1.5 TB NVMe | €27.06 | Sold out |
| VPS 8000 ARM G11 | 18 | 64 GB | 2 TB NVMe | €33.60 | Sold out |

The pricing explains the stock situation. VPS 2000 ARM G11 offers 10 cores and 16 GB for €11.27, against €16.18 for the 8-core x86 VPS 2000 G12. For an ARM64-native stack it's the best value in Netcup's catalogue, which is presumably why there's none left.

If you need ARM64 this month, Hetzner's CAX line is the fallback. CAX21 gives you 4 ARM vCPU, 8 GB and 80 GB for €10.49/mo. That's 61% more than Netcup's comparable ARM plan, with the advantage of actually existing.

## Root Server G12

Same EPYC 9645 hardware as the VPS line, with cores that are guaranteed dedicated instead of shared.

| Plan | Dedicated cores | RAM | Storage | Price/mo (net) |
|------|-----------------|-----|---------|----------------|
| RS 1000 G12 | 4 | 8 GB DDR5 ECC | 256 GB NVMe | €10.75 |
| RS 2000 G12 | 8 | 16 GB DDR5 ECC | 512 GB NVMe | €18.00 |
| RS 4000 G12 | 12 | 32 GB DDR5 ECC | 1 TB NVMe | €33.55 |
| RS 8000 G12 | 16 | 64 GB DDR5 ECC | 2 TB NVMe | €59.97 |

All four include a 30-day money-back guarantee, snapshots, image import and export, remote console access, and 2.5 Gbit/s networking.

The premium for dedicated cores is smaller than most people expect. RS 1000 G12 costs €10.75 against €8.71 for a VPS 1000 G12 with identical RAM and storage. That's €2.04 a month, or 23%, to stop sharing CPU time with other tenants. If you have a latency target to hit or a sustained CPU load, it's the cheapest insurance on this page.

## Webhosting

Shared hosting, no root access. Netcup advertises these with 19% VAT included, so the net column is converted.

| Plan | Storage | Domains included | Netcup's listed price (incl. VAT) | Net |
|------|---------|------------------|-----------------------------------|-----|
| Webhosting 1000 | 50 GB SSD | 1 | €2.69 | €2.26 |
| Webhosting 2000 | 150 GB SSD | 3 .de or 1 alternative | €4.03 | €3.39 |
| Webhosting 4000 | 500 GB SSD | 6 .de or 2 alternative | €8.10 | €6.81 |
| Webhosting 8000 | 1 TB SSD | 12 .de or 3 alternative | €13.17 | €11.07 |

Higher tiers add SSH access plus Node.js and Ruby support.

One thing the table makes obvious: Webhosting 8000 at €11.07 net costs more than an RS 1000 G12 at €10.75. If you're willing to administer a box yourself, the Root Server gets you dedicated EPYC cores and full root for slightly less than the top shared plan.

## Cheapest plan by RAM

The way most people actually shop. All figures net, per month.

| RAM | Cheapest option | Price | Dedicated-core option | Price |
|-----|-----------------|-------|-----------------------|-------|
| 1 GB | VPS piko G11s | €1.55 | n/a | n/a |
| 2 GB | VPS nano G11s | €2.59 | n/a | n/a |
| 4 GB | VPS Lite 1 G12s | €4.10 | n/a | n/a |
| 8 GB | VPS Lite 2 G12s | €6.66 | RS 1000 G12 | €10.75 |
| 16 GB | VPS Lite 3 G12s | €11.68 | RS 2000 G12 | €18.00 |
| 32 GB | VPS Lite 4 G12s | €21.62 | RS 4000 G12 | €33.55 |
| 64 GB | VPS 8000 G12 | €40.29 | RS 8000 G12 | €59.97 |

## Traffic and bandwidth limits

Netcup advertises "traffic included" with no monthly cap. That's accurate, though there's a fair-use throttle underneath it that varies by product.

| Product | Threshold | What happens |
|---|---|---|
| VPS | ~2 TB average over 24h | Throttled to 200 Mbit/s until you drop below |
| Root Server | ~3 TB over 24h | Throttled to 300 Mbit/s until you drop below |

Two caveats you should know about. The throttle is temporary and lifts once your rolling average falls back under the threshold, so nothing gets suspended and there are no overage charges. More importantly, Netcup's official wording here is vague, and the figures above are pieced together from the Netcup community forum and long-running LowEndTalk threads rather than a published policy page. The thresholds have shifted before, from an older 120 TB/month cap with a 200 Mbit/s throttle to the current daily model. Check the product page for your specific plan before committing to anything traffic-heavy.

For scale, 3 TB/day works out to roughly 90 TB a month. Most workloads never approach it.

## Server locations

Five sites, which matters for both latency and data residency:

- Nuremberg, Germany
- Vienna, Austria
- Amsterdam, Netherlands
- Manassas, Virginia (US East Coast)
- Singapore

The European sites sit on the Anexia backbone. Product availability isn't uniform across locations, and the selection in the US and Singapore is narrower than in Germany.

## What changed in 2026

One increase, and it has held since.

| Date | Change |
|---|---|
| 19 March 2026 | Announced. New orders up 24.33%, effective immediately |
| 1 May 2026 | Existing contracts up 18.51% |
| 1 May 2026 | Add-ons (Storage Space, Local Block Storage) up 21.52% |
| Since then | No change, verified 11 August 2026 |

The cause was the memory crisis. AI datacenter buildout absorbed DRAM and NAND supply, and the three major memory manufacturers prioritised their higher-margin buyers. Netcup confined the increase to products directly exposed to that, meaning VPS, Root Servers, storage add-ons and Webhosting. Network products and licenses were left alone, and domains still follow registry pricing. Existing customers received a special right of termination if they didn't want to accept the new rates.

For context on how restrained that was, Hetzner has raised prices three times this year: on 1 April, again in April for dedicated server setup fees, and once more on 15 June, when the dedicated-vCPU CCX line more than doubled. Hetzner's cheapest dedicated-core plan is now the CCX13 at €42.99/mo for 2 cores and 8 GB. Netcup's RS 1000 G12 is €10.75 for 4 dedicated cores and the same 8 GB. Our [June price-hike analysis](/blog/hetzner-third-price-hike-june-2026.html) has the full breakdown.

Neither provider has changed anything since June. Prices are stable for now.

## Will they rise again?

Nothing is announced at either provider. The pressure behind the 2026 increases hasn't gone away, though. DRAM contract prices are still projected to finish 2026 somewhere between 250% and 300% above September 2025 levels, and the industry consensus points to tightness lasting into 2027 while HBM and AI accelerator demand keeps first claim on wafer capacity.

If you're buying in the next few months, a 12-month term locks your rate. Netcup's increases have consistently hit new orders first and existing contracts later, with a termination right attached. Locking in now is the conservative play, and there's no sign of anything coming down.

## Paying less than list price

Everything above is list price. Two ways to reduce it:

**Voucher codes.** Netcup issues free-month vouchers across the VPS and Root Server lines, and recurring percentage discounts on Webhosting. Individual codes have limited redemptions and get burned through quickly, so anything quoted in an article is stale by the time you read it. The [live list is on our homepage](https://netcupvoucher.com), checked and updated continuously.

**New customer offer.** A discount code for first-time accounts, which stacks with a longer contract term. Details on the [new customer offer page](https://netcupvoucher.com/new-customer-offer).

Worth doing the arithmetic before you commit either way. A recurring Webhosting discount can pull the mid-tier plans below €3 net, but a free-month voucher on a Root Server is a one-off saving against a 12-month commitment. On the numbers above, the RS 1000 G12 still lands close to the top Webhosting tier over a full year, with dedicated cores and root access attached.

## Summary

Cheapest usable server is the VPS piko G11s at €1.55/mo net. Best all-round value is the RS 1000 G12 at €10.75, which gets you 4 dedicated EPYC cores, 8 GB of DDR5 ECC and 256 GB of NVMe. Best cost per GB of RAM is the VPS 8000 G12 at €0.63/GB. Dedicated cores cost roughly 23% more than shared at matching specs. ARM is unavailable, with Hetzner CAX as the fallback. Prices last changed on 1 May 2026 and have been steady since.

For the head-to-head against Hetzner, see the [August comparison](/blog/hetzner-third-price-hike-june-2026.html). If you're choosing between a VPS and a Root Server, [that breakdown is here](/blog/netcup-root-server-vs-vps.html).

*Prices verified against netcup.com on 11 August 2026. Netcup changes pricing without much notice, so if you spot a discrepancy, treat the product page as authoritative.*
