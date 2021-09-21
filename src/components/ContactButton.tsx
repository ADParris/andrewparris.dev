import React from 'react';

export const ContactButton: React.FC = ({ children }) => (
	<a className="contact-button" href="mailto:code.adparris@gmail.com">
		{children}
	</a>
);
