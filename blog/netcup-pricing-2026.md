---
title: Netcup Pricing 2026 - Every VPS, Root Server and Webhosting Plan with Current Prices
date: 2026-09-23
author: Yusuf Gürdoğan
description: The complete Netcup price list after the September 2026 G12.5 switch. Every VPS G12.5, VPS Lite, ARM, Root Server G12.5 and Webhosting plan with verified net prices for 1, 12 and 24-month terms, plus traffic throttles, uptime guarantees, locations and Local Block Storage costs.
tags: netcup, pricing, vps, root server, webhosting, arm, G12.5, 2026, price list
---

# Netcup Pricing 2026: The Complete Price List

Netcup's pricing is spread over five product pages, three contract lengths and a VAT display that changes with the country you visit from. The traffic policy differs by product family too. This page puts all of it in one place, in one unit.

**All prices verified against netcup.com on 23 September 2026.** Netcup replaced its G12 server lineup with G12.5 on 22 September 2026, with much higher prices for new orders. What changed and why is covered in [our G12.5 breakdown](/blog/netcup-g12-5-price-increase-2026.html). This page is the reference list.

## Net vs. VAT

This is still the most common source of confusion when comparing Netcup to Hetzner or OVH.

Netcup shows prices according to the country it thinks you're in. Visit from Germany and the server cards include 19% VAT. Visit from outside the EU and the same cards say "incl. 0% VAT". An RS 1000 G12.5 on a 12-month term shows up as €21.73 to one visitor and €18.26 to another, and it's the same product at the same price.

What you actually pay depends on where you are:

| Your situation | What you pay on an €18.26 net server |
|---|---|
| German consumer | €21.73 (+19% VAT) |
| EU business with valid VAT ID | €18.26 (reverse charge, no VAT) |
| Consumer elsewhere in the EU | Your own country's VAT rate |
| Outside the EU | €18.26 (no EU VAT) |

Every price on this page is net.

## Contract terms

VPS, ARM and Root Server G12.5 can be ordered for 1, 12 or 24 months. Against the monthly price, 12 months is 13% cheaper and 24 months is 26% cheaper. The gap is big enough that the term you pick matters about as much as the plan.

VPS Lite plans work differently. Each plan has its own fixed term, listed in its table below.

## VPS G12.5 (x86)

Shared vCores on x86, with storage that netcup now describes as "SSD" in RAID. The G12 line promised NVMe, G12.5 doesn't. Hourly billing is available: you can cancel at any time, one hour costs 1/720th of the monthly price, and prepaid months and hours are refunded.

| Plan | vCores | RAM | Storage | 1 month | 12 months | 24 months | €/GB RAM (12 mo) |
|------|--------|-----|---------|---------|-----------|-----------|------------------|
| VPS 500 G12.5 | 2 | 4 GB | 64 GB SSD | €7.98 | €6.94 | €5.90 | €1.74 |
| VPS 1000 G12.5 | 4 | 8 GB | 128 GB SSD | €14.01 | €12.18 | €10.35 | €1.52 |
| VPS 2000 G12.5 | 8 | 16 GB | 256 GB SSD | €26.01 | €22.62 | €19.23 | €1.41 |
| VPS 4000 G12.5 | 12 | 32 GB | 512 GB SSD | €43.83 | €38.11 | €32.40 | €1.19 |
| VPS 8000 G12.5 | 16 | 64 GB | 1 TB SSD | €64.84 | €56.39 | €47.93 | €0.88 |

Network speed is 1 Gbit/s or 2.5 Gbit/s depending on the location you pick. Guaranteed availability is 99.6% annual average.

Value per euro still improves as you go up the line. RAM on the VPS 8000 G12.5 costs about half as much per GB as on the VPS 500 G12.5. If you're stuck between two adjacent tiers, the bigger one usually gives more per euro.

## VPS Lite, pico and nano

The price-optimised line. Same specs as before the G12.5 switch, about 20% more expensive, and still the cheapest way into netcup.

| Plan | vCores | RAM | Storage | Link speed | Term | Price/mo |
|------|--------|-----|---------|------------|------|----------|
| VPS pico G11.5s | 1 | 1 GB | 30 GB SSD | 1 Gbps | 12 months | €1.85 |
| VPS nano G11.5s | 2 | 2 GB | 60 GB SSD | 1 Gbps | 6 months | €3.10 |
| VPS Lite 1 G12.5s | 2 | 4 GB | 80 GB SSD | 500 Mbps | 6 months | €4.92 |
| VPS Lite 2 G12.5s | 4 | 8 GB | 160 GB SSD | 750 Mbps | 3 months | €7.98 |
| VPS Lite 3 G12.5s | 8 | 16 GB | 320 GB SSD | 1 Gbps | 2 months | €14.00 |
| VPS Lite 4 G12.5s | 16 | 32 GB | 640 GB SSD | 1 Gbps | 1 month | €25.93 |

