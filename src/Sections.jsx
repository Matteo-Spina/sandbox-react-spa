import styled from "styled-components/macro";
import { GridItem } from "./Items";
import Article from "./Article";
import List from "./Temporary";
import testData from "./data.js";
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
      <GridItem>
        <Article data={testData.top.article} />
      </GridItem>
      <GridItem>
        <List items={testData.top.list} />
      </GridItem>
      {/* base */}
      <GridItem fullOnX halfOnY>
        <Article data={testData.top.article}></Article>
      </GridItem>
      <GridItem fullOnX halfOnY>
        <Article data={testData.top.article}></Article>
      </GridItem>
      <GridItem fullOnX halfOnY>
        <Article data={testData.top.article}></Article>
      </GridItem>
      {/* tools */}
      <GridItem fullOnX halfOnY>
        <List horizontal squareItems items={testData.others.list} />
      </GridItem>
      {/* others */}
      <GridItem halfOnY>
        <Article type="mini" data={testData.others.articleMini} />
      </GridItem>
      <GridItem halfOnY>
        <List items={testData.others.list} />
      </GridItem>
    </StyledMain>
  );
}

export { StyledHeader as Header, StyledFooter as Footer, MainSection as Main };
