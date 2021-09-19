import React from 'react';

import { BackgroundParticles } from '../BackgroundParticles';

import { Footer } from './Footer';
import { Head } from './Head';
import { Header } from './Header';
import { Main } from './Main';

interface IComponentProps {}

export const Layout: React.FC<IComponentProps> = ({ children }) => {
	return (
		<div className="relative">
			<Head />
			<BackgroundParticles />
			<div className="flex flex-col min-h-screen h-full">
				<Header />
				<Main>{children}</Main>
				<Footer />
			</div>
		</div>
	);
};
