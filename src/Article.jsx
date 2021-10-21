import styled from "styled-components/macro";
// import "./Article.css";

const ArticleRoot = styled.article`
  /* size */
  max-width: 35ch;
  /* as flex container */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* decoration */
  border-radius: 1rem;
  border: solid thin;
  /* fonts */
  /* adjust font-size relative to html */
  font-size: 1rem;
  /* debug */
  /* background: black; */
  
  /* children */
  & > * {
    width: 100%;
    padding: 8px;
    /* as flex child */
    flex: 1 0;
    /* decoration */
    border-radius: inherit;
  }
`;

const ArticleHeader = styled.header`
  /* size constraint, override flex */
  max-height: 20%;
  /* fonts - adjust font-size relative to component */
  font-size: 1em;
  text-align: start;
  /* debug */
  /* background: forestgreen; */
`;

const ArticleContent = styled.section`
  /* adjust font-size relative to component */
  font-size: 1em;
  text-align: center;
  
  /* debug */
  /* background: gold; */
`;

const ArticleFooter = styled.footer`
  /* size constraint */
  max-height: 20%;
  /* fonts - adjust font-size relative to component */
  font-size: 0.75em;
  text-align: center;
  
  /* debug */
  /* background: firebrick; */
`;

function ArticleBlock() {
  return (
    <ArticleRoot>
      <ArticleHeader>
        <h3>title</h3>
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
