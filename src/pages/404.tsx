import React from 'react';

import { Layout } from '@components';

const NotFoundPage: React.FC = () => (
	<Layout>
		<div className="flex flex-1 flex-col items-center justify-center">
			<h1 className="font-mono">404 | Page Not Found</h1>
		</div>
	</Layout>
);

export default NotFoundPage;
