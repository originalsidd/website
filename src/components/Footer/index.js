import React from 'react'
import { FaHackerrank, FaGithub, FaLinkedin, FaDev, FaMobileAlt } from 'react-icons/fa'
import { SiCodeforces, SiCodechef, SiGmail } from 'react-icons/si'
import { GoLocation } from 'react-icons/go'
import {
	FooterContainer,
	Alink,
	FootH1,
	Contact,
	ContactContainer,
	ContactWrapper,
	ContactItem,
	Creator,
	WebsiteRights,
	Text,
	TextH,
	Secret
} from './FooterElements'

const Footer = () => {
	return (
		<FooterContainer id="contact">
			<FootH1>Contact Me</FootH1>
			<Contact>
				<ContactContainer>
					<ContactWrapper>
						<ContactItem>
							<GoLocation /><br />
							New Delhi, Delhi, India
							<TextH>Location</TextH>
						</ContactItem>
						<ContactItem>
							<FaMobileAlt /><br />
							+91-8368594936
							<TextH>Phone Number</TextH>
						</ContactItem>
						<ContactItem>
							<SiGmail /><br />
							originalsidd@gmail.com
							<TextH>E-Mail</TextH>
						</ContactItem>
					</ContactWrapper>
				</ContactContainer>
				<ContactContainer>
					<ContactWrapper>
						<ContactItem>
							<Alink target="_blank" href="https://www.hackerrank.com/originalsidd">
								<FaHackerrank />
								<Text>HackerRank</Text>
							</Alink>
						</ContactItem>
						<ContactItem>
							<Alink target="_blank" href="https://codeforces.com/profile/originalsidd">
								<SiCodeforces />
								<Text>Codeforces</Text>
							</Alink>
						</ContactItem>
						<ContactItem>
							<Alink target="_blank" href="https://www.codechef.com/users/originalsidd">
								<SiCodechef />
								<Text>CodeChef</Text>
							</Alink>
						</ContactItem>
					</ContactWrapper>
				</ContactContainer>
				<ContactContainer>
					<ContactWrapper>
						<ContactItem>
							<Alink target="_blank" href="https://www.linkedin.com/in/siddharthpal20/">
								<FaLinkedin />
								<Text>LinkedIn</Text>
							</Alink>
						</ContactItem>
						<ContactItem>
							<Alink target="_blank" href="https://www.github.com/originalsidd">
								<FaGithub />
								<Text>GitHub</Text>
							</Alink>
						</ContactItem>
						<ContactItem>
							<Alink target="_blank" href="https://dev.to/originalsidd">
								<FaDev />
								<Text>DEV</Text>
							</Alink>
						</ContactItem>
					</ContactWrapper>
				</ContactContainer>
			</Contact>
			<Secret to="/secret_link">
				<Creator>Coded with ❤ by Siddharth Pal</Creator>
			</Secret>
			<WebsiteRights>Siddharth Pal © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
		</FooterContainer>
	)
}

export default Footer
