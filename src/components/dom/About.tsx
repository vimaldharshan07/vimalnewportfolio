// store
import { useDomStore } from '@/store';

// constant
import { CHAP } from '@/config/constants';

export default function About() {
	const setText = useDomStore(state => state?.setText);
	const setContainer = useDomStore(state => state?.setContainer);
	const setAnchor = useDomStore(state => state?.setAnchor);

	return (
		<section
			className='flex flex-wrap gap-x-12 gap-y-6'
			id='about'>
			{/* -------------------------------------------------------------------------- */
			/*                                    upper                                   */
			/* -------------------------------------------------------------------------- */}
			<div
				className='flex-[0.3] flex border border-neutral min-h-72 rounded-[12rem_12rem_12rem_0rem] p-20'
				ref={setContainer}>
				<h2 className='m-auto text-6xl'>
					<span
						data-font-family='BOXING'
						ref={setText}>
						{'[02.]'}
					</span>
				</h2>
			</div>
			<header
				className='flex-[1] text-[13.75rem] border border-neutral min-h-72 flex rounded-[12rem_12rem_0rem_12rem] p-20'
				ref={setContainer}>
				<h2
					className='m-auto leading-none'
					data-font-family='BOXING'
					ref={setText}>
					{'about'}
				</h2>
			</header>

			<div className='flex-[1_0_100%]'></div>

			{/* -------------------------------------------------------------------------- */
			/*                                    btm                                      */
			/* -------------------------------------------------------------------------- */}

			<div
				className='border border-neutral min-h-[39rem] flex flex-[1] p-20 rounded-[0rem_0rem_0rem_0rem] md:rounded-[0rem_0rem_0rem_9rem]'
				ref={setContainer}>
				<h3 className='m-auto text-4xl font-satoshi leading-[1.5] whitespace-pre-line'>
					<span
						data-font-family='SATOSHI'
						ref={setText}>
						{`I am a passionate and ambitious Final-year Bachelor of Computer Science and Engineering student with a strong interest in full-stack development and cloud computing. My goal is to become a successful full-stack developer, creating dynamic, scalable, and user-focused applications that make a meaningful impact.

I am actively building my expertise in both front-end and back-end technologies, working with tools and frameworks like React, Node.js, Express.js, and MongoDB. Alongside my web development skills, I am also expanding my knowledge in cloud platforms and services, enabling me to design and deploy robust, cloud-native solutions. Driven by curiosity and a love for learning, I enjoy tackling challenging projects and continuously improving my technical and problem-solving skills.

I believe in blending creativity with technology to deliver seamless and efficient user experiences. With a strong commitment to growth and innovation, I aim to contribute to impactful projects and advance my career as a versatile and skilled full-stack developer..`}
					</span>
				</h3>
			</div>

			<div className='flex-[1_0_100%] block md:hidden'></div>

			<div
				className='flex-[1] border border-[--color-font-neutral] min-h-[120rem] rounded-[0rem_0rem_9rem_9rem] p-20 md:rounded-[0rem_0rem_9rem_0rem] md:min-h-[39rem]'
				ref={el => {
					setContainer(el);
					setAnchor(el);
				}}
				data-anchor={CHAP.ABOUT}></div>
		</section>
	);
}
