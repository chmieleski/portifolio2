import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Augusto Silveira - Sr. Software Engineer',
	description:
		'Bem-vindo ao meu portifólio! Sou um desenvolvedor de software senior com mais de 10 anos de experiência em desenvolvimento de software. Especializando-se em desenvolvimento de software, criando experiências de mobile que os usuários amam.',
	keywords: [
		'Mobile Developer',
		'iOS Developer',
		'Android Developer',
		'React Native',
		'Flutter',
		'Swift',
		'Kotlin',
		'Mobile Apps',
		'Cross-Platform Development',
		'Native Development',
		'Mobile UI/UX',
		'App Store',
		'Play Store',
		'Mobile Architecture',
		'Augusto Silveira',
	],
	authors: [{ name: 'Augusto Silveira' }],
	creator: 'Augusto Silveira',
	openGraph: {
		title: 'Augusto Silveira - Sr. Software Engineer Portfolio',
		description: 'Desenvolvedor de software senior criando experiências de mobile que os usuários amam. Explore meus projetos e expertise em desenvolvimento de software.',
		url: 'https://portifolio2-eight-rust.vercel.app',
		siteName: 'Augusto Silveira - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Augusto Silveira - Sr. Software Engineer Portfolio',
			},
		],
		locale: 'pt_BR',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Augusto Silveira - Sr. Software Engineer',
		description: 'Desenvolvedor de software senior criando experiências de mobile que os usuários amam. Explore meus projetos e expertise em desenvolvimento de software.',
		creator: '@augustosilveira',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
