import React from 'react'
import Video from '../../videos/video.mp4'
// import {Button} from '../ButtonElement'
// import DownloadButton from '../Download/Download'
import Typical from 'react-typical'
import {
	SuperContainer,
	SuperBg,
	VideoBg,
	SuperContent,
	SuperH1,
	SuperP,
	// SuperBtnWrapper,
	// ArrowForward,
	// ArrowRight,
	// Text
} from './SuperElements'

const SuperSection = () => {
	// const [hover, setHover] = useState(false);

	// const onHover = () => {
	// 	setHover(!hover);
	// }

	return (
		<SuperContainer id="home">
			<SuperBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</SuperBg>
			<SuperContent>
				<SuperH1>Siddharth Pal</SuperH1>
				<SuperP>
					<Typical
						loop={Infinity}
						wrapper="b"
						steps={[
							'Web Developer 💻',
							2000,
							'Competitive Programmer 🏁',
							2000,
							'Cloud Enthusiast 🌌',
							2000,
							'AI Fanatic 🤖',
							2000
							]}
					/>
				</SuperP>
				{/* <SuperBtnWrapper>
					<DownloadButton src="https://drive.google.com/uc?export=download&id=1jGOqpA6FH4veGLJkWvPZ3jZVgfA1xfaC">
						<Button onMouseEnter={onHover} 
							onMouseLeave={onHover}
							primary="true"
							dark="true">
							<Text>Resume</Text>
							{hover ? <ArrowForward /> : <ArrowRight />}
						</Button>
					</DownloadButton>
				</SuperBtnWrapper> */}
			</SuperContent>
		</SuperContainer>
	)
}

export default SuperSection
