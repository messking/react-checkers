import React from 'react';
import styled, { keyframes } from 'styled-components';
export const Hero = ({ heroColor, rowIndex, cellIndex, set_current_hero_loc, cell }) => {
	return (
		<StyledHero
			onClick={() => {
				set_current_hero_loc({ rowIndex, cellIndex, type: cell });
			}}
			style={{ background: heroColor }}
		/>
	);
};

const MovingHero = keyframes`
0%{
    opacity:0;
}
100%{
    opacity:100%;
}
`;
const StyledHero = styled.div`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	background: red;
	cursor: pointer;
	border: 1px solid white;
	animation: ${MovingHero} 1s linear;
`;
