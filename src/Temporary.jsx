import styled from "styled-components/macro";
import { Tile } from "./Items";

/* 
  list items are divs with a tile-looking
*/
const StyledListItem = styled(Tile)`
  /* not flexible on main axis - take up all space in cross axis */
  width: ${(props) => (props.square ? "150px" : "100%")};
  height: ${(props) =>
    props.square ? "150px" : "calc((20ch - 1rem) / 2 - 1rem)"};
  margin-bottom: ${(props) => (props.square ? "0" : "1rem")};
  /* as flex container */
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ListItem({ item, square }) {
  let colors = item.link.colors;
  return (
    <StyledListItem
      square={square}
      colorA={colors.base}
      colorB={colors.lighter || colors.darker}
    >
      <img src="./abc" alt="abc" />
      <span> {item.link.name} </span>
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
  justify-content: ${(props) =>
    props.horizontal ? "space-around" : "flex-start"};
  align-items: center;
  /* take up all parent space */
  width: 100%;
  height: 100%;
`;

function List({ items, horizontal, squareItems }) {
  return (
    <StyledList horizontal={horizontal || false}>
      {items.map((item) => (
        <ListItem item={item} square={squareItems || false} key={item.id} />
      ))}
    </StyledList>
  );
}

export default List;

// horizontal - vertical
