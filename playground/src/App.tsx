import { ParallaxCard } from '../../src'

export function App() {
  return (
    <main className="app-shell">
      <section className="app-copy">
        <p className="app-kicker">Atropos React</p>
        <h1>3D 视差卡片组件</h1>
        <p className="app-lead">
          基于 <code>atropos/react</code> 封装的可复用 React 组件，支持 hover 与 touch 的立体视差交互。
        </p>
      </section>

      <ParallaxCard
        className="app-card"
        title="Neon Horizon"
        description="Build tactile product showcases, landing page heroes, and gallery cards with layered motion."
        imageUrl="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=80"
        imageAlt="A neon-lit city skyline at night"
        tags={['React 19', 'Atropos', 'Touch Ready']}
        footer={<span className="app-metric">Depth 16deg</span>}
      />
    </main>
  )
}
