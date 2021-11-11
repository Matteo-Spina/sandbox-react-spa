import styled from "styled-components/macro";
import { GridItem, Tile } from "./Items";

/* 
  list items are divs with a tile-looking
*/
const StyledListItem = styled(Tile)`
  width: ${(props) => (props.square ? "100px" : "100%")};
  height: 100%;
  margin-bottom: 2ch;
`;

function ListItem({ item, square }) {
  return (
    <StyledListItem square={square}>
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
  flex-direction: ${(props) => (props.horizontal ? "row" : "column")};
  justify-content: ${(props) => (props.horizontal ? "space-around" : "flex-start")};
`;

function List({ items, horizontal, squareItems, ...rest }) {
  return (
    // placed directly on the grid?
    <GridItem {...rest}>
      <StyledList horizontal={horizontal || false}>
        {items.map((item) => (
          <ListItem item={item} square={squareItems || false} />
        ))}
      </StyledList>
    </GridItem>
  );
}

export default List;

// horizontal - vertical
