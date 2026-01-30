import type { Meta, StoryObj } from '@storybook/react-vite';

import Card from './Card';

const meta = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    hasImage: true,
    imgUrl: '',
    imagePosition: 'left',
    title: 'Card Title',
    content: 'Card Content',
    rounded: true,
    hasShadow: true,
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoImage: Story = {
  args: {
    hasImage: false,
  },
};
