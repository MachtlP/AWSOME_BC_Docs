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
<li><strong>Station archive.</strong> The hourly station download is not installed yet, so stations use only the
providers' live window (AvCan about 7 days); older hours fall back to HRDPS.</li>
<li><strong>MWHS station (Mt St Anne).</strong> Not running yet: coordinates, Wiegele units and a parser for the
station page are missing.</li>
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
| 10 Nov 2026 | Equal-width rings in the rose suggested more information in the lower bands | Equal-area octagon rings |
