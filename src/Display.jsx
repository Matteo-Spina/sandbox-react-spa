import styled from "styled-components/macro";
import { Tile } from "./Items";
import List from "./List";

const Header = styled.header`
	width: 100%;
	padding: 1rem;
	text-align: center;
	
  & > h2 {
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
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

function Heading({ subject, statements }) {
  return (
    <Header>
      <h2>{subject || "..."}</h2>
      <div>
        {statements.map((statement) => (
          <Paragraph>{statement || "..."}</Paragraph>
        ))}
      </div>
    </Header>
  );
}

const StyledContent = styled(Tile)`
	width: 100%;
	padding: 1rem;
`;

const StyledDisplay = styled.article`
  width: 100%;
	display: flex;
  flex-direction: column;
  /* justify-content: see height max-content*/
	align-items: center;
`;

function Display({ data }) {
  const { subject, statements, details } = data;
  return (
    <StyledDisplay >
      <Heading subject={subject} statements={statements} />
      <StyledContent colorA="white">
        {/* add state for interactivity */}
        <List horizontal items={details} />
        <div>
					<Paragraph>"...selected detail content goes here..."</Paragraph>
				</div>
      </StyledContent>
    </StyledDisplay>
  );
}

export default Display;
