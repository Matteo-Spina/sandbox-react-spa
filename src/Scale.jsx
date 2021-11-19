import styled from "styled-components/macro";

const StyledScaleGrid = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(auto-fill, 16px);
	/* background-image: linear-gradient(tomato 4px, transparent 4px, transparent 8px);
	background-size: 100% 8px; */
	background-image: repeating-linear-gradient(rgba(50,0,255,0.37) 0 4px, transparent 4px 8px);
`;


export default StyledScaleGrid;