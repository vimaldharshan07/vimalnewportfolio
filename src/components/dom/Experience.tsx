// store
import { useDomStore } from '@/store';

// constant
import { CHAP } from '@/config/constants';

export default function Experience() {
	const setText = useDomStore(state => state?.setText);
	const setContainer = useDomStore(state => state?.setContainer);
	const setAnchor = useDomStore(state => state?.setAnchor);

	return (
		<section
			className='flex gap-x-12 gap-y-6 flex-wrap'
			id='experience'>
			{/* -------------------------------------------------------------------------- */
			/*                                    upper 1st                                */
			/* -------------------------------------------------------------------------- */}
			<header
				className='flex-[1] text-[13.75rem] border border-neutral min-h-72 flex rounded-[12rem_12rem_0rem_0rem] p-20'
				ref={setContainer}>
				<h2 className='m-auto leading-none'>
					<span
						data-font-family='BOXING'
						ref={setText}>
						{'Education /\n Certifications'}
					</span>
				</h2>
			</header>

			<div className='flex-[1_0_100%]'></div>

			{/* -------------------------------------------------------------------------- */
			/*                                    upper 2nd                                */
			/* -------------------------------------------------------------------------- */}

			<div
				className='flex-[0.3] flex border border-neutral min-h-96 rounded-[0rem_12rem_12rem_12rem] p-20'
				ref={setContainer}>
				<h2 className='m-auto text-6xl'>
					<span
						data-font-family='BOXING'
						ref={setText}>
						{'[04.]'}
					</span>
				</h2>
			</div>
			{/* <div
				className='flex-[1] text-7xl border border-neutral min-h-96 flex p-20 rounded-[12rem_0rem_0rem_12rem]'
				ref={setContainer}>
				<h3 className='m-auto leading-none text-center'>
					<span
						data-font-family='BOXING'
						ref={setText}>
						{'Frontend Developer'}
					</span>
				</h3>
			</div> */}

			<div className='flex-[1_0_100%]'></div>

			{/* -------------------------------------------------------------------------- */
			/*                                    btm left                                */
			/* -------------------------------------------------------------------------- */}

			<div
				className='border border-neutral min-h-[60rem] flex flex-[1] rounded-[0rem_0rem_0rem_0rem] md:flex-[0.3] md:rounded-[0rem_0rem_0rem_9rem] p-[3.25rem]'
				ref={el => {
					setContainer(el);
					setAnchor(el);
				}}
				data-anchor={CHAP.EXPERIENCE}
				data-anchor-mirror></div>

			<div className='block flex-[1_0_100%] md:hidden'></div>

			{/* -------------------------------------------------------------------------- */
			/*                                    btm right                                */
			/* -------------------------------------------------------------------------- */}

			<div className='flex-[1] text-7xl min-h-[60rem] flex gap-12 flex-wrap'>
				{/* -------------------------------------------------------------------------- */
				/*                                btm right 1st row - title                    */
				/* -------------------------------------------------------------------------- */}
				<div
					className='border border-neutral min-h-72 flex-[1_1_100%] flex p-20'
					ref={setContainer}>
					<div className='m-auto text-center'>
						<ul className='font-satoshi text-3xl leading-[1.5]'>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>
									{`Bachelor of Computer Science Engineering`}
								</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>
									{`2022 - 2026 🥇7.59cgpa`}
								</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>
									{`A.V.C College of Engineering`}
								</span>
							</li>
						</ul>
					</div>
				</div>
//////
<div
					className='border border-neutral min-h-72 flex-[1_1_100%] flex p-20'
					ref={setContainer}>
					<div className='m-auto text-center'>
						<ul className='font-satoshi text-3xl leading-[1.5]'>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>
									{`Higher Secondary Education`}
								</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>
									{`2020 - 2021 🥇81%`}
								</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>
									{`Raj Matriculation School`}
								</span>
							</li>
						</ul>
					</div>
				</div>
//////
				<div
					className='border border-neutral min-h-72 flex-[1_1_100%] flex p-20'
					ref={setContainer}>
					<div className='m-auto text-center'>
						<ul className='font-satoshi text-3xl leading-[1.5]'>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>
									{`Full Stack Development Certification`}
								</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>
									{`aug-2024 🌏online`}
								</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>
									{`Meta(coursera)`}
								</span>
							</li>
						</ul>
					</div>
				</div>
//////
				<div
					className='border border-neutral min-h-72 flex-[1_1_100%] flex p-20'
					ref={setContainer}>
					<div className='m-auto text-center'>
						<ul className='font-satoshi text-3xl leading-[1.5]'>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>
									{`Tcs Ion Carrer Edge Certification`}
								</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>
									{`june-2024 🌏online`}
								</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>
									{`Tcs Ion`}
								</span>
							</li>
						</ul>
					</div>
				</div>
				{/* -------------------------------------------------------------------------- */
				/*                                btm 2nd row - listed des                   */
				/* -------------------------------------------------------------------------- */}
</div>
		</section>
	);
}
