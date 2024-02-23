import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

type VariantType =
  | 'Body 1'
  | 'Body 2'
  | 'Caption'
  | 'Link 1'
  | 'Link 2'
  | 'Overline'
  | 'Subtitle 1'
  | 'Subtitle 2'
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
  const { as: Component = 'span', className, variant = 'Body 2', ...rest } = props

  return <Component className={`${s[variant]} ${className}`} {...rest} />
}
