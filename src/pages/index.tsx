import React from 'react';

import {
	AboutSection,
	ExperienceSection,
	HeroSection,
	Layout,
	WorkSection,
} from '@components';

interface IPageProps {}

const HomePage: React.FC<IPageProps> = () => {
	return (
		<Layout>
			<HeroSection />
			<AboutSection />
			<ExperienceSection />
			<WorkSection />
		</Layout>
	);
};

export default HomePage;
