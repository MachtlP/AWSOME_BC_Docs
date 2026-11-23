# Known Issues & What's New

## Open Issues

!!! warning "Snowline from surface temperatures"
    The 2 m temperatures over snow are colder than the free air, especially at night and in inversions.
    Extrapolating them down gives snowlines that are too low in cold, dry periods. The
    [Snow Level MSC](panels.md#snlvl) panel is there for comparison. A profile built from the bands is an option for
    later.

!!! bug "Station wind units"
    Some station wind feeds (AvCan, Whistler Blackcomb) appear to be in km/h but are read as m/s. Station winds then
    look about 3.6× too strong on the dashboard and in SNOWPACK.

!!! info "Station history"
    The hourly station download has been running since 10 Nov 2026. Earlier station hours come only from the
    providers' live windows (AvCan about 7 days, Wiegele 26 h). Before that, HRDPS is used.

!!! bug "Mt St Anne"
    Coordinates are approximate (52.29, −119.36). RH reads 0–6 % and the precipitation gauge stays at 0 while the
    snow height rises, so both come from HRDPS. The logger clock is taken as a fixed UTC−7, checked against sunrise
    and sunset in the shortwave data.

!!! info "Season start"
    The simulations start on 4 Oct 2026, when the HRDPS archive starts. Snow that fell earlier is missing.

!!! info "No snow height assimilation"
    SNOWPACK is driven by precipitation only. Errors in HRDPS precipitation amount, phase and timing carry straight
    into the snowpack.

## What's New

| Date | Change |
|---|---|
| 22 Nov 2026 | **LWC Index classes:** Unstable ≥ 1, Transitional ≥ 0.3, Rather Stable < 0.3, as on AWSOME's reference dashboard (was 3 / 1). |
| 22 Nov 2026 | **Weather series:** with New Snow, Rain or Air Temperature colouring the map, the lower chart shows the last 5 days and the forecast. |
| 20 Nov 2026 | **New stability colours:** dark purple → magenta → blue → slate, fading within each class, in place of the red-to-green scale. |
| 16 Nov 2026 | **Sk38_CCL classes:** Very Poor ≤ 0.3 and Poor ≤ 0.75 (was 0.5 / 0.95). |
| 10 Nov 2026 | **New Snow 24 h fixed:** AWSOME's value was 0 at every 06Z (SNOWPACK restart record). `weather.hn24` repairs that row. |
| 10 Nov 2026 | **Whistler Mountain added:** 7 hexagons (W7 new, all shifted 1.5 km south), 2 new grid cells, season re-run from 4 Oct. |
| 10 Nov 2026 | **Equal-area rose:** the Aspect & Elevation rings used to be equal-width, which gave the lower bands more weight than they should have. |
