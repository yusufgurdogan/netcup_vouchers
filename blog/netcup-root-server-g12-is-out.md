---
title: Netcup Root Servers G12 is out. First Look, Specs & Buyer’s Guide
date: 2025-09-10
author: Yusuf Gürdoğan
description: Hands-on overview of Netcup’s new Generation 12 (G12) root servers with AMD EPYC™ 9645, DDR5 ECC, NVMe, and 2.5 Gbps. How G12 compares to G11.
tags: netcup, root server, G12, epyc 9645, vps, benchmark, guide
---

# Netcup's New G12 Root Servers: What You Need to Know

So Netcup just dropped their Generation 12 root servers, and honestly, they look pretty solid. These bad boys are running AMD's EPYC 9645 processors, DDR5 ECC RAM, NVMe SSDs, and 2.5 Gbps networking. You can get them in Nuremberg, Vienna, or Manassas.

## The Quick Version

Here's what's new: They've upgraded to AMD's EPYC 9645 "Turin" processors across the entire lineup. You still get guaranteed resources (dedicated CPU cores and RAM), snapshots, hardware RAID, 99.9% uptime promise, and that sweet 2.5 Gbps network connection.

You can deploy these in three locations: Nuremberg in Germany, Vienna in Austria, or Manassas in the US. The entry-level RS 1000 G12 starts at €8.74 per month and there's currently a launch deal running.

## What's Available

**RS 1000 G12**: 4 dedicated cores, 8 GB DDR5 ECC RAM, 256 GB NVMe storage. This is your entry-level option with all the platform goodies like 2.5 Gbps networking, snapshots, and hardware RAID. There's currently a launch deal on this one.

**RS 2000 G12**: Steps up to 8 dedicated cores, 16 GB RAM, and 512 GB storage. Good for mid-sized applications that need more juice.

**RS 4000 G12**: 12 dedicated cores, 32 GB RAM, and 1 TB of storage. Perfect if you're running databases or data-heavy stuff.

**RS 8000 G12**: 16 dedicated cores, 64 GB RAM, and 2 TB storage. Great for high-performance application servers and large databases.

**RS 12000 G12**: 20 dedicated cores, 96 GB RAM, and 3 TB storage. Serious horsepower for demanding applications.

**RS 16000 G12**: The real flagship with 24 dedicated cores, 128 GB RAM, and 4 TB storage. This is for when you need maximum performance.

When you're ordering, you can pick your region. If you choose "no preference Europe," they'll stick you in either Vienna or Nuremberg depending on what's available.

## How's This Different from G11?

The big change is the CPU jump from the EPYC 9634 in G11 to the EPYC 9645 in G12. You're looking at better single-thread performance and improved efficiency. Everything else you loved about the platform is still there: snapshots using copy-on-write, image import/export, hardware RAID on the SSDs, that 2.5 Gbps network card, and the 99.9% uptime guarantee.

The regions haven't changed either - still Nuremberg, Vienna, and Manassas, with the European locations connected via Anexia's backbone.

## Which One Should You Get?

**RS 1000 G12** is great for smaller projects, basic web and email hosting, light database work, or staging environments. Perfect entry-level option.

**RS 2000 G12** works well for medium-sized web and email servers, more complex web applications, or application servers.

**RS 4000 G12** is ideal for large enterprise platforms, extensive web applications, and data-intensive scenarios. Great as a database server.

**RS 8000 G12** offers high performance for demanding application servers, web and mail servers, plus extensive databases.

**RS 12000 G12** and **RS 16000 G12** are for when you need serious computing power for the most demanding applications and largest databases.

If you just need occasional CPU bursts and want something cheaper, their VPS offerings might work, but remember those don't guarantee CPU resources. Root servers give you dedicated cores for consistent performance.

## Deals & Coupons

For recent coupons for G12 and other products—including offers where you can get a month free: [netcupvoucher.com](https://netcupvoucher.com).

## Should You Upgrade from G11?

If your current setup is CPU-limited or you're planning a long-term deployment, G12 is definitely worth it for the EPYC 9645 upgrade. It's faster and more efficient. But if your G11 server is humming along fine and properly sized for your needs, you might want to wait until your next maintenance window or until there's a good promotion that makes the migration cost-effective.

## Getting Started

Pick the region closest to your users (Nuremberg or Vienna for Europe, Manassas for US compliance needs). If you're not sure what size to get, the RS 2000 G12 or RS 4000 G12 are good middle grounds for most modern web applications - choose based on whether you need 8 or 12 cores. You can always add Local Block Storage later if you need more SSD space (up to 8 TB for root servers).

## The Technical Specs

Here's what you're getting under the hood:
- **CPU**: AMD EPYC 9645 processors
- **Memory**: DDR5 ECC RAM
- **Storage**: NVMe SSDs with hardware RAID
- **Network**: 2.5 Gbps network cards with anti-DDoS protection
- **Virtualization**: KVM with snapshots, web VNC console, and image import/export

## Bottom Line

Netcup's G12 series brings a nice platform refresh with the EPYC 9645 upgrade while keeping their root server value proposition intact. With six different tiers ranging from the entry-level RS 1000 G12 to the monster RS 16000 G12 with 24 cores and 128 GB RAM, there's something for every workload size. If you've outgrown your G11 setup or you're deploying something new, G12 should definitely be on your shortlist. The combination of guaranteed resources, solid hardware, and reasonable pricing makes these worth considering for serious workloads.