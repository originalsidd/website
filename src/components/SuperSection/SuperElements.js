import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import {color} from '../../Global/global'

export const SuperContainer = styled.div`
	background: #0c0c0c;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
	height: 740px;
	position: relative;
	z-index: 1;
	
	:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0.5) 50%,
				rgba(0, 0, 0, 0.7) 100%
			),
			linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
		z-index: 2;
	}
`;

export const SuperBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: #232a34;
`;

export const SuperContent = styled.div`
	z-index: 3;
	max-width: 1200px;
	position: absolute;
	padding: 8px 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const SuperH1 = styled.div`
	color: #fff;
	font-size: 80px;
	text-align: center;
	font-family: 'Black Ops One', cursive;
	letter-spacing: 7px;
	text-shadow: 0 0 12px black;
	@media screen and (max-width: 768px) {
		font-size: 60px;
	}
	
	@media screen and (max-width: 480px) {
		font-size: 35px;
	}
`;

export const SuperP = styled.p`
	margin-top: 6px;
	color: ${color.first};
	/* color: #fff; */
	font-size: 28px;
	font-weight: bold;
	text-align: center;
	max-width: 500px; 
	text-shadow: 0 0 12px black;

	@media screen and (max-width: 768px) {
		font-size: 20px;
	}

	@media screen and (max-width: 480px) {
		font-size: 18px;
	}
`;

export const SuperBtnWrapper = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
	margin-left: 8px;
	font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
	margin-left: 8px;
	font-size: 20px;
`;

export const Text = styled.div`
	font-weight: bold;
`