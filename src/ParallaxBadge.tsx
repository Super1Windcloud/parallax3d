import { VisualSurface, joinClassNames, tokens, type ParallaxBaseProps } from './shared'

export interface ParallaxBadgeProps extends ParallaxBaseProps {
  label: string
  value: string
  trend?: string
}

export function ParallaxBadge({
  className,
  label,
  value,
  trend,
  ...atroposProps
}: ParallaxBadgeProps) {
  return (
    <VisualSurface
      className={joinClassNames('parallax-badge', className)}
      minHeight={180}
      padding={20}
      rotateXMax={9}
      rotateYMax={9}
      {...atroposProps}
    >
      <div style={{ display: 'grid', gap: 10 }}>
        <span style={{ color: tokens.soft, fontSize: 13 }} data-atropos-offset="3">
          {label}
        </span>
        <strong style={{ fontSize: 34 }} data-atropos-offset="8">
          {value}
        </strong>
        {trend && (
          <span
            style={{
              width: 'fit-content',
              padding: '8px 12px',
              borderRadius: 999,
              background: 'rgba(138,245,210,0.14)',
              color: tokens.teal,
              fontSize: 13,
              fontWeight: 700,
            }}
            data-atropos-offset="11"
          >
            {trend}
          </span>
        )}
      </div>
    </VisualSurface>
  )
}
