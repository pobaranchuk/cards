import { ComponentPropsWithoutRef, forwardRef } from 'react'

import style from './input.module.scss'
import { Button } from "@/components/ui/button";

export type InputProps = {
  label?: string
  isShowPasswordBtn: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, isShowPasswordBtn, ...rest }, ref) => {
    return (
      <div className={style['container']}>
        {label && <span>{label}</span>}
        <input ref={ref} className={`${className ? style[className] : ''} `} {...rest} />
        {
          isShowPasswordBtn && <Button>
          31313131
          </Button>
        }

      </div>
    )
  }
)
