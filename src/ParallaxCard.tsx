import type { ComponentProps, ReactNode } from 'react'
import Atropos from 'atropos/react'

type AtroposProps = ComponentProps<typeof Atropos>

export interface ParallaxCardProps extends Omit<AtroposProps, 'children'> {
  className?: string
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
  shadow = true,
  highlight = true,
  rotateXMax = 16,
  rotateYMax = 16,
  ...atroposProps
}: ParallaxCardProps) {
  const rootClassName = ['parallax-card', className].filter(Boolean).join(' ')

  return (
    <Atropos
      component="article"
      className={rootClassName}
      shadow={shadow}
      highlight={highlight}
      rotateXMax={rotateXMax}
      rotateYMax={rotateYMax}
      {...atroposProps}
    >
      <div className="parallax-card__frame">
        <div className="parallax-card__glow" data-atropos-offset="-4" />
        <div className="parallax-card__hero" data-atropos-offset="8">
          <div className="parallax-card__orb parallax-card__orb--pink" data-atropos-offset="-2" />
          <div className="parallax-card__orb parallax-card__orb--cyan" data-atropos-offset="3" />
          <img className="parallax-card__image" src={imageUrl} alt={imageAlt} />
        </div>

        <div className="parallax-card__content">
          <p className="parallax-card__eyebrow" data-atropos-offset="3">
            {eyebrow}
          </p>
          <h2 className="parallax-card__title" data-atropos-offset="6">
            {title}
          </h2>
          <p className="parallax-card__description" data-atropos-offset="4">
            {description}
          </p>

          {tags.length > 0 && (
            <div className="parallax-card__tags" aria-label="Card tags">
              {tags.map((tag, index) => (
                <span
                  className="parallax-card__tag"
                  data-atropos-offset={index % 2 === 0 ? '5' : '3'}
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="parallax-card__footer" data-atropos-offset="7">
            <span className="parallax-card__cta">{ctaLabel}</span>
            {footer}
          </div>
        </div>
      </div>
    </Atropos>
  )
}
