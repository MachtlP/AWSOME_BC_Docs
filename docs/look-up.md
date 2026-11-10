# IV. Look up

<p class="section-updated">Last updated: 10 Nov 2026</p>

Every filter on the dashboard, what it means and where its value comes from. **Key** is the property in the
dashboard's GeoJSON. You can use it in a shared URL or look it up in the files.

Conventions:

- Classes are `[lower, upper)`: the lower limit is included, the upper one is not.
- **Without specification** counts the points with no value.
- **24 h** always means the 24 hours ending at the shown time step. It works for the 48 h forecast too.
- **Slope:** "the feature's slope" means the aspect of the file it belongs to (flat, N, E, S, W). "Flat" means the
  value is the same for all aspects of a point.

## 1. Where and when

### Location (aspect / elevation rose)

| | |
|---|---|
| Key | `aspect` × `band` (cells such as N&#124;alpine) |
| Source | Aspect = the simulated slope; band = elevation band of the point, from the region GeoJSON (30 m vegetation-based DEM, so treeline follows vegetation) |
| Values | 4 aspects (N, E, S, W) + flat × 3 bands (alpine, treeline, below treeline) |
| Use | The filter view Canadian practitioners know from the bulletin: pick e.g. "N–E alpine" |

### Elevation

| | |
|---|---|
| Key | `elevation` |
| Source | Point elevation (30 m MRDEM median of the member cells) |
| Classes | < 1400, then 200 m steps up to 3200 + |

## 2. Snowpack stability

The **dry** indices (Sk38_CCL, Punstable) and the **wet** indices (LWC index, Pwet) each describe one layer per
point: the most critical one. **Datetag**, **Grain type** and **Depth** describe that same layer of the index that
currently classifies. The default is Sk38_CCL.

### Sk38_CCL

| | |
|---|---|
| Key | `snowpack.sk38_ccl.value` |
| Meaning | Skier stability index Sk38 of the weak layer, combined with the critical cut length (AWSOME `sk38_ccl`). Lower = less stable. Sk38 below 1 is AWSOME's instability threshold. |
| Classes | very poor ≤ 0.5 · poor ≤ 0.95 · fair ≤ 1.05 · rather stable > 1.05 |
| Default | Classifies the map |

### Punstable

| | |
|---|---|
| Key | `snowpack.Punstable.value` |
| Meaning | Probability that a layer is unstable: a random forest by [Mayer et al. (2022)](https://doi.org/10.5194/tc-16-4593-2022) over six layer features (viscous deformation rate, critical crack length, sphericity, grain size, skier penetration, slab density over grain size). 0–1. |
| Classes | very poor ≥ 0.85 · poor ≥ 0.78 · fair ≥ 0.7 · rather stable < 0.7 |
| Note | PWL detection uses 0.77 as the "unstable" threshold |

### LWC index

| | |
|---|---|
| Key | `snowpack.lwc.value` |
| Meaning | Liquid water content of the critical layer, %. 3 % is AWSOME's wet-instability threshold. |
| Classes | very poor ≥ 3 · poor ≥ 1 · rather stable < 1 |

### Pwet

| | |
|---|---|
| Key | `snowpack.pwet.value` |
| Meaning | Probability of a wet-snow avalanche day by [Hendrick et al. (2023)](https://doi.org/10.1017/jog.2023.24): a random forest over liquid-water and weather features of the day's wettest profile. 0–1, one value per day. |
| Classes | very poor ≥ 0.7 · poor ≥ 0.5 · fair ≥ 0.3 · rather stable < 0.3 |

### Datetag

| | |
|---|---|
| Key | `snowpack.<index>.instabilityDrivenBy` |
| Meaning | Burial date of the critical layer: the precipitation event that buried it, grouped per region and band. **Unburied new snow** and **Unburied old snow** mark layers at the surface. |
| Use | Track one weak layer across the operation, e.g. "2026-10-24" |

### Grain type

| | |
|---|---|
| Key | `snowpack.<index>.grainType` |
| Values | PP precipitation particles · DF decomposing fragments · PPgp graupel · SH surface hoar · DH depth hoar · FC faceted crystals · FCxr rounding facets · RG rounded grains · MF melt forms · MFcr melt-freeze crust · IF ice formation |

### Depth / size estimate

| | |
|---|---|
| Key | `snowpack.<index>.size_estimate` |
| Meaning | Depth of the critical layer, binned like avalanche size classes |
| Classes | 1: 0–26 cm (small) · 2: 26–53 (medium) · 3: 53–110 (large) · 4: 110–225 (very large) · 5: 225 + (extreme) |
| Chart | X-axis of the hazard chart |

## 3. Weather

Computed by snowpackbc after SNOWPACK. Inputs: SNOWPACK's time series (every 3 h) and HRDPS side products.

### New snow 24 h

| | |
|---|---|
| Key | `weather.hn24` |
| Unit | cm |
| Source | SNOWPACK `HN24` (height of new snow in the last 24 h, settled), the feature's slope |
| Fix | The daily SNOWPACK restart writes 0 at 06Z. That row is rebuilt as HN24(t+3h) − HN3(t+3h) + HN3(t−21h). |
| Classes | < 1 · 1–5 · 5–10 · 10–20 · 20–30 · 30–50 · ≥ 50 |

### New snow 48 h

| | |
|---|---|
| Key | `weather.hn48` |
| Unit | cm |
| Source | `hn24(t) + hn24(t − 24 h)`. This sums two 24 h values, so settlement between them is not accounted for. |
| Classes | same as 24 h |

### Rain 24 h

| | |
|---|---|
| Key | `weather.rain24` |
| Unit | mm |
| Source | SNOWPACK rain rate (`MS_Rain`), mean of the window × 24, the feature's slope. Rain vs snow is decided by SNOWPACK. |
| Classes | < 0.1 · 0.1–2 · 2–5 · 5–10 · 10–25 · ≥ 25 |

### Wind 24 h mean

| | |
|---|---|
| Key | `weather.vw24` |
| Unit | km/h |
| Source | Mean of the forcing wind speed (HRDPS 10 m, or the station), flat |
| Classes | Avalanche Canada: calm < 1 · light 1–25 · moderate 26–40 · strong 41–60 · extreme > 60 |
| Map | Wind arrows while it classifies or has a selection |

### Wind direction 24 h

| | |
|---|---|
| Key | `weather.dw24_sector` (degrees in `weather.dw24`) |
| Source | Mean direction of the 24 h, each hour weighted by its wind speed (vector mean) |
| Values | N, NE, E, SE, S, SW, W, NW: where the wind blows **from** |

### Gust 24 h max

| | |
|---|---|
| Key | `weather.gust24` |
| Unit | km/h |
| Source | Highest hourly HRDPS 10 m gust of the 24 h, median over the point's HRDPS cells |
| Classes | same as Wind 24 h mean |

### Air temperature

| | |
|---|---|
| Key | `weather.ta` (elevation in `weather.z`) |
| Unit | °C |
| Source | Forcing air temperature at the time step, at the point's elevation |
| Classes | < −20 · −20…−15 · −15…−10 · −10…−5 · −5…−2 · −2…0 · 0…2 · 2…5 · 5…10 · ≥ 10 |

### Snowline

| | |
|---|---|
| Key | `weather.snowline` |
| Unit | m |
| Method | 1. Take the forcing temperature and humidity of the point. 2. Move them up and down in 50 m steps with the same monthly lapse rates as the HRDPS correction. 3. Take the elevation where the **wet-bulb temperature is +1 °C** (about half the precipitation falls as snow). 4. Over 24 h: precipitation-weighted mean when ≥ 1 mm fell, otherwise the median. |
| Points | Grid: each cell from its own temperature and elevation. Hexagons: every band takes the value of the region's **below-treeline** band (least extrapolation). |
| Classes | < 500, then 250 m steps to 2500, 2500–3000, ≥ 3000 |
| Caution | Extrapolates surface temperatures. In dry, cold periods this gives a hypothetical value; see [Known issues](known-issues.md). |

### Snow level MSC

| | |
|---|---|
| Key | `weather.snlvl` |
| Unit | m |
| Source | MSC's snow level (HRDPS WEonG `HGTSNLVL`), median of the point's cells and of the hours that have a value |
| Note | Only defined where precipitation is forecast; available from 12 Oct 2026. For comparison with our snowline. |

## 4. SNOWPACK terms

| Term | Meaning |
|---|---|
| HS | Snow height |
| HN24 / HN72 | Height of new snow in 24 / 72 h |
| SWE | Snow water equivalent |
| LWC | Liquid water content |
| PWL | Persistent weak layer (SH, DH, FC, FCxr) |
| RTA | Relative threshold sum approach (structural weak-layer index) |
| CCL | Critical cut length (propagation propensity) |
| Sk38 | Skier stability index for a 38° slope |
| Nowcast / forecast | Simulated with analysed weather (past) / with the 48 h HRDPS forecast (future) |
| BTL / TL / ALP | Below treeline / treeline / alpine |
