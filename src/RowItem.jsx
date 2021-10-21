import styled from "styled-components/macro";

// interface Row~RowItem RowItem~Component
const StyledRowItem = styled.div`
  /* as flex item */
  flex: 1 0 auto; /* 'auto': see 'docs/Web/CSS/flex-basis' */
  /* break row and wrap item in a new one 
  when items in the first row would become smaller than 35ch (< 40ch)*/
  width: max(35ch, 50%); 
  /* as flex-container */
  display: flex;
  justify-content: center;
  align-items: center;
  /* debug */
`;

export { StyledRowItem as RowItem };
