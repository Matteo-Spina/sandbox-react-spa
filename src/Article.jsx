import styled from "styled-components/macro";
import { Tile } from "./Items";

const StyledArticle = styled(Tile)`
  width: 100%;
  /* working here */
  height: 100%;
  /* --- */
  padding: 1rem;
  /* as flex container */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* #change */
  align-items: center;
  /* fonts */
  /* adjust font-size relative to html */
  font-size: 1rem;
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

const StyledArticleHeader = styled.header`
  /* size constraint, override flex */
  max-height: 20%;
  /* fonts - adjust font-size relative to component */
  font-size: 1em;
  text-align: start;
  /* debug */
  /* background: forestgreen; */
`;

const StyledArticleMain = styled.section`
  /* adjust font-size relative to component */
  font-size: 1em;
  text-align: center;

  /* debug */
  /* background: gold; */
`;

const StyledArticleFooter = styled.footer`
  /* size constraint */
  max-height: 20%;
  /* fonts - adjust font-size relative to component */
  font-size: 0.75em;
  text-align: center;

  /* debug */
  /* background: firebrick; */
`;

function ArticleBlock({ data, ...rest }) {
  const { title, subtitle, content, dateTime, colors } = data;
  return (
    <StyledArticle colorA={colors.base} colorB={colors.lighter || colors.darker}>
      <StyledArticleHeader>
        <h3>{title || "--"}</h3>
        <p>{subtitle || "--"}</p>
      </StyledArticleHeader>
      <StyledArticleMain>
        <p><span>{content || "--"}</span></p>
        {/* <img> */}
      </StyledArticleMain>
      <StyledArticleFooter>
        <p>{dateTime.toString() || "--"}</p>
      </StyledArticleFooter>
    </StyledArticle>
  );
}

function ArticleBlockMini({data, ...rest}) {
  const { title, subtitle, dateTime, colors } = data;
  return (
    <StyledArticle colorA={colors.base} colorB={colors.lighter || colors.darker}>
      <StyledArticleHeader>
        <h3>{title || "--"}</h3>
        <p>{subtitle || "--"}</p>
      </StyledArticleHeader>
      <StyledArticleFooter>
        <p>{dateTime.toString() || "--"}</p>
      </StyledArticleFooter>
    </StyledArticle>
  );
}

function Article({type, ...rest}) {
  return (type === "mini" ? <ArticleBlockMini {...rest} /> : <ArticleBlock {...rest} />)
}
export default Article;

// -> note <-
// way: article gets content from data prop (outside fetch)
