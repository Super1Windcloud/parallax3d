import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import {
  ParallaxBadge,
  ParallaxButton,
  ParallaxCard,
  ParallaxDeviceMockup,
  ParallaxFeatureTile,
  ParallaxGalleryItem,
  ParallaxHero,
  ParallaxImage,
  ParallaxPoster,
  ParallaxProductCard,
  ParallaxProfileCard,
} from '../src'

test('renders the exported parallax component set', async () => {
  const screen = await render(
    <div>
      <ParallaxHero title="Build tactile launches." description="Layer text, stats, and calls to action." />
      <ParallaxImage src="https://example.com/cover.jpg" alt="Cover image" caption="Editorial" />
      <ParallaxGalleryItem title="Night Shift" category="Gallery" imageUrl="https://example.com/gallery.jpg" />
      <ParallaxProductCard name="Orb Speaker" price="$199" imageUrl="https://example.com/product.jpg" />
      <ParallaxProfileCard name="Ava Quinn" role="Creative Technologist" avatarUrl="https://example.com/avatar.jpg" />
      <ParallaxFeatureTile index="01" title="Adaptive motion" description="Different layers move at different depths." />
      <ParallaxBadge label="Active users" value="124K" trend="+12.4%" />
      <ParallaxDeviceMockup title="Mobile analytics" />
      <ParallaxPoster title="Signal Bloom" subtitle="Immersive motion poster for launches." />
      <ParallaxButton label="Launch experience" />
      <ParallaxCard
        title="Neon Horizon"
        description="A cinematic React card powered by Atropos."
        imageUrl="https://example.com/card.jpg"
        tags={['React', 'Atropos', '3D']}
      />
    </div>,
  )

  expect(screen.getByRole('heading', { level: 1, name: 'Build tactile launches.' })).toBeInTheDocument()
  expect(screen.getByAltText('Cover image')).toBeInTheDocument()
  expect(screen.getByText('Night Shift')).toBeInTheDocument()
  expect(screen.getByText('$199')).toBeInTheDocument()
  expect(screen.getByText('Ava Quinn')).toBeInTheDocument()
  expect(screen.getByText('Adaptive motion')).toBeInTheDocument()
  expect(screen.getByText('124K')).toBeInTheDocument()
  expect(screen.getByText('Mobile analytics')).toBeInTheDocument()
  expect(screen.getByText('Signal Bloom')).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Launch experience' })).toBeInTheDocument()
  expect(screen.getByRole('heading', { level: 2, name: 'Neon Horizon' })).toBeInTheDocument()
})
