import React from 'react'
import styled from 'styled-components'
import { color } from '../Global/global'
import { FaYoutube, FaInstagram, FaReddit } from 'react-icons/fa'
import { Button } from '../components/ButtonElement'
import { Link } from 'react-router-dom'
import {
	ContactWrapper,
	ContactItem,
	Alink,
	Text
} from '../components/Footer/FooterElements'

const Secret = () => {
	return (
		<Body>
			<TextH>
				Congrats! You reached a secret link!
			</TextH>
			<TextP>
				I put this secret page just for fun, but you might as well take something from here :)
			</TextP>
			<Contacts>
				<ContactWrapper>
					<ContactItem>
						<Alink target="_blank" href="https://www.instagram.com/originalsidd1/">
							<FaInstagram />
							<Text>Instagram</Text>
						</Alink>
					</ContactItem>
					<ContactItem>
						<Alink target="_blank" href="https://www.youtube.com/channel/UCxkS_NMe7dfd1NHmMhM9leQ">
							<FaYoutube />
							<Text>Youtube Music Channel</Text>
						</Alink>
					</ContactItem>
					<ContactItem>
						<Alink target="_blank" href="https://www.reddit.com/user/originalsidd">
							<FaReddit />
							<Text>Reddit</Text>
						</Alink>
					</ContactItem>
				</ContactWrapper>
			</Contacts>
			<NoSecret to="/">
				<Button
					primary="false"
					dark="true"
				>Go Back
				</Button>
			</NoSecret>
		</Body>
	)
}

export default Secret

const Body = styled.div`
	height: 100vh;
	width: 100%;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background: ${color.second};
`

const TextH = styled.div`
	font-size: 40px;
	font-weight: bold;
	color: ${color.first};
	padding: 20px;
	text-align: center;
	
	@media screen and (max-width: 870px) {
		font-size: 30px;
	}
	
	@media screen and (max-width: 650px) {
		font-size: 20px;
		padding: 20px 0;
	}
`

const TextP = styled.div`
	font-size: 20px;
	color: ${color.third};
	padding: 20px;
	text-align: center;
	padding-bottom: 60px;
	
	@media screen and (max-width: 650px) {
		font-size: 16px;
		padding: 20px 0;
		padding-bottom: 40px;
	}
`

const Contacts = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50%;
`

const NoSecret = styled(Link)`
	text-decoration: none;
`