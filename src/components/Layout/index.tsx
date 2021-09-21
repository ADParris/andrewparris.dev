import React from 'react';

import { BackgroundParticles } from '../BackgroundParticles';

import { Footer } from './Footer';
import { Head } from './Head';
import { Header } from './Header';

export const Layout: React.FC = ({ children }) => (
	<div className="relative">
		<Head />
		<BackgroundParticles />
		<div className="flex flex-col min-h-screen h-full">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	</div>
);