Storage is enterprise SSD in RAID 6. Three things separate this line from the main VPS range, and the price alone won't tell you about any of them.

**No hourly billing.** The Lite comparison table doesn't offer it. You commit to the term shown.

**Lower uptime guarantee.** 99.0% annual average, against 99.6% on VPS G12.5. That's roughly 88 hours of permitted downtime a year versus 35.

**A stricter traffic rule**, covered in its own section below.

The trade got more attractive with G12.5, because Lite only went up 20% while the main VPS line went up 40%. VPS Lite 1 G12.5s at €4.92 is 29% cheaper than a VPS 500 G12.5 on a 12-month term (€6.94), and both give you 4 GB of RAM. You get 16 GB more disk on Lite, and give up hourly billing, most of the link speed and some uptime guarantee. For a build agent, a small bot or a staging box, Lite is the obvious pick now.

## VPS ARM64 G12.5

ARM can be ordered again after being sold out, now on the same tiers and prices as x86 VPS. The CPUs are Ampere Altra Max, per the product page.

| Plan | vCores | RAM | Storage | 1 month | 12 months | 24 months |
|------|--------|-----|---------|---------|-----------|-----------|
| VPS 500 ARM G12.5 | 2 | 4 GB | 64 GB NVMe | €7.98 | €6.94 | €5.90 |
| VPS 1000 ARM G12.5 | 4 | 8 GB | 128 GB NVMe | €14.01 | €12.18 | €10.35 |
| VPS 2000 ARM G12.5 | 8 | 16 GB | 256 GB NVMe | €26.01 | €22.62 | €19.23 |
| VPS 4000 ARM G12.5 | 12 | 32 GB | 512 GB NVMe | €43.84 | €38.11 | €32.40 |
| VPS 8000 ARM G12.5 | 16 | 64 GB | 1 TB NVMe | €64.84 | €56.39 | €47.93 |

Same money as x86, with a few real differences:

- ARM storage is still listed as **NVMe**. The x86 VPS line now only says SSD.
- Every ARM plan gets a **2.5 Gbit/s** network card, regardless of location.
- **No Singapore.** ARM runs in Nuremberg, Vienna, Amsterdam and Manassas.
- Snapshots on ARM are **offline snapshots**.

The old ARM G11 line was far better value (VPS 1000 ARM G11 was 6 cores, 8 GB and 256 GB for €6.53), but it hadn't been orderable since at least August.

## Root Server G12.5

Dedicated cores on AMD EPYC 9645 (up to 3.7 GHz per core), DDR5 RAM and NVMe storage. This line comes with the strongest guarantees netcup offers: **99.9% minimum annual availability** and a **30-day money-back guarantee** that refunds the full base fee.

| Plan | Dedicated cores | RAM | Storage | 1 month | 12 months |
|------|-----------------|-----|---------|---------|-----------|
| RS 500 G12.5 | 2 | 4 GB | 64 GB NVMe | €12.49 | €10.86 |
| RS 1000 G12.5 | 4 | 8 GB | 128 GB NVMe | €21.00 | €18.26 |
| RS 2000 G12.5 | 8 | 16 GB | 256 GB NVMe | €39.33 | €34.20 |
| RS 4000 G12.5 | 12 | 32 GB | 512 GB NVMe | €75.21 | €65.40 |
| RS 8000 G12.5 | 16 | 64 GB | 1 TB NVMe | €143.43 | €124.72 |
| RS 12000 G12.5 | 20 | 96 GB | 1.5 TB NVMe | €209.60 | €182.26 |
| RS 16000 G12.5 | 24 | 128 GB | 2 TB NVMe | €279.73 | €243.24 |

A 24-month term takes about 26% off the monthly price, which puts RS 1000 G12.5 around €15.5. RS 12000 and RS 16000 can't be ordered directly for now, you have to send a request.

The premium for dedicated cores is much bigger than it was on G12. RS 1000 G12.5 costs €18.26 against €12.18 for a VPS 1000 G12.5 with the same RAM, both on 12 months. That's €6.08 a month, or 50%, to stop sharing CPU time with other tenants. On G12 the gap was 23%. You still get the jump from 99.6% to 99.9% availability and NVMe instead of generic SSD, but for a lot of workloads the VPS is now the better deal.

## Order page options that change the price

**Location.** The default is "No preference, Europe". Picking a specific datacenter adds a surcharge, and Singapore adds much more than the others. On RS 1000 G12.5 a named European or US location is roughly €2.34 a month extra, and on VPS 1000 G12.5 roughly €1.56 (both on 24-month terms).

**IPv4.** VPS and Root Server plans come with IPv4 + IPv6 by default. Choosing IPv6-only or Cloud vLAN only takes €0.60 a month off.

