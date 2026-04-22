import { VisualSurface, joinClassNames, type ParallaxBaseProps } from './shared'

export interface ParallaxImageProps extends ParallaxBaseProps {
  src: string
  alt: string
  aspectRatio?: number
  caption?: string
}

export function ParallaxImage({
  className,
  src,
  alt,
  aspectRatio = 4 / 5,
  caption,
  ...atroposProps
}: ParallaxImageProps) {
  return (
    <VisualSurface
      className={joinClassNames('parallax-image', className)}
      padding={16}
      {...atroposProps}
    >
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 22,
          aspectRatio: `${aspectRatio}`,
          background: 'linear-gradient(135deg, rgba(13,27,51,0.94), rgba(7,12,24,0.94))',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 'auto auto 8% 8%',
            width: '44%',
            height: '28%',
            borderRadius: 999,
            background: 'radial-gradient(circle, rgba(125,232,255,0.26), transparent 72%)',
          }}
          data-atropos-offset="-3"
        />
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          data-atropos-offset="6"
        />
        {caption && (
          <div
            style={{
              position: 'absolute',
              right: 14,
              bottom: 14,
              padding: '10px 14px',
              borderRadius: 999,
              background: 'rgba(6,17,31,0.76)',
              color: '#f5f7fb',
              fontSize: 13,
              backdropFilter: 'blur(10px)',
            }}
            data-atropos-offset="10"
          >
            {caption}
          </div>
        )}
      </div>
    </VisualSurface>
  )
}
