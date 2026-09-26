import type { CSSProperties, ReactNode } from 'react'
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react'

type GradientProps = Parameters<typeof ShaderGradient>[0]

export type GradientBackgroundProps = {
  /** Three brand colors blended by the shader. */
  colors?: [string, string, string]
  /** Animation speed (0 = frozen). */
  speed?: number
  /** Extra ShaderGradient props to fine-tune the effect. */
  gradient?: Partial<GradientProps>
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

/** SVELIA palette: lavande, mauve poudré, prune. */
export const SVELIA_COLORS: [string, string, string] = ['#f3eefb', '#c9a7d8', '#8a5a7e']

/**
 * Animated WebGL gradient that fills its parent and renders `children` on top.
 * Falls back to a static CSS gradient while WebGL loads, and freezes the
 * animation for visitors who prefer reduced motion.
 */
export function GradientBackground({
  colors = SVELIA_COLORS,
  speed = 0.25,
  gradient,
  className,
  style,
  children,
}: GradientBackgroundProps) {
  const reducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]} 55%, ${colors[2]})`,
        ...style,
      }}
    >
      <ShaderGradientCanvas
        style={{ position: 'absolute', inset: 0 }}
        pixelDensity={1}
        fov={45}
        pointerEvents="none"
      >
        <ShaderGradient
          control="props"
          type="waterPlane"
          animate={reducedMotion ? 'off' : 'on'}
          uSpeed={speed}
          uStrength={1.2}
          uDensity={1.2}
          uFrequency={5.5}
          uAmplitude={0}
          positionX={0}
          positionY={0}
          positionZ={0}
          rotationX={50}
          rotationY={0}
          rotationZ={-60}
          cAzimuthAngle={180}
          cPolarAngle={80}
          cDistance={2.8}
          cameraZoom={9.1}
          color1={colors[0]}
          color2={colors[1]}
          color3={colors[2]}
          lightType="3d"
          brightness={1}
          reflection={0.1}
          grain="off"
          {...gradient}
        />
      </ShaderGradientCanvas>
      <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>{children}</div>
    </div>
  )
}
