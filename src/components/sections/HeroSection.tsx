import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Typed from 'react-typed';

import { ImageDisplay } from '@components';
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
		<SectionContainer id={0} tag="hero">
			<div className="flex flex-col hero-wrap items-center">
				<div className="mb-4 w-1/2">
					<ImageDisplay alt={name} border rounded src={imageSharp} />
				</div>
				<h1>{name}</h1>
				<h2 className="flex flex-1 text-gray-100 text-opacity-70">
					<Typed
						backSpeed={70}
						loop
						strings={typedText}
						typeSpeed={60}
					/>
				</h2>
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
