import React from 'react';

interface IComponentProps {
	count: number;
	link: string;
}

export const NavLink: React.FC<IComponentProps> = ({
	count,
	link,
}) => {
	return (
		<a
			className="font-mono items-end ml-4 nav-underline px-4 py-2 relative"
			href={`/#${link}`}
		>
			<div className="inline-block leading-3 mr-1 mt-px text-base text-teal.400">{`.0${count}`}</div>
			<div className="capitalize inline-block leading-4">{link}</div>
		</a>
	);
};
