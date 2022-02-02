import { useState } from "react";
import styled from "styled-components/macro";
import { Tile } from "./Items";
import { Stack, ListItem } from "./List";

const Header = styled.header`
  width: 100%;
  padding: 1rem;
  text-align: center;

  & > h2 {
    margin-bottom: 1rem;
  }

  & > span {
    font-weight: 800;
    font-variant-caps: all-small-caps;
    margin-bottom: 0.5rem;
  }
`;

const Paragraph = styled.p`
  max-width: 80ch;
  /* line clamping snippet */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

function Statement({ content }) {
  const { subject, statements } = content;
  return (
    <Header>
      <h2>{subject || "..."}</h2>
      <div>
        {statements.map((statement) => (
          <Paragraph key={statement}>{statement || "..."}</Paragraph>
        ))}
      </div>
    </Header>
  );
}

const StyledDetails = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
`;

const TabsTile = styled(Tile)`
  padding: 1rem;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

/* -- Stack related components --*/

/**
 * Tabs
 */
function Tabs({ items }) {
  const [current, setCurrent] = useState({ statement: "test", id: "000000" });

  const handleClick = (id) => {
    const newCurrent = items.find((item) => item.id === id);
    setCurrent(newCurrent);
  };

  return (
    <TabsTile colorA="white">
      <Stack horizontal>
        {items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onClick={() => handleClick(item.id)}
            square
            isHighLighted={current.id === item.id ? true : false}
          />
        ))}
      </Stack>
      <StyledDetails>
        <Paragraph>{current.statement}</Paragraph>
      </StyledDetails>
    </TabsTile>
  );
}


/**
 * List makes a simple use case for StyledStack.
 * It is stateless.
 * It receives generic items which are turned into ListItem-s.
 * It doesnt handle events on items.
 * It gets Stack styles.
 * 
 * @param {{horizontal: boolean, Object[]: items}} props - props
 */
function List({ horizontal, items }) {
  return (
    <Stack horizontal={horizontal}>
      {items.map((item) => (
        <ListItem key={item.id} item={item} square={horizontal} />
      ))}
    </Stack>
  );
}

// ......................

const StyledDisplay = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: see height max-content*/
  align-items: center;
`;

function Display({ content }) {
  const { subject, statements, details } = content;
  return (
    <StyledDisplay>
      <Statement content={{ subject, statements }} />
      <Tabs items={details} />
    </StyledDisplay>
  );
}

export { Tabs, List, Statement, Display };
