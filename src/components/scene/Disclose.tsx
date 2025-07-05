// store
import { useWebGlStore } from '@/store';

// gsap
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// type
import type { DiscloseProps } from '@/types';

export default function Disclose({ canvasRef }: DiscloseProps) {
	const isEntryAnimationDone = useWebGlStore(state => state.isEntryAnimationDone);

	useGSAP(
		() => {
			if (isEntryAnimationDone) {
				const tl = gsap.timeline({ delay: 0.25, smoothChildTiming: true });
				const canvasEl = canvasRef.current;
				const width = window.innerWidth;
				const maskFactor = width >= 1920 ? 1920 : width;
				const duration = (maskFactor / 1920) * 1.5 + 0.4;

				tl.to(canvasEl, {
					duration,
					maskSize: `500%`,
					ease: 'none',
				}).to(
					canvasEl,
					{
						delay: 1,
						duration: 0,
						webkitMaskImage: 'none',
						maskImage: 'none',
						ease: 'none',
					},
					'>',
				);
			}
		},
		{ dependencies: [isEntryAnimationDone], scope: canvasRef },
	);

	return null;
}
