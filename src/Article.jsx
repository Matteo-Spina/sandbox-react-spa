import styled from "styled-components/macro";
// import "./Article.css";

const ArticleRoot = styled.article`
  /* unaware flex item #warn*/
  width: 100%;
  height: 100%;
  padding: 32px;
  /* as flex container */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* #change */
  align-items: center;
  /* decoration */
  background: var(--card-gradient);
  box-shadow: var(--card-shadow);
  border-radius: 1rem;
  border: solid 4px black;
  /* fonts */
  /* adjust font-size relative to html */
  font-size: 1rem;
  /* debug */

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

function ArticleBlock({ data, ...rest }) {
  const { title, subtitle, content, dateTime } = data;
  return (
    <ArticleRoot>
      <ArticleHeader>
        <h3>{title || "--"}</h3>
        <p>{subtitle || "--"}</p>
      </ArticleHeader>
      <ArticleContent>
        <p>{content || "--"}</p>
        {/* <img> */}
      </ArticleContent>
      <ArticleFooter>
        <p>{dateTime.toString() || "--"}</p>
      </ArticleFooter>
    </ArticleRoot>
  );
}
export default ArticleBlock;

// -> note <-
// way: article gets content from data prop (outside fetch)
