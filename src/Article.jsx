import styled from "styled-components/macro";
import { Tile } from "./Items";

const StyledArticle = styled(Tile)`
  width: 100%;
  height: 12rem;
  padding: 1rem;
`;

const StyledArticleFooter = styled.footer`
  /* fonts - adjust font-size relative to component */
  /* font-size: 1em; */
  text-align: center;

  /* debug */
  /* background: firebrick; */
`;

function ArticleBlock({ data, type, ...rest }) {
  const { title, subtitle, content, dateTime, colors } = data;
  return (
    <StyledArticle
      as="article"
      colorA={colors.base}
      colorB={colors.lighter || colors.darker}
    >
      <h3>{title || "X y H b j"}</h3>
      {type === "mini" ? false : <p>{content || "X y H b"}</p>}
      {/* <img> */}
      <StyledArticleFooter>
        {/* <p>{dateTime.toString() || "--"}</p> */}
      </StyledArticleFooter>
    </StyledArticle>
  );
}

const StyledTestArticle = styled.div`
  min-height: 12em;
  background: white;
  border-radius: 12px /13px;
`;

function TestArticle() {
  return (
    <StyledTestArticle>
      <p>
        Lorem ipsum dolor sit amet, <span>consectetur</span> adipisicing elit.
        Voluptatum delectus ut quo necessitatibus cupiditate nesciunt quae omnis
        sapiente sed eum non hic consectetur aliquam magnam, libero soluta quas
        nemo odio?
      </p>
    </StyledTestArticle>
  );
}

function Article({ type, test, ...rest }) {
  if (test) return <TestArticle />;
  return <ArticleBlock {...rest} />;
}
export default Article;

// -> note <-
// way: article gets content from data prop (outside fetch)
