import styled from "styled-components/macro";
// import { StyledListItem } from "./Temporary";

const ImageContainer = styled.div`
  height: ${(props) => (props.size ? props.size * 10 + "em" : "10em")};
  aspect-ratio: 1/1;
  /* as flex/grid item */
  align-self: center; /* center on cross axis and not stretch */
  /* as flex container */
  display: flex;
  align-items: center;
  justify-content: center;
  /*  */
  padding: ${(props) =>
    props.size ? props.size * 1 + "em" : "1em"}; /* 10% of height */
  /*  */
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
`;

const StyledImg = styled.img`
  height: 80%;
`;

function Image({ src, alt, ...rest }) {
  return (
    <ImageContainer {...rest}>
      <StyledImg src={src} alt={alt} />
    </ImageContainer>
  );
}

export default Image;
