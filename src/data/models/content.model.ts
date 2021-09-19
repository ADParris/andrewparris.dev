import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface IContentData {
	[x: string]: {
		data: {
			frontmatter: {
				additional: { info: { note: string } };
				id: number;
				image: IGatsbyImageData;
				link: string;
				repo: string;
				section: string;
				tag: string;
				title: string;
			};
			html: string;
		}[];
	};
}
