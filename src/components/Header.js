import React, { useEffect, useState } from 'react';
import { ReactComponent as ArtpieClinicLogoRemake } from '../assets/artpie-clinic-logo-remake.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
	const [navbar, setNavbar] = useState(false);

	const [size, setSize] = useState({
		width: undefined,
		height: undefined,
	});

	const handleNavbar = () => {
		setNavbar((p) => !p);
	};

	const handleNavbarMobile = () => {
		if (navbar === false) {
			setNavbar(false);
		} else if (navbar === true) {
			setNavbar(false);
		}
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
					<ArtpieClinicLogoRemake className="w-[4rem] mx-auto md:mx-0 md:w-[5rem] transition-all" />
					<nav>
						<ul className={navbar ? 'mobile-navbar' : 'desktop-navbar'}>
							<li>
								<Link onClick={handleNavbarMobile} to="/">
									Beranda
								</Link>
							</li>
							<li>
								<Link onClick={handleNavbarMobile} to="/layanan">
									Layanan
								</Link>
							</li>
							<li>
								<Link onClick={handleNavbarMobile} to="/lokasi">
									Lokasi
								</Link>
							</li>
							<li>
								<Link onClick={handleNavbarMobile} to="/tentang">
									Tentang
								</Link>
							</li>
						</ul>
					</nav>
					{navbar ? (
						<FontAwesomeIcon
							onClick={handleNavbar}
							className="h-8 md:hidden z-10 transition-all text-white"
							icon={faXmark}
						/>
					) : (
						<FontAwesomeIcon
							onClick={handleNavbar}
							className="h-8 md:hidden z-10 transition-all"
							icon={faBars}
						/>
					)}
				</div>
			</header>
		</>
	);
};

export default Header;
