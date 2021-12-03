import styled, {css} from "styled-components/macro";
import { Tile } from "./Items";
import {Stack, Image} from "./Elements";


/* 
  list items are divs with a tile-looking
*/
const StyledListItem = styled(Tile)`
  /* is it square? */
  width: ${(props) => (props.square ? "5em" : "100%")};
  height: 5em;
  padding: 1em;
  
  /* if is not square */
  ${({square})=> !square && css`
    display: flex;
    align-items: center;
    
    & div:first-child {
      margin-left: 1em;
    }
  `}

`;

// ListItems can be square with no text, eg when inside a horizontal Stack
function ListItem({ item, square }) {
  let colors = item.link.colors;
  return (
    <StyledListItem
      square={square}
      colorA={colors.base}
      colorB={colors.lighter || colors.darker}
    >
        <Image src={item.link.logos.main} alt="" bgColor="#fff" size={0.3} />
        {/* with square option, prevent from rendering text */}
        {square ? (
          ""
        ) : (
          <div
            style={{
              flex: "3 1",
              height: "max-content",
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
  List is a Stack of ListItems
*/
function List({ horizontal, items }) {
  return (
    <Stack horizontal={horizontal}>
      {items.map((item) => (
        <ListItem item={item} square={horizontal} key={item.id} />
      ))}
    </Stack>
  );
}

export default List;

// horizontal - vertical
