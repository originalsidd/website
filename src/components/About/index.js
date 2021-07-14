import React from 'react'
import SkillBar from 'react-skillbars';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import {MdSchool} from 'react-icons/md'
import {
	AboutContainer,
	AboutWrapper,
	AboutRow,
	SkillRow,
	CenterRow,
	EduRow,
	Column1,
	Column2,
	TextWrapper,
	Heading,
	Subtitle,
	Sub,
	ImgWrap,
	Img,
	Space,
	Space2,
	Desc,
	Desc2,
	Org,
	Loc,
	Date
} from './AboutElements'

const About = ({
	id,
	headline1,
	headline2,
	headline3,
	description,
	descriptionEd,
	img,
	alt,
	SKILLS1,
	SKILLS2,
	timelineElements
}) => {
	return (
		<>
			<AboutContainer id={id}>
				<AboutWrapper>
					<CenterRow>
						<TextWrapper>
							<Heading>{headline1}</Heading>
						</TextWrapper>
					</CenterRow>
					<AboutRow>
						<Column1>
							<TextWrapper>
								<Heading cl={true}>Siddharth Pal</Heading>
							</TextWrapper>
							<TextWrapper>
								<Subtitle>{description}</Subtitle>
								<Sub>{descriptionEd}</Sub>
							</TextWrapper>
						</Column1>
						<Column2>
						<center>
							<ImgWrap>
								<Img src={img} alt={alt} />
							</ImgWrap>
						</center>
						</Column2>
					</AboutRow>
					<Space />
					<CenterRow>
						<TextWrapper>
							<Heading>{headline2}</Heading>
						</TextWrapper>
					</CenterRow>
					<Space2 />
					<SkillRow>
						<Column1>
							<SkillBar skills={SKILLS1} animationDuration={800} animationDelay={0} height={32}/>
						</Column1>
						<Column2>
							<SkillBar skills={SKILLS2} animationDuration={800} animationDelay={0} height={32}/>
						</Column2>
					</SkillRow>
					<Space2 />
					<Space />
					<CenterRow>
						<TextWrapper>
							<Heading>{headline3}</Heading>
						</TextWrapper>
					</CenterRow>
					<EduRow>
						<VerticalTimeline>
							{timelineElements.map(element => {
								return (
									<VerticalTimelineElement
										className="vertical-timeline-element--education"
										key={element.key}
										contentStyle={element.contentStyle}
										contentArrowStyle={element.contentArrowStyle}
										iconStyle={element.iconStyle}
										icon={<MdSchool />}
										intersectionObserverProps={{triggerOnce: true}}
									>
										{
											element.id % 2
											? 
											<Desc className="vertical-timeline-element-title">
												{element.description}
											</Desc>
											:
											<Desc2 className="vertical-timeline-element-title">
												{element.description}
											</Desc2>
										}
										<Space2 />
										<Org className="vertical-timeline-element-title">
											{element.title}
										</Org>
										<Loc className="vertical-timeline-element-subtitle">
											{element.location}
										</Loc>
										<Date className="vertical-timeline-element-subtitle">
											{element.date}
										</Date>
									</VerticalTimelineElement>
								)
							})}
						</VerticalTimeline>
					</EduRow>
				</AboutWrapper>
			</AboutContainer>
		</>
	)
}

export default About
