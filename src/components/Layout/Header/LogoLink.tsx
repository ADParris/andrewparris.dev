import React from 'react';

interface IComponentProps {}

export const LogoLink: React.FC<IComponentProps> = () => {
	return (
		<a className="font-mono hover:text-teal.300" href="/#top">
			AP
		</a>
	);
};
