import styled from "styled-components/macro";
import { GridItem, Tile } from "./Items";

const StyledListItem = styled(Tile)`
  width: 100%;
  height: 8ch;
  margin-bottom: 2ch;
`;

function ListItem({ item }) {
  return (
    <StyledListItem>
      <span> {item.name} </span>
    </StyledListItem>
  );
}

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

function List({ items }) {
  return (
    <GridItem>
      <StyledList>
        {items.map((item) => (
          <ListItem item={item} />
        ))}
      </StyledList>
    </GridItem>
  );
}

export default List;
