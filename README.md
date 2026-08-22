# Debesh Mahato — Portfolio Website

A single-page portfolio built with plain HTML, CSS and JavaScript — no build tools, no framework.
Open `index.html` in a browser and it just works, or deploy the whole folder to Netlify / Vercel / GitHub Pages.

## File structure

```
portfolio/
├── index.html              → all page content (hero, about, stack, experience,
│                              projects, certificates, education, contact)
├── css/
│   └── style.css           → all styling
├── js/
│   └── script.js           → mobile nav, hero typing effect, certificate lightbox
└── assets/
    ├── images/
    │   └── profile.jpg     → your profile photo, shown in the hero section
    ├── resume/
    │   └── Debesh_Mahato_Resume.pdf   → linked from the nav bar & contact section
    └── certs/
        ├── graphura-internship.png
        ├── iit-ism-cryptography.png
        └── deloitte-cyber-sim.png
```

## Adding a new certificate

1. Drop the certificate image (JPG/PNG) into `assets/certs/`.
2. Open `index.html`, find the `<section id="certs">` block, and copy one `<a class="certcard">…</a>`
   card. Paste it above the "add a new certificate" placeholder card and update:
   - the `href` and `<img src>` to your new file's path
   - `data-title`, `data-org`, `data-date` (used by the click-to-enlarge lightbox)
   - the visible title/subtitle text inside `.certcard__label`

That's it — no other file needs to change. The grid automatically re-flows for any number of cards.

## Changing your profile photo

Replace `assets/images/profile.jpg` with a new image of the same filename (or update the `src`
in the `<div class="hero__portrait">` block in `index.html` if you rename it). A roughly square,
well-lit headshot works best — the frame crops to a portrait ratio automatically.

## Updating your résumé

Replace `assets/resume/Debesh_Mahato_Resume.pdf` with a new export, keeping the same filename —
both the nav bar "Résumé" link and the Contact section link to it automatically.

## Links wired into the site

- GitHub → https://github.com/Debesh-Mahato-CSE
- LinkedIn → https://www.linkedin.com/in/debesh-mahato-78a102338
- LeetCode → https://leetcode.com/u/Debsesh_CSE_77/
- Live project → https://codecraft-code-editor.onrender.com (CodeCraft)

## Deploying

Any static host works since there's no build step:

- **Netlify**: drag-and-drop the `portfolio` folder onto app.netlify.com/drop
- **Vercel**: `vercel deploy` from inside the folder
- **GitHub Pages**: push this folder to a repo and enable Pages on the `main` branch
"# Debesh-Mahato-portfolio-website" 
