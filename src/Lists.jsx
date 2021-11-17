import styled from "styled-components/macro";
import { RowItem } from "./RowItem";

const StyledListItem = styled.div`
  width: 100%;
  height: 8ch;
  margin-bottom: 2ch;
  /* decoration */
  background: var(--card-gradient);
  box-shadow: var(--card-shadow-1), var(--card-shadow-2);
  border-radius: var(--card-border-radius);
  border: var(--card-border);
`;

function ListItem({ item }) {
  return (
    <StyledListItem>
      <span> {item.name} </span>
    </StyledListItem>
  );
}

function List({ items }) {
  return (
    <RowItem column justify="flex-start">
      {/* {items.map((item) => (
        <ListItem item={item} key={item.id}/>
      ))} */}
    </RowItem>
  );
}

export default List;
