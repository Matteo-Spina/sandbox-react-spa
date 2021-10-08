import styled from "styled-components/macro";
// import "./Article.css";

const ArticleRoot = styled.article`
  /* size constraints */
  min-width: 30ch;
  max-width: 45ch;
  min-height: 30ch;
  max-height: 45ch;
  /* size */
  /* ... */
  /* as flex container */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* decoration */
  border-radius: 8px;
  border: solid thin;
  /* debug */
  background: hotpink;

  & > * {
    width: 100%;
    /* as flex child */
    flex: 1 0;
    /* decoration */
    border-radius: inherit;
  }
`;

const ArticleHeader = styled.header`
  /* size constraint, override flex */
  max-height: 20%;
  /* debug */
  background: forestgreen;
`;
const ArticleContent = styled.section`
  /* debug */
  background: gold;
`;
const ArticleFooter = styled.footer`
  /* size constraint */
  max-height: 20%;
  /* debug */
  background: firebrick;
`;

function ArticleBlock() {
  return (
    <ArticleRoot>
      <ArticleHeader>
        <h3>Title</h3>
        <p>subtitle</p>
      </ArticleHeader>
      <ArticleContent>
        <p>content</p>
        {/* <img> */}
      </ArticleContent>
      <ArticleFooter>
        <p>footer</p>
      </ArticleFooter>
    </ArticleRoot>
  );
}
export default ArticleBlock;
