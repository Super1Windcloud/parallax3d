import { VisualSurface, joinClassNames, tokens, type ParallaxBaseProps } from './shared'

export interface ParallaxProductCardProps extends ParallaxBaseProps {
  name: string
  category?: string
  price: string
  imageUrl: string
  imageAlt?: string
  badge?: string
  buttonLabel?: string
}

export function ParallaxProductCard({
  className,
  name,
  category = 'Featured item',
  price,
  imageUrl,
  imageAlt = '',
  badge = 'New',
  buttonLabel = 'Add to cart',
  ...atroposProps
}: ParallaxProductCardProps) {
  return (
    <VisualSurface
      className={joinClassNames('parallax-product-card', className)}
      minHeight={480}
      {...atroposProps}
    >
      <div style={{ display: 'grid', gap: 18, height: '100%', gridTemplateRows: '1.1fr auto' }}>
        <div
          style={{
            position: 'relative',
            borderRadius: 24,
            overflow: 'hidden',
            background: 'linear-gradient(145deg, rgba(18,29,54,0.94), rgba(8,13,24,0.88))',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 16,
              left: 16,
              padding: '8px 12px',
              borderRadius: 999,
              background: 'linear-gradient(135deg, #ffd971, #ffb36d)',
              color: tokens.dark,
              fontWeight: 700,
              fontSize: 12,
            }}
            data-atropos-offset="12"
          >
            {badge}
          </div>
          <img
            src={imageUrl}
            alt={imageAlt}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            data-atropos-offset="8"
          />
        </div>
        <div style={{ display: 'grid', gap: 12 }}>
          <span style={{ color: tokens.cyan, fontSize: 13 }} data-atropos-offset="3">
            {category}
          </span>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'baseline' }}>
            <h3 style={{ margin: 0, fontSize: 28 }} data-atropos-offset="6">
              {name}
            </h3>
            <strong style={{ fontSize: 24 }} data-atropos-offset="9">
              {price}
            </strong>
          </div>
          <button
            type="button"
            style={{
              minHeight: 46,
              border: 'none',
              borderRadius: 16,
              background: 'linear-gradient(135deg, #46d9ff, #7cf4c8)',
              color: tokens.dark,
              fontWeight: 700,
              cursor: 'pointer',
            }}
            data-atropos-offset="11"
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </VisualSurface>
  )
}
