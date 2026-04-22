import type { ComponentProps, CSSProperties, ReactNode } from 'react'
import Atropos from 'atropos/react'

export type AtroposComponentProps = Omit<ComponentProps<typeof Atropos>, 'children'>

export interface ParallaxBaseProps extends AtroposComponentProps {
  className?: string
}

export interface VisualSurfaceProps extends ParallaxBaseProps {
  children: ReactNode
  component?: string
  radius?: number
  padding?: number | string
  minHeight?: number | string
  background?: string
  border?: string
  boxShadow?: string
}

export function joinClassNames(...names: Array<string | undefined>) {
  return names.filter(Boolean).join(' ')
}

export function createGradientTextStyle(colors: [string, string]): CSSProperties {
  return {
    backgroundImage: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
    backgroundClip: 'text',
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }
}

export function VisualSurface({
  children,
  className,
  component = 'article',
  radius = 28,
  padding = 24,
  minHeight,
  background = 'linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06)), rgba(7,14,30,0.92)',
  border = '1px solid rgba(255,255,255,0.12)',
  boxShadow = '0 28px 80px rgba(0,0,0,0.32)',
  shadow = true,
  highlight = true,
  rotateXMax = 16,
  rotateYMax = 16,
  style,
  ...atroposProps
}: VisualSurfaceProps) {
  return (
    <Atropos
      component={component}
      className={className}
      shadow={shadow}
      highlight={highlight}
      rotateXMax={rotateXMax}
      rotateYMax={rotateYMax}
      style={{ display: 'block', width: '100%', ...style }}
      {...atroposProps}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          minHeight,
          padding,
          overflow: 'hidden',
          border,
          borderRadius: radius,
          background,
          backdropFilter: 'blur(18px)',
          boxShadow,
        }}
      >
        {children}
      </div>
    </Atropos>
  )
}

export const tokens = {
  text: '#f5f7fb',
  muted: 'rgba(245,247,251,0.72)',
  soft: 'rgba(245,247,251,0.56)',
  cyan: '#7de8ff',
  teal: '#8af5d2',
  pink: '#ff77b7',
  yellow: '#ffd971',
  dark: '#06111f',
  line: 'rgba(255,255,255,0.12)',
} as const
