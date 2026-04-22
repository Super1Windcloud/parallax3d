# parallax3d

A React component library of 3D parallax UI patterns built with [`atropos`](https://github.com/nolimits4web/atropos/tree/master).

## Install

```bash
pnpm install
```

## Run the playground

```bash
pnpm run play
```

## Run tests

```bash
pnpm run test
```

## Build

```bash
pnpm run build
```

## Usage

Import the official Atropos stylesheet in your app entry:

```tsx
import 'atropos/css'
```

Then import and use any component:

```tsx
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
      <ParallaxImage src="/cover.jpg" alt="Campaign cover" />
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

## Exported components

- `ParallaxHero`
- `ParallaxImage`
- `ParallaxGalleryItem`
- `ParallaxCard`
- `ParallaxProductCard`
- `ParallaxProfileCard`
- `ParallaxFeatureTile`
- `ParallaxBadge`
- `ParallaxDeviceMockup`
- `ParallaxPoster`
- `ParallaxButton`
