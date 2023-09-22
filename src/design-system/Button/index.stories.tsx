import { Button } from '.';
import { Meta, StoryObj } from '@storybook/react'

export default {
  component: Button,
  args: {
    children: 'Button'
  }
} satisfies Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {};

export const Round: StoryObj<typeof Button> = {
  args: {
    style: {
      borderRadius: '1rem'
    }
  }
};

