import React from 'react';

import { LogoLink } from './LogoLink';
import { Menu } from './Menu';

export const Header: React.FC = () => (
	<header className="absolute flex h-14 items-center right-0 top-0 w-full z-pos-1">
		<div className="flex flex-1 h-auto items-center justify-between mx-4 md:mx-5 lg:mx-6 xl:mx-7">
			<LogoLink />
			<Menu />
		</div>
	</header>
);
