import React from 'react'
import Video from '../../videos/video.mp4'
import Typical from 'react-typical'
import {
	SuperContainer,
	SuperBg,
	VideoBg,
	SuperContent,
	SuperH1,
	SuperP,
} from './SuperElements'

const SuperSection = ({ isOpen }) => {
	const component = isOpen ? <> </> :
		<Typical
			loop={Infinity}
			wrapper="p"
			steps={[
				'Web Developer 💻',
				2000,
				'Competitive Programmer 🏁',
				2000,
				'Cloud Enthusiast 🌌',
				2000,
				'AI Fanatic 🤖',
				2000,
				'Music Producer 🎵',
				2000
			]}
	/>
	return (
		<SuperContainer id="home">
			<SuperBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</SuperBg>
			<SuperContent>
				<SuperH1>Siddharth Pal</SuperH1>
				<SuperP>
				{component}
				</SuperP><br />
			</SuperContent>
		</SuperContainer>
	)
}

export default SuperSection
