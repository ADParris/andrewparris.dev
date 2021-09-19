import React from 'react';

interface IComponentProps {
	id: number;
	tag: string;
	title?: string;
}

export const SectionContainer: React.FC<IComponentProps> = ({
	children,
	id,
	tag,
	title,
}) => {
	const bgWhite = id % 2 !== 0;

	return (
		<section
			className={`${
				bgWhite ? 'bg-gray-100 text-gray-800 ' : ''
			}clipped flex flex-1 flex-col items-center ${
				title ? 'justify-start' : 'justify-center'
			} min-h-screen section-container`}
			id={tag}
		>
			{title && (
				<div className="flex justify-end w-full">
					<div className="before-line-dark flex section-title items-center mb-4">
						<div className="flex font-mono items-baseline">
							<span className="mr-1 text-green-700">{`0${id}.`}</span>
							<h3 className="flex items-center whitespace-nowrap">
								{title}
							</h3>
						</div>
					</div>
				</div>
			)}
			{children}
		</section>
	);
};
