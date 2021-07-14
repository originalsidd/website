import React from 'react'
import {
	AchieveContainer,
	AchieveH1,
	AchieveWrapper,
	AchieveCard,
	AchieveIcon,
	Title
} from './AchieveElements'
import Icon7 from '../../images/img7.png'
import Icon8 from '../../images/img8.png'
import Icon9 from '../../images/img9.png'
import Tilt from 'react-parallax-tilt'

const Achievements = () => {
	return (
		<AchieveContainer id="achieve">
			<AchieveH1>Achievements</AchieveH1>
			<AchieveWrapper>
				<Tilt tiltReverse={true}>
					<AchieveCard>
						<Title>6⭐in Problem Solving along with eight more 5⭐on HackerRank</Title>
						<AchieveIcon src={Icon7} />
						<br /><br /><br />
					</AchieveCard>
				</Tilt>
				<Tilt tiltReverse={true}>
					<AchieveCard>
						<Title>Completed The Complete Web Developer in 2021: Zero to Mastery Course on Udemy</Title>
						<AchieveIcon src={Icon8} width={200} height={200}/>
						<br /><br /><br />
					</AchieveCard>
				</Tilt>
				<Tilt tiltReverse={true}>
					<AchieveCard>
						<Title>Worked on Raspberry Pi for the project DRain, it was later selected for CBSE Science Exhibition</Title>
						<AchieveIcon src={Icon9} width={280} />
						<br /><br /><br />
					</AchieveCard>
				</Tilt>
			</AchieveWrapper>
		</AchieveContainer>
	)
}

export default Achievements
