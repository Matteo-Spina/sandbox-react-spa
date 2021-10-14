import styled from "styled-components/macro";

// interface Row~RowItem RowItem~Component
const StyledRowItem = styled.div`
  /* as flex item */
  flex: 1 0; /* can grow only */
  margin: 1rem 1rem; /* gap between items */
  /* size constaints */
  min-width: 30ch;
  max-width: 45ch;
  min-height: 30ch;
  /* debug */
`;

export { StyledRowItem as RowItem };
