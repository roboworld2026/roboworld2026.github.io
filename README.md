# RoboWorld Challenge 2026

Embodied World Modeling for Robotics and Autonomous Driving.

An independently organized challenge associated with the [RoboPAD Workshop at NeurIPS 2026](https://robotpad2026.github.io/). Challenge participation is separate from workshop paper submission.

## Tracks

1. **WorldNav: Language-Conditioned World Navigation** - LCVN; open-loop continuous-action trajectory prediction.
2. **HA-VLN 2.0: Human-Aware Social Navigation** - HA-R2R / HA-VLN 2.0; closed-loop navigation among dynamic humans.
3. **SafeDrive-VLA: Towards Safety in Autonomous Driving** - CARLA-F / B2D-C; instruction following and driving safety.

## Local Preview

Run from the repository directory:

```bash
bundle install
bundle exec jekyll serve --livereload
```

Open http://127.0.0.1:4000 in your browser. Edit the source HTML files in the repository root; Jekyll generates the preview in `_site/`.

## Repository Layout

- `index.html` and `track1.html` through `track3.html`: current competition pages.
- `static/`, `images/`, and root styles/scripts: website assets and presentation.
- `main_homepage.html`, `track4.html`, and `track5.html`: compatibility redirects for old links.
- `output/`: local campaign artwork, final PNG/MP4 exports, editable sources, and reference material; excluded from Git and site builds.
- `_site/` and `.jekyll-cache/`: generated preview files; excluded from Git.

The organization profile is maintained separately in `../RoboWorld2026-org-profile/` and published to `roboworld2026/.github`.

## Competition Information

Registration, evaluation servers, competition dates, and participation instructions are available on the [competition website](https://roboworld2026.github.io/).

Contact: roboworld2026@gmail.com
