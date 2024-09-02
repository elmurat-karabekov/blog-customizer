import type { Meta, StoryObj } from '@storybook/react';

import { ArrowButton } from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;

const onClick = () => {
	console.log('ArrowButton clicked');
};

const open = false;

// TODO: check how to properly set props (onClick) in Storybook
export const ArrowButtonStory: Story = {
	render: () => {
		return (
			<>
				<ArrowButton onClick={onClick} isFormOpen={open} />
			</>
		);
	},
};
