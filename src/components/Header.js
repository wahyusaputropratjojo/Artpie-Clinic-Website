import React, { useEffect, useState } from 'react';
import { ReactComponent as ArtpieClinicLogoRemake } from '../assets/artpie-clinic-logo-remake.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	const [navbar, setNavbar] = useState(false);

	const [size, setSize] = useState({
		width: undefined,
		height: undefined,
	});

	const handleNavbar = () => {
		setNavbar((p) => !p);
	};

	useEffect(() => {
		const handleResize = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (size.width >= 768 && navbar) {
			setNavbar(false);
		}
	}, [size.width, navbar]);

	return (
		<>
			<header>
				<div className="px-10 py-6 lg:px-0 mx-auto my-0 max-w-screen-lg flex justify-between items-center">
					<ArtpieClinicLogoRemake className="w-[4rem] md:w-[5rem] transition-all" />
					<nav>
						<ul className={navbar ? 'mobile-navbar' : 'desktop-navbar'}>
							<li>Beranda</li>
							<li>Tentang</li>
							<li>Layanan</li>
							<li>Lokasi</li>
						</ul>
					</nav>
					<FontAwesomeIcon
						onClick={handleNavbar}
						className="h-10 md:hidden z-10 transition-all"
						icon={navbar ? faXmark : faBars}
					/>
				</div>
			</header>
		</>
	);
};

export default Header;
