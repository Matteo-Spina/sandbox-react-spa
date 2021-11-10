import styled, { css } from "styled-components/macro";

/* 
  "Grid Item" - Structural component: defines a generic grid item
  a grid item has only one component as child
*/
const StyledGridItem = styled.div`
  /* default size: [2row X 1col] */
  grid-row: ${(props) => (props.halfOnY ? "span 1" : "span 2")};
  grid-column: ${(props) => (props.fullOnX ? "1 / -1" : "span 1")};
  padding: 1rem;
`;

/* 
  "Tile" - Decorative component: it carries styles for a tile-looking div
*/
// helper for StyledTile receive color object as arg
const BackgroundTemplate = css`
  background: radial-gradient(
    circle farthest-corner at top left,
    ${(props) => props.colorA || "var(--color-node-1)"} 0%,
    ${(props) => props.colorB || "var(--color-node-2)"} 150%
  );
`;

// WARNING: it does not define sizes!
const StyledTile = styled.div`
  ${BackgroundTemplate};
  box-shadow: 0px 2px 2px 0px var(--color-shadow-1),
    0px 2px 8px 0px var(--color-shadow-2);
  /* border radius are fixed */
  border-radius: 8px;
  border: 2px solid black;
`;

export { StyledGridItem as GridItem, StyledTile as Tile };