## vGPU

Netcup also sells vGPU instances with guaranteed vCPU and VRAM for AI inference, 3D rendering, big data and video processing. Pricing depends on the configuration and there's no fixed tier list, so it isn't tabulated here. Good to know it exists before you rent GPU capacity elsewhere.

## Webhosting

Shared hosting without root access. Webhosting prices didn't change with G12.5. Netcup's hosting page shows German visitors prices with 19% VAT included, so the net column below is converted.

| Plan | Storage | Domains included | Netcup's listed price (incl. VAT) | Net |
|------|---------|------------------|-----------------------------------|-----|
| Webhosting 1000 | 50 GB SSD | 1 | €2.69 | €2.26 |
| Webhosting 2000 | 150 GB SSD | 3 .de or 1 alternative | €4.03 | €3.39 |
| Webhosting 4000 | 500 GB SSD | 6 .de or 2 alternative | €8.10 | €6.81 |
| Webhosting 8000 | 1 TB SSD | 12 .de or 3 alternative | €13.17 | €11.07 |

All plans include SSH access. Webhosting 4000 and 8000 add Ruby and Node.js.

Before G12.5, a Root Server with 8 GB cost less than Webhosting 8000. That's over. The cheapest 8 GB Root Server is now €18.26, and the top shared plan is €11.07.

## Cheapest plan by RAM

This is how most people actually shop. Monthly net prices, on a 12-month term for VPS and Root Server.

| RAM | Cheapest option | Price | Dedicated-core option | Price |
|-----|-----------------|-------|-----------------------|-------|
| 1 GB | VPS pico G11.5s | €1.85 | n/a | n/a |
| 2 GB | VPS nano G11.5s | €3.10 | n/a | n/a |
| 4 GB | VPS Lite 1 G12.5s | €4.92 | RS 500 G12.5 | €10.86 |
| 8 GB | VPS Lite 2 G12.5s | €7.98 | RS 1000 G12.5 | €18.26 |
| 16 GB | VPS Lite 3 G12.5s | €14.00 | RS 2000 G12.5 | €34.20 |
| 32 GB | VPS Lite 4 G12.5s | €25.93 | RS 4000 G12.5 | €65.40 |
| 64 GB | VPS 8000 G12.5 | €56.39 | RS 8000 G12.5 | €124.72 |
| 96 GB | n/a | n/a | RS 12000 G12.5 | €182.26 |
| 128 GB | n/a | n/a | RS 16000 G12.5 | €243.24 |

At 64 GB, a 24-month VPS 8000 G12.5 comes down to €47.93.

## Traffic limits by product

Netcup advertises "traffic included" with no monthly cap. That's true, but there's a documented fair-use throttle behind it, and it isn't the same across the range.

| Product | Trigger | Throttled to |
|---|---|---|
| VPS Lite (incl. pico, nano) | 24h **average rate** above 100 Mbit/s | 100 Mbit/s |
| VPS G12.5 (x86) | More than **2 TB** in the last 24h | 200 Mbit/s |
| VPS ARM G12.5 | More than **2 TB** in the last 24h | 200 Mbit/s |
| Root Server G12.5 | More than **3 TB** in the last 24h | 300 Mbit/s |

Read the first row carefully. VPS Lite is throttled on sustained *rate*, not on volume. A Lite box that averages more than 100 Mbit/s across a day gets limited, even though there's no TB figure in the rule. A continuous 100 Mbit/s is about 1 TB a day, so Lite has roughly half the headroom of a regular VPS and a third of a Root Server.

The throttle is always temporary and lifts as soon as you drop back under the threshold. Nothing gets suspended and there are no overage charges.

Netcup also warns that **different rules may apply at the Singapore location** for some plans. If you're deploying there, check "Product details" on the product page.

For scale, 3 TB a day on a Root Server is roughly 90 TB a month. Most workloads never get close.

## Uptime guarantees

| Product | Guaranteed annual availability | Permitted downtime/year |
|---|---|---|
| VPS Lite | 99.0% | ~88 hours |
| VPS G12.5 and ARM G12.5 | 99.6% | ~35 hours |
| Root Server G12.5 | 99.9% | ~9 hours |

The VPS and ARM pages now show a "30-day money-back guarantee" badge above the plans. The VPS page text, though, still says the satisfaction guarantee is a Root Server feature. If you're counting on a refund for a VPS, ask support before you order.

## Local Block Storage

Extra disk you can attach to a running server without downtime or a fixed term, billed daily.

**€0.012 per GB per month, net.** 1 TB (1024 GB) comes to about €12.29 a month, roughly what a VPS 1000 G12.5 costs. Since G12.5 halved the built-in disks, you'll probably need this more often than before.

Maximums by product:

- Root Server from G9, VPS x86 from G10, VPS ARM64 from G11: up to **8 TB**
- VPS Lite and vGPU: up to **4 TB**
- VPS pico and nano: **not available**

