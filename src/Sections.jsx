import styled from "styled-components/macro";
import { RowItem } from "./RowItem";
import ArticleBlock from "./Article";
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
  grid-auto-rows: 35ch;
  /* debug */
  background-color: lightgoldenrodyellow;
`;

function MainSection() {
  return (
    <StyledMain>
      {/* subgrid */}
      <RowItem>
        <ArticleBlock data={testData} />
      </RowItem>
      <RowItem>
        <ArticleBlock data={testData} />
      </RowItem>
      <RowItem>
        <ArticleBlock data={testData} />
      </RowItem>
      <RowItem full>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "lavender",
          }}
        ></div>
      </RowItem>
      <RowItem>
        <ArticleBlock data={testData} />
      </RowItem>
    </StyledMain>
  );
}

export { StyledHeader as Header, StyledFooter as Footer, MainSection as Main };
