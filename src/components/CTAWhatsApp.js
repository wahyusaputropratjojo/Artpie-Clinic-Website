import React from 'react';
import { ReactComponent as WhatsAppLogo } from '../assets/logo/whatsapp-logo.svg';

const CTAWhatsApp = () => {
	return (
		<>
			<a href="https://wa.me/+62895802572491" target="_blank">
				<div className="fixed bottom-[10rem] right-0 z-50 flex cursor-pointer items-center gap-[1rem] rounded-l-2xl bg-color-2 p-[1.5rem] md:bottom-[4rem] md:right-[2rem] md:rounded-2xl md:p-[2rem]">
					<p className="hidden font-fivo-sans text-[1.4rem] uppercase text-white md:block">
						Hubungi Kami
					</p>
					<WhatsAppLogo className="aspect-square h-[2rem] fill-color-1" />
				</div>
			</a>
		</>
	);
};

export default CTAWhatsApp;
