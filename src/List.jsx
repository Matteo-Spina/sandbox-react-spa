import styled, { css } from "styled-components/macro";

import { Tile } from "./Items";
import Image from "./Elements";

/* 
  list items are divs with a tile-looking
*/
const StyledListItem = styled(Tile)`
  /* is it square? */
  width: ${(props) => (props.square ? "5em" : "100%")};
  height: 5em;
  padding: 1em;

  /* if is not square */
  ${({ square }) =>
    !square &&
    css`
      display: flex;
      align-items: center;

      & div:first-child {
        margin-left: 1em;
      }
    `}
`;

// todo square: {true, undefined, false}
// ListItems can be square with no text, eg when inside a horizontal Stack
function ListItem({ item, square, onClick, isHighLighted }) {
  let colors = item.link.colors;
  return (
    <StyledListItem
      onClick={onClick}
      square={square}
      colorA={colors.base}
      isHighLighted={isHighLighted}
    >
      {/* todo remove hard wiring */}
      <Image src={item.link.logos.main} alt="" bgColor="#fff" size={0.3} />
      {/* render text only when is not square*/}
      {!square && (
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

/**
 * StyledStack is a ... for an eventual set of items.
 * It is made up with flex container along with some style for his children.
 * It can be used as Stack
 */
const StyledStack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* when is vertical */
  ${({ horizontal }) =>
    !horizontal &&
    css`
      width: 100%;
      flex-direction: column;
    `}
  /* children */
  /* override margin for last item on every instance*/
  & > div:last-child {
    margin: 0;
  }
  /* children of this horizontal instance */
  && > * {
    flex: 0 0 auto;
    ${(props) =>
      props.horizontal ? "margin-right: 2rem;" : "margin-bottom: 1rem;"}
  }
`;

export { StyledStack as Stack, ListItem };
