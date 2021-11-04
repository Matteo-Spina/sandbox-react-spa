import styled from "styled-components/macro";
// import "./Article.css";

const ArticleElem = styled.article`
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
  background: var(--node-gradient);
  box-shadow: var(--card-shadow), var(--card-shadow-2);
  border-radius: var(--card-border-radius);
  border: var(--card-border);
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

const ArticleMain = styled.section`
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
    <ArticleElem>
      <ArticleHeader>
        <h3>{title || "--"}</h3>
        <p>{subtitle || "--"}</p>
      </ArticleHeader>
      <ArticleMain>
        <p>{content || "--"}</p>
        {/* <img> */}
      </ArticleMain>
      <ArticleFooter>
        <p>{dateTime.toString() || "--"}</p>
      </ArticleFooter>
    </ArticleElem>
  );
}

function ArticleBlockMini({data, ...rest}) {
  const { title, subtitle, dateTime } = data;
  return (
    <ArticleElem>
      <ArticleHeader>
        <h3>{title || "--"}</h3>
        <p>{subtitle || "--"}</p>
      </ArticleHeader>
      <ArticleFooter>
        <p>{dateTime.toString() || "--"}</p>
      </ArticleFooter>
    </ArticleElem>
  );
}

function Article({type, ...rest}) {
  return (type === "mini" ? <ArticleBlockMini {...rest} /> : <ArticleBlock {...rest} />)
}
export default Article;

// -> note <-
// way: article gets content from data prop (outside fetch)
