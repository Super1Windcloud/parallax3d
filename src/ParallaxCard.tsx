import type { ReactNode } from 'react'
import { VisualSurface, joinClassNames, tokens, type ParallaxBaseProps } from './shared'

export interface ParallaxCardProps extends ParallaxBaseProps {
  eyebrow?: string
  title: string
  description: string
  imageUrl: string
  imageAlt?: string
  tags?: string[]
  ctaLabel?: string
  footer?: ReactNode
}

export function ParallaxCard({
  className,
  eyebrow = 'Interactive Preview',
  title,
  description,
  imageUrl,
  imageAlt = '',
  tags = [],
  ctaLabel = 'Explore case study',
  footer,
  ...atroposProps
}: ParallaxCardProps) {
  return (
    <VisualSurface
      className={joinClassNames('parallax-card', className)}
      minHeight={560}
      {...atroposProps}
    >
      <div
        style={{
          position: 'absolute',
          inset: '-18% auto auto -8%',
          width: 240,
          height: 240,
          borderRadius: 999,
          background: 'radial-gradient(circle, rgba(255,119,183,0.38), transparent 68%)',
        }}
        data-atropos-offset="-4"
      />
      <div
        style={{
          display: 'grid',
          gap: 18,
          height: '100%',
          gridTemplateRows: '1.1fr 1fr',
        }}
      >
        <div
          style={{
            position: 'relative',
            display: 'grid',
            placeItems: 'center',
            overflow: 'hidden',
            borderRadius: 24,
            background: 'linear-gradient(145deg, rgba(21,33,61,0.95), rgba(8,13,24,0.88))',
          }}
          data-atropos-offset="8"
        >
          <div
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              width: 86,
              height: 86,
              borderRadius: 999,
              background: 'radial-gradient(circle, rgba(255,119,183,0.92), rgba(255,119,183,0.08))',
              filter: 'blur(6px)',
            }}
            data-atropos-offset="-2"
          />
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              left: 18,
              width: 112,
              height: 112,
              borderRadius: 999,
              background: 'radial-gradient(circle, rgba(125,232,255,0.92), rgba(125,232,255,0.08))',
              filter: 'blur(6px)',
            }}
            data-atropos-offset="3"
          />
          <img
            src={imageUrl}
            alt={imageAlt}
            style={{
              width: 'calc(100% - 32px)',
              height: 'calc(100% - 32px)',
              objectFit: 'cover',
              borderRadius: 18,
              boxShadow: '0 18px 48px rgba(0,0,0,0.34)',
            }}
          />
        </div>

        <div style={{ display: 'grid', gap: 14, alignContent: 'end' }}>
          <p
            style={{
              margin: 0,
              fontSize: 12,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: tokens.cyan,
            }}
            data-atropos-offset="3"
          >
            {eyebrow}
          </p>
          <h2
            style={{ margin: 0, fontSize: 'clamp(2rem, 5vw, 2.8rem)', lineHeight: 1 }}
            data-atropos-offset="6"
          >
            {title}
          </h2>
          <p style={{ margin: 0, fontSize: 16, color: tokens.muted }} data-atropos-offset="4">
            {description}
          </p>
          {tags.length > 0 && (
            <div
              aria-label="Card tags"
              style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}
            >
              {tags.map((tag, index) => (
                <span
                  key={tag}
                  style={{
                    padding: '8px 14px',
                    borderRadius: 999,
                    border: `1px solid ${tokens.line}`,
                    background: 'rgba(125,232,255,0.08)',
                    fontSize: 13,
                    color: '#d8f6ff',
                  }}
                  data-atropos-offset={index % 2 === 0 ? '5' : '3'}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}
            data-atropos-offset="7"
          >
            <span
              style={{
                display: 'inline-flex',
                minHeight: 44,
                alignItems: 'center',
                padding: '0 18px',
                borderRadius: 999,
                background: 'linear-gradient(135deg, #46d9ff, #7cf4c8)',
                color: tokens.dark,
                fontWeight: 700,
              }}
            >
              {ctaLabel}
            </span>
            {footer}
          </div>
        </div>
      </div>
    </VisualSurface>
  )
}
