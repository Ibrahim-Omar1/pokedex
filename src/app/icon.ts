import { ImageResponse } from 'next/og';
import * as React from 'react';

export default async function Icon() {
	return new ImageResponse(
		React.createElement(
			'div',
			{
				style: {
					width: '100%',
					height: '100%',
					background: '#2a75bb',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				},
			},
			React.createElement('span', { style: { color: '#ffcb05', fontSize: 32 } }, 'P')
		),
		{ width: 64, height: 64 }
	);
}
