import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { SectionContainer } from './SectionContainer';

interface IComponentProps {}

export const AboutSection: React.FC<IComponentProps> = () => {
	const {
		allMarkdownRemark: { nodes },
	} = useStaticQuery(query);

	const { frontmatter, html } = nodes[0];

	return (
		<SectionContainer {...frontmatter}>
			<div
				className="about-wrap flex flex-1 flex-col"
				dangerouslySetInnerHTML={{ __html: html }}
			/>
		</SectionContainer>
	);
};

const query = graphql`
	{
		allMarkdownRemark(
			filter: { frontmatter: { tag: { eq: "about" } } }
		) {
			nodes {
				frontmatter {
					id
					tag
					title
				}
				html
			}
		}
	}
`;
