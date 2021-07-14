import React, {useState, useEffect} from 'react'
import {FaBars, FaDownload} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import DownloadButton from '../Download'
import {
	Nav, 
	NavbarContainer, 
	NavLogo, 
	MobileIcon, 
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 220) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, [])

	const toggleHome = () => {
		scroll.scrollToTop();
	}

	return (
		<>
			<Nav scrollNav={scrollNav}>
				<NavbarContainer>
					<NavLogo to="/" onClick={toggleHome}>SIDD&nbsp;&nbsp;&nbsp;&nbsp;</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to="home"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>Home</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="about"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-79}
							>About</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="projects"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-78.5}
							>Projects</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="achieve"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-77.9}
							>Achievements</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="contact"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-78}
							>Contact</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<DownloadButton src="https://drive.google.com/uc?export=download&id=1jGOqpA6FH4veGLJkWvPZ3jZVgfA1xfaC">
							<NavBtnLink>
								Resume <FaDownload />
							</NavBtnLink>
						</DownloadButton>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default Navbar;
