# AWSOME BC

MkDocs site documenting **snowpackbc**: the AWSOME snowpack model chains we run for British Columbia (Rogers Pass,
Mike Wiegele Heliskiing, Whistler, Banff) and the dashboard at [snowpackbc.com](https://snowpackbc.com).

Site: https://machtlp.github.io/AWSOME_BC_Docs/

## Local preview

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install mkdocs
mkdocs serve
```

Open http://127.0.0.1:8000/

## Publish

A GitHub Action builds the site and deploys it to GitHub Pages on every push to `main`
(Settings → Pages → Source: **GitHub Actions**).

No credentials, account ids or bucket names belong in this repo: it is public.
