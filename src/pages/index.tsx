import React from 'react';

import {
	AboutSection,
	ContactSection,
	ExperienceSection,
	HeroSection,
	Layout,
	WorkSection,
} from '@components';

const HomePage: React.FC = () => (
	<Layout>
		<HeroSection />
		<AboutSection />
		<ExperienceSection />
		<WorkSection />
		<ContactSection />
	</Layout>
);

export default HomePage;
