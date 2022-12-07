import React from 'react';

import GambarProduk from '../../json/gambar-produk.json';

const GaleriSection = () => {
	return (
		<>
			<section className="bg-black py-[5rem] md:py-[10rem]" id="Galeri">
				<div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-[1rem] px-[1rem] md:grid-cols-3 md:gap-[2rem] md:px-0">
					<h2 className="h2-fluid-text flex items-center justify-center rounded-2xl bg-color-2 py-[2rem] px-[5rem] font-versus-ultra uppercase text-color-1">
						Galeri
					</h2>
					{GambarProduk &&
						GambarProduk.map((item) => (
							<img
								key={item.id}
								src={item.image}
								className="rounded-2xl grayscale transition-all hover:grayscale-0"
								alt=""
							/>
						))}
				</div>
			</section>
		</>
	);
};

export default GaleriSection;
