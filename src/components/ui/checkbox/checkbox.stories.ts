import type { Meta, StoryObj } from '@storybook/react'

import Checkbox from '@/components/ui/checkbox/checkbox'

const meta = {
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
    },
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Checked: Story = {
  args: {
    checked: true,
  },
}
