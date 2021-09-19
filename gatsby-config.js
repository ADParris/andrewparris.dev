/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-postcss',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: `${__dirname}/src/assets/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data/`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-external-links`,
						options: {
							rel: `nofollow noopener noreferrer`,
							target: `_blank`,
						},
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							linkImagesToOriginal: true,
							maxWidth: 700,
							quality: 90,
						},
					},
				],
			},
		},
		'gatsby-transformer-sharp',
	],
	siteMetadata: {
		author: {
			name: 'Andrew Parris',
			email: 'code.adparris@gmail.com',
			image: 'assets/images/me.jpg',
		},
		description: 'Portfolio site for Andrew Parris.',
		image: './og.png',
		siteUrl: 'https://andrewparris.dev',
		title: 'Andrew Parris',
	},
};
