import type { Meta, StoryObj } from '@storybook/react-vite'
import { Display } from '../components/Display'
import '../index.css'

const meta: Meta<typeof Display> = {
  title: 'Components/Display',
  component: Display,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Display>

export const Zero: Story = {
  args: {
    value: '0',
  },
}

export const NormalValue: Story = {
  args: {
    value: '12345.678',
  },
}

export const ErrorValue: Story = {
  args: {
    value: 'ERROR',
  },
}
