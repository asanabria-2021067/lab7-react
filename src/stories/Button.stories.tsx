import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/Button'
import '../index.css'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Numeric: Story = {
  args: {
    label: '5',
    className: 'btn btn-num',
  },
}

export const Operator: Story = {
  args: {
    label: '+',
    className: 'btn btn-op',
  },
}

export const Function: Story = {
  args: {
    label: 'C',
    className: 'btn btn-fn',
  },
}
