import styled from "styled-components/macro";
import { RowItem } from "./RowItem";
import { GridItem } from "./Items";
import Article from "./Article";
import List from "./Temporary";
// import OrbitSystem from "./OrbitSystem";

const StyledHeader = styled.header`
  /* as grid item */
  grid-column: 1 / -1;
  /* as flex container */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  /* debug */
  /* background-color: lightpink; */
`;
// function Header() { return <StyledHeader /> }

const StyledFooter = styled.footer`
  /* as grid item */
  grid-column: 1 / -1;
  /* as flex container */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  /* debug */
  /* background-color: lightpink; */
`;
// function Footer() { }

const testData = {
  title: "Node",
  subtitle: "native app",
  content: "working on it",
  dateTime: new Date("1995-12-17T03:24:00"),
  links: [
    { name: "uno", value: 1 },
    { name: "due", value: 2 },
    { name: "tre", value: 3 },
  ],
};

const StyledMain = styled.main`
  /*  */
  /* as grid item */
  grid-column: 2 / -2;
  /* as grid container */
  display: grid;
  /* -- grid container is flexible but columns are not by themselves ...*/
  grid-template-columns: repeat(auto-fit, 40ch);
  /* ... so it is important to center grid inside its container --*/
  justify-content: center;
  grid-auto-rows: 20ch;
  /* debug */
  /* background-color: lightgoldenrodyellow; */
`;

function MainSection() {
  return (
    <StyledMain>
      {/* top spot */}
      <RowItem>
        <Article data={testData} />
      </RowItem>
      <List items={testData.links} />
      {/* Base */}
      <GridItem fullOnX halfOnY>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "lavender",
          }}
        ></div>
      </GridItem>
      <GridItem fullOnX halfOnY>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "lavender",
          }}
        ></div>
      </GridItem>
      <GridItem fullOnX halfOnY>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "lavender",
          }}
        ></div>
      </GridItem>
      {/* Tools */}
      <List fullOnX halfOnY horizontal squareItems items={testData.links} />
      <RowItem halfOnY>
        <Article type="mini" data={testData} />
      </RowItem>
      <GridItem halfOnY>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "yellow",
          }}
        ></div>
      </GridItem>
    </StyledMain>
  );
}

export { StyledHeader as Header, StyledFooter as Footer, MainSection as Main };
