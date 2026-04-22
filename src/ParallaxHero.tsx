import type { ReactNode } from 'react'
import { VisualSurface, createGradientTextStyle, joinClassNames, tokens, type ParallaxBaseProps } from './shared'

export interface ParallaxHeroProps extends ParallaxBaseProps {
  kicker?: string
  title: string
  description: string
  primaryActionLabel?: string
  secondaryActionLabel?: string
  aside?: ReactNode
}

export function ParallaxHero({
  className,
  kicker = 'Launch Faster',
  title,
  description,
  primaryActionLabel = 'Start now',
  secondaryActionLabel = 'See demo',
  aside,
  ...atroposProps
}: ParallaxHeroProps) {
  return (
    <VisualSurface
      className={joinClassNames('parallax-hero', className)}
      minHeight={420}
      padding={32}
      rotateXMax={12}
      rotateYMax={12}
      {...atroposProps}
    >
      <div
        style={{
          position: 'absolute',
          inset: '-10% auto auto -4%',
          width: 280,
          height: 280,
          borderRadius: 999,
          background: 'radial-gradient(circle, rgba(125,232,255,0.26), transparent 70%)',
        }}
        data-atropos-offset="-4"
      />
      <div
        style={{
          position: 'absolute',
          right: -60,
          bottom: -40,
          width: 240,
          height: 240,
          borderRadius: 999,
          background: 'radial-gradient(circle, rgba(255,119,183,0.26), transparent 72%)',
        }}
        data-atropos-offset="-3"
      />
      <div
        style={{
          display: 'grid',
          gap: 24,
          alignItems: 'center',
          gridTemplateColumns: 'minmax(0, 1.5fr) minmax(220px, 0.9fr)',
        }}
      >
        <div style={{ display: 'grid', gap: 18 }}>
          <p
            style={{ margin: 0, color: tokens.cyan, letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: 12 }}
            data-atropos-offset="3"
          >
            {kicker}
          </p>
          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(3rem, 7vw, 5.8rem)',
              lineHeight: 0.92,
              maxWidth: 700,
              ...createGradientTextStyle([tokens.text, '#8fdcff']),
            }}
            data-atropos-offset="7"
          >
            {title}
          </h1>
          <p
            style={{ margin: 0, maxWidth: 620, fontSize: 18, color: tokens.muted }}
            data-atropos-offset="4"
          >
            {description}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }} data-atropos-offset="8">
            <button
              type="button"
              style={{
                minHeight: 48,
                padding: '0 20px',
                border: 'none',
                borderRadius: 999,
                background: 'linear-gradient(135deg, #46d9ff, #8af5d2)',
                color: tokens.dark,
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              {primaryActionLabel}
            </button>
            <button
              type="button"
              style={{
                minHeight: 48,
                padding: '0 20px',
                borderRadius: 999,
                border: `1px solid ${tokens.line}`,
                background: 'rgba(255,255,255,0.04)',
                color: tokens.text,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {secondaryActionLabel}
            </button>
          </div>
        </div>
        <div
          style={{
            position: 'relative',
            minHeight: 280,
            borderRadius: 28,
            border: `1px solid ${tokens.line}`,
            background: 'linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04)), rgba(8,17,31,0.9)',
            padding: 20,
          }}
          data-atropos-offset="9"
        >
          <div
            style={{
              display: 'grid',
              gap: 12,
              height: '100%',
              alignContent: 'end',
            }}
          >
            {aside ?? (
              <>
                <div
                  style={{
                    display: 'grid',
                    gap: 10,
                    padding: 16,
                    borderRadius: 20,
                    background: 'rgba(125,232,255,0.08)',
                  }}
                  data-atropos-offset="4"
                >
                  <span style={{ color: tokens.soft, fontSize: 13 }}>Conversion uplift</span>
                  <strong style={{ fontSize: 32 }}>+38%</strong>
                </div>
                <div
                  style={{
                    display: 'grid',
                    gap: 6,
                    padding: 16,
                    borderRadius: 20,
                    background: 'rgba(255,255,255,0.06)',
                  }}
                  data-atropos-offset="7"
                >
                  <span style={{ color: tokens.cyan, fontSize: 13 }}>Visual layers</span>
                  <span style={{ color: tokens.text }}>Headline, proof block, CTA, and ambient shapes move independently.</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </VisualSurface>
  )
}
