import styled from "styled-components/macro";
import { Tile } from "./Items";
import { Image } from "./Elements";

const Header = styled.header`
  & > h3 {
    font-size: 1.424rem;
    margin-bottom: 1rem;
  }

  & > span {
    font-weight: 800;
    font-variant-caps: all-small-caps;
    margin-bottom: 0.5rem;
  }
`;

const Paragraph = styled.p`
  max-width: 80ch;
  /* line clamping snippet */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

function Heading({ title, subtitle, labels }) {
  return (
    <Header>
      <span>{subtitle || "X y H b j"}</span>
      <br />
      <h3>{title || "X y H b j"}</h3>
    </Header>
  );
}

function Content({ content }) {
  return <Paragraph>{content}</Paragraph>;
}

const StyledArticle = styled(Tile)`
  width: 100%;
  aspect-ratio: ${(props) => (props.square ? "8/9" : "auto")}; //Alert 8/9 not k*1rem
  /* inside */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; use margins on children */
  padding: 1rem;
`;

function Article({ data, small, square }) {
  const { title, subtitle, content, colors, logos } = data;
  return (
    <StyledArticle
      as="article"
      square={square}
      colorA={colors.base}
      colorB={colors.lighter || colors.darker}
    >
      <Heading title={title} subtitle={subtitle} />
      <Image src={logos.main} alt="" bgColor={colors.bg} />
      {small ? false : <Content content={content} />}
    </StyledArticle>
  );
}

export default Article;

// -> note <-
// way: article gets content from data prop (outside fetch)
