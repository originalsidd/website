import React from 'react'
import {Button} from '../ButtonElement'
import {ProjectsObj} from '../../Data/Data'
import './Services.css'
import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP,
	ServicesOverlay
} from './ServicesElements'

const Services = () => {
	return (
		<ServicesContainer id="projects">
			<ServicesH1>My Projects</ServicesH1>
			<ServicesWrapper>
				{ProjectsObj.map(element => {
					return (
						<ServicesCard>
							<ServicesIcon src={element.icon} />
							<ServicesOverlay className="overlay overlay--blur">
								<ServicesH2>{element.title}</ServicesH2>
								<ServicesP>{element.desc}</ServicesP>
								<br />
								<Button
									href={element.link}
									target="_blank"
									primary="false"
									dark="true"
								>Check it Out!
								</Button>
								<br />
							</ServicesOverlay>
						</ServicesCard>
					)
				})
				}
			</ServicesWrapper>
		</ServicesContainer>
	)
}

export default Services
