import React from 'react';
import OwnerProfile from '../../assets/owner-profile.jpg';
import { ReactComponent as FacebookLogo } from '../../assets/logo/facebook-logo.svg';
import { ReactComponent as InstagramLogo } from '../../assets/logo/instagram-logo.svg';

const TentangSection = () => {
	return (
		<>
			<section className="bg-black py-[5rem] md:py-[10rem]" id="Tentang">
				<div className="mx-auto flex max-w-screen-lg flex-col gap-[5rem] px-[1rem]">
					<h2 className="h1-fluid-text mx-auto w-fit rounded-2xl bg-color-1 py-[2rem] px-[5rem] font-versus-ultra uppercase text-black">
						Tentang Kami
					</h2>
					<div className="grid items-center gap-[5rem] md:grid-cols-2">
						<div className="flex justify-center">
							<div className="flex aspect-square w-[70%] items-center justify-center rounded-full border-[1rem] border-color-1 bg-color-1">
								<img
									src={OwnerProfile}
									className="rounded-full grayscale transition-all hover:grayscale-0"
									alt="Owner"
								/>
							</div>
						</div>
						<div className="flex flex-col gap-[1rem]">
							<div className="flex flex-col gap-[1rem] rounded-2xl bg-color-2 py-[2em] px-[3rem]">
								<h3 className="font-versus-ultra text-[2rem] uppercase text-white text-color-1">
									ArtPie Clinic
								</h3>
								<p className="content-1-fluid-text font-fivo-sans text-white">
									Kami merupakan Jasa Perawatan Sepatu dan Tas yang ada di
									Manado yang berbasis Media Sosial yang berdiri sejak tahun
									2019 hingga sampai saat ini dan akan terus berkembang dan
									memberikan pelayanan terbaik.
								</p>
							</div>
							<div className="flex justify-center gap-[2rem] rounded-2xl bg-color-2 py-[2em] px-[3rem]">
								<a
									rel="noreferrer"
									href="https://web.facebook.com/artpieclinic/"
									target="_blank">
									<FacebookLogo className="h-[2rem] fill-color-1 md:h-[2.5rem]" />
								</a>
								<a
									rel="noreferrer"
									href="https://www.instagram.com/artpie_clinic/"
									target="_blank">
									<InstagramLogo className="h-[2rem] fill-color-1 md:h-[2.5rem]" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default TentangSection;
