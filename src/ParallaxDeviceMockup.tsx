import type { ReactNode } from 'react'
import { VisualSurface, joinClassNames, tokens, type ParallaxBaseProps } from './shared'

export interface ParallaxDeviceMockupProps extends ParallaxBaseProps {
  title: string
  caption?: string
  screen?: ReactNode
}

export function ParallaxDeviceMockup({
  className,
  title,
  caption = 'Responsive product walkthrough',
  screen,
  ...atroposProps
}: ParallaxDeviceMockupProps) {
  return (
    <VisualSurface
      className={joinClassNames('parallax-device-mockup', className)}
      minHeight={430}
      padding={24}
      {...atroposProps}
    >
      <div style={{ display: 'grid', gap: 18 }}>
        <div style={{ display: 'grid', gap: 6 }}>
          <span style={{ color: tokens.cyan, fontSize: 13 }} data-atropos-offset="3">
            {caption}
          </span>
          <h3 style={{ margin: 0, fontSize: 28 }} data-atropos-offset="6">
            {title}
          </h3>
        </div>
        <div
          style={{
            display: 'grid',
            placeItems: 'center',
            minHeight: 300,
          }}
        >
          <div
            style={{
              width: 220,
              padding: 12,
              borderRadius: 34,
              background: 'linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06)), #0b1324',
              boxShadow: '0 24px 60px rgba(0,0,0,0.28)',
            }}
            data-atropos-offset="10"
          >
            <div
              style={{
                display: 'grid',
                gap: 10,
                minHeight: 360,
                padding: 14,
                borderRadius: 26,
                background: 'linear-gradient(180deg, rgba(23,36,66,0.98), rgba(10,18,34,0.98))',
              }}
            >
              {screen ?? (
                <>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '4px 2px',
                      color: tokens.soft,
                      fontSize: 12,
                    }}
                    data-atropos-offset="4"
                  >
                    <span>09:41</span>
                    <span>5G</span>
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gap: 12,
                      padding: 14,
                      borderRadius: 20,
                      background: 'rgba(125,232,255,0.10)',
                    }}
                    data-atropos-offset="8"
                  >
                    <strong style={{ fontSize: 18 }}>Growth dashboard</strong>
                    <span style={{ color: tokens.muted }}>Revenue and retention snapshots in a touch-friendly frame.</span>
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gap: 10,
                      gridTemplateColumns: '1fr 1fr',
                    }}
                  >
                    <div
                      style={{
                        minHeight: 84,
                        borderRadius: 18,
                        background: 'rgba(255,255,255,0.06)',
                      }}
                      data-atropos-offset="5"
                    />
                    <div
                      style={{
                        minHeight: 84,
                        borderRadius: 18,
                        background: 'rgba(255,119,183,0.12)',
                      }}
                      data-atropos-offset="9"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </VisualSurface>
  )
}
