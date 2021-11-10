import styled from "styled-components/macro";
import { GridItem, Tile } from "./Items";

/* 
  list items are divs with a tile-looking
*/
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

/* 
  List is a container for list items
  it holds css for centering children but does not have decorative css (borders, shadows, ...)
  note: check component sizes
*/
const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

function List({ items }) {
  return (
    // placed directly on the grid?
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
