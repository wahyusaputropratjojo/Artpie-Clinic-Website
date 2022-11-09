import React from 'react';
import { ReactComponent as ArtpieClinicLogoRemake } from '../assets/artpie-clinic-logo-remake.svg';
import { ReactComponent as FacebookLogo } from '../assets/facebook-logo.svg';
import { ReactComponent as InstagramLogo } from '../assets/instagram-logo.svg';
import { ReactComponent as WhatsappLogo } from '../assets/whatsapp-logo.svg';

const Footer = () => {
	return (
		<>
			<footer>
				<div className="flex items-center justify-between max-w-screen-lg mx-auto px-10 py-6 lg:px-0">
					<ArtpieClinicLogoRemake className="w-[4rem] md:mx-0 md:w-[5rem] transition-all" />
					<div className="flex gap-5">
						<FacebookLogo className="h-[2rem] md:h-[2.5rem]" />
						<InstagramLogo className="h-[2rem] md:h-[2.5rem]" />
						<WhatsappLogo className="h-[2rem] md:h-[2.5rem]" />
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
