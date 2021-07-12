import React from 'react'
import SkillBar from 'react-skillbars';
// import { Button } from '../ButtonElement'
import {
	AboutContainer,
	AboutWrapper,
	AboutRow,
	SkillsRow,
	EduRow,
	Column1,
	Column2,
	Column3,
	TextWrapper,
	Heading,
	Subtitle,
	ImgWrap,
	Img,
	EduCard,
	Space
} from './AboutElements'

const About = ({
	id,
	headline1,
	headline2,
	headline3,
	description,
	img,
	alt,
	SKILLS1,
	SKILLS2,
	edu1,
	edu2,
	edu3
}) => {
	return (
		<>
			<AboutContainer id={id}>
				<AboutWrapper>
					<SkillsRow>
						<TextWrapper>
							<Heading>{headline1}</Heading>
						</TextWrapper>
					</SkillsRow>
					<AboutRow>
						<Column1>
							<TextWrapper>
								<Subtitle>{description}</Subtitle>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={img} alt={alt} />
							</ImgWrap>
						</Column2>
					</AboutRow>
					<Space />
					<SkillsRow>
						<TextWrapper>
							<Heading>{headline2}</Heading>
						</TextWrapper>
					</SkillsRow>
					<AboutRow>
						<Column1>
							<SkillBar skills={SKILLS1} animationDuration={1000} animationDelay={0} height={32}/>
						</Column1>
						<Column2>
							<SkillBar skills={SKILLS2} animationDuration={1000} animationDelay={0} height={32}/>
						</Column2>
					</AboutRow>
					<Space />
					<SkillsRow>
						<TextWrapper>
							<Heading>{headline3}</Heading>
						</TextWrapper>
					</SkillsRow>
					<EduRow>
						<Column1>
							<EduCard>
								{edu1}
							</EduCard>
						</Column1>
						<Column2>
							<EduCard>
								{edu2}
							</EduCard>
						</Column2>
						<Column3>
							<EduCard>
								{edu3}
							</EduCard>
						</Column3>
					</EduRow>
				</AboutWrapper>
			</AboutContainer>
		</>
	)
}

export default About
