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
} from '../../src'

export function App() {
  return (
    <main className="app-shell">
      <section className="hero-section">
        <ParallaxHero
          title="Atropos-powered React 3D components."
          description="A reusable component set for landing pages, commerce modules, portfolio layouts, and tactile calls to action."
          primaryActionLabel="Browse components"
          secondaryActionLabel="Open source"
        />
      </section>

      <section className="section-copy">
        <p className="app-kicker">Component Gallery</p>
        <h2>Reusable Atropos patterns</h2>
        <p className="app-lead">
          Each component exposes Atropos props and ships with layered structure already wired up.
        </p>
      </section>

      <section className="grid grid-two">
        <ParallaxCard
          title="Neon Horizon"
          description="Build tactile product showcases, landing page heroes, and gallery cards with layered motion."
          imageUrl="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=80"
          imageAlt="A neon-lit city skyline at night"
          tags={['React 19', 'Atropos', 'Touch Ready']}
          footer={<span className="app-metric">Depth 16deg</span>}
        />
        <ParallaxProductCard
          name="Orb Speaker"
          category="Sound design"
          price="$199"
          badge="Best seller"
          imageUrl="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80"
          imageAlt="A compact black speaker on a reflective surface"
        />
      </section>

      <section className="grid grid-three">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1520034475321-cbe63696469a?auto=format&fit=crop&w=1200&q=80"
          alt="A minimalist architecture photograph"
          caption="Editorial Frame"
        />
        <ParallaxGalleryItem
          title="Night Shift"
          category="Gallery"
          imageUrl="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Abstract colored light trails"
        />
        <ParallaxProfileCard
          name="Ava Quinn"
          role="Creative Technologist"
          avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
          avatarAlt="Portrait of Ava Quinn"
        />
      </section>

      <section className="grid grid-three">
        <ParallaxFeatureTile
          index="01"
          title="Adaptive motion"
          description="Separate layers for labels, icons, and body copy without rebuilding the structure each time."
        />
        <ParallaxBadge label="Weekly active teams" value="124K" trend="+12.4%" />
        <ParallaxButton label="Launch experience" />
      </section>

      <section className="grid grid-two">
        <ParallaxDeviceMockup title="Mobile analytics" />
        <ParallaxPoster
          title="Signal Bloom"
          subtitle="Immersive motion poster for launches, events, and digital campaigns."
        />
      </section>
    </main>
  )
}
