---
title: Netcup VPS G12 is Here. First Look, Benchmarks & Complete Buyer's Guide
date: 2026-02-03
author: Yusuf Gürdoğan
description: Hands-on overview of Netcup's new Generation 12 (G12) VPS lineup with AMD EPYC 9645, DDR5 ECC, NVMe, and 2.5 Gbps. How VPS G12 compares to G11, benchmarks included.
tags: netcup, vps, G12, epyc 9645, virtual server, benchmark, guide
---

# Netcup's New VPS G12: Everything You Need to Know

Following the successful launch of their G12 Root Servers back in September 2025, Netcup has now rolled out Generation 12 for their VPS lineup. These new virtual servers are running on the same AMD EPYC 9645 "Turin" hardware platform that powers the Root Servers, bringing Zen 5 architecture to the shared hosting tier.

## The Quick Rundown

Here's what's changed: The entire VPS lineup has been upgraded to AMD's EPYC 9645 processors (up from the EPYC 9634 in G11), DDR5 ECC RAM, NVMe storage, and 2.5 Gbps networking. You also get a new integrated firewall feature and expanded location options including Amsterdam and Singapore.

The VPS 1000 G12 starts the standard lineup, and there's currently a launch special running—but heads up, it ends today (February 3, 2026).

## What's Available

**VPS 500 G12**: 2 vCores, 4 GB DDR5 ECC RAM, 128 GB NVMe. The budget-friendly entry point for small projects and development environments. Great for personal websites, learning, and lightweight services.

**VPS 1000 G12**: 4 vCores, 8 GB DDR5 ECC RAM, 256 GB NVMe. The sweet spot for most users. Handles medium-sized websites, web applications, small databases, and mail servers without breaking a sweat.

**VPS 2000 G12**: 8 vCores, 16 GB DDR5 ECC RAM, 512 GB NVMe. Business-grade performance for e-commerce platforms, content management systems, and medium-sized databases.

**VPS 4000 G12**: 12 vCores, 32 GB DDR5 ECC RAM, 1 TB NVMe. Professional tier for compute-intensive applications, large databases, and high-traffic websites.

**VPS 8000 G12**: 16 vCores, 64 GB DDR5 ECC RAM, 2 TB NVMe. The flagship VPS for enterprise workloads, big data processing, and large-scale applications.

All plans come with KVM virtualization, DDoS protection, and your choice of locations: Nuremberg (Germany), Vienna (Austria), Amsterdam (Netherlands), Manassas (USA), or Singapore.

## The Hardware: AMD EPYC 9645 "Turin"

The star of the show is AMD's EPYC 9645 processor. This is a 5th-generation EPYC chip built on Zen 5 architecture with a 4nm/3nm process. Compared to the EPYC 9634 (Zen 4, 5nm) in G11:

| Spec | EPYC 9645 (G12) | EPYC 9634 (G11) |
|------|-----------------|-----------------|
| Cores/Threads | 96 / 192 | 84 / 168 |
| Architecture | Zen 5 (Turin) | Zen 4 (Genoa) |
| Process | 3nm/4nm | 5nm |
| Base Clock | 2.3 GHz | 2.25 GHz |
| Max Boost | 3.7 GHz | 3.7 GHz |
| Memory Bandwidth | 480 GB/s | 461 GB/s |

The Zen 5 architecture brings improved IPC (instructions per clock), which translates to better single-threaded performance. Memory bandwidth also gets a bump to 480 GB/s. In real-world terms: your applications run faster, especially single-threaded workloads.

## Benchmark Results

I pulled benchmark data from VPSBenchmarks for the VPS 1000 G12 Pro (November 2025):

### CPU Performance (Geekbench 6)
- **Single-Core**: 1615
- **Multi-Core**: 5412

### Disk I/O (fio)
| Block Size | Read | Write | Total |
|-----------|------|-------|-------|
| 4k | 185.8 MB/s | 186.3 MB/s | 372.1 MB/s |
| 64k | 997.4 MB/s | 1002.7 MB/s | 2000.1 MB/s |
| 512k | 906.7 MB/s | 954.9 MB/s | 1861.7 MB/s |
| 1m | 1279.7 MB/s | 1364.9 MB/s | 2644.6 MB/s |

### Network Performance (iperf3)
- **Upload**: 2.7 Gbps (Amsterdam)
- **Download**: 2.4 Gbps (Amsterdam)

The disk performance is excellent—you're looking at nearly 2.6 GB/s combined read/write at the 1MB block size. Network performance also hits the advertised 2.5 Gbps mark. CPU scores are competitive for a VPS at this price point.

Community benchmarks from users report seeing 1000-1100 events/second on G11 VPS versus up to 4000 events/second on G12 (for CPU-intensive tests)—that's a significant jump.

## G12 vs G11: What Changed?

**CPU**: EPYC 9634 → EPYC 9645. More cores, better IPC, more efficient.

**RAM**: DDR5 ECC across the board (G11 also had DDR5 ECC, so this remains consistent).

**Storage**: NVMe SSDs continue from G11, still with hardware RAID.

**Network**: 2.5 Gbps unchanged, but you now get more flexible options—IPv4+IPv6, IPv6-only, or Cloud vLAN only.

**New Features**:
- Integrated firewall (new in G12!)
- Singapore datacenter now available
- Amsterdam datacenter now available
- Flexible public network configuration

