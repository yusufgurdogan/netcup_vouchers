---
title: Netcup Root Servers vs VPS — Complete G11 Line-up Benchmarked  
date: 2025-04-29
author: Yusuf Gürdoğan
description: Netcup Root Server and VPS comparison
tags: netcup, vps, root server, benchmark
---

# Netcup Root Servers vs VPS — Complete G11 Line-up Benchmarked  
*Updated 29 April 2025*

Netcup’s **Generation 11** servers combine AMD EPYC ™ 9634 CPUs, DDR5 ECC RAM and blazing-fast NVMe storage across two product families:

* **Root Servers (RS)** – virtualised on KVM, but with *dedicated* CPU cores, RAM, disk-I/O and 2.5 Gb NICs.  
* **VPS (vServer)** – also KVM, but on shared hosts; resources are “burstable” rather than guaranteed.

Below you’ll find a one-page comparison of **every Netcup voucher offer currently listed on NetcupVoucher.com**, complete with real-world benchmarks (Geekbench 6, fio, iperf3), use-case notes and direct links to each deal.

---

## Quick-Look Comparison Table

| Plan | vCores | RAM | NVMe | Geekbench 6<br>(single / multi) | fio Disk I/O<br>(read / write, MiB s-¹) | iperf3 Net | Best For |
|------|-------:|----:|------:|--------------------------|------------------------------|--------------|-----------|
| [RS 1000 G11](https://netcupvoucher.com/rs-1000-g11) | 4 | 8 GB | 512 GB | **1 950 / 5 650** | **398 / 400** | 2.3 / 2.8 Gbps | Small prod sites, dev boxes |
| [RS 2000 G11](https://netcupvoucher.com/rs-2000-g11) | 8 | 16 GB | 512 GB | 1 950 / 6 280 | 440 / 444 | 2.4 / 2.7 Gbps | Mid-size apps, CI runners |
| &nbsp;└─ [RS 2000 G11 iv SE MNZ](https://netcupvoucher.com/rs-2000-g11-iv-se-mnz) | 8 | 16 GB | 512 GB | **2 020 / 10 820** | **465 / 467** | 2.4 / 2.8 Gbps | Same HW, Mainz DC |
| &nbsp;└─ [RS 2000 G11 iv SE VIE](https://netcupvoucher.com/rs-2000-g11-iv-se-vie) | 8 | 16 GB | 512 GB | 1 950 / 6 277 | 441 / 444 | 2.4 / 2.7 Gbps | Same HW, Vienna DC |
| [RS 4000 G11](https://netcupvoucher.com/rs-4000-g11) | 12 | 32 GB | 1 024 GB | 1 894 / 11 933 | 372 / 374 | 2.4 / 2.7 Gbps | Heavy web, DB, build farms |
| [RS 8000 G11](https://netcupvoucher.com/rs-8000-g11) | 16 | 64 GB | 2 048 GB | **1 956 / 15 158** | 390 / 392 | 2.4 / 2.8 Gbps | HPC, analytics, big AI CPU inference |
| [VPS 1000 G11](https://netcupvoucher.com/vps-1000-g11) | 4 | 8 GB | 512 GB | 953 / 3 114 | 359 / 361 | 2.4 / 2.8 Gbps | Dev & test, low-traffic sites |
| [VPS 2000 G11](https://netcupvoucher.com/vps-2000-g11) | 8 | 16 GB | 1 024 GB | 1 824 / 10 220 | **129 / 129*** | 2.4 / 2.8 Gbps | Memory-heavy CMS, bursty load |
| [VPS 3000 G11](https://netcupvoucher.com/vps-3000-g11) | 10 | 24 GB | 1 024 GB | 1 642 / 9 931 | 297 / 299 | 2.4 / 2.6 Gbps | All-rounder, micro-services |
| [VPS 4000 G11](https://netcupvoucher.com/vps-4000-g11) | 12 | 32 GB | 1 024 GB | **1 787 / 12 772** | **413 / 415** | 2.4 / 2.7 Gbps | Production apps, game servers |
| [VPS 6000 G11](https://netcupvoucher.com/vps-6000-g11) | 14 | 48 GB | 1 536 GB | *n/a* | *n/a* | *n/a* | Big DBs, memory-hungry services |
| [VPS 8000 G11](https://netcupvoucher.com/vps-8000-g11) | 8 | 47 GB | 512 GB | *n/a* | *n/a* | *n/a* | In-memory caches, AI models |

\* Low disk score on VPS 2000 is a known throttle on that tier.

---

## 1.  Root Servers — Dedicated Muscle

### RS 1000 G11  
Entry tier: 4 EPYC cores, 8 GB RAM and ~400 MiB s-¹ NVMe throughput. Perfect for small production sites, Docker labs or a personal CI runner.

### RS 2000 G11 (plus MNZ / VIE variants)  
A true sweet-spot: 8 cores + 16 GB. The Mainz variant consistently benches **10 k+ multi-core** and near-500 MiB s-¹ disk. Choose the datacentre closest to your audience.

### RS 4000 G11  
12 cores, 32 GB RAM and 1 TB NVMe. Handles large MySQL clusters, build farms or several high-traffic sites without breaking sweat.

### RS 8000 G11  
The flagship: 16 dedicated cores, 64 GB RAM, 2 TB NVMe. Geekbench6 multi over **15 k** rivals Hetzner’s AX101 yet costs less per core. Ideal for CPU-bound AI inference (e.g. Llama-2-13B int8) or heavy analytics workloads.

> **Why choose a Root Server?**  
> You get *guaranteed* access to every core, full RAM bandwidth and consistent 2.5 GbE network. Great for predictable throughput or mission-critical jobs.

---

## 2.  VPS (vServer) — Flexible & Budget-Friendly

### VPS 1000 G11  
The classic “nano” box for staging, hobby projects or a VPN. Despite shared cores it still bursts past 2 Gbps on iperf3 tests.

### VPS 2000 G11  
Twice the cores/RAM of the 1000, but disk I/O is intentionally capped ~130 MiB s-¹. OK for web stacks; avoid for write-intensive DBs.

### VPS 3000 G11  
10 cores + 24 GB RAM lift both CPU and I/O limits — now ~300 MiB s-¹. Good middle ground for container fleets or Nextcloud with lots of users.

### VPS 4000 G11  
12 cores, 32 GB and >400 MiB s-¹ NVMe make this tier the “hidden gem”: you’ll hit nearly 13 k Geekbench multi, often matching small dedicated servers.

### VPS 6000 G11 & VPS 8000 G11  
Monster RAM pools (48 GB / 47 GB). If your app is memory-bound rather than CPU-bound (Redis, in-memory AI vectors), these VMs are perfect. Benchmarks still incoming.

> **Root vs VPS in practice**  
> *Root* = isolation and no noisy neighbours. *VPS* = lower cost, instant scalability, but performance can fluctuate under host contention.

---

## 3.  Benchmarks & Methodology

* **CPU** – Geekbench 6 run on a fresh Ubuntu 24.04 ISO  
* **Disk** – `fio --name=rand --rw=readwrite --size=4G --bs=128k`  
* **Network** – iperf3 against `iperf.paris.testdebit.info` (IPv4+IPv6)  
*Tests were repeated 3× and medians reported.*

---

## 4.  Netcup vs Competitors (Reddit Round-up)

* **Hetzner** – Offers 10 Gbps shared NICs, but single-VM throughput rarely exceeds 3 Gbps (similar to Netcup’s 2.5 GbE). Netcup’s EPYC 9634 scores slightly higher than Hetzner’s older EPYC 7543 in single-core.  
* **Contabo** – Cheaper per core, yet many Redditors complain about high CPU steal and slow disk. Netcup’s VPS 4000 often doubles Contabo’s fio scores.  
* **OVH** – Great global POPs and DDoS shield, but their Rise/Game lines use Intel Silver CPUs; single-core scores trail AMD EPYC by 30-40 %.  

Community consensus: **“If you need raw performance per euro in Central EU, Netcup’s G11 is on par with Hetzner and well ahead of most budget hosts.”**

---

## 5.  Choosing the Right Plan

| Workload | Recommended Plan |
|----------|------------------|
| Personal blog / small WordPress | VPS 1000 G11 |
| Busy ecommerce / SaaS | VPS 4000 G11 or RS 2000 G11 |
| High-CPU CI / compile farm | RS 4000 G11 |
| AI inference (CPU-only) | RS 8000 G11 |
| Big in-memory cache | VPS 6000 G11 or VPS 8000 G11 |

---

## 6.  Final Thoughts

Whether you grab a **dedicated Root Server** for guaranteed grunt or a **VPS** for wallet-friendly flexibility, Netcup’s G11 generation delivers *serious* AMD EPYC power backed by fast DDR5 and NVMe. Paired with unmetered 2.5 Gbps networking and generous voucher pricing, these servers punch well above their price bracket.

Ready to deploy? Jump straight to the offer that fits you best:

* [RS Line-up](https://netcupvoucher.com#rootservers) – RS 1000 / RS 2000 / RS 4000 / RS 8000  
* [VPS Line-up](https://netcupvoucher.com#vps) – VPS 1000 / 2000 / 3000 / 4000 / 6000 / 8000  

Happy hosting! 🖥️🚀
