# North Kohala Community Policing Website

Production-ready static website for **northkohalapolice.org**, hosted with GitHub Pages.

## Files

- `index.html` — homepage content and links
- `styles.css` — responsive design and visual styling
- `script.js` — mobile menu, archive dialog, and placeholder notices
- `CNAME` — custom domain configuration
- `assets/` — approved banner and supporting artwork

## Publish with Working Copy on iPhone

1. Clone the GitHub repository `northkohalapolice/northkohalapolice.org` in Working Copy.
2. Open the extracted production folder in the iPhone Files app.
3. Select `index.html`, `styles.css`, `script.js`, `CNAME`, `README.md`, `404.html`, and the `assets` folder.
4. Copy them into **Files → Working Copy → northkohalapolice.org**.
5. Choose **Replace** when prompted for duplicate files.
6. Return to Working Copy. Review the changed files.
7. Commit with a message such as `Publish redesigned homepage`.
8. Push the commit to GitHub.
9. GitHub Pages normally redeploys within a few minutes.

## Routine newsletter update

The homepage intentionally avoids month-specific text. To update the current issue:

1. Replace `assets/newsletter-cover.jpg` with the new cover image, retaining the same filename.
2. In `index.html`, update the Canva URL if it changes.
3. When the PDF is final, replace the disabled download button with a link to the PDF file.
4. Commit and push.

## Current external links

- Canva newsletter: `https://canva.link/9jl9fqub5xuz5e1`
- Brevo signup form: configured in `index.html`
- Official department site: `https://www.hawaiipolice.gov/`
