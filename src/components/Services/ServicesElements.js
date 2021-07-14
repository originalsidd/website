import styled from "styled-components"
import { color } from '../../Global/global'

export const ServicesContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: ${color.second};
	padding: 60px 0 100px 0;
	
	@media screen and (max-width: 768px) {
		height: 100%;
		padding: 80px 0 120px 0;
	}
`

export const ServicesWrapper = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 22px;
	
	@media screen and (max-width: 1200px) {
		grid-template-columns: 1fr 1fr;
		padding: 0 20px;
	}
	
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
`


export const ServicesCard = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	height: 300px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	transition: all 0.3s ease-in-out;
	
	&:hover {
		transform: scale(1.02);
		transition: all 0.3s ease-in-out;
		cursor: pointer;
	}
`

export const ServicesH2 = styled.h2`
	font-size: 2rem;
	margin-bottom: 10px;
	color: ${color.first};

	@media screen and (max-width: 480px) {
		font-size: 1.6rem;
	}
	`

export const ServicesP = styled.p`
	color: ${color.third};
	font-size: 0.9rem;
	text-align: center;
	max-width: 300px;
	font-weight: bold;

	@media screen and (max-width: 480px) {
		font-size: 0.75rem;
		max-width: 250px;
	}
`

export const ServicesIcon = styled.img`
	border-radius: 10px;
	height: 290px;
	width: 340px;

	@media screen and (max-width: 480px) {
		height: 250px;
		width: 290px;
	}
`

export const ServicesOverlay = styled.div`
	position: absolute;
	height: 294px;
	width: 344px;
	background: rgba(10, 10, 10, 0.88);
	border-radius: 10px;
	filter: blur(0);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	opacity: 0;
	transition: opacity 0.3s;
	
	&:hover {
		opacity: 1;
	}

	@media screen and (max-width: 480px) {
		height: 254px;
		width: 294px;
	}
`


export const ServicesH1 = styled.div`
	font-size: 48px;
	font-family: 'Black Ops One';
	color: #fff;
	margin-bottom: 60px;
	
	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`

