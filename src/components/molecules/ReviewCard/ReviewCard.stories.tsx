import type { Meta, StoryObj } from '@storybook/react-vite';

import { ReviewCard } from './ReviewCard';

const meta = {
  title: 'Molecules/ReviewCard',
  component: ReviewCard,
} satisfies Meta<typeof ReviewCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    author: { name: 'Jane Doe', avatarUrl: null, role: 'Traveler' },
    rating: 4.5,
    content: 'Had a wonderful stay — host was responsive and the place was spotless.',
    date: new Date().toISOString(),
  },
};

