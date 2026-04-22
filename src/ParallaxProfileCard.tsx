import { VisualSurface, createGradientTextStyle, joinClassNames, tokens, type ParallaxBaseProps } from './shared'

export interface ParallaxProfileCardProps extends ParallaxBaseProps {
  name: string
  role: string
  avatarUrl: string
  avatarAlt?: string
  actions?: string[]
}

export function ParallaxProfileCard({
  className,
  name,
  role,
  avatarUrl,
  avatarAlt = '',
  actions = ['Follow', 'Message'],
  ...atroposProps
}: ParallaxProfileCardProps) {
  return (
    <VisualSurface
      className={joinClassNames('parallax-profile-card', className)}
      minHeight={380}
      rotateXMax={14}
      rotateYMax={14}
      {...atroposProps}
    >
      <div style={{ display: 'grid', gap: 18, justifyItems: 'center', textAlign: 'center' }}>
        <div
          style={{
            width: 116,
            height: 116,
            padding: 6,
            borderRadius: 999,
            background: 'linear-gradient(135deg, #46d9ff, #ff77b7)',
          }}
          data-atropos-offset="8"
        >
          <img
            src={avatarUrl}
            alt={avatarAlt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 999 }}
          />
        </div>
        <div style={{ display: 'grid', gap: 6 }}>
          <h3 style={{ margin: 0, fontSize: 28, ...createGradientTextStyle(['#ffffff', '#8fdcff']) }} data-atropos-offset="7">
            {name}
          </h3>
          <p style={{ margin: 0, color: tokens.muted }} data-atropos-offset="4">
            {role}
          </p>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
          {actions.map((action, index) => (
            <button
              type="button"
              key={action}
              style={{
                minHeight: 42,
                padding: '0 16px',
                borderRadius: 999,
                border: `1px solid ${tokens.line}`,
                background: index === 0 ? 'linear-gradient(135deg, #46d9ff, #7cf4c8)' : 'rgba(255,255,255,0.05)',
                color: index === 0 ? tokens.dark : tokens.text,
                fontWeight: 700,
                cursor: 'pointer',
              }}
              data-atropos-offset={index === 0 ? '10' : '6'}
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </VisualSurface>
  )
}