**Pricing**: VPS 1000 G12 is about €2.42 more per month (12-month contract) compared to G11. IPv4 also costs €0.50 extra if you want a dedicated address.

**Migration**: Direct upgrade from G11 to G12 isn't possible. You'll need to order a new G12 plan and migrate your data manually.

## VPS vs Root Server: Which Should You Get?

This is the big question. Both VPS G12 and RS G12 run on the same EPYC 9645 hardware, but there's a key difference:

**Root Servers (RS)**: Dedicated CPU cores. Your 4 cores are exclusively yours.

**VPS**: Shared vCores. Your 4 vCores share the host with other tenants.

What does this mean in practice?

- **Consistent workloads**: Root Server wins. You get guaranteed performance that doesn't fluctuate based on neighbors.
- **Bursty workloads**: VPS can be fine. If you only need occasional CPU spikes, a VPS lets you access more burst capacity than your allocated cores.
- **Price-sensitive projects**: VPS is cheaper for the same specs on paper.

Some users report that their VPS performance varies depending on the host node they land on. Vienna datacenter has a reputation for more consistent performance. If you're ordering during a big promotion (Black Friday, etc.), you might land on a busier node.

For most web applications, databases, and general workloads, the VPS G12 will be perfectly fine. But if you're running something CPU-intensive 24/7 (CI/CD pipelines, encoding, game servers), consider the RS G12 for guaranteed resources.

## Which Plan Should You Get?

**VPS 500 G12**: Personal websites, small blogs, development environments, learning projects. If you're just getting started or need a cheap box for testing, this is it.

**VPS 1000 G12**: The most popular choice. Medium websites, WordPress, small e-commerce, mail servers, small databases. Good all-rounder.

**VPS 2000 G12**: Busier websites, multiple sites on one server, medium databases, business applications. When VPS 1000 isn't quite enough.

**VPS 4000 G12**: Large web applications, data-intensive workloads, larger databases, machine learning development. Serious compute needs.

**VPS 8000 G12**: Enterprise applications, big data, large-scale databases, high-performance requirements. Maximum VPS power.

If you need guaranteed CPU performance, look at the corresponding Root Server tier instead (RS 1000 G12, etc.).

## Launch Special (Ends Today!)

Netcup is running a launch promotion for VPS G12:

**VPS 1000 G12 with 12-month term at Nuremberg = 2 months free**

This offer ends February 3, 2026—that's today. If you've been considering a VPS, now's a good time to jump in.

## Deals & Coupons

For current vouchers on G12 VPS and other products, check out [netcupvoucher.com](https://netcupvoucher.com). There are codes for free months on VPS plans ranging from VPS 1000 G12 up to VPS 8000 G12.

## Should You Upgrade from G11?

If your G11 VPS is running fine and you're not hitting CPU limits, there's no urgent need to switch. G11 is still solid hardware.

But if any of these apply:
- You're CPU-limited and want more single-thread performance
- You need the new locations (Amsterdam, Singapore)
- You want the integrated firewall feature
- Your current contract is ending and you're renewing anyway
- There's a good promotion that makes migration worthwhile

...then G12 makes sense. Just remember you can't upgrade in-place—you'll need to order new and migrate.

## Getting Started

1. **Pick your plan** based on the specs above
2. **Choose your location**: Nuremberg or Vienna for Europe, Amsterdam for Western Europe/UK, Manassas for US, Singapore for Asia-Pacific
3. **Decide on contract length**: 12-month contracts are cheapest per month, hourly billing available if you need flexibility
4. **IPv4 or IPv6-only**: IPv6-only saves €0.50/month if you don't need IPv4

For most users, VPS 1000 G12 or VPS 2000 G12 at the Nuremberg or Vienna location is the sweet spot. Start there and upgrade later if needed—you can upgrade within the same generation through the control panel.

## The Technical Specs Summary

| Plan | vCores | RAM | Storage | Network |
|------|--------|-----|---------|---------|
| VPS 500 G12 | 2 | 4 GB DDR5 ECC | 128 GB NVMe | 2.5 Gbps |
| VPS 1000 G12 | 4 | 8 GB DDR5 ECC | 256 GB NVMe | 2.5 Gbps |
| VPS 2000 G12 | 8 | 16 GB DDR5 ECC | 512 GB NVMe | 2.5 Gbps |
| VPS 4000 G12 | 12 | 32 GB DDR5 ECC | 1 TB NVMe | 2.5 Gbps |
| VPS 8000 G12 | 16 | 64 GB DDR5 ECC | 2 TB NVMe | 2.5 Gbps |

All plans include: KVM virtualization, DDoS protection, integrated firewall, web VNC console, hourly billing option.

## Bottom Line

Netcup's VPS G12 brings their virtual server lineup up to the same EPYC 9645 platform that powers their Root Servers. You get better single-thread performance from Zen 5, the new integrated firewall, and more location options including Singapore and Amsterdam. The price increase of roughly €2.42/month for VPS 1000 is noticeable but not unreasonable given the hardware upgrade.

If you're starting fresh, G12 is the way to go—G11 is being phased out anyway. If you're already on G11 and happy, no rush to migrate unless you need the extra performance or new features. The launch special ending today makes it a good time to jump in if you've been on the fence.

For workloads that need guaranteed CPU, remember that the RS G12 Root Server line gives you dedicated cores for about €3-4 more per month at the base tier. For everyone else, VPS G12 offers excellent bang for your buck with modern hardware and solid performance.
