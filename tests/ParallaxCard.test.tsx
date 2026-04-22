import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { ParallaxCard } from '../src'

test('renders a 3d parallax card with content', async () => {
  const screen = await render(
    <ParallaxCard
      title="Neon Horizon"
      description="A cinematic React card powered by Atropos."
      imageUrl="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
      tags={['React', 'Atropos', '3D']}
    />,
  )

  expect(screen.getByRole('heading', { level: 2, name: 'Neon Horizon' })).toBeInTheDocument()
  expect(screen.getByText('A cinematic React card powered by Atropos.')).toBeInTheDocument()
  expect(screen.getByLabelText('Card tags')).toHaveTextContent('ReactAtropos3D')
  expect(screen.getByText('Explore case study')).toBeInTheDocument()
})
