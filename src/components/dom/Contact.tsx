// component
import { ResponsiveText } from '@/components';

// store
import { useDomStore, useCursorStore, useNavStore } from '@/store';

export default function Contact() {
	const setText = useDomStore(state => state?.setText);

	function toggleRipple(bool: boolean) {
		useCursorStore.setState({ isRippleZone: bool });
	}

	return (
		<footer
			className='h-dvh w-full relative flex flex-col overflow-hidden'
			id='contact'>
			<div className='flex flex-col px-12 pt-6'>
				<h3 className='whitespace-pre-line text-7xl mb-6 w-max'>
					<span
						data-font-family='BOXING'
						ref={setText}>{`Let's connect.`}</span>
				</h3>
				<h4 className='whitespace-pre-line text-3xl leading-[1.25] w-max'>
					<span
						data-font-family='BOXING'
						ref={setText}>{`Open for new challenges\nand collaborations.`}</span>
				</h4>
			</div>
			<div className='text-xl flex flex-[1] -translate-y-36 leading-none text-highlight flex-col justify-end items-start px-12 pb-12 md:flex-row md:justify-between md:items-end md:pb-0 z-20'>
				<nav
					className='flex flex-col gap-12 md:gap-6 pointer-events-auto'
					onPointerEnter={e => toggleRipple(false)}
					onPointerLeave={e => toggleRipple(true)}>
					<a
						href='https://github.com/vimaldharshan07'
						target='_blank'
						title='Go to Github'>
						<span
							ref={setText}
							data-font-family='BOXING'
							data-font-highlight='button'>{`[ github ]`}</span>
					</a>
					<a
						href='https://www.linkedin.com/in/vimal-dharshan-18514b274/'
						target='_blank'
						title='Go to Linkedin'>
						<span
							ref={setText}
							data-font-family='BOXING'
							data-font-highlight='button'>{`[ linkedin ]`}</span>
					</a>
					<a
						href='/dom/vimaldharshan resume.pdf'
						target='_blank'
						title='Go to resume'>
						<span
							ref={setText}
							data-font-family='BOXING'
							data-font-highlight='button'>
							{`[ resume ]`}
						</span>
					</a>
					<a
						href='mailto:vimaldharshan05@gmail.com'
						title='Mail to laynechensquare@gmail.com'>
						<span
							ref={setText}
							data-font-family='BOXING'
							data-font-highlight='button'>
							<ResponsiveText
								desktop={'[ vimaldharshan05@gmail.com ]'}
								mobile={'[ mail ]'}
							/>
						</span>
					</a>
				</nav>
				<nav
					className='pointer-events-auto z-20'
					onPointerEnter={e => toggleRipple(false)}
					onPointerLeave={e => toggleRipple(true)}>
					<button
						className='text-right mt-12 md:mt-0'
						title='Back to top'
						onClick={() => useNavStore.getState().lenisRef?.current?.lenis?.scrollTo('#home')}>
						<span
							ref={setText}
							data-font-family='BOXING'
							data-font-highlight='button'>
							{'[ Back to top ]'}
						</span>
					</button>
				</nav>
			</div>
			<header>
				<h1 className='text-center scale-y-[2] origin-bottom translate-y-11 text-[12.625rem] leading-none'>
					<span
						data-font-family='BOXING'
						data-scale-y='2'
						ref={setText}>
						{'GET IN TOUCH'}
					</span>
				</h1>
			</header>
		</footer>
	);
}
