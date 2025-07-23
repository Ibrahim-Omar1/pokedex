import { ImageResponse } from 'next/og';
import * as React from 'react';

export default async function TwitterImage() {
	return new ImageResponse(
		React.createElement(
			'div',
			{
				style: {
					fontSize: 64,
					background: '#2a75bb',
					color: '#ffcb05',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				},
			},
			'Pokédex Twitter'
		),
		{ width: 800, height: 418 }
	);
}
