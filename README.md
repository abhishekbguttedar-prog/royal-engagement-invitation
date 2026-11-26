# Royal Engagement Invitation Website

A two-screen, responsive engagement invitation for Sushma & Ramkrishna.

## Files
- `index.html` — the two invitation screens and content
- `style.css` — royal maroon, antique gold and ivory styling
- `script.js` — curtain transition, IST countdown and gold particles
- `assets/` — locally stored SVG decorations

## Preview locally
1. Extract the ZIP.
2. Open the `royal-engagement-invitation` folder.
3. Double-click `index.html` to preview, or use VS Code Live Server.

No build tools, backend, login or installation are required for guests.

## Publish with GitHub Pages
1. Sign in to GitHub and create a new **public** repository, for example `royal-engagement-invitation`.
2. Upload `index.html`, `style.css`, `script.js`, and the complete `assets` folder to the repository root. Do not upload only the ZIP.
3. Open the repository's **Settings**.
4. Select **Pages** from the left menu.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then click **Save**.
7. Wait a minute or two. GitHub will show the public website URL in the Pages section. It will look like:
   `https://YOUR-USERNAME.github.io/royal-engagement-invitation/`
8. Open that URL in a private/incognito browser to test it, then share it with guests.

## Important customisation
- **Google Maps:** the current button opens a Google Maps search for the supplied venue address. If you have the exact Google Maps share URL, replace the `href` on the `GET DIRECTIONS` anchor in `index.html`.
- **Countdown:** it targets 13 December 2026 at 12:00 AM Indian Standard Time. The JavaScript converts that instant to UTC, so it counts correctly regardless of a guest's device time zone.
- **Names, venue or date:** edit the corresponding text in `index.html`. If changing the event date, also update `eventTime` in `script.js` using `Date.UTC(year, monthIndex, day - 1, 18, 30, 0)` for midnight IST (monthIndex is zero-based).

## Notes
- The invitation has exactly two screens. The second screen is revealed after the Open Invitation button is clicked.
- Google Fonts are used for typography; if unavailable, fallback fonts are applied.
- The palace and floral artwork are local SVG assets, not broken external image links.
- Background music is intentionally omitted so the invitation opens silently and politely on all devices.
