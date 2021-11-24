import styled from "styled-components/macro";
import { Tile } from "./Items";

const StyledArticle = styled(Tile)`
  width: 100%;
  height: 12rem;
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
    padding: 1em;
    /* as flex child */
    flex: 1 0;
    /* decoration */
    border-radius: inherit;
  }
`;

const StyledArticleHeader = styled.header`
  /* fonts - adjust font-size relative to component */
  font-size: 1em;
  text-align: start;
  /* debug */
  ${"" /* background: forestgreen; */}
`;

const StyledArticleMain = styled.section`
  /* adjust font-size relative to component */
  font-size: 1em;
  text-align: center;

  /* debug */
  /* background: gold; */
`;

const StyledArticleFooter = styled.footer`
  /* fonts - adjust font-size relative to component */
  font-size: 1em;
  text-align: center;

  /* debug */
  /* background: firebrick; */
`;

function ArticleBlock({ data, ...rest }) {
  const { title, subtitle, content, dateTime, colors } = data;
  return (
    <StyledArticle
      colorA={colors.base}
      colorB={colors.lighter || colors.darker}
    >
      <StyledArticleHeader>
        {/* <h3>{title || "--"}</h3> */}
        {/* <p>{subtitle || "--"}</p> */}
      </StyledArticleHeader>
      <StyledArticleMain>
        <p>
          <span>{content || "--"}</span>
        </p>
        {/* <img> */}
      </StyledArticleMain>
      <StyledArticleFooter>
        {/* <p>{dateTime.toString() || "--"}</p> */}
      </StyledArticleFooter>
    </StyledArticle>
  );
}

function ArticleBlockMini({ data, ...rest }) {
  const { title, subtitle, dateTime, colors } = data;
  return (
    <StyledArticle
      colorA={colors.base}
      colorB={colors.lighter || colors.darker}
    >
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

const TextRun = styled.span``;

const StyledTestArticle = styled.div`
  min-height: 12em;
  background: white;
  border-radius: 12px /13px;
`;

function TestArticle() {
  return (
    <StyledTestArticle>
      <p>
        <TextRun>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          delectus ut quo necessitatibus cupiditate nesciunt quae omnis sapiente
          sed eum non hic consectetur aliquam magnam, libero soluta quas nemo
          odio?
        </TextRun>
      </p>
    </StyledTestArticle>
  );
}

function Article({ type, test, ...rest }) {
  if (test) return <TestArticle />;
  return type === "mini" ? (
    <ArticleBlockMini {...rest} />
  ) : (
    <ArticleBlock {...rest} />
  );
}
export default Article;

// -> note <-
// way: article gets content from data prop (outside fetch)