Storage Space and Local Block Storage went up 21.52% on 1 May 2026. The G12.5 switch didn't change the per-GB price.

## Included at no extra cost

Easy to miss when you compare against providers who charge for these:

- **DDoS protection**, with 2 Tbit/s of filtering capacity at no charge
- **Firewall**, rule-based via the Server Control Panel, on by default for new VPS
- **Snapshots** (copy-on-write, limited only by free disk space). One snapshot export is free, more cost €1.50 for one up to €10.00 for ten
- **Rescue system**, remote console, preconfigured images, custom image upload, DVD/ISO boot
- **Failover IPs**, plus optional **Cloud vLAN** for private networking between your own servers

## Server locations

Five sites, but what you can get where varies by product line:

| Product | Available in |
|---|---|
| VPS G12.5 (x86) | Nuremberg, Vienna, Amsterdam, Manassas (US), Singapore |
| VPS ARM G12.5 | Nuremberg, Vienna, Amsterdam, Manassas (US). **No Singapore** |
| Root Server G12.5 | Nuremberg, Vienna, Manassas (US), Singapore. **No Amsterdam** |
| RS 12000 / 16000 G12.5 | Nuremberg, Vienna, Manassas (US). **No Singapore, no Amsterdam** |
| VPS Lite | Europe only: Nuremberg, Vienna, Amsterdam, subject to availability |
| VPS pico / nano | **Nuremberg only** |

On VPS, ARM and Root Server you can also leave the location on "No preference, Europe", which is the cheapest option.

## What changed in 2026

Two rounds so far.

| Date | Change |
|---|---|
| 19 March 2026 | Announced. New orders up 24.33%, effective immediately |
| 1 May 2026 | Existing contracts up 18.51% |
| 1 May 2026 | Add-ons (Storage Space, Local Block Storage) up 21.52% |
| 22 September 2026 | G12 replaced by G12.5 for new orders. VPS +40%, VPS Lite about +20%, Root Server +70% to +108% (12-month terms), disks halved on VPS and Root Server. Existing contracts unchanged |

Both rounds come from the same memory crisis. In the September announcement, netcup says DDR4 and DDR5 wholesale prices are about five times what they were a year ago, and that its own purchase prices went up by the same factor.

The two rounds treated existing customers very differently. In May, existing contracts went up 18.51%, with a special right to cancel. In September, existing contracts weren't touched. G12 servers keep their price on renewal and can still be upgraded within G12 at the old rates.

Hetzner has had a rough year too, with three increases by June. Our [June price-hike analysis](/blog/hetzner-third-price-hike-june-2026.html) has the details.

## Will they rise again?

Nothing new is announced. Netcup says it has no plans to raise prices on existing contracts and has kept spare hardware back for that. It also says there will be no Black Friday-style promotions this year, and that its purchase prices for new hardware are still going up every week.

If you're buying now, the 24-month term is the cheapest way in, 26% below monthly. Netcup has protected existing contracts in the latest round, and there's no sign of new-order prices coming down any time soon.

## Paying less than list price

Everything above is list price. Two ways to pay less:

**Voucher codes.** Netcup hasn't released vouchers for the G12.5 VPS and Root Server plans to partners yet, so there are none for those right now. Webhosting vouchers and a new-customer code are live. Individual codes have limited redemptions and run out quickly, so anything quoted in an article is stale by the time you read it. The [live list is on our homepage](https://netcupvoucher.com) and gets updated continuously. G12.5 codes will show up there once netcup releases them.

**New customer offer.** A discount code for first-time accounts. Details are on the [new customer offer page](https://netcupvoucher.com/new-customer-offer).

## Summary

The cheapest server is the VPS pico G11.5s at €1.85 a month net (Nuremberg only). For most small workloads, the best value is now VPS Lite: Lite 2 G12.5s gives you 8 GB for €7.98. Among the regular VPS plans, the VPS 8000 G12.5 has the lowest cost per GB of RAM, €0.88 on 12 months. Dedicated cores now cost about 50% more than shared ones at the same RAM, up from 23% on G12. The cheapest dedicated option is RS 500 G12.5 at €10.86. ARM is orderable again, at x86 prices, and still with NVMe.

Before you order, check three things: whether your plan is offered in the location you want, which traffic rule applies to it, and which contract term you're pricing. Between monthly and 24 months the difference is 26%.

For what changed in the G12.5 switch, see [our G12.5 breakdown](/blog/netcup-g12-5-price-increase-2026.html). If you're choosing between a VPS and a Root Server, [that comparison is here](/blog/netcup-root-server-vs-vps.html).

*Prices verified against netcup.com on 23 September 2026. Netcup changes pricing without much notice, so if you spot a discrepancy, treat the product page as authoritative.*
