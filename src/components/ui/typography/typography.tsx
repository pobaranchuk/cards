import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

type VariantType =
  | 'Body1'
  | 'Body2'
  | 'Caption'
  | 'Link1'
  | 'Link2'
  | 'Overline'
  | 'Subtitle1'
  | 'Subtitle2'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'

export type TypographyProps<T extends ElementType = 'span'> = {
  as?: T
  children: ReactNode
  className?: string
  variant?: VariantType
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'span'>(props: TypographyProps<T>) => {
  const { as: Component = 'span', className, variant = 'Body2', ...rest } = props

  return <Component className={`${s[variant]} ${className}`} {...rest} />
}
