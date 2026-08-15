# Anti-AI-Detection Rules for Web Development

These rules MUST be followed whenever generating, modifying, or reviewing any website code (HTML, CSS, JS, frameworks, CMS templates, etc.). The goal is to produce websites that are completely indistinguishable from those built by an experienced human developer.

---

## 1. Copywriting & Content

- **NEVER** use the following overused AI phrases anywhere in headings, paragraphs, CTAs, meta descriptions, alt text, or microcopy:
  - "Elevate your…", "Unlock the power of…", "Seamlessly…", "Leverage…", "Dive into…", "Harness…", "Empower…", "Revolutionize…", "Cutting-edge…", "Next-level…", "Game-changer…", "Supercharge…", "Streamline…", "Unleash…", "Delve into…", "Tapestry…", "Landscape…", "Spearhead…", "Synergy…", "Paradigm shift…", "In today's fast-paced world…", "In the ever-evolving…", "It's important to note…", "Whether you're a … or a …", "Embark on a journey…", "Navigating the complexities…"
- Write in a **natural, conversational tone** that matches the brand voice. Vary sentence length. Use short punchy sentences mixed with longer ones. Humans are inconsistent — mirror that.
- **Avoid perfectly parallel structure** in lists and feature grids. Real copywriters don't make every bullet point the exact same grammatical pattern.
- Use **specific numbers and concrete details** instead of vague superlatives ("Trusted by 2,400+ teams" not "Trusted by thousands").
- Include **minor intentional human touches**: contractions (don't, we're, it's), occasional sentence fragments, questions directed at the reader.
- **Never start more than two consecutive sections** with the same sentence structure.
- Hero section headlines should be **bold and specific**, not generic. Avoid "Welcome to [Brand]" or "Your One-Stop Solution for Everything".
- Do **not** over-explain. Humans leave some things implied. Not every feature needs a three-sentence description.

---

## 2. Page Structure & Layout

- **Avoid the "AI landing page" template**: hero → three-column feature grid → testimonials → CTA → footer. Vary layouts across pages.
- Use **asymmetric and unconventional layouts** where appropriate — offset grids, overlapping elements, varied column counts between sections.
- **Section count**: Don't create pages with 8–12 neatly separated sections. Real pages have 4–6 well-designed sections that breathe.
- Avoid **perfectly equal spacing** everywhere. Use intentional rhythm — tighter spacing in related groups, more breathing room between distinct sections.
- Navigation should feel **considered**: not every page needs to be in the main nav. Use dropdowns, grouped links, or utility nav where appropriate.
- **Avoid unnecessary symmetry**. Real designs break the grid intentionally for visual interest.
- Don't include sections that feel like padding (e.g., a "Why Choose Us?" section with three generic cards unless the client specifically asks for one).

---

## 3. Visual Design & CSS

- **Color palettes**: Use nuanced, intentional palettes — not the default Tailwind blue/indigo. Include tints, shades, and at least one accent that isn't from a "Top 10 color palettes" list.
- **Typography**: Use **no more than 2 font families**. Set font sizes with a deliberate type scale (e.g., 1.25 or 1.333 ratio), not arbitrary pixel values. Line heights should be tuned per element (1.1–1.2 for headings, 1.5–1.7 for body).
- **Avoid default border-radius values** like `rounded-lg` on everything. Mix sharp corners with rounded ones deliberately.
- Use **subtle, imperfect design details**: slightly off-grid elements, hand-drawn accents, organic shapes, grain/noise textures, or subtle gradients that aren't perfectly linear.
- **Whitespace**: Use generous but varied whitespace. Don't make every section padding identical.
- **Hover/interaction states** must feel considered — not just `opacity: 0.8` or a color swap. Use transitions with appropriate easing and duration.
- Avoid overusing `box-shadow` on every card. Use shadows sparingly and with intention.
- **Image treatment**: Don't use only perfectly rectangular images. Mix in rounded, masked, or overlapping images where design permits.
- Never use the same button style for every single CTA. Primary vs. secondary vs. ghost buttons should be visually distinct and used with intent.

---

## 4. Code Quality & Structure

- **NO AI-generated comments** like:
  - `<!-- Hero Section -->`, `<!-- Features Section -->`, `<!-- Footer -->` on every single element.
  - `// This function handles...`, `// Initialize the...` on every line.
  - Comments should be **sparse and meaningful** — only where the "why" isn't obvious from the code.
- **Class naming**: Use consistent, human-like naming conventions. Don't over-describe (`main-hero-section-wrapper-container`). Keep it clean (`hero`, `features`, `site-footer`).
- **Remove all placeholder/Lorem Ipsum content** before delivery. If real content isn't available, use realistic dummy content that matches the industry.
- **File organization** should follow real-world conventions:
  - Don't put everything in one massive file.
  - Follow framework conventions (e.g., Next.js app router structure, Nuxt directory conventions).
  - Separate concerns naturally — but don't over-engineer a 3-page site into 47 components.
- **No boilerplate comments** at the top of files like "This component renders the..." or "Created by AI assistant".
- **Avoid over-componentization**: Not every `<div>` needs its own component. Real developers inline simple markup.
- Variable and function names should be **domain-specific**, not generic (`calculateShippingCost` not `processData`).

---

## 5. HTML & Semantic Markup

- Use **proper semantic HTML**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` — but don't wrap every single paragraph in a `<section>`.
- **Don't over-nest** HTML elements. Avoid `div > div > div > div` wrapper soup.
- Use appropriate heading hierarchy (`h1` → `h2` → `h3`). Only **one `<h1>` per page**.
- **ARIA labels and roles**: Use them where genuinely needed for accessibility, not sprinkled randomly to look thorough.
- Don't add `alt` text that reads like an AI description: "A beautiful modern office space with natural lighting and happy diverse team members collaborating." Write natural alt text: "Team meeting in the conference room".
- **Forms** should include proper `<label>` elements, validation states, and error messages — not just styled `<input>` tags.

---

## 6. Meta & SEO

- **Remove all AI fingerprints from metadata**:
  - No `<meta name="generator" content="AI">` or similar.
  - No comments in source code referencing AI generation.
  - No AI tool names in CSS class names, IDs, or data attributes.
- **Title tags and meta descriptions** should read naturally — not like keyword-stuffed AI output.
- Use **Open Graph and Twitter Card tags** with realistic, specific descriptions — not generic boilerplate.
- `robots.txt` and `sitemap.xml` should be included where appropriate and reflect actual site structure.

---

## 7. JavaScript & Interactivity

- **Don't over-animate**. Real sites have purposeful, subtle animations — not everything sliding, fading, and bouncing on scroll.
- Use `IntersectionObserver` for scroll animations, not heavy animation libraries for simple fade-ins.
- **Debounce and throttle** event listeners where appropriate — real developers care about performance.
- Error handling should be **graceful and realistic** — not just `console.log("Error occurred")`.
- **Loading states**: Include skeleton screens or spinners where data is fetched — not just empty space that suddenly fills.
- Don't include JavaScript comments that over-explain obvious code.

---

## 8. Assets & Media

- **Never use obviously AI-generated images** (look for telltale signs: mangled hands, text artifacts, uncanny faces). Prefer real stock photos, illustrations, or SVG graphics.
- Optimize all images: use WebP/AVIF formats, include `width` and `height` attributes, implement lazy loading.
- **Favicon**: Always include a proper favicon, not the default browser icon.
- Use **SVG for icons and logos** — not icon fonts or raster images for simple shapes.
- Don't use the same stock photo style across the entire site. Mix photography styles naturally.

---

## 9. Performance & Production Readiness

- Include **proper error pages** (404, 500) — not framework defaults.
- **Console must be clean**: No leftover `console.log` statements, warnings, or errors.
- Minify and bundle assets for production builds.
- Set proper **cache headers** and use asset hashing/fingerprinting.
- **No unused CSS or JS** in production bundles.

---

## 10. Behavioral Patterns to Avoid

- **Don't be too helpful**: Real websites don't explain every single feature exhaustively. Some things are discoverable.
- **Don't include every possible section**: A real developer makes strategic choices about what to include based on business goals, not a checklist.
- **Avoid "perfect" responsive design**: Real sites have minor quirks at odd breakpoints. Don't obsess over 320px-wide edge cases unless asked.
- **Footer links**: Don't include links to Privacy Policy, Terms of Service, Cookie Policy, etc. unless the client actually has those pages. Empty placeholder legal pages are worse than none.
- Testimonials should feel **real**: Specific details, varied lengths, not all 5-star. Include first names, roles, and company names — not "John D., CEO".
- **Don't over-deliver**: If the client asks for a landing page, don't build 12 pages. Match the scope to the request.
