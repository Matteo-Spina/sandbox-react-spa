import styled from "styled-components/macro";

const StyledRowItem = styled.div`
  /* as grid item */
  /* default [2row X 1col] */
  grid-row: ${(props) => (props.halfOnY ? "span 1" : "span 2")};
  grid-column: ${(props) => (props.fullOnX ? "1 / -1" : "span 1")};
  /* as flex-container */
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  /* cosmetics */
  padding: 1rem;
  /* debug */
  /* border: solid thin; */
  /* background: lightcoral; */
`;

export { StyledRowItem as RowItem };
