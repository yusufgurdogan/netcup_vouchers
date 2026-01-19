---
title: Netcup vs Hetzner for Budget Users - The Complete 2026 Comparison
date: 2026-01-19
author: Yusuf Gürdoğan
description: Head-to-head comparison of Netcup and Hetzner servers under €30/month. Which provider offers the best value for self-hosters, developers, and small businesses?
tags: netcup, hetzner, vps, root server, comparison, budget, 2026
---

# Netcup vs Hetzner for Budget Users: The Complete 2026 Comparison

If you're looking to spend around €10/month on a server in Europe, two names dominate every Reddit thread and forum discussion: **Netcup** and **Hetzner**. Both are German providers with solid reputations, but they take very different approaches to budget hosting.

This guide covers everything you need to know to make the right choice.

---

## The TL;DR

| Category | Winner | Why |
|----------|--------|-----|
| **Raw value per euro** | Netcup | 4 dedicated cores for €8.74 is unbeatable |
| **Flexibility & UX** | Hetzner | Hourly billing, modern UI, no contracts |
| **CPU performance** | Netcup | EPYC 9645 + dedicated cores = consistent power |
| **Network speed** | Hetzner | 10 Gbps shared vs 2.5 Gbps dedicated |
| **Traffic allowance** | Netcup | ~80-120 TB vs 20 TB |
| **Ease of signup** | Hetzner | Simpler verification process |
| **Sustained workloads** | Netcup | No throttling on Root Servers |

**Bottom line:** If you want maximum performance per euro, **Netcup RS 1000 G12** is the budget king. If you prefer hourly billing and a polished cloud experience, **Hetzner Cloud** is excellent, but understand the throttling limits on shared plans.

---

## What €10/Month Gets You

Let's compare the most relevant options for budget users:

### Netcup Root Servers G12 (Dedicated Cores)

| Plan | Cores | RAM | Storage | Price |
|------|-------|-----|---------|-------|
| **RS 1000 G12** | 4 dedicated | 8 GB DDR5 ECC | 256 GB NVMe | **€8.74/mo** |
| **RS 2000 G12** | 8 dedicated | 16 GB DDR5 ECC | 512 GB NVMe | **€14.58/mo** |
| **RS 4000 G12** | 12 dedicated | 32 GB DDR5 ECC | 1 TB NVMe | **€27.08/mo** |

All running AMD EPYC 9645 "Turin" processors (Zen 5, 4nm) with up to 2.5 Gbps networking.

### Hetzner Cloud (Shared vCPUs)

| Plan | vCPUs | RAM | Storage | Traffic | Price |
|------|-------|-----|---------|---------|-------|
| **CX22** | 2 shared | 4 GB | 40 GB | 20 TB | **€3.49/mo** |
| **CX33** | 4 shared | 8 GB | 80 GB | 20 TB | **€5.49/mo** |
| **CX43** | 8 shared | 16 GB | 160 GB | 20 TB | **€9.49/mo** |
| **CPX31** | 4 shared | 8 GB | 160 GB | 3 TB | **€16.49/mo** |

### Hetzner Cloud (Dedicated vCPUs)

| Plan | vCPUs | RAM | Storage | Traffic | Price |
|------|-------|-----|---------|---------|-------|
| **CCX13** | 2 dedicated | 8 GB | 80 GB | 1 TB | **€12.49/mo** |
| **CCX23** | 4 dedicated | 16 GB | 160 GB | 2 TB | **€24.49/mo** |

### The Key Insight

At the ~€10 price point, you're comparing:

- **Netcup RS 1000 G12** (€8.74): 4 dedicated cores, 8 GB RAM, 256 GB NVMe
- **Hetzner CX43** (€9.49): 8 shared vCPUs, 16 GB RAM, 160 GB NVMe
- **Hetzner CCX13** (€12.49): 2 dedicated cores, 8 GB RAM, 80 GB NVMe

Netcup gives you **twice the dedicated cores** as Hetzner's CCX13 for **€3.75 less**. That's the value proposition in a nutshell.

