# Iclal Yurdakok — Portfolio

React + TypeScript + Vite (React Router, pre-rendered to static HTML). Hosted on Vercel.

## Run it

```bash
corepack pnpm@10 install
corepack pnpm@10 dev      # http://localhost:5173
corepack pnpm@10 build    # static site in build/client
```

## Add or edit a project

Each project is one folder in `app/content/projects/`. The folder name becomes the URL (`/work/<folder-name>`).

```
app/content/projects/my-project/
  project.ts   ← title, categories, type, description, status, order…
  cover.jpg    ← optional; resized to AVIF/WebP/JPEG automatically
```

1. Copy an existing folder and rename it.
2. Edit `project.ts`. Your editor checks the fields as you type (see `app/content/types.ts`).
3. Add `cover.jpg` (around 2400px wide is plenty) and set `coverAlt`.
4. Set `order` to choose its position in the work list (1 = first).

To hide a project without losing it, move its folder to `app/content/archive/`.
Moving it back to `app/content/projects/` puts it on the site again.

### Writing the case study

When a project has a `story.tsx`, it replaces the temporary overview page.

- Put images in `media/` next to it; PNGs keep their transparency.
- `media("file-name")` loads an image (no extension). The build fails if the file is missing.
- `app/content/projects/abroadly/story.tsx` is the reference example.

Blocks available, all in `app/components/story`:

- `Section`: a takeaway headline with supporting text
- `Evidence`: tags a section as a research finding, design decision, or untested assumption
- `Findings`: a large numbered list
- `Statement`: one large typographic moment
- `Pillars`: a few principles side by side
- `Screens`: a row of phone screens on a tinted band
- `Feature`: one screen beside its explanation
- `Figure`: a single image, inset, wide or full width
- `List`: a short bulleted list

Headlines should state the takeaway of each section, not name the phase ("Research", "Process").

- **Categories:** defined in `app/content/categories.ts`.
- **Site-wide text** (intro, email, LinkedIn, About): `app/content/site.ts`.

## Where things live

- `app/routes/`: pages (home, work, case study, about)
- `app/components/`: header, footer, filterable work list, media
- `app/styles/global.css`: design tokens (color, type, spacing)
- `vercel.json`: redirects from the old Wix URLs
