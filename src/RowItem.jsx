import styled from "styled-components/macro";

const StyledRowItem = styled.div`
  /* as grid item */
  grid-column: ${(props) => (props.full ? "1 / -1" : "span 1")};
  grid-row: ${(props) => (props.quarter ? "span 1" : props.half ? "span 2" : "span 4")};
  /* as flex-container */
  display: flex;
  justify-content: center;
  align-items: center;
  /* cosmetics */
  padding: 1rem;
  /* debug */
  /* border: solid thin; */
  /* background: lightcoral; */
`;

export { StyledRowItem as RowItem };
