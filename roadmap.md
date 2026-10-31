# Roadmap

- [x] Fix try-on error surfacing: edge function returns clear message (200 + error field) for 402/429; client shows data.error
- [x] Compact Try-On Studio panels (upload, outfits, preview, fit details)
- [x] Tighten homepage/section/footer spacing; fix empty Features section
- [x] Security scan (1 warning only) before publish
- [ ] Push draft work to GitHub (PR via gitremote_pr) — needs user merge to trigger Vercel deploy
- [ ] Verify try-on-x-inky.vercel.app homepage + /products refresh after Vercel picks up the code
- [ ] Try-on generation still failing: AI Gateway credits exhausted (402) — user must add credits in workspace billing; function fix deploys on draft accept
