import styled from "styled-components/macro";
import { Tile } from "./Items";

const StyledLogo = styled.img`
  /*  png has natural aspect ratio */
  height: 3em;
  /* 
    nb: let parent height be (n)em, considering that 
    percentage refers to parent's content box so (n)em > 100% / (n) 
  */
  object-fit: contain;
  object-position: center center;
  vertical-align: middle;
  background-color: #ffffffbb;
  border-radius: inherit;
`;

/* 
  list items are divs with a tile-looking
*/
const StyledListItem = styled(Tile)`
  /* not flexible on main axis - take up all space in cross axis */
  width: ${(props) => (props.square ? "6em" : "100%")};
  height: 5em;
  margin-bottom: ${(props) => (props.square ? "0" : "1rem")};
  /* as flex-container */
  display: flex;
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
      <div
        style={{
          flex: "1 0",
          height: "max-content",
          borderRadius: "inherit",
          textAlign: "center",
        }}
      >
        <StyledLogo src={item.link.logos.main} alt="abc" />
      </div>
      {/* with square option, prevent from rendering text */}
      {!square && (
        <div
          style={{
            flex: "3 1",
            height: "max-content",
            borderRadius: "inherit",
            textAlign: "center",
          }}
        >
          <span> {item.link.name} </span>
        </div>
      )}
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
  /* height: 100%; */
`;

function List({ items, horizontal }) {
  return (
    <StyledList horizontal={horizontal}>
      {items.map((item) => (
        <ListItem item={item} square={horizontal} key={item.id} />
      ))}
    </StyledList>
  );
}

export default List;

// horizontal - vertical
