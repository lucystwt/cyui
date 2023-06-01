import type { Meta, StoryObj } from '@storybook/react'

import Button from './button'
import Space from '../space'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Colors: Story = {
  render: (args) => (
    <Space>
      <Button colorScheme="gray" {...args} />
      <Button colorScheme="red" {...args} />
      <Button colorScheme="orange" {...args} />
      <Button colorScheme="yellow" {...args} />
      <Button colorScheme="green" {...args} />
      <Button colorScheme="blue" {...args} />
      <Button colorScheme="indigo" {...args} />
      <Button colorScheme="purple" {...args} />
      <Button colorScheme="pink" {...args} />
      <Button colorScheme="cyan" {...args} />
      <Button colorScheme="teal" {...args} />
    </Space>
  ),
  args: {
    children: 'Button',
  },
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Variant: Story = {
  render: (args) => (
    <Space>
      <Button variant="solid" {...args} />
      <Button variant="outline" {...args} />
      <Button variant="ghost" {...args} />
    </Space>
  ),
  args: {
    colorScheme: 'blue',
    children: 'Button',
  },
}

export const Size: Story = {
  render: (args) => (
    <Space>
      <Button size="sm" {...args} />
      <Button size="md" {...args} />
      <Button size="lg" {...args} />
    </Space>
  ),
  args: {
    colorScheme: 'indigo',
    children: 'Button',
  },
}

export const Disabled: Story = {
  render: (args) => (
    <Space>
      <Button variant="solid" {...args} />
      <Button variant="outline" {...args} />
      <Button variant="ghost" {...args} />
      <Button colorScheme="red" {...args} />
      <Button colorScheme="teal" {...args} />
    </Space>
  ),
  args: {
    disabled: true,
    children: 'Button',
  },
}
