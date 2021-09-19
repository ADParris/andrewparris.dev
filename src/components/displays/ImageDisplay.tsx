import {
	GatsbyImage,
	getImage,
	IGatsbyImageData,
} from 'gatsby-plugin-image';
import React from 'react';

interface IComponentProps {
	alt: string;
	border?: boolean;
	rounded?: boolean;
	src: IGatsbyImageData;
}

export const ImageDisplay: React.FC<IComponentProps> = ({
	alt,
	border,
	rounded,
	src,
}) => {
	const image = getImage(src);

	const imgStyle = {
		...(border && { border: '3px solid' }),
		...(rounded && { borderRadius: '50%' }),
		height: '100%',
		...(rounded && { width: '100%' }),
	};
	return (
		<>
			{image && (
				<GatsbyImage
					alt={`Photo of ${alt}.`}
					image={image}
					imgStyle={imgStyle}
				/>
			)}
		</>
	);
};
