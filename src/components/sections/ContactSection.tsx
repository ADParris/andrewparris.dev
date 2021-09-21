import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { ContactButton } from '..';

import { SectionContainer } from './SectionContainer';

interface IComponentProps {}

export const ContactSection: React.FC<IComponentProps> = () => {
	const {
		allMarkdownRemark: { nodes },
	} = useStaticQuery(query);

	const { frontmatter, html } = nodes[0];

	return (
		<SectionContainer {...frontmatter}>
			<div className="flex flex-1 flex-col items-center py-8">
				<div
					className="flex flex-col headline-info-box info-wrap info-box-dark"
					dangerouslySetInnerHTML={{ __html: html }}
				/>
				<div className="mt-16">
					<ContactButton>Say Hello</ContactButton>
				</div>
			</div>
		</SectionContainer>
	);
};

const query = graphql`
	{
		allMarkdownRemark(
			filter: { frontmatter: { tag: { eq: "contact" } } }
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
