import Image from 'next/image';

// store
import { useDomStore, useCursorStore } from '@/store';

// assets
import previewShareYourMemories from '/public/dom/5.sm.webp';
import previewLearnEnglishDictionary from '/public/dom/project-preview-learn-english-dictionary.webp';
import previewLayneChenPortfolio from '/public/dom/project-preview-layne-chen-portfolio-2024.webp';

// constant
import { CHAP } from '@/config/constants';

export default function Project() {
	const setText = useDomStore(state => state?.setText);
	const setContainer = useDomStore(state => state?.setContainer);
	const setAnchor = useDomStore(state => state?.setAnchor);

	function toggleRipple(bool: boolean) {
		useCursorStore.setState({ isRippleZone: bool });
	}

	return (
		<section
			className='flex gap-x-12 gap-y-6 flex-wrap'
			id='project'>
			{/* -------------------------------------------------------------------------- */
			/*                                    upper                                   */
			/* -------------------------------------------------------------------------- */}
			<header
				className='flex-[1] text-[13.75rem] border border-neutral min-h-72 flex rounded-[12rem_12rem_12rem_12rem] p-20'
				ref={setContainer}>
				<h2
					className='m-auto leading-none'
					data-font-family='BOXING'
					ref={setText}>
					{'project'}
				</h2>
			</header>
			<div
				className='flex-[0.3] flex border border-neutral min-h-72 rounded-[12rem_12rem_12rem_12rem] p-20'
				ref={setContainer}>
				<h2 className='m-auto text-6xl'>
					<span
						data-font-family='BOXING'
						ref={setText}>
						{'[05.]'}
					</span>
				</h2>
			</div>
			<div className='flex-[1_0_100%]'></div>
			{/* -------------------------------------------------------------------------- */
			/*                                    content - port                           */
			/* -------------------------------------------------------------------------- */}
			{/* -------------------------------------------------------------------------- */
			/*                                    1st row left                              */
			/* -------------------------------------------------------------------------- */}
			<figure
				className='border border-neutral rounded-[0rem_0rem_0rem_0rem] min-h-[60rem] flex flex-[3]'
				ref={el => {
					setContainer(el);
					setAnchor(el);
				}}
				data-parallax='previewLayneChenPortfolio'
				data-anchor={CHAP.PROJECT}>
				<Image
					loading='lazy'
					src={previewLayneChenPortfolio}
					alt="Symposyum website"
					className='h-full w-full object-cover'
				/>
			</figure>

			<div className='block flex-[1_0_100%] md:hidden'></div>

			{/* -------------------------------------------------------------------------- */
			/*                                    1st row right                            */
			/* -------------------------------------------------------------------------- */}
			<div className='flex flex-[1] gap-12 flex-wrap md:flex-col'>
				<div
					className='border border-neutral min-h-72 flex flex-auto flex-col p-20 min-w-[180px]'
					ref={setContainer}>
					<h3 className='m-auto text-center text-5xl whitespace-pre-line'>
						<span
							data-font-family='BOXING'
							ref={setText}>
							{`A.V.C Symposyum website\n\n#2025`}
						</span>
					</h3>
				</div>

				<div
					className='border border-neutral min-h-[39rem] flex flex-[1] flex-col p-20 min-w-[180px] md:flex-auto'
					ref={setContainer}>
					<div className='m-auto text-center'>
						<h3 className='text-4xl mb-6 leading-[1.5] whitespace-nowrap'>
							<span
								data-font-family='BOXING'
								ref={setText}>{`# frontend`}</span>
						</h3>
						<ul className='font-satoshi text-xl leading-[1.5]'>
							
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>
									{`HTML`}
								</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>{`CSS`}</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>{`Bootstrap`}</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>{`AWS S3`}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='flex-[1_0_100%]'></div>
			{/* -------------------------------------------------------------------------- */
			/*                                    2st row left                            */
			/* -------------------------------------------------------------------------- */}
			<div
				className='flex flex-[2]'
				ref={setContainer}>
				<div className='border border-neutral min-h-72 flex p-20 gap-14 flex-col md:flex-row'>
					<h3 className='m-auto text-center text-4xl leading-[1.25]'>
						<span
							data-font-family='BOXING'
							ref={setText}>
							{`overview`}
						</span>
					</h3>

					<p className='m-auto text-xl font-satoshi whitespace-pre-line leading-[1.5]'>
						<span
							data-font-family='SATOSHI'
							ref={setText}>
							{`The website serves as a one-stop destination for all symposium-related details, making it easy for participants to access important information.
💻 Tech Stack Used: HTML, CSS, JavaScript
🌍 Key Features:
✅ Showcasing department banners for a dynamic experience
✅ Registration link for easy event sign-ups
✅ Rules and guidelines section for participant clarity
This project has been an amazing learning experience in front-end development, UI/UX design, and website deployment. Seeing it come to life has been truly rewarding!`}
						</span>
					</p>
				</div>
			</div>
			{/* -------------------------------------------------------------------------- */
			/*                                    2st row right                            */
			/* -------------------------------------------------------------------------- */}

			<div className='block flex-[1_0_100%] md:hidden'></div>

			<div
				className='pointer-events-auto border border-neutral min-h-72 flex flex-[1] items-center justify-center text-4xl text-highlight p-20 rounded-[0rem_0rem_9rem_9rem] md:rounded-[0rem_0rem_0rem_0rem] leading-[1] gap-40 md:gap-12'
				ref={setContainer}
				onPointerEnter={e => toggleRipple(false)}
				onPointerLeave={e => toggleRipple(true)}>
				<a
					href={process.env.NEXT_PUBLIC_BASE_URL}
					target='_blank'
					title='Go to Avc sympo webpage'>
					<span
						data-font-family='BOXING'
						data-font-highlight='button'
						ref={setText}>
						{`[ demo ]`}
					</span>
				</a>
				<a
					href='https://github.com/vimaldharshan07/AvcSymposium'
					target='_blank'
					title='Go to Layne Chen Portfolio ‘24 source code page'>
					<span
						data-font-highlight='button'
						data-font-family='BOXING'
						ref={setText}>
						{`[ code ]`}
					</span>
				</a>
			</div>
			<div className='flex-[1_0_100%]'></div>
			{/* -------------------------------------------------------------------------- */
			/*                                    content - share                         */
			/* -------------------------------------------------------------------------- */}
			{/* -------------------------------------------------------------------------- */
			/*                                    1st row left                              */
			/* -------------------------------------------------------------------------- */}
			<figure
				className='border border-neutral rounded-[0rem_0rem_0rem_0rem] min-h-[60rem] flex flex-[3]'
				ref={el => {
					setContainer(el);
					setAnchor(el);
				}}
				data-parallax='previewShareYourMemories'
				data-anchor={CHAP.PROJECT}>
				<Image
					loading='lazy'
					src={previewShareYourMemories}
					alt={`Web interface displaying a music memory-sharing platform with a dark theme. The layout features a header with the title 'Share Your Memories' and includes options for searching, bookmarks, profile, and logout. The main section shows a grid of memory cards, each with an image, title, hashtags, description, and a like count. The right sidebar includes a form labeled 'Create a memory' with fields for title, message, and tags, along with submit and clear buttons. Pagination is visible below the grid of memory cards.`}
					className='h-full w-full object-cover'
				/>
			</figure>
			{/* -------------------------------------------------------------------------- */
			/*                                    1st row right                            */
			/* -------------------------------------------------------------------------- */}

			<div className='block flex-[1_0_100%] md:hidden'></div>

			<div className='flex flex-[1] gap-12 flex-row flex-wrap md:flex-col'>
				<div
					className='border border-neutral min-h-72 flex flex-col p-20 flex-auto min-w-[180px]'
					ref={setContainer}>
					<h3 className='m-auto text-center text-5xl whitespace-pre-line'>
						<span
							data-font-family='BOXING'
							ref={setText}>
							{`Uzumakitalks\n\n#2025`}
						</span>
					</h3>
				</div>

				<div
					className='border border-neutral min-h-[39rem] flex flex-col p-20 flex-[1] min-w-[180px] md:flex-auto'
					ref={setContainer}>
					<div className='m-auto text-center'>
						<h3 className='text-4xl mb-6 leading-[1.5] whitespace-nowrap'>
							<span
								data-font-family='BOXING'
								ref={setText}>{`# full stack`}</span>
						</h3>
						<ul className='font-satoshi text-xl leading-[1.5]'>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>{`JavaScript`}</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>
									{`HTML`}
								</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>{`CSS`}</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>{`chakraUi`}</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>{`React (hooks)`}</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>{`React Router`}</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>{`React Redux`}</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>{`Tailwindcss`}</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>{`Node.js`}</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>{`Express`}</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>{`Mongoose`}</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>{`MongoDB`}</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>{`RESTful API`}</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>{`Axios`}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='flex-[1_0_100%]'></div>
			{/* -------------------------------------------------------------------------- */
			/*                                    2st row left                            */
			/* -------------------------------------------------------------------------- */}
			<div
				className='flex flex-[2]'
				ref={setContainer}>
				<div className='border border-neutral min-h-72 flex p-20 gap-14 flex-col md:flex-row'>
					<h3 className='m-auto text-center text-4xl leading-[1.25]'>
						<span
							data-font-family='BOXING'
							ref={setText}>
							{`overview`}
						</span>
					</h3>

					<p className='m-auto text-xl font-satoshi whitespace-pre-line leading-[1.5]'>
						<span
							data-font-family='SATOSHI'
							ref={setText}>
							{`This platform offers an immersive real-time chatting experience, combining social connection with innovative language learning support — all in one place.
💬 Project: UzumakiTalks – Real-Time Chat & Language Learning App
🌍 Key Features:
✅ Real-time messaging for instant communication
✅ Live video calling for face-to-face interaction
✅ Friend request & acceptance system for social connectivity
✅ Language translation chat to bridge communication gaps
✅ Secure login & encrypted password handling
✅ Smooth authentication with secure token-based login
This project has been an incredible journey in building full-stack applications, integrating third-party platforms, and focusing on performance, security, and user experience. Bringing UzumakiTalks to life was both a challenging and rewarding experience!

`}
						</span>
					</p>
				</div>
			</div>

			<div className='block flex-[1_0_100%] md:hidden'></div>

			{/* -------------------------------------------------------------------------- */
			/*                                    2st row right                            */
			/* -------------------------------------------------------------------------- */}
			<div
				className='pointer-events-auto border border-neutral min-h-72 flex flex-[1] items-center justify-center text-4xl text-highlight p-20 rounded-[0rem_0rem_9rem_9rem] md:rounded-[0rem_0rem_0rem_0rem] leading-[1] gap-40 md:gap-12'
				ref={setContainer}
				onPointerEnter={e => toggleRipple(false)}
				onPointerLeave={e => toggleRipple(true)}>
				<a
					href='https://uzumakichat.onrender.com/'
					target='_blank'
					title='Go to your uzichat experience'>
					<span
						data-font-highlight='button'
						data-font-family='BOXING'
						ref={setText}>{`[ demo ]`}</span>
				</a>
				<a
					href='https://github.com/vimaldharshan07/uzumakichat'
					target='_blank'
					title='Go to Share Your first friends chat'>
					<span
						data-font-highlight='button'
						data-font-family='BOXING'
						ref={setText}>{`[ code ]`}</span>
				</a>
			</div>
			<div className='flex-[1_0_100%]'></div>
			{/* -------------------------------------------------------------------------- */
			/*                                    content - eng                           */
			/* -------------------------------------------------------------------------- */}
			{/* -------------------------------------------------------------------------- */
			/*                                    1st row left                              */
			/* -------------------------------------------------------------------------- */}
			<figure
				className='border border-neutral rounded-[0rem_0rem_0rem_0rem] min-h-[60rem] flex flex-[3]'
				ref={el => {
					setContainer(el);
					setAnchor(el);
				}}
				data-parallax='previewLearnEnglishDictionary'
				data-anchor={CHAP.PROJECT}>
				<Image
					loading='lazy'
					src={previewLearnEnglishDictionary}
					alt={`Dark-themed web interface titled 'Learn English with Dictionary' designed to facilitate English learning. The page has a central search bar for entering keywords and an orange search button. A sidebar on the left has 'Home' and 'Result' options, with instructions in the center section under the heading 'Let's Get Started.' The instructions guide users on how to search for definitions, and an illustration of a person with raised fists is displayed. On the right, a panel displays the word 'none' with pronunciation and multiple definitions categorized as noun, adverb, and pronoun, each with examples.`}
					className='h-full w-full object-cover'
				/>
			</figure>

			<div className='block flex-[1_0_100%] md:hidden'></div>

			{/* -------------------------------------------------------------------------- */
			/*                                    1st row right                             */
			/* -------------------------------------------------------------------------- */}
			<div className='flex flex-[1] gap-12 flex-row flex-wrap md:flex-col'>
				<div
					className='border border-neutral min-h-72 flex p-20 flex-col flex-auto min-w-[180px]'
					ref={setContainer}>
					<h3 className='m-auto text-center text-5xl whitespace-pre-line'>
						<span
							data-font-family='BOXING'
							ref={setText}>
							{`vimal Ecommerce store\n\n#2024`}
						</span>
					</h3>
				</div>

				<div
					className='border border-neutral min-h-[39rem] flex flex-col p-20 flex-[1] min-w-[180px] md:flex-auto'
					ref={setContainer}>
					<div className='m-auto text-center'>
						<h3 className='text-4xl mb-6 leading-[1.5] whitespace-nowrap'>
							<span
								data-font-family='BOXING'
								ref={setText}>{`# frontend`}</span>
						</h3>
						<ul className='font-satoshi text-xl leading-[1.5]'>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>{`JavaScript`}</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>
									{`HTML`}
								</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>{`CSS`}</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>{`React (hooks)`}</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>{`React Redux`}</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>{`Tailwindcss`}</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>{`ExpressJs`}</span>
							</li>
							<li>
								<span
									data-font-family='SATOSHI'
									ref={setText}>{`Axios`}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='flex-[1_0_100%]'></div>
			{/* -------------------------------------------------------------------------- */
			/*                                    2st row left                            */
			/* -------------------------------------------------------------------------- */}

			<div
				className='border border-neutral min-h-72 px-12 gap-14 p-20 flex flex-[2] flex-col rounded-[0rem_0rem_0rem_0rem] md:flex-row md:rounded-[0rem_0rem_0rem_9rem]'
				ref={setContainer}>
				<h3 className='m-auto text-center text-4xl leading-[1.25]'>
					<span
						data-font-family='BOXING'
						ref={setText}>
						{`overview`}
					</span>
				</h3>

				<p className='m-auto text-xl font-satoshi whitespace-pre-line leading-[1.5]'>
					<span
						data-font-family='SATOSHI'
						ref={setText}>
						{`This simple yet functional eCommerce platform offers a smooth shopping experience with powerful filtering, real-time data, and a responsive interface.
🛒 Project: eCommerce Website – Product Browsing Made Easy
🌍 Key Features:
✅ Product search and advanced filtering for quick discovery
✅ Real-time product data fetched via API integration
✅ Fully responsive design for mobile, tablet, and desktop
✅ Type-safe codebase for better readability and maintainability
This project was a great hands-on experience in integrating APIs, managing state efficiently, and building scalable front-end components. It laid the foundation for exploring more advanced eCommerce functionality in the future.`}
					</span>
				</p>
			</div>

			<div className='block flex-[1_0_100%] md:hidden'></div>

			{/* -------------------------------------------------------------------------- */
			/*                                    2st row right                            */
			/* -------------------------------------------------------------------------- */}
			<div
				className='pointer-events-auto border border-neutral min-h-72 flex flex-[1] items-center justify-center text-4xl text-highlight p-20 rounded-[0rem_0rem_9rem_9rem] md:rounded-[0rem_0rem_9rem_0rem] leading-[1] gap-40 md:gap-12'
				ref={el => setContainer(el)}
				onPointerEnter={e => toggleRipple(false)}
				onPointerLeave={e => toggleRipple(true)}>
				<a
					href='https://vimalecommerce.netlify.app/'
					target='_blank'
					title='Go to Ecommerce platform'>
					<span
						data-font-highlight
						data-font-family='BOXING'
						ref={setText}>{`[ demo ]`}</span>
				</a>
				<a
					href='https://github.com/vimaldharshan07/simpleEcommerce'
					target='_blank'
					title='Go to source code page'>
					<span
						data-font-highlight
						data-font-family='BOXING'
						ref={setText}>
						{`[ code ]`}
					</span>
				</a>
			</div>
		</section>
	);
}
