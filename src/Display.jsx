import { useState } from "react";
import styled from "styled-components/macro";
import { Stack } from "./Elements";
import { Tile } from "./Items";
import { ListItem } from "./List";

const Header = styled.header`
  width: 100%;
  padding: 1rem;
  text-align: center;

  & > h2 {
    font-size: 1.424rem;
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

function Heading({ subject, statements }) {
  return (
    <Header>
      <h2>{subject || "..."}</h2>
      <div>
        {statements.map((statement) => (
          <Paragraph>{statement || "..."}</Paragraph>
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
  width: 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// --------------------------------------

// const StyledTab = styled(Tile)``;

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
      <Heading subject={subject} statements={statements} />
      <Tabs items={details} />
    </StyledDisplay>
  );
}

export default Display;
