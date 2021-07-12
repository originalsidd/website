import styled from 'styled-components'
import { color } from '../../Global/global'
// import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
	background-color: ${color.second};
`

export const Contact = styled.div`
	padding: 20px 24px;
	padding-bottom: 75px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1100px;
	margin: 0 auto;
	color: #fff;
`

export const ContactContainer = styled.div`
	display: flex;
	justify-content: center;
	
	@media screen and (max-width: 820px) {
		padding-bottom: 35px;
	}
	`

export const ContactWrapper = styled.div`
	display: flex;

	@media screen and (max-width: 860px) {
		flex-direction: column;
	}
`

export const TextH = styled.div`
	margin-top: 10px;
	font-size: 12px;
	color: #fff;
	opacity: 0;
	transition: 0.3s ease-out;
`

export const ContactItem = styled.div`
	color: ${color.first};
	font-weight: 600;
	font-size: 20px;
	width: 248px;
	text-align: center;
	margin: 16px;
	box-sizing: border-box;
	transition: 0.3s ease-in-out;
	
	&:hover {
		color: #fff;
		cursor: pointer;
		transition: 0.3s ease-in-out;
	}

	&:hover ${TextH} {
		opacity: 1;
		transition: 0.3s ease-in-out;
		color: ${color.first};
	}
	
	@media screen and (max-width: 420px) {
		margin: 0;
		padding: 10px;
		width: 100%;
	}
	`

export const FooterWrap = styled.div`
	padding: 0 24px;
	padding-bottom: 40px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1100px;
	margin: 0 auto;
	font-size: 40px;
	color: #fff;
`

export const FooterLinksContainer = styled.div`
	display: flex;
	justify-content: center;

	@media screen and (max-width: 820px) {
		padding-top: 32px;
	}
`

export const FooterLinksWrapper = styled.div`
	display: flex;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`

export const FooterLinkItems = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 16px;
	text-align: left;
	width: 160px;
	box-sizing: border-box;
	color: #fff;

	@media screen and (max-width: 420px) {
		margin: 0;
		padding: 10px;
		width: 100%;
	}
`

export const FooterLinkTitle = styled.div`
	font-size: 20px;
	margin-bottom: 16px;
	font-weight: bold;
	`

export const Text = styled.div`
	font-size: 12px;
	color: #fff;
	opacity: 0;
	transition: 0.3s ease-out;
`

export const Alink = styled.a`
	color: #fff;
	text-decoration: none;
	margin-bottom: 0.7rem;
	font-size: 40px;
	transition: 0.3s ease-in-out;
	
	&:hover {
		color: ${color.first};
		transition: 0.3s ease-out;
	}
	&:hover ${Text} {
		opacity: 1;
		transition: 0.3s ease-out;
	}
	`

export const FootH1 = styled.h1`
	color: #fff;
	font-size: 40px;
	padding-top: 80px;
	padding-bottom: 40px;
	text-align: center;
	`

export const WebsiteRights = styled.div`
	color: #fff;
	font-size: 10px;
	text-align: center;
	padding: 10px;
	/* padding-bottom: 20px; */
`


export const Creator = styled.h3`
	text-align: center;
	color: #fff;
	padding: 10px;
	cursor: pointer;
	transition: 0.3s ease-in-out;
	&:hover {
		background: #fff;
		color: ${color.first};
		transition: 0.3s ease-in-out;
	}
`