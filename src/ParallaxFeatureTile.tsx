import type { ReactNode } from 'react'
import { VisualSurface, joinClassNames, tokens, type ParallaxBaseProps } from './shared'

export interface ParallaxFeatureTileProps extends ParallaxBaseProps {
  index: string
  title: string
  description: string
  icon?: ReactNode
}

export function ParallaxFeatureTile({
  className,
  index,
  title,
  description,
  icon,
  ...atroposProps
}: ParallaxFeatureTileProps) {
  return (
    <VisualSurface
      className={joinClassNames('parallax-feature-tile', className)}
      minHeight={260}
      padding={22}
      rotateXMax={10}
      rotateYMax={10}
      {...atroposProps}
    >
      <div style={{ display: 'grid', gap: 18 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
          <span style={{ fontSize: 36, fontWeight: 800, color: 'rgba(125,232,255,0.9)' }} data-atropos-offset="8">
            {index}
          </span>
          <div
            style={{
              display: 'grid',
              placeItems: 'center',
              width: 52,
              height: 52,
              borderRadius: 16,
              background: 'rgba(255,255,255,0.08)',
              color: tokens.teal,
            }}
            data-atropos-offset="12"
          >
            {icon ?? '+'}
          </div>
        </div>
        <div style={{ display: 'grid', gap: 8 }}>
          <h3 style={{ margin: 0, fontSize: 24 }} data-atropos-offset="7">
            {title}
          </h3>
          <p style={{ margin: 0, color: tokens.muted }} data-atropos-offset="4">
            {description}
          </p>
        </div>
      </div>
    </VisualSurface>
  )
}
