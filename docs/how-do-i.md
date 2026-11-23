# How Do I…

Short recipes for common questions. Each one takes a few clicks on the
[dashboard](https://snowpackbc.com/#/modelling/awsome){target=_blank}. New to the controls? Start with
[Get Started](get-started.md).

## …See Only Certain Aspects and Bands?

1. In **[Aspect & Elevation](panels.md#aspect-elevation)**, click a slice, e.g. *N · Alpine*.
2. ++shift++ + click more slices, e.g. *NE* and *E · Alpine*.
3. Shortcuts: click an **aspect label** (N) for all its bands, or a **band label** (Alpine) for that band in every
   aspect.

The map, the counts in all other panels and the hazard chart now show only those slopes.

## …Find Lee Slopes Loaded by New Snow?

1. In **[New Snow 24 h](panels.md#hn24)**, click :material-brush-variant: **Classify**, then select the larger
   classes (e.g. 20–30, ++shift++ + click 30–50 and ≥ 50).
2. In **[Wind 24 h Mean](panels.md#vw24)**, select *Moderate* and stronger. The [wind arrows](map.md#wind-arrows)
   appear on the map.
3. The arrows point **downwind**, towards the loaded lee slopes. Check
   **[Wind Direction 24 h](panels.md#dw24)** for the sector the wind came *from*.

## …Follow One Buried Weak Layer?

1. Set the map to a dry index, e.g. **[Sk38_CCL](panels.md#sk38_ccl)** (the default).
2. In **[Datetag](panels.md#datetag)**, click the burial date of the layer, e.g. *2026-10-24*.
3. Step through time with ++shift+left++ / ++shift+right++. You see where that layer is the critical one and how its
   stability changes.
4. Check **[Avalanche Problem](panels.md#grain-type)** for its grain type (e.g. SH, FC) and the
   [hazard chart](panels.md#hazard-chart) for how deep it is.

## …Check Tomorrow's Forecast?

Press `»` or ++shift+right++ to step forward 6 h at a time, up to 48 h past today's 06:00 UTC. Remember that
06:00 UTC is 22:00 Pacific the evening before.

## …Compare Hexagons, Grid and Stations?

1. Open **Sources** and switch on *Semi-Distr.* and *Fully gridded* for the same operation.
2. The hexagon fill shows the most critical band. The grid shows the spatial detail underneath.
3. Add *Stations* to compare with a run driven by what a station actually measured.

[Why the three can differ →](model-chain.md#4-regions-and-points)

## …Check Whether the Snowline Is Plausible?

Look at **[Snowline](panels.md#snowline)** and **[Snow Level MSC](panels.md#snlvl)** side by side. They should
roughly agree while precipitation falls. In cold, dry periods our snowline can come out too low.

## …Highlight Without Filtering?

++alt++ + click a class, or long-press it on a touch screen. The points stay visible on the map and are highlighted
in place of filtering out the rest.

## …Share What I'm Looking At? { #share-what-im-looking-at }

Click the **share** button (:material-share-variant:) at the top. It copies a link that keeps the date, sources,
selections and the variable that colours the map.

You can also build a link by hand, e.g.
[`…/#/modelling/awsome?classify=vw24`](https://snowpackbc.com/#/modelling/awsome?classify=vw24){target=_blank}
opens the map coloured by mean wind. The keys are listed in each panel's *Technical details*.

## …Get Help on the Dashboard?

Press ++question++ or the **?** button at the top of the dashboard.
