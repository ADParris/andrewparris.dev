import React from 'react';
import Particles, { IOptions } from 'react-tsparticles';

export const BackgroundParticles: React.FC = () => {
	const particlesCanvasStyle = {
		left: 0,
		position: 'absolute',
		top: 0,
		zIndex: -2,
	} as React.CSSProperties;

	const particlesOptions = {
		background: {
			color: {
				value: '#1D4044',
			},
		},
		detectRetina: true,
		fpsLimit: 60,
		particles: {
			links: {
				enable: true,
				distance: 100,
			},
			move: {
				enable: true,
				speed: 0.2,
				outModes: {
					default: 'bounce',
				},
			},
			number: {
				value: 45,
				density: {
					enable: true,
					value_area: 800,
				},
			},
			shape: {
				type: 'circle',
			},
			size: {
				value: 8,
				random: true,
				anim: {
					enable: false,
					speed: 6,
					size_min: 0,
					sync: true,
				},
			},
			opacity: {
				value: 0.3,
				random: true,
				anim: {
					enable: true,
					speed: 1,
					opacity_min: 0.1,
					sync: false,
				},
			},
		},
	} as IOptions;

	return (
		<div className="absolute flex h-full left-0 top-0 w-full z-neg-1">
			<div className="bg-overlay">
				<Particles
					id="tsparticles"
					options={particlesOptions}
					style={particlesCanvasStyle}
				/>
			</div>
		</div>
	);
};
