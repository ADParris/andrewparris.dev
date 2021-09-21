import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

export const Head: React.FC = () => {
	const {
		site: {
			siteMetadata: { description, image, siteUrl, title },
		},
	} = useStaticQuery(query);

	return (
		<Helmet title="Andrew Parris" defer={false}>
			{/* General tags */}
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="image" content={image} />
			<link rel="canonical" href={siteUrl} />
		</Helmet>
	);
};

const query = graphql`
	{
		site {
			siteMetadata {
				author {
					email
					name
				}
				description
				image
				siteUrl
				title
			}
		}
	}
`;
