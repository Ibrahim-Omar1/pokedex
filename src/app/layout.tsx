import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

/**
 * Metadata for the Pokémon website.
 * @type {Metadata}
 */
export const metadata: Metadata = {
	title: {
		default: 'Pokédex | Pokémon Database',
		template: '%s | Pokédex',
		absolute: 'Pokédex - The Ultimate Pokémon Database',
	},
	description:
		'Explore a comprehensive Pokédex with stats, abilities, evolutions, and more for every Pokémon. Your go-to resource for all things Pokémon!',
	applicationName: 'Pokédex',
	authors: [{ name: 'Pokédex Team', url: 'https://pokedex.com' }],
	generator: 'Next.js',
	keywords: [
		'Pokémon',
		'Pokédex',
		'Pokemon Database',
		'Pokemon Stats',
		'Pokemon Abilities',
		'Pokemon Evolutions',
	],
	referrer: 'origin-when-cross-origin',
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: 'https://pokedex.com',
		languages: {
			'en-US': 'https://pokedex.com/en-US',
		},
	},
	manifest: '/manifest.json',
	openGraph: {
		type: 'website',
		url: 'https://pokedex.com',
		title: 'Pokédex | Pokémon Database',
		description:
			'Explore a comprehensive Pokédex with stats, abilities, evolutions, and more for every Pokémon.',
		siteName: 'Pokédex',
	},
	twitter: {
		card: 'summary_large_image',
		site: '@pokedex',
		creator: '@pokedex',
	},
	appleWebApp: {
		capable: true,
		title: 'Pokédex',
		statusBarStyle: 'black-translucent',
	},
	formatDetection: {
		telephone: false,
	},
	category: 'Games',
	classification: 'Pokémon, Database, Reference, Game',
	other: {
		custom: ['Pokédex', 'Pokémon', 'Database'],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={cn(geistSans.variable, geistMono.variable, 'antialiased scroll-smooth')}>
				{children}
			</body>
		</html>
	);
}
