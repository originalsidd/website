import styled from 'styled-components'
import {color} from '../../Global/global'

export const AboutContainer = styled.div`
	color: ${color.second};
	background-color: ${color.fifth};
	padding: 60px 0;

	@media screen and (max-width: 768px) {
		padding: 80px 0;
		height: 100%;
	}
`

export const AboutWrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 100%;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	justify-content: center;
`

export const AboutRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: "col1 col2";
	
	@media screen and (max-width: 768px) {
		justify-items: center;
		grid-template-areas: 'col1' 'col2';
		padding: 10px 0;
		margin: 10px 0;
	}
`

export const SkillRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: "col1 col2";
	
	@media screen and (max-width: 768px) {
		grid-template-areas: 'col1' 'col2';
		padding: 10px 0;
		margin: 10px 0;
	}
`

export const EduRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 768px) {
		padding: 10px 0;
		margin: 10px 0;
	}
`

export const CenterRow = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	
	@media screen and (max-width: 768px) {
		padding: 10px 0;
		margin: 10px 0;
	}
`

export const Column1 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
	text-align: center;
`

export const Column2 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col2;
	text-align: center;
`

export const TextWrapper = styled.div`
	max-width: 500px;
`

export const Heading = styled.div`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-family: 'Black Ops One';
	color: ${({cl}) => cl ? color.first : color.second};

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`

export const Subtitle = styled.p`
	max-width: 500px;
	margin-bottom: 35px;
	font-size: 16px;
	font-weight: bold;
	line-height: 24px;
`

export const Sub = styled.p`
	max-width: 500px;
	margin-bottom: 35px;
	font-size: 15px;
	font-weight: bold;
	line-height: 24px;
`

export const ImgWrap = styled.div`
	max-width: 400px;
	height: 100%;
`

export const Img = styled.img`
	width: 100%;
	padding: 10px;
`

export const Space = styled.div`
	width: 100%;
	border-top: 8px solid ${color.second};
	height: 70px;
	opacity: 0;
`

export const Space2 = styled.div`
	height: 10px;
`

export const Desc = styled.h3`
	color: ${color.first};
	font-weight: bold;
`

export const Desc2 = styled.h3`
	color: ${color.second};
	font-weight: bold;
`

export const Org = styled.h3`
	color: ${color.third};
`

export const Loc = styled.h5`
	color: ${color.third};
`

export const Date = styled.div`
	color: ${color.third};
	font-size: 12px;
	text-align: right;
	/* font-style: italic; */
	font-weight: bold;
`