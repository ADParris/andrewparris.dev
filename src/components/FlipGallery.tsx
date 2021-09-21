import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import SwiperCore, {
	EffectFlip,
	Pagination,
	Navigation,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IContentData } from '@data/models';

import { Note } from './Note';

SwiperCore.use([EffectFlip, Pagination, Navigation]);

interface IComponentProps {
	items: IContentData['entries']['data'];
}

export const FlipGallery: React.FC<IComponentProps> = ({ items }) => {
	const [currentSection, setCurrentSection] = React.useState('');

	const setSection = (tag: string) => {
		if (currentSection !== tag) {
			setCurrentSection(tag);
		}
	};

	const bgIsWhite = currentSection === 'projects';

	return (
		<div className="flex flex-1 flex-col items-center justify-center">
			<div className="flex">
				<Swiper
					effect={'flip'}
					grabCursor={true}
					pagination={true}
					navigation={true}
					className="mySwiper"
				>
					{items.map(item => {
						const hasLinks =
							item.frontmatter.link || item.frontmatter.repo;
						const image = getImage(item.frontmatter.image);
						const info = item.frontmatter?.additional?.info;
						setSection(item.frontmatter.tag);

						return (
							<SwiperSlide key={item.frontmatter.id}>
								<div className="flex flex-col pb-2">
									{/* title */}
									<p className="after-underline font-mono w-min whitespace-nowrap">
										{item.frontmatter.title}
									</p>
									{/* image */}
									<div className="flex overflow-hidden rounded">
										<GatsbyImage
											alt={item.frontmatter.title}
											image={image!}
										/>
									</div>
									{/* links */}
									{hasLinks && (
										<div className="flex flex-1 justify-center my-2">
											<a
												className="p-2 mr-2"
												href={item.frontmatter.repo}
												rel="noopener noreferrer nofollow"
												target="_blank"
											>
												<FiGithub />
											</a>
											<a
												className="p-2"
												href={item.frontmatter.link}
												rel="noopener noreferrer nofollow"
												target="_blank"
											>
												<FiExternalLink />
											</a>
										</div>
									)}
									{/* info box */}
									<div
										className={`flip-gallery-image-info ${
											hasLinks ? '' : 'mt-4'
										}`}
									>
										<div
											className={`info-box ${
												bgIsWhite ? 'info-box-light' : 'info-box-dark'
											}`}
										>
											{/* description */}
											<div
												dangerouslySetInnerHTML={{
													__html: item.html,
												}}
											/>
											{/* additional note */}
											{info && (
												<div className="flex flex-1 justify-end text-sm">
													<Note content={info.note} />
												</div>
											)}
										</div>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
};
