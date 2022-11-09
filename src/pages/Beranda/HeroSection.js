import React from 'react';

const HeroSection = () => {
	return (
		<>
			<section className="bg-black mx-auto">
				<article className="grid grid-cols-2 items-center max-w-screen-lg mx-auto">
					<div>
						<p className="font-poppins font-light text-white text-center text-[3.5rem]">
							Best Solution Treatment Your{' '}
							<span className="bg-color-2 px-5 text-white font-medium">
								Favorite
							</span>{' '}
							Stuff
						</p>
					</div>
					<div className="place-self-center">
						<div className="leading-none px-4 py-[100%] font-bebasneue uppercase bg-color-2 text-white text-[7rem] flex flex-col">
							<p>Artpie</p>
							<p>
								Clinic<span className="text-black">.</span>
							</p>
						</div>
					</div>
				</article>
			</section>
		</>
	);
};

export default HeroSection;
