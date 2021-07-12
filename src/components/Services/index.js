import React from 'react'
import Icon1 from '../../images/svg1.svg'
import Icon2 from '../../images/svg1.svg'
import Icon3 from '../../images/svg1.svg'
import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP
} from './ServicesElements'

const Services = () => {
	return (
		<ServicesContainer id="projects">
			<ServicesH1>My Projects</ServicesH1>
			<ServicesWrapper>
				<ServicesCard>
					<ServicesIcon src={Icon1} />
					<ServicesH2>abcd</ServicesH2>
					<ServicesP>well well well well wellaaaaaaaaaaaaaaa</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon2} />
					<ServicesH2>efgh</ServicesH2>
					<ServicesP>well well well well well</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon3} />
					<ServicesH2>ijkl</ServicesH2>
					<ServicesP>well well well well well</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	)
}

export default Services
