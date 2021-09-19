import React from 'react';

interface IComponentProps {}

export const Main: React.FC<IComponentProps> = ({ children }) => {
	return <main>{children}</main>;
};
