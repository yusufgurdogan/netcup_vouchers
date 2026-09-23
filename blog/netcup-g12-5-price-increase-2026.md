---
title: Netcup G12.5 - New Server Prices Up 40% to 110%, Existing Contracts Untouched
date: 2026-09-23
author: Yusuf Gürdoğan
description: Netcup replaced G12 with G12.5 on September 22, 2026. Root Server prices are up as much as 108% on a 12-month term, regular VPS plans are up 40%, and most disks have been cut in half. Existing G12 contracts keep their old pricing.
tags: netcup, G12.5, price increase, rampocalypse, vps, root server, vps lite, arm, 2026, pricing
---

# Netcup G12.5: New Server Prices Up 40% to 110%, Existing Contracts Untouched

Netcup changed its server lineup pretty much overnight.

On September 22, CEO Alexander Windbichler published [RAMpocalypse: We need to talk about pricing ... again](https://forum.netcup.de/thread/22999-rampocalypse-we-need-to-talk-about-pricing-again/) on the netcup forum. By the next morning, G12 had disappeared from the shop and the new G12.5 plans were in its place.

Despite the new name, this is not really a new hardware generation. G12.5 still uses AMD EPYC 9645 CPUs and DDR5, and the core and RAM allocations are mostly the same as before. The big differences are price and storage. On the main VPS and Root Server ranges, disk space has been cut in half.

If you only want the important numbers:

- **Root Servers** are 70% to 108% more expensive on a 12-month term, with half the disk on comparable plans.
- **Regular x86 VPS** plans went up 40%, also with half the disk. Netcup no longer guarantees NVMe for these plans.
- **VPS Lite, pico and nano** went up by roughly 20%, but their specs stayed the same.
- **ARM** now follows the same lineup and pricing as x86 VPS.
- **Webhosting** prices did not change.
- **Existing contracts** keep their old pricing, including renewals and eligible upgrades within G12.

All prices below are monthly net prices, excluding VAT. The old G12 figures come from our [August 2026 netcup price list](/blog/netcup-pricing-2026.html).

---

## Root Servers G12.5

Root Servers took the biggest hit.

For the comparison below, I used 12-month pricing on both generations. That is also the contract length behind netcup's own claim that prices rose by roughly 70% to 110%.

| Plan | Cores | RAM | Disk G12 → G12.5 | G12 | G12.5 (12 mo) | Change |
|------|-------|-----|------------------|-----|---------------|--------|
| RS 500 G12.5 | 2 dedicated | 4 GB | new, 64 GB | n/a | €10.86 | new |
| RS 1000 G12.5 | 4 dedicated | 8 GB | 256 → 128 GB | €10.74 | €18.26 | +70% |
| RS 2000 G12.5 | 8 dedicated | 16 GB | 512 → 256 GB | €18.01 | €34.20 | +90% |
| RS 4000 G12.5 | 12 dedicated | 32 GB | 1 TB → 512 GB | €33.55 | €65.40 | +95% |
| RS 8000 G12.5 | 16 dedicated | 64 GB | 2 TB → 1 TB | €59.97 | €124.72 | +108% |
| RS 12000 G12.5 | 20 dedicated | 96 GB | 1.5 TB | n/a | €182.26 | on request |
| RS 16000 G12.5 | 24 dedicated | 128 GB | 2 TB | n/a | €243.24 | on request |

The increase gets steeper as you move up the range. RS 1000 is 70% more than before, while RS 8000 is a little over double the old price.

There is one detail worth watching when comparing percentages: contract length. The new RS 8000 costs €143.43 if you pay month to month. Compared with the old €59.97 price, that is about a 139% increase. A forum user pointed this out after seeing netcup advertise a maximum increase of 110%. The difference is simply that netcup's percentage uses the discounted 12-month price, not monthly billing.

G12.5 Root Servers can now be ordered for 1, 12 or 24 months. Compared with the monthly rate, the 12-month term is 13% cheaper and the 24-month term is 26% cheaper.

There are also a few lineup changes. RS 500 is new and gives you two dedicated cores for €10.86, although it only has 4 GB of RAM. RS 12000 and RS 16000 are back after disappearing from G12, but at the moment they have to be requested through a form rather than ordered normally.

## VPS G12.5 (x86)

The normal VPS range is easier to summarize: every comparable plan is 40% more expensive.

| Plan | vCores | RAM | Disk G12 → G12.5 | G12 | G12.5 (12 mo) | Change |
|------|--------|-----|------------------|-----|---------------|--------|
| VPS 500 G12.5 | 2 | 4 GB | 128 → 64 GB | €4.96 | €6.94 | +40% |
| VPS 1000 G12.5 | 4 | 8 GB | 256 → 128 GB | €8.71 | €12.18 | +40% |
| VPS 2000 G12.5 | 8 | 16 GB | 512 → 256 GB | €16.17 | €22.62 | +40% |
| VPS 4000 G12.5 | 12 | 32 GB | 1 TB → 512 GB | €27.23 | €38.11 | +40% |
| VPS 8000 G12.5 | 16 | 64 GB | 2 TB → 1 TB | €40.29 | €56.39 | +40% |

Storage changed in two ways. Capacity was halved, and the product page now says simply "SSD" instead of "NVMe". Netcup says the VPS storage is still flash-based and runs in RAID 6, but it no longer commits to NVMe specifically. Root Servers still list NVMe storage.

Netcup says the smaller disks are based on actual customer storage usage. That may be fine if your server has plenty of empty space, but it matters if you were already using most of the old allocation. Local Block Storage is still €0.012 per GB, so restoring the missing 128 GB on a VPS 1000 would cost roughly another €1.54 per month.

## VPS Lite, pico and nano

The cheaper VPS lines got a much smaller increase, and unlike the regular VPS range, their hardware allocations did not shrink.

| Plan | vCores | RAM | Disk | Old | New | Change |
|------|--------|-----|------|-----|-----|--------|
| VPS pico G11.5s | 1 | 1 GB | 30 GB SSD | €1.54 | €1.85 | ~20% |
| VPS nano G11.5s | 2 | 2 GB | 60 GB SSD | €2.59 | €3.10 | ~20% |
| VPS Lite 1 G12.5s | 2 | 4 GB | 80 GB SSD | €4.10 | €4.92 | +20% |
| VPS Lite 2 G12.5s | 4 | 8 GB | 160 GB SSD | €6.65 | €7.98 | +20% |
| VPS Lite 3 G12.5s | 8 | 16 GB | 320 GB SSD | €11.67 | €14.00 | +20% |
| VPS Lite 4 G12.5s | 16 | 32 GB | 640 GB SSD | €21.61 | €25.93 | +20% |

That changes the relative value of Lite quite a bit. Lite 2, for example, gives you 8 GB of RAM for €7.98, while VPS 1000 G12.5 with the same amount of RAM costs €12.18.

The trade-offs are still the familiar ones: Lite has a lower uptime guarantee, stricter traffic throttling and no hourly billing. But if none of those are a problem for your workload, the price gap is now much harder to ignore.

## ARM G12.5

Netcup has also brought ARM back, but the old ARM value proposition is mostly gone.

The G12.5 ARM range mirrors x86 VPS from VPS 500 through VPS 8000. Core counts, RAM, storage and prices are the same. The previous ARM G11 plans were quite different: they often had more cores and substantially more disk for less money.

A good example is VPS 1000. The old ARM G11 version had 6 cores, 8 GB RAM and 256 GB storage for €6.53. VPS 1000 ARM G12.5 has 4 cores, 8 GB RAM and 128 GB storage for €12.18.

ARM G11 had already been sold out since at least August, so the practical upside is that ARM servers can actually be ordered again. They are just no longer the obvious cheap option they used to be.

The exact CPU is still a little unclear. Nobody in the forum thread has confirmed it yet, while the product page continues to mention Ampere Altra Max.

## A few other things changed on the order page

Choosing a specific location now costs extra. The default option is **"No preference, Europe"**. If you want a particular datacenter, netcup adds a surcharge.

On a 24-month RS 1000 G12.5, choosing Nuremberg, Vienna or Manassas adds roughly €2.34 per month. Singapore adds about €13. On a 24-month VPS 1000 G12.5, a named European or US location is about €1.56 extra per month.

That is easy to miss if you are comparing only the headline prices, especially if the server has to be in a specific country for latency, data residency or compliance reasons.

IPv6-only orders still get a small discount. Removing the IPv4 address cuts €0.60 per month.

Webhosting is one of the few areas that did not move at all. Webhosting 1000 through 8000 still cost the same as they did in August. One funny side effect is that Webhosting 8000, at €11.07 net, used to cost more than an RS 1000. The cheapest 8 GB Root Server is now €18.26, so that comparison has flipped completely.

---

## Existing G12 customers are in a much better position

The good news is that netcup is not applying these new prices to existing contracts.

If you already have G12, your current price stays in place and netcup says renewals keep that price too. More importantly, normal upgrades within the same generation still use G12 pricing. An RS 1000 G12 can still be upgraded to an RS 2000 G12 at the old price, and netcup says the same principle applies to VPS, VPS Lite and VPS ARM.

Netcup deliberately kept some capacity on the older hardware so those upgrades remain possible.

There are a couple of catches. Promotional servers such as the ADV offers have generally never been upgradeable, and you cannot jump between generations. A G11 RS 1000 can move to another eligible G11 plan, for example, but not to G12.

The Tauschbörse, netcup's server exchange, is interesting now too. If somebody transfers a G12 server to you there, the old contract price goes with it. Of course, that only works when somebody is actually willing to give one up.

So if you have a G12 server sitting around and were about to cancel it, it is worth checking what replacing it would cost first. The same capacity may be much more expensive to buy again later.

## Why did netcup raise prices this much?

Windbichler's forum post puts most of the blame on memory prices.

Citing TrendForce data, he said DDR4 and DDR5 wholesale prices are around five times higher than they were a year ago, and that netcup is seeing a similar increase in its own purchasing costs. The second-hand market is not much help either: refurbished parts are scarce and prices are still moving upward.

He described four realistic choices for netcup: stop selling once existing stock runs out, oversell the hosts, keep prices low but cut specifications heavily, or raise prices to match the market. Netcup chose the last option.

The company also stopped taking new orders at G12 prices before every last piece of RAM was gone. That remaining stock is being reserved for upgrades by existing customers, which explains why G12 upgrades can continue even though G12 itself has vanished from the shop.

The post included two other useful details. Netcup does not expect to run Black Friday-style price promotions this year, and it plans to show new products at its community event in roughly a month.

This is already netcup's second price increase of 2026. On May 1, existing contracts went up 18.51% and new orders rose 24.33%. We covered that round in [Netcup vs Hetzner After the RAMpocalypse](/blog/netcup-vs-hetzner-after-rampocalypse-2026.html). The difference this time is that existing contracts are being left alone while new customers take a much larger increase.

## What about vouchers?

G12 vouchers are effectively finished because the products they belong to can no longer be ordered.

We cannot issue G12.5 vouchers yet either. Netcup has not added the new products to its partner program, so there is nothing we can generate on our side until that happens. Once they become available, they will appear on the [voucher list](/).

New-customer vouchers and Webhosting vouchers are not affected.

## Where this leaves the current lineup

If you already have a regular G12 server, keeping it is hard to argue with at the moment. The old contract price is now genuinely valuable, and eligible upgrades inside G12 are worth checking before moving to G12.5.

For smaller servers, VPS Lite has become much more attractive simply because it only took a 20% increase. Lite 1 is €4.92 for 4 GB RAM. The regular VPS 500 G12.5 is €6.94, although that does get you the stronger VPS service level and storage setup.

If dedicated CPU cores are the reason you use netcup, the new RS 500 G12.5 is at least an interesting addition. At €10.86 it gives you two dedicated cores, but only 4 GB of RAM, so it fits a narrower type of workload than the old RS 1000 did.

And if you are comparing netcup with another provider, re-check the prices rather than relying on an older comparison. Netcup is not the only company dealing with higher hardware costs; Hetzner has already changed prices several times this year as well. We covered its third 2026 increase in [our June breakdown](/blog/hetzner-third-price-hike-june-2026.html).

The market moved quickly enough that a comparison from even a few months ago may now be wrong.

*All prices are as netcup lists them net (incl. 0% VAT), verified on 23 September 2026.*
