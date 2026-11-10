# I. AWSOME BC

<p class="section-updated">Last updated: 10 Nov 2026</p>

**AWSOME BC** (snowpackbc) runs the open-source snow cover framework
[AWSOME](https://gitlab.com/avalanche-warning) (Avalanche Warning Service Operational Meteo Environment) for four
operations in western Canada. Every day the HRDPS weather forecast drives SNOWPACK simulations. Their stratigraphy,
stability indices and weather summaries appear on a web dashboard:

- **[snowpackbc.com](https://snowpackbc.com)**: main, the checked state
- **[dev.snowpackbc.com](https://dev.snowpackbc.com)**: dev, where new features land first

<div class="note-box">
<p class="note-box__title">Model output, not observations</p>
<div class="note-box__body">
<p>Everything shown here is a model simulation driven by an unvalidated weather forecast. Nobody has checked it for
accuracy on any day. Use it together with field observations and expert judgement.</p>
</div>
</div>

## 1. Operations

| Operation | Hex domain | Grid domain | Stations | Elevation bands BTL / TL / ALP (m) |
|---|---|---|---|---|
| Rogers Pass (Glacier National Park) | `rogers_hex` | `rogers_grid` | Fidelity | 1500–2000 / 2000–2200 / 2200+ |
| Mike Wiegele Heliskiing (MWHS) | `mwhs_hex` | `mwhs_grid` | – (Mt St Anne planned) | 1500–2000 / 2000–2200 / 2200+ |
| Whistler (Whistler Blackcomb Heliskiing) | `whistler_hex` | `whistler_grid` | Whistler Rendezvous | 1300–1800 / 1800–2000 / 2000+ |
| Banff (Banff National Park) | `banff_hex` | `banff_grid` | Bosworth lower, Bow Summit, Lookout | 1700–2200 / 2200–2400 / 2400+ |

## 2. Three ways to look at the snowpack

Each operation runs three tool chains from the same weather input (see [Model Chain](model-chain.md)):

1. **Semi-distributed** (hexagons): 15 km hexagons × 3 elevation bands. Each hexagon and band gets one point with the
   median weather of its HRDPS cells. Quick to read, and close to how forecasters think in regions and bands.
2. **Fully gridded**: one SNOWPACK point per HRDPS 2.5 km cell. Shows the spatial detail inside an operation.
3. **Stations**: weather stations, with the station's own measurements and HRDPS filling the gaps.

Each point is simulated for flat terrain and for 38° slopes facing N, E, S and W. Stations use eight aspects.

## 3. This site

| Section | What it covers |
|---|---|
| [II. Model Chain](model-chain.md) | From raw HRDPS to the dashboard, step by step, for each tool chain |
| [III. Dashboard](dashboard.md) | How to read and drive the dashboard: map, filters, charts, interactions |
| [IV. Look up](look-up.md) | Every filter and variable: what it means, where it comes from, how it is computed |
| [V. Known issues](known-issues.md) | Limitations and open points we know about |

## 4. Credits

AWSOME is developed by the AWSOME core team ([gitlab.com/avalanche-warning](https://gitlab.com/avalanche-warning),
[wiki](https://gitlab.com/groups/avalanche-warning/-/wikis/home)). snowpackbc adds the BC setup (HRDPS ingest and
downscaling, hexagon and grid domains, station feeds, weather filters, the aspect / elevation rose and the
semi-distributed map display) on top of it.

> AWSOME Core Team (2024). AWSOME: Avalanche Warning Service Operational Meteo Environment [software].
> https://gitlab.com/avalanche-warning
