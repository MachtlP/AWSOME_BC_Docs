# Operations

snowpackbc covers four operations. Each has hexagons, grid cells and at least one station. Elevation bands are set
per operation.

=== "Rogers Pass"

    **Glacier National Park**

    | | |
    |---|---|
    | Bands | BTL 1500–2000 m · TL 2000–2200 m · ALP 2200 m + |
    | Domains | `rogers_hex` · `rogers_grid` |
    | Station | Fidelity (1905 m): TA, RH, wind and precipitation from the station, radiation from HRDPS |

=== "Mike Wiegele (MWHS)"

    **Mike Wiegele Heliskiing**

    | | |
    |---|---|
    | Bands | BTL 1500–2000 m · TL 2000–2200 m · ALP 2200 m + |
    | Domains | `mwhs_hex` · `mwhs_grid` |
    | Station | Mt St Anne (1900 m, dev only): TA, wind, shortwave and longwave radiation from the station; RH and precipitation from HRDPS |

    !!! bug "Mt St Anne"
        Coordinates are approximate. The RH sensor and the precipitation gauge are faulty, so both come from HRDPS.
        [Known issues →](known-issues.md)

=== "Whistler"

    **Whistler Blackcomb Heliskiing tenure + Blackcomb + Whistler Mountain**: 7 hexagons, 261 grid cells

    | | |
    |---|---|
    | Bands | BTL 1300–1800 m · TL 1800–2000 m · ALP 2000 m + |
    | Domains | `whistler_hex` · `whistler_grid` |
    | Station | Whistler Rendezvous (1920 m): TA, RH, wind and precipitation from the station, radiation from HRDPS |

=== "Banff"

    **Banff National Park**

    | | |
    |---|---|
    | Bands | BTL 1700–2200 m · TL 2200–2400 m · ALP 2400 m + |
    | Domains | `banff_hex` · `banff_grid` |
    | Stations | Bosworth lower (2210 m): TA, RH, wind (Bosworth upper) · Bow Summit (2040 m): TA, RH · Lookout (2640 m): TA, RH, wind. Everything else from HRDPS. |
