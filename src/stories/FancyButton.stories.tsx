import type { Meta, StoryObj } from '@storybook/react-vite';

import FancyButton from './FancyButton';
import { fn } from 'storybook/test';

const meta = {
  title: 'UI/FancyButton',
  component: FancyButton,
  tags: ['autodocs'],
  args: {
    isDark: false,
    label: 'Click Me!',
    isRounded: true,
    hasShadow: true,
    textColor: '#000000',
    hasIcon: true,
    iconPosition: 'right',
    onToggle: fn(),
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FancyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default',
  },
};

export const NotRounded: Story = {
  args: {
    isRounded: false,
  },
};

export const NoShadow: Story = {
  args: {
    hasShadow: false,
  },
};

export const NoIcon: Story = {
  args: {
    hasIcon: false,
  },
};

export const Light: Story = {
  args: {
    label: 'Light Button',
  },
};

export const NotRoundedLight: Story = {
  args: {
    label: 'Light Button',
    isRounded: false,
  },
};

export const Dark: Story = {
  args: {
    isDark: true,
    label: 'Dark Button',
    textColor: '#FFFFFF',
  },
};

export const LeftIcon: Story = {
  args: {
    iconPosition: 'left',
  },
};
