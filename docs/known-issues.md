# V. Known issues

<p class="section-updated">Last updated: 10 Nov 2026</p>

<div class="todo-box">
<p class="todo-box__title">Open</p>
<div class="todo-box__body">
<ul>
<li><strong>Snowline from surface temperatures.</strong> The 2 m temperatures over snow are colder than the free air,
especially at night and in inversions. Extrapolating them down gives low snowlines in cold, dry periods. The MSC snow
level filter is there for comparison. A profile from the bands is an option for later.</li>
<li><strong>Station wind units.</strong> Some station wind feeds (AvCan, Whistler Blackcomb) appear to be in km/h but
are read as m/s. Station winds then look about 3.6× too strong on the dashboard and in SNOWPACK.</li>
<li><strong>Station history.</strong> The hourly station download runs since 10 Nov 2026. Earlier station hours
come from the providers' live windows only (AvCan about 7 days, Wiegele 26 h); before that, HRDPS.</li>
<li><strong>Mt St Anne.</strong> Coordinates are approximate (52.29, −119.36). RH reads 0–6 % and the precipitation
gauge stays at 0 while the snow height rises, so both come from HRDPS. The logger clock is taken as a fixed UTC−7
(checked against sunrise and sunset in the shortwave data).</li>
<li><strong>Season start.</strong> The simulations start on 4 Oct 2026 (start of the HRDPS archive). Snow that fell
earlier is missing.</li>
<li><strong>No snow height assimilation.</strong> SNOWPACK is driven by precipitation only. Errors in HRDPS
precipitation amount, phase and timing carry straight into the snowpack.</li>
</ul>
</div>
</div>

## Fixed

| Date | Issue | Fix |
|---|---|---|
| 10 Nov 2026 | AWSOME's new snow 24 h was 0 at every 06Z (SNOWPACK restart record) | `weather.hn24` repairs that row; the New snow 24 h filter uses it |
| 10 Nov 2026 | Whistler covered the heliski tenure and Blackcomb only | Whistler Mountain added to the outline; 7 hexagons (W7 new, all shifted 1.5 km south), 2 new grid cells; season re-run from 4 Oct |
| 10 Nov 2026 | Equal-width rings in the rose suggested more information in the lower bands | Equal-area octagon rings |
