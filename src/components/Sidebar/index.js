import React from 'react'
import DownloadButton from '../Download'
import {FaDownload} from 'react-icons/fa'
import {
	NavBtnLink
} from '../Navbar/NavbarElements'
import {
	SidebarContainer,
	Icon,
	ClosedIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrapper,
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<ClosedIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="home" onClick={toggle}>Home</SidebarLink>
					<SidebarLink to="about" onClick={toggle}>About</SidebarLink>
					<SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
					<SidebarLink to="achieve" onClick={toggle}>Achievements</SidebarLink>
					<SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
				</SidebarMenu>
				<SideBtnWrapper>
					<DownloadButton src="https://drive.google.com/uc?export=download&id=1jGOqpA6FH4veGLJkWvPZ3jZVgfA1xfaC">
						<NavBtnLink>
							Resume <FaDownload />
						</NavBtnLink>
					</DownloadButton>
				</SideBtnWrapper>
			</SidebarWrapper>
		</SidebarContainer>
	)
}

export default Sidebar
