import React from 'react';
import HeroImage from '../../assets/hero-image.jpg';

const HeroSection = () => {
	return (
		<>
			<section className="bg-color-2" id="Hero">
				<article className="mx-auto max-w-screen-lg">
					<div className="flex items-center justify-center pt-[30%] md:pt-[15%]">
						<div className="grid w-full grid-rows-3 items-center gap-[2rem] md:grid-cols-10 md:grid-rows-1">
							<div className="h1-fluid-text order-1 row-span-1 flex flex-col items-center justify-center font-versus-ultra uppercase text-white md:col-span-6 md:items-start">
								<p>Best Solution</p>
								<p className="rounded-lg bg-color-1 px-[1em] text-color-2">
									Treatment
								</p>
								<p>Your Favorite Stuff</p>
							</div>
							<div className="order-2 row-span-2 flex px-[2.5rem] md:col-span-4 md:px-0">
								<div className="rounded-t-full border-x-[.8rem] border-t-[.8rem] border-white">
									<img
										src={HeroImage}
										alt="Shoes"
										className="rounded-t-full border-x-[.8rem] border-t-[.8rem] border-color-1"
									/>
								</div>
							</div>
						</div>
					</div>
				</article>
			</section>
		</>
	);
};

export default HeroSection;
