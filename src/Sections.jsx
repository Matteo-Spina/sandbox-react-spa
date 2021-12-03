import styled from "styled-components/macro";
import { GridItem } from "./Items";
import Article from "./Article";
import List from "./List";
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
  background-color: whitesmoke;
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
  background-color: whitesmoke;
`;
// function Footer() { }

const StyledMain = styled.main`
  /*  */
  /* as grid item */
  grid-column: 2 / -2;
  /* as grid container */
  display: grid;
  /* -- grid container is flexible but its columns are not ...*/
  grid-template-columns: repeat(auto-fill, 40ch);
  /* ... so it is important to center grid inside its container --*/
  justify-content: center;
  grid-auto-rows: max-content;
  ${"" /* column-gap: 1rem; */}
  row-gap: 2rem;
  /* debug */
  /* background-color: lightgoldenrodyellow; */
`;

function MainSection() {
  return (
    <StyledMain>
      {/* top spot */}
      <GridItem>
        <Article data={testData.top.article} square />
      </GridItem>
      <GridItem>
        <List items={testData.top.list} />
      </GridItem>
      {/* base */}
      <GridItem fullOnX>
        <Article data={testData.top.article}></Article>
      </GridItem>
      {/* <GridItem fullOnX>
        <Article data={testData.top.article}></Article>
      </GridItem>
      <GridItem fullOnX>
        <Article data={testData.top.article}></Article>
      </GridItem> */}
      {/* tools */}
      <GridItem fullOnX>
        <List horizontal items={testData.others.list} />
      </GridItem>
      {/* others */}
      <GridItem>
        <Article data={testData.others.articleMini} small />
      </GridItem>
      <GridItem>
        <List items={testData.others.list} />
      </GridItem>
    </StyledMain>
  );
}

export { StyledHeader as Header, StyledFooter as Footer, MainSection as Main };
