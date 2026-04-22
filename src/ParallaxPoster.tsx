import { VisualSurface, createGradientTextStyle, joinClassNames, tokens, type ParallaxBaseProps } from './shared'

export interface ParallaxPosterProps extends ParallaxBaseProps {
  title: string
  subtitle: string
  date?: string
}

export function ParallaxPoster({
  className,
  title,
  subtitle,
  date = '09 AUG 2026',
  ...atroposProps
}: ParallaxPosterProps) {
  return (
    <VisualSurface
      className={joinClassNames('parallax-poster', className)}
      minHeight={520}
      padding={28}
      background="linear-gradient(160deg, rgba(11,20,41,0.98), rgba(38,12,48,0.92))"
      {...atroposProps}
    >
      <div
        style={{
          position: 'absolute',
          top: -40,
          right: -30,
          width: 240,
          height: 240,
          borderRadius: 999,
          background: 'radial-gradient(circle, rgba(255,119,183,0.24), transparent 72%)',
        }}
        data-atropos-offset="-4"
      />
      <div
        style={{
          display: 'grid',
          alignContent: 'space-between',
          minHeight: 464,
          gap: 24,
        }}
      >
        <span
          style={{
            width: 'fit-content',
            padding: '8px 12px',
            borderRadius: 999,
            background: 'rgba(255,255,255,0.08)',
            color: tokens.cyan,
            letterSpacing: '0.14em',
            fontSize: 12,
          }}
          data-atropos-offset="6"
        >
          LIVE EVENT
        </span>
        <div style={{ display: 'grid', gap: 12 }}>
          <h2
            style={{
              margin: 0,
              fontSize: 'clamp(3rem, 7vw, 5rem)',
              lineHeight: 0.9,
              textTransform: 'uppercase',
              ...createGradientTextStyle(['#ffffff', '#ff9bd0']),
            }}
            data-atropos-offset="10"
          >
            {title}
          </h2>
          <p style={{ margin: 0, color: tokens.muted, fontSize: 18 }} data-atropos-offset="4">
            {subtitle}
          </p>
        </div>
        <strong style={{ fontSize: 20, color: tokens.yellow }} data-atropos-offset="12">
          {date}
        </strong>
      </div>
    </VisualSurface>
  )
}
