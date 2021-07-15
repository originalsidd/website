import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import { color } from '../../Global/global'

export const Nav = styled.nav`
	background: ${({scrollNav}) => (scrollNav ? color.second : 'transparent')};
	height: 80px;
	margin-top: -80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.1rem;
	position: sticky;
	top: 0;
	z-index: 10;
	transition: 0.3s all ease;

	@media screen and (max-width: 960px) {
		transition: 0.3s all ease;
	}
	`

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1100px;
`

export const NavLogo = styled(LinkS)`
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-left: 24px;
	font-weight: bold;
	text-decoration: none;
	transition: all 0.2s ease-in-out;

	&:hover {
		/* border-bottom: 3px solid ${color.first}; */
		color: ${color.first};
		transition: all 0.2s ease-in-out;
	}
`

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 920px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: #fff;
	}
`

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 920px) {
		display: none;
	}
`

export const NavItem = styled.li`
	 height: 80px;
`

export const NavLinks = styled(LinkS)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	font-weight: 600;
	transition: all 0.2s ease-in-out;

	&:hover {
		/* border-bottom: 3px solid ${color.first}; */
		color: ${color.first};
		transition: all 0.2s ease-in-out;
	}

	&.active {
		color: ${color.first};
		transition: all 0.2s ease-in-out;
		/* border-bottom: 3px solid #01bf71; */
	}
`

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 920px) {
		display: none;
	}
`

export const NavBtnLink = styled.div`
	border-radius: 50px;
	background: ${color.first};
	white-space: nowrap;
	padding: 10px 22px;
	color: ${color.second};
	font-size: 16px;
	font-weight: bold;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: ${color.second};
	}
`