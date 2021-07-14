import styled from 'styled-components'
import {color} from '../../Global/global'

export const AchieveContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${color.fifth};
	padding: 60px 0 100px 0;

	@media screen and (max-width: 768px) {
		height: 100%;
		padding: 80px 0 120px 0;
	}
`

export const AchieveH1 = styled.div`
	font-size: 48px;
	font-family: 'Black Ops One';
	color: ${color.second};
	margin-bottom: 60px;
	
	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`

export const AchieveWrapper = styled.div`
	display: grid;
	max-width: 1200px;
	height: 100%;
	margin: 0 auto;
	justify-content: center;
	align-items: center;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 40px;

	@media screen and (max-width: 1200px) {
		grid-template-columns: 1fr 1fr;
		padding: 0 20px;
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
`

export const Link = styled.a`
	display: flex;
	justify-content: center;
	font-size: 20px;
	color: ${color.second};
	opacity: 0;
`

export const AchieveCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 15px double ${color.first};
	height: 380px;
	width: 340px;
	background: ${color.fifth};
	border-radius: 10px;
	transition: all 0.2s; 
	
	&:hover {
		background: ${color.first};
		cursor: pointer;
		transition: all 0.2s; 
	}

	@media screen and (max-width: 420px) {
		height: 350px;
		width: 315px;
	}
`

export const AchieveIcon = styled.img`
	border-radius: 10px;
	height: 200px;
	width: ${({width}) => width ? width : 200};
	
	@media screen and (max-width: 420px) {
		height: 165px;
		width: 165px;
	}
`

export const Title = styled.div`
	width: 100%;
	font-size: 16px;
	font-weight: bold;
	color: ${color.second};
	padding-top: 10px;
	padding-bottom: 24px;
	text-align: center;

	@media screen and (max-width: 420px) {
		font-size: 14px;
	}
`

