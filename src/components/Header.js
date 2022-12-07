import React, { useEffect, useState } from 'react';
import { ReactComponent as ArtpieClinicLogoWordmark } from '../assets/logo/artpie-clinic-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Header = () => {
	const [navbar, setNavbar] = useState(false);

	const [size, setSize] = useState({
		width: undefined,
		height: undefined,
	});

	const [scrollHeader, setScrollHeader] = useState(true);

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

	const handleScrollHeader = () => {
		if (window.scrollY >= 50) {
			setScrollHeader(false);
		} else {
			setScrollHeader(true);
		}
	};

	window.addEventListener('scroll', handleScrollHeader);

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
			<header className="fixed z-50 w-full bg-color-2 transition-all">
				<div className="mx-auto my-0 flex max-w-screen-lg items-center justify-between px-10 py-8 lg:px-0">
					<Link
						className="cursor-pointer"
						onClick={handleNavbarMobile}
						to="Hero"
						spy={true}
						smooth={true}
						duration={800}>
						<ArtpieClinicLogoWordmark
							className={
								scrollHeader
									? 'z-50 mx-auto w-[10rem] fill-white transition-all md:mx-0'
									: 'z-50 mx-auto w-[7rem] fill-white transition-all md:mx-0'
							}
						/>
					</Link>
					<nav className="z-50 font-medium uppercase text-white">
						<ul className={navbar ? 'mobile-navbar' : 'desktop-navbar'}>
							<li>
								<Link
									className="cursor-pointer"
									onClick={handleNavbarMobile}
									to="Galeri"
									spy={true}
									smooth={true}
									duration={800}>
									Galeri
								</Link>
							</li>
							<li>
								<Link
									className="cursor-pointer"
									onClick={handleNavbarMobile}
									to="Layanan"
									spy={true}
									smooth={true}
									duration={800}>
									Layanan
								</Link>
							</li>
							<li>
								<Link
									className="cursor-pointer"
									onClick={handleNavbarMobile}
									to="Lokasi"
									spy={true}
									smooth={true}
									duration={800}>
									Lokasi
								</Link>
							</li>
							<li>
								<Link
									className="cursor-pointer"
									onClick={handleNavbarMobile}
									to="Tentang"
									spy={true}
									smooth={true}
									duration={800}>
									Tentang
								</Link>
							</li>
						</ul>
					</nav>
					{navbar ? (
						<FontAwesomeIcon
							onClick={handleNavbar}
							className="z-50 h-8 text-white transition-all md:hidden"
							icon={faXmark}
						/>
					) : (
						<FontAwesomeIcon
							onClick={handleNavbar}
							className="z-50 h-8 text-white transition-all md:hidden"
							icon={faBars}
						/>
					)}
				</div>
			</header>
		</>
	);
};

export default Header;
