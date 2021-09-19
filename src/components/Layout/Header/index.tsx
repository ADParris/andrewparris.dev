import React from 'react';

interface IComponentProps {}

export const Header: React.FC<IComponentProps> = () => {
	return (
		<header className="flex flex-1 h-14 items-center">
			<div className="flex flex-1 h-auto items-center justify-between mx-4 md:mx-5 lg:mx-6 xl:mx-7">
				<p className="font-mono m-0">AP</p>
				<p className="font-mono m-0">Header</p>
			</div>
		</header>
	);
};
