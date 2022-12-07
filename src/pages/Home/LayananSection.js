import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

import DataLayanan from '../../json/layanan.json';

import 'swiper/css';
import 'swiper/css/bundle';

const LayananSection = () => {
	const convertTime = (time) => {
		if (time >= 24) {
			return time / 24 + ' Hari';
		} else {
			return time + ' Jam';
		}
	};

	const convertCurrencyIDR = (number) => {
		if (number > 0) {
			let rupiah = new Intl.NumberFormat('id-ID', {
				style: 'currency',
				currency: 'IDR',
				minimumFractionDigits: 0,
			}).format(number);

			return rupiah;
		} else {
			let rupiah = 'Free';
			return rupiah;
		}
	};

	return (
		<>
			<section className="bg-black py-[5rem] md:py-[10rem]" id="Layanan">
				<div className="mx-auto flex max-w-screen-lg flex-col gap-10 px-[1rem] md:px-0">
					<h2 className="h1-fluid-text w-fit rounded-2xl bg-color-2 py-[.5em] px-[1em] font-versus-ultra uppercase text-color-1">
						Layanan
					</h2>
					<div className="grid grid-cols-1 gap-[3rem] md:grid-cols-2">
						{DataLayanan &&
							DataLayanan.map((layanan) => {
								return (
									<div
										key={layanan.id}
										className="flex items-center rounded-3xl bg-color-2 py-[3rem]">
										<div className="flex w-full flex-col gap-[3rem]">
											<div className="">
												<h3 className="h1-fluid-text h-full bg-color-1 py-[2rem] text-center font-versus-ultra uppercase text-black">
													{layanan.name}
												</h3>
											</div>
											<div>
												<Swiper
													className="px-[1rem] md:px-[3rem]"
													slidesPerView={1}
													spaceBetween={100}
													centeredSlides={true}
													autoplay={{
														delay: 5000,
														disableOnInteraction: false,
													}}
													modules={[Autoplay, Pagination]}>
													{layanan.tier &&
														layanan.tier.map((tier) => {
															return (
																<SwiperSlide key={tier.id}>
																	<div className="rounded-xl font-fivo-sans">
																		<div className="flex flex-col justify-between gap-[1rem] rounded-[3rem] bg-white">
																			<div className="rounded-t-[3rem] bg-black">
																				<h4 className="py-[3.5rem] text-center font-versus-ultra text-[2rem] uppercase  text-color-1">
																					{tier.name}
																				</h4>
																			</div>
																			<ul className="content-1-fluid-text h-[20rem] list-inside list-disc px-[2rem]">
																				{tier.services &&
																					tier.services.map(
																						(service, index) => {
																							return (
																								<>
																									<li key={index}>{service}</li>
																								</>
																							);
																						},
																					)}
																			</ul>
																			<ul className="content-2-fluid-text flex flex-wrap gap-[1rem] px-[2rem]">
																				{tier.free &&
																					tier.free.map((free, index) => {
																						return (
																							<>
																								<li
																									className="rounded-full bg-color-1 py-[.5rem] px-[1rem]"
																									key={index}>
																									{free}
																								</li>
																							</>
																						);
																					})}
																				<li className="rounded-full bg-color-1 py-[.5rem] px-[1rem]">
																					{convertTime(tier.duration)}
																				</li>
																			</ul>
																			<div>
																				<p className="py-8 text-center text-[1.6rem] font-bold">
																					{convertCurrencyIDR(tier.price)}
																				</p>
																			</div>
																		</div>
																	</div>
																</SwiperSlide>
															);
														})}
												</Swiper>
											</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</section>
		</>
	);
};

export default LayananSection;
