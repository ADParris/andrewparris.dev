import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { IContentData } from '@data/models';

import { FlipGallery } from '@components';
import { SectionContainer } from './SectionContainer';

interface IComponentProps {}

export const WorkSection: React.FC<IComponentProps> = () => {
	const { section, entries } = useStaticQuery(query);

	const { frontmatter, html } = section
		.data[0] as IContentData['section']['data'][0];

	return (
		<SectionContainer {...frontmatter}>
			<div className="flex flex-1 flex-col items-center py-8">
				<div
					className="info-wrap flex flex-1 flex-col headline-info-box info-box-light"
					dangerouslySetInnerHTML={{ __html: html }}
				/>
				<FlipGallery items={entries.data} />
			</div>
		</SectionContainer>
	);
};
const query = graphql`
	{
		section: allMarkdownRemark(
			filter: { frontmatter: { tag: { eq: "work" } } }
			sort: { fields: frontmatter___id, order: ASC }
		) {
			data: nodes {
				frontmatter {
					id
					image {
						childImageSharp {
							gatsbyImageData
						}
					}
					tag
					title
				}
				html
			}
		}
		entries: allMarkdownRemark(
			filter: { frontmatter: { tag: { eq: "projects" } } }
			sort: { fields: frontmatter___id, order: ASC }
		) {
			data: nodes {
				frontmatter {
					additional {
						info: childMarkdownRemark {
							note: rawMarkdownBody
						}
					}
					id
					image {
						childImageSharp {
							gatsbyImageData
						}
					}
					link
					repo
					tag
					title
				}
				html
			}
		}
	}
`;
