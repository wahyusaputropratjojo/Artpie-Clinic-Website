import React from 'react';

const LokasiSection = () => {
	return (
		<>
			<section className="bg-black py-[5rem] md:py-[10rem]" id="Lokasi">
				<article className="mx-auto max-w-screen-lg px-[1rem]">
					<div className="flex flex-col justify-between rounded-2xl bg-color-2 md:flex-row">
						<div className="flex items-center justify-center">
							<h2 className="h2-fluid-text flex items-center justify-center rounded-2xl bg-color-2 py-[2rem] px-[5rem] font-versus-ultra uppercase text-color-1">
								Lokasi
							</h2>
						</div>
						<div className="w-full">
							<iframe
								title="Artpie Clinic"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5059105128967!2d124.83605861467043!3d1.4696289989282105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x328775513dcc9b51%3A0xe1605a78c309eb7a!2sShoe%20%26%20Bag%20Artpie%20Clinic!5e0!3m2!1sid!2sid!4v1668585204716!5m2!1sid!2sid"
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								className="h-[50rem] w-full rounded-b-2xl md:rounded-b-none md:rounded-r-2xl"></iframe>
						</div>
					</div>
				</article>
			</section>
		</>
	);
};

export default LokasiSection;
