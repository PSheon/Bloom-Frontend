// ** Type Imports
import type { ReactNode, ComponentType } from 'react'

export type RepeaterProps = {
  count: number
  children(i: number): ReactNode
  tag?: ComponentType | keyof JSX.IntrinsicElements
}
