import styled, { css } from "styled-components/macro";

/* Structural component: defines a grid item */
const StyledGridItem = styled.div`
  /* default [2row X 1col] */
  grid-row: ${(props) => (props.halfOnY ? "span 1" : "span 2")};
  grid-column: ${(props) => (props.fullOnX ? "1 / -1" : "span 1")};
  padding: 1rem;
  /* debug */
  /* border: solid thin; */
  /* background: lightcoral; */
`;

// helper
// param: color object
const BackgroundTemplate = css`
  background: linear-gradient(
    307deg,
    ${(props) => props.colorA || "var(--color-node-2)"} 0%,
    ${(props) => props.colorB || "var(--color-node-1)"} 80%
  );
`;

/* Decorative component: wraps styles */
// WARNING: sizes!!
const StyledTile = styled.div`
  ${BackgroundTemplate};
  box-shadow: 0px 2px 2px 0px var(--color-shadow-1),
    0px 2px 8px 0px var(--color-shadow-2);
  border-radius: 8px;
  border: 2px solid black;
`;

export { StyledGridItem as GridItem, StyledTile as Tile };