---

## G12 Benchmarks: Real Numbers

The Netcup G12 series uses AMD EPYC 9645 "Turin" processors (Zen 5 architecture, 4nm process), an upgrade from G11's EPYC 9634 (Zen 4, 5nm).

### Geekbench 6 Scores

| Plan | Single-Core | Multi-Core | Source |
|------|-------------|------------|--------|
| **RS 1000 G12** (4 cores) | 1999-2221 | 6314-7218 | VPSBenchmarks |
| **RS 2000 G12** (8 cores) | 2250-2298 | 11770-11794 | VPSBenchmarks |
| **RS 4000 G12** (12 cores) | ~1957 | ~11080 | VPSBenchmarks |
| Hetzner CPX31 (4 shared) | 1200-1400 | 4000-4500 | VPSBenchmarks |
| Hetzner CCX13 (2 dedicated) | ~1400 | ~2800 | Geekbench Browser |

The RS 1000 G12 scores around **2000+ single-core**, which is roughly **40-50% faster** than Hetzner's shared CPX plans and significantly ahead of the older EPYC generations Hetzner uses.

### G12 vs G11 Comparison

| Metric | G11 (EPYC 9634) | G12 (EPYC 9645) | Improvement |
|--------|-----------------|-----------------|-------------|
| RS 1000 Single-Core | ~1841 | ~2000-2221 | +8-21% |
| RS 1000 Multi-Core | ~5449 | ~6314-7218 | +16-32% |
| RS 2000 Single-Core | ~1796 | ~2250-2298 | +25-28% |
| RS 2000 Multi-Core | ~8611 | ~11770-11794 | +37% |

### Disk I/O (fio benchmarks)

| Plan | 4K Random Read | 4K Random Write | Sequential Read |
|------|----------------|-----------------|-----------------|
| **RS 1000 G12** (best case) | 373 MB/s (93K IOPS) | 374 MB/s (93K IOPS) | 2.3 GB/s |
| **RS 2000 G12** (Manassas) | 369 MB/s (92K IOPS) | 370 MB/s (92K IOPS) | 1.8 GB/s |
| Hetzner CX43 | 137 MB/s (34K IOPS) | 137 MB/s (34K IOPS) | 1.7 GB/s |
| Hetzner CCX13 | 134 MB/s (33K IOPS) | 134 MB/s (33K IOPS) | 1.3 GB/s |

Netcup's G12 NVMe storage delivers roughly **2.5-3x the random I/O performance** of Hetzner's offerings.

---

## CPU Performance: Dedicated vs Shared

This is where many budget buyers get surprised.

### Netcup Root Servers = Guaranteed Resources

Netcup's Root Servers (RS line) give you **dedicated CPU cores**. Your 4 cores on the RS 1000 G12 are yours alone. No noisy neighbors, no throttling, no surprises.

### Hetzner Shared Plans = Hidden Throttling

Here's something Hetzner doesn't advertise prominently: **shared vCPU plans are throttled**.

From community research and Hetzner's own documentation:
- **CX series (Intel/older AMD):** Limited to ~20% sustained CPU per vCPU
- **CPX series (AMD EPYC Genoa):** Limited to ~33% sustained CPU per vCPU
- **CAX series (ARM):** Limited to ~30% sustained CPU per vCPU

What this means: If you have a CX43 with 8 vCPUs and run 100% CPU load continuously, you'll eventually be throttled to the equivalent of ~1.6-2.6 cores of sustained performance.

Hetzner also **hides CPU steal time** from customers. You won't see it in your monitoring. They use a proprietary "active management system" instead.

### Hetzner Dedicated Plans = No Throttling

Hetzner's CCX series has dedicated vCPUs with no throttling. But at €12.49 for 2 cores (CCX13) vs Netcup's €8.74 for 4 cores, the math favors Netcup significantly.

---

## Datacenter Locations

### Netcup Locations

| Location | Country | Available Plans | Notes |
|----------|---------|-----------------|-------|
| **Nuremberg** | Germany | All G12 | Primary EU datacenter |
| **Vienna** | Austria | All G12 | Often recommended for best CPU consistency |
| **Manassas** | USA (East) | All G12 | Good for US users |
| **Singapore** | Singapore | RS 1000-8000 G12 | APAC coverage (newer) |

The smaller G12 plans (RS 1000 through RS 8000) are available in all four locations including Singapore. The larger RS 12000 and RS 16000 are available in Germany, Austria, and USA only.

**Pro tip from the community:** Vienna tends to have the most consistent CPU performance. Some users report Nuremberg nodes can get crowded during promotions.

### Hetzner Locations

| Location | Country | Available Plans | Notes |
|----------|---------|-----------------|-------|
| **Falkenstein** | Germany | All Cloud | Owned datacenter |
| **Nuremberg** | Germany | All Cloud | Owned datacenter |
| **Helsinki** | Finland | All Cloud | Owned datacenter |
| **Ashburn** | USA (East) | CPX, CCX only | Colocation |
| **Hillsboro** | USA (West) | CPX, CCX only | Colocation |
| **Singapore** | Singapore | CPX, CCX only | Colocation |

Hetzner has more total locations, but the budget CX series is only available in EU datacenters.

---

## Network & Traffic

### Speed

- **Netcup:** 2.5 Gbps dedicated port (or 1 Gbps if you prefer)
- **Hetzner:** 10 Gbps shared connection

In practice, Hetzner's shared 10 Gbps can burst higher (users report 6-8 Gbps in iperf3 tests), but single-VM throughput typically caps around 2-3 Gbps anyway. Netcup's 2.5 Gbps is dedicated to your server.

### Netcup Network Performance (G12)

| Destination | Download | Upload |
|-------------|----------|--------|
| Amsterdam | ~2,400 Mbps | ~2,800 Mbps |
| London | ~2,400 Mbps | ~2,800 Mbps |
| New York | ~2,000 Mbps | ~2,400 Mbps |

### Traffic Allowances

| Provider | Included Traffic | Overage |
|----------|------------------|---------|
| Netcup | ~80-120 TB/month (soft cap) | Throttled to 200-300 Mbps |
| Hetzner (EU) | 20 TB/month | €1/TB |
| Hetzner (US) | 1-8 TB/month | €1/TB |

For most users, 20 TB is plenty. But if you're running a media server, CDN edge, or anything bandwidth-heavy, Netcup's generous allowance is a major advantage.

---

## Features Comparison

| Feature | Netcup | Hetzner |
|---------|--------|---------|
| **Snapshots** | Included (copy-on-write) | €0.011/GB/month |
| **Backups** | Via snapshots | 20% of instance price |
| **DDoS Protection** | Included (up to 2 Tbps) | Included |
| **Firewall** | Included | Included |
| **Private Networks** | VLAN available | vSwitch included |
| **API** | Yes (SCP) | Yes (excellent) |
| **Mobile App** | Yes (SCP App) | No official app |
| **Custom ISO** | Yes | Yes |
| **Rescue System** | Yes | Yes |
| **IPv4** | 1 included (optional) | 1 included |
| **IPv6** | /64 subnet | /64 subnet |
| **Block Storage** | €0.0119/GB (up to 8 TB) | €0.044/GB |
| **Satisfaction Guarantee** | 30 days | None |

Netcup also offers flexible network configuration on G12: you can choose IPv4+IPv6, IPv6 only, or Cloud vLAN only, which can save costs if you don't need a public IPv4.

---

## The Gotchas

### Netcup Gotchas

1. **Contract terms:** Check the billing period before ordering. Some plans default to 12-month terms for the best pricing, while others offer monthly billing. The 30-day satisfaction guarantee lets you try risk-free.

2. **Verification process:** Netcup uses Stripe for identity verification. Most users pass quickly, but some report delays depending on their country or document type.

3. **Performance variability:** Some users on forums report that servers ordered during big promotions (like Black Friday) can land on busier nodes. Vienna datacenter is often recommended for most consistent performance.

