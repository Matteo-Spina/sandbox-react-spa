import styled from "styled-components/macro";
import { Tile } from "./Items";

const StyledArticle = styled(Tile)`
  width: 100%;
  height: 13rem;
  padding: 1rem;

  /* line clamping snippet */
  & > p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;

    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const Header = styled.header`
  & > h3 {
    font-size: 1.424rem;
  }
  
  & > span {
      font-weight: 800;
  font-variant-caps: all-small-caps;
  }
`;

function Heading({ title, subtitle, labels }) {
  return (
    <Header>
      <span ariaRole="">{subtitle || "X y H b j"}</span>
      <br />
      <h3>{title || "X y H b j"}</h3>
    </Header>
  );
}

function Article({ data, type }) {
  const { title, subtitle, content, dateTime, colors } = data;
  return (
    <StyledArticle
      as="article"
      colorA={colors.base}
      colorB={colors.lighter || colors.darker}
    >
      <Heading title={title} subtitle={subtitle} />
      {type === "mini" ? (
        false
      ) : (
        <p>
          {" "}
          Lorem ipsum dolor sit amet, <span>consectetur</span> adipisicing elit.
          Voluptatum delectus ut quo necessitatibus cupiditate nesciunt quae
          omnis sapiente sed eum non hic consectetur aliquam magnam, libero
          soluta quas nemo odio?
        </p>
      )}
      {/* <img> */}
    </StyledArticle>
  );
}

export default Article;

// -> note <-
// way: article gets content from data prop (outside fetch)
