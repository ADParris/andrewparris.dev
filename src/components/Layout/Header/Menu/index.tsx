import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FiMenu } from 'react-icons/fi';

import { INavLink } from '@data/models';
import { useDisclosure } from '@utils/hooks';

import { NavLink } from './NavLink';

interface IComponentProps {}

export const Menu: React.FC<IComponentProps> = () => {
	const { isOpen, toggleIsOpen } = useDisclosure();

	const {
		allMarkdownRemark: { links },
	} = useStaticQuery(query);
	const navLinks = links as INavLink[];

	const _buildNavLinks = () =>
		navLinks.map(link => (
			<NavLink
				count={link.frontmatter.id}
				key={link.frontmatter.id}
				link={link.frontmatter.tag}
			/>
		));

	return (
		<div>
			<div className="items-center hidden lg:flex">
				{_buildNavLinks()}
			</div>
			<div className="flex lg:hidden">
				<FiMenu onClick={toggleIsOpen} />
			</div>
			{isOpen && <div>Hi!</div>}
		</div>
	);
};

const query = graphql`
	{
		allMarkdownRemark(
			filter: { frontmatter: { nav: { eq: true } } }
			sort: { fields: frontmatter___id, order: ASC }
		) {
			links: nodes {
				frontmatter {
					id
					tag
				}
			}
		}
	}
`;
