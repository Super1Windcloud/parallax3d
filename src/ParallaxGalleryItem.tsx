import { VisualSurface, joinClassNames, tokens, type ParallaxBaseProps } from './shared'

export interface ParallaxGalleryItemProps extends ParallaxBaseProps {
  title: string
  category: string
  imageUrl: string
  imageAlt?: string
}

export function ParallaxGalleryItem({
  className,
  title,
  category,
  imageUrl,
  imageAlt = '',
  ...atroposProps
}: ParallaxGalleryItemProps) {
  return (
    <VisualSurface
      className={joinClassNames('parallax-gallery-item', className)}
      padding={14}
      minHeight={360}
      {...atroposProps}
    >
      <div style={{ display: 'grid', gap: 14, height: '100%' }}>
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 22, minHeight: 250 }}>
          <img
            src={imageUrl}
            alt={imageAlt}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            data-atropos-offset="6"
          />
          <div
            style={{
              position: 'absolute',
              top: 14,
              left: 14,
              padding: '8px 12px',
              borderRadius: 999,
              background: 'rgba(6,17,31,0.76)',
              color: tokens.cyan,
              fontSize: 12,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
            data-atropos-offset="12"
          >
            {category}
          </div>
        </div>
        <div style={{ display: 'grid', gap: 6, alignContent: 'end' }}>
          <h3 style={{ margin: 0, fontSize: 24 }} data-atropos-offset="8">
            {title}
          </h3>
          <p style={{ margin: 0, color: tokens.muted }} data-atropos-offset="4">
            Curated visual piece with layered hover depth.
          </p>
        </div>
      </div>
    </VisualSurface>
  )
}
