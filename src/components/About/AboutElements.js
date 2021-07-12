import styled from 'styled-components'
import {color} from '../../Global/global'

export const AboutContainer = styled.div`
	color: ${color.second};
	background-color: #fff;
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
	/* padding: 10px 0; */
	/* margin: 10px 0; */
	
	@media screen and (max-width: 768px) {
		grid-template-areas: 'col1' 'col2';
		padding: 10px 0;
		margin: 10px 0;
	}
`

export const EduRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: "col1 col2 col3";
	
	@media screen and (max-width: 768px) {
		grid-template-areas: 'col1' 'col2' 'col3';
		padding: 10px 0;
		margin: 10px 0;
	}
`

export const SkillsRow = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	/* padding: 10px 0; */
	/* margin: 10px 0; */
	
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

export const Column3 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col3;
	text-align: center;
`

export const TextWrapper = styled.div`
	max-width: 540px;
`

export const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color: ${color.second};

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`

export const Subtitle = styled.p`
	max-width: 500px;
	margin-bottom: 35px;
	font-size: 18px;
	/* text-align: justify; */
	font-weight: bold;
	line-height: 24px;
	color: gray;
`

export const ImgWrap = styled.div`
	max-width: 555px;
	height: 100%;
`

export const Img = styled.img`
	width: 100%;
	margin: 10px;
`

export const EduCard = styled.div`
	border-radius: 50px;
	background: ${color.second};
	white-space: nowrap;
	padding: 10px;
	color: #fff;
	font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Space = styled.div`
	height: 50px;
`