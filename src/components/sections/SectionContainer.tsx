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
	const experienceSection = tag === 'experience';
	const lastSection = tag === 'contact';

	return (
		<section
			className={`${experienceSection ? 'mt-neg-12 pt-12' : ''} ${
				lastSection
					? 'last-section'
					: bgWhite
					? 'light-section '
					: 'dark-section '
			} ${
				title ? 'justify-start' : 'justify-center'
			} section-container`}
			id={tag}
		>
			{title && (
				<div className="flex justify-end w-full">
					<div className="flex items-center mb-4 section-title">
						<div className="flex font-mono items-baseline">
							<span className="section-number">{`0${id}.`}</span>
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
