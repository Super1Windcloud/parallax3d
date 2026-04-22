# parallax3d

A React component library of 3D parallax UI patterns built with [`atropos`](https://github.com/nolimits4web/atropos/tree/master).

`parallax3d` wraps `atropos/react` into reusable React components for landing pages, product showcases, portfolio layouts, profile blocks, badges, and other layered motion interfaces.

## Install

```bash
pnpm install
```

Add the package to your app:

```bash
pnpm add parallax3d atropos
```

## Requirements

- `react` `^19.2.0`
- `react-dom` `^19.2.0`

## Quick Start

Import the official Atropos stylesheet once in your app entry:

```tsx
import 'atropos/css'
```

Then use the exported components:

```tsx
import 'atropos/css'
import {
  ParallaxCard,
  ParallaxHero,
  ParallaxImage,
  ParallaxProductCard,
} from 'parallax3d'

export function Example() {
  return (
    <>
      <ParallaxHero
        title="Tactile interfaces for modern launches."
        description="Use layered motion for hero sections, product stories, and marketing showcases."
      />
      <ParallaxImage src="/cover.jpg" alt="Campaign cover" caption="Editorial frame" />
      <ParallaxCard
        title="Neon Horizon"
        description="A cinematic React card powered by Atropos."
        imageUrl="/card.jpg"
        tags={['React', 'Atropos', '3D']}
      />
      <ParallaxProductCard
        name="Orb Speaker"
        price="$199"
        imageUrl="/product.jpg"
      />
    </>
  )
}
```

All components accept Atropos props such as `rotateXMax`, `rotateYMax`, `shadow`, `highlight`, and `alwaysActive`.

## Components

- `ParallaxHero`
  Hero section with layered heading, description, CTA buttons, and a supporting content panel.
- `ParallaxImage`
  Standalone image surface for editorial covers, avatars, product photos, or gallery entries.
- `ParallaxGalleryItem`
  Portfolio or gallery block with image, category label, and title.
- `ParallaxCard`
  General-purpose content card with image, title, description, tags, and footer area.
- `ParallaxProductCard`
  Commerce-oriented card with product image, badge, price, and purchase CTA.
- `ParallaxProfileCard`
  Profile summary with avatar, role, and action buttons.
- `ParallaxFeatureTile`
  Compact feature block with index, icon, title, and description.
- `ParallaxBadge`
  Small metric or stat card for dashboards and marketing highlights.
- `ParallaxDeviceMockup`
  Phone-style mockup surface for SaaS or app previews.
- `ParallaxPoster`
  Poster/banner treatment for event, campaign, or launch visuals.
- `ParallaxButton`
  High-emphasis CTA button with a 3D wrapper.

## Development

Run the playground:

```bash
pnpm run play
```

Run tests:

```bash
pnpm run test
```

Run type checking:

```bash
pnpm run typecheck
```

Build the library:

```bash
pnpm run build
```