### Hetzner Gotchas

1. **Hidden throttling:** Shared plans throttle sustained CPU usage to 20-33% per vCPU. This isn't clearly disclosed upfront.

2. **CPU steal hidden:** You can't see if you're affected by noisy neighbors. Hetzner doesn't expose steal time metrics.

3. **Traffic limits vary by region:** EU locations get 20 TB, but US locations only get 1-8 TB included.

4. **Invoice quirks:** Invoices under €5 roll over to next month. There's a €17.65 fee to modify issued invoices.

---

## Real-World Community Opinions

From Reddit, LowEndTalk, and Hacker News (2024-2026):

**Pro-Netcup:**
> "In terms of value, Netcup feels like they're now ahead of Hetzner"

> "4 dedicated cores, 8GB RAM for ~€9/month is insane value"

> "443 days uptime on my Netcup VDS, no issues"

**Pro-Hetzner:**
> "Rock solid, 0 downtime records, never had a single bad day in 4 years"

> "The API and hourly billing make Hetzner unbeatable for dynamic workloads"

> "Much easier signup process"

**The consensus:** Both are excellent providers. Netcup wins on raw value; Hetzner wins on polish and flexibility.

---

## Which Should You Choose?

### Choose Netcup RS 1000 G12 (€8.74/mo) if you:

- Want **maximum performance per euro**
- Need **dedicated CPU cores** for consistent performance
- Run **sustained workloads** (databases, game servers, CI/CD, self-hosted apps)
- Need **lots of bandwidth** (media servers, backups, file sync)
- Want to try risk-free with the **30-day satisfaction guarantee**
- Are in **Asia-Pacific** and want the Singapore location

### Choose Hetzner CX43 (€9.49/mo) if you:

- Prefer **hourly billing** and no commitment
- Want a **modern, polished cloud interface**
- Only need **burst performance** (not sustained 100% CPU)
- Run **variable workloads** that scale up and down
- Want access to **ARM servers** (CAX series)

### Choose Hetzner CCX13 (€12.49/mo) if you:

- Want dedicated cores but prefer Hetzner's ecosystem
- Need **only 2 cores** with guaranteed performance
- Value Hetzner's API and automation tools

---

## Quick Specs Summary

| Spec | Netcup RS 1000 G12 | Hetzner CX43 | Hetzner CCX13 |
|------|-------------------|--------------|---------------|
| **Price** | €8.74/mo | €9.49/mo | €12.49/mo |
| **CPU** | 4 dedicated (EPYC 9645) | 8 shared | 2 dedicated |
| **RAM** | 8 GB DDR5 ECC | 16 GB | 8 GB |
| **Storage** | 256 GB NVMe | 160 GB NVMe | 80 GB NVMe |
| **Traffic** | ~80-120 TB | 20 TB | 1 TB |
| **Network** | 2.5 Gbps | 10 Gbps shared | 10 Gbps shared |
| **GB6 Single** | ~2000-2200 | ~1200 | ~1400 |
| **Locations** | DE, AT, US, SG | DE, FI | DE, FI, US, SG |

---

## The Verdict

For budget-conscious users who want to **self-host anything** (a media server, development environment, small SaaS, game server, or personal cloud), the **Netcup RS 1000 G12 at €8.74/month** is genuinely hard to beat.

You're getting 4 dedicated AMD EPYC 9645 cores, 8 GB of DDR5 ECC RAM, 256 GB NVMe, and 2.5 Gbps networking for less than the price of a few coffees. That's enough power to run Docker, databases, and multiple websites without breaking a sweat.

Hetzner remains excellent, especially if you value flexibility, hourly billing, and a great cloud interface. But when you're counting euros and want raw performance, Netcup's G12 Root Servers are the budget king in 2026.

---

## Current Deals

Looking for voucher codes to save even more?

- **[Netcup Vouchers](https://netcupvoucher.com)** - RS 1000 G12 with up to 2 months free, plus deals on VPS, Root Servers, and Webhosting

Happy hosting!
