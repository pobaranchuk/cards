import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

type CheckboxProps = {
  disabled?: boolean
}
const CheckboxDemo = ({ disabled = false }: CheckboxProps) => (
  <div className={s.Container}>
    <Checkbox.Root className={s.CheckboxRoot} disabled={disabled}>
      <Checkbox.Indicator className={s.CheckboxIndicator}>
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Root>
    <label className={s.Label} data-disabled={disabled}>
      Check-box
    </label>
  </div>
)

export default CheckboxDemo
