import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Typed from 'react-typed';

import { ContactButton, ImageDisplay } from '@components';
import { SectionContainer } from './SectionContainer';

interface IComponentProps {}

export const HeroSection: React.FC<IComponentProps> = () => {
	const {
		site: {
			siteMetadata: {
				author: { name },
			},
		},
		imageSharp,
	} = useStaticQuery(query);

	const typedText = [
		'FRONT-END DEVELOPER.',
		'BACK-END DEVELOPER.',
		'I MAKE WEB THINGS.',
	];

	return (
		<SectionContainer id={0} tag="top">
			<div className="hero-wrap">
				<div className="mb-4 w-1/2">
					<ImageDisplay alt={name} border rounded src={imageSharp} />
				</div>
				<h1>{name}</h1>
				<h2 className="text-gray-100 text-opacity-70">
					<Typed
						backSpeed={70}
						loop
						strings={typedText}
						typeSpeed={60}
					/>
				</h2>
				<div className="mt-16">
					<ContactButton>Contact Me</ContactButton>
				</div>
			</div>
		</SectionContainer>
	);
};

const query = graphql`
	{
		site {
			siteMetadata {
				author {
					name
				}
			}
		}
		imageSharp {
			gatsbyImageData
		}
	}
`;
