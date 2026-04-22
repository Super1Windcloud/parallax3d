import { VisualSurface, joinClassNames, tokens, type ParallaxBaseProps } from './shared'

export interface ParallaxButtonProps extends ParallaxBaseProps {
  label: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

export function ParallaxButton({
  className,
  label,
  type = 'button',
  disabled,
  onClick,
  ...atroposProps
}: ParallaxButtonProps) {
  return (
    <VisualSurface
      className={joinClassNames('parallax-button', className)}
      component="div"
      minHeight={92}
      padding={10}
      rotateXMax={8}
      rotateYMax={8}
      {...atroposProps}
    >
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        style={{
          width: '100%',
          minHeight: 72,
          border: 'none',
          borderRadius: 20,
          background: 'linear-gradient(135deg, #46d9ff, #8af5d2)',
          color: tokens.dark,
          fontWeight: 800,
          fontSize: 16,
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
        data-atropos-offset="12"
      >
        {label}
      </button>
    </VisualSurface>
  )
}
