# Preethi Chalasani — Portfolio

A bespoke portfolio website for a Chemical and Biomolecular Engineering student at the University of Maryland. Built with React, TypeScript, and hand-crafted CSS.

## Design Philosophy

This portfolio rejects generic templates and AI-generated aesthetics in favor of intentional, minimal design inspired by scientific instruments, phase diagrams, and lab notebooks.

### Visual Language
- **Color palette**: Carbon graphite tones with a catalyst amber accent
- **Typography**: System sans-serif for headings, Source Serif 4 for body text
- **Layout**: Asymmetrical, editorial—not centered startup hero patterns
- **Motion**: Subtle Framer Motion animations that feel deliberate, not decorative

### Key Features
- Custom intro animation (elements coalescing like a reaction reaching equilibrium)
- Projects presented as case studies with problem/methodology/outcome structure
- Scroll-based reveals using IntersectionObserver
- Fully responsive without framework dependencies
- No icon packs, no stock illustrations, no template structure

## Project Structure

```
src/
├── components/
│   ├── IntroAnimation/    # Page load animation
│   ├── Navigation/        # Fixed top navigation
│   ├── Hero/             # Asymmetrical hero section
│   ├── Projects/         # Expandable case study cards
│   ├── About/            # Bio and competency visualization
│   ├── Contact/          # Structured contact links
│   └── Footer/           # Minimal footer
├── data/
│   └── projects.ts       # Project content data
├── hooks/
│   └── useScrollReveal.ts # IntersectionObserver hook
├── styles/
│   ├── variables.css     # Design tokens
│   └── global.css        # Reset and base styles
└── types/
    └── index.ts          # TypeScript definitions
```

## Tech Stack

- React 18
- TypeScript
- Vite 5
- Framer Motion (subtle use only)
- CSS Modules (no Tailwind, no utility classes)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

### Content
Edit `src/data/projects.ts` to update project information. Each project follows this structure:

```typescript
{
  id: string,
  title: string,
  abstract: string,      // One-line summary
  problem: string,       // What challenge was addressed
  constraints: string[], // Technical limitations
  methodology: string,   // Approach and methods
  outcome: string,       // Results and impact
  domains: string[],     // Relevant fields
  period: string,        // Time range
  link?: string          // Optional external link
}
```

### Styling
All design tokens are in `src/styles/variables.css`. Key customization points:
- `--color-accent`: The amber accent color
- `--font-display`: Heading typeface
- `--font-body`: Body text typeface
- Spacing and typography scales

### Personal Information
Update the following files:
- `src/components/Hero/Hero.tsx`: Name, title, current status
- `src/components/About/About.tsx`: Biography and competencies
- `src/components/Contact/Contact.tsx`: Contact links
- `index.html`: Meta tags and page title

## Performance

- No heavy animation libraries
- CSS-based animations where possible
- Lazy loading via IntersectionObserver
- Minimal bundle size (~105KB gzipped)

## License

MIT
