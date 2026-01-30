import type { Meta, StoryObj } from '@storybook/react-vite';

import MyAccount from './MyAccount';
import { expect, fn, within } from 'storybook/test';

const meta = {
  title: 'UI/MyAccount',
  component: MyAccount,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    isLoggedIn: false,
    useModern: false,
    backgroundColor: 'transparent',
    textColor: '#000000',
    onLogin: fn(),
    onLogout: fn(),
  },
} satisfies Meta<typeof MyAccount>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btnLogin = canvas.getByRole('button', { name: /Log In/i });
    await expect(btnLogin).toBeInTheDocument();

    const usernameInput = canvas.getByRole('textbox', { name: /Username/i });
    await expect(usernameInput).toBeInTheDocument();

    const passwordInput = canvas.getByLabelText('Password');
    await expect(passwordInput).toBeInTheDocument();
  },
};

export const ModernLoggedOut: Story = {
  args: {
    useModern: true,
    backgroundColor: 'green',
    textColor: 'white',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btnLogin = canvas.getByRole('button', { name: /Log In/i });
    await expect(btnLogin).toBeInTheDocument();

    const usernameInput = canvas.getByRole('textbox', { name: /Username/i });
    await expect(usernameInput).toBeInTheDocument();

    const passwordInput = canvas.getByLabelText('Password');
    await expect(passwordInput).toBeInTheDocument();
  },
};

export const LoggedIn: Story = {
  args: {
    isLoggedIn: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btnLogin = canvas.getByRole('button', { name: /Log Out/i });
    await expect(btnLogin).toBeInTheDocument();
  },
};

export const ModernLoggedIn: Story = {
  args: {
    isLoggedIn: true,
    useModern: true,
    backgroundColor: 'green',
    textColor: 'white',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btnLogin = canvas.getByRole('button', { name: /Log Out/i });
    await expect(btnLogin).toBeInTheDocument();
  },
};
