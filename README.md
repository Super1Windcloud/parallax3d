# parallax3d

A React 3D parallax card component built with [`atropos`](https://github.com/nolimits4web/atropos/tree/master).

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

Then use the component:

```tsx
import { ParallaxCard } from 'parallax3d'

export function Example() {
  return (
    <ParallaxCard
      title="Neon Horizon"
      description="A cinematic React card powered by Atropos."
      imageUrl="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=80"
      tags={['React', 'Atropos', '3D']}
    />
  )
}
```
