import styled from "styled-components/macro";

const ImageContainer = styled.div`
  height: 10rem;
  aspect-ratio: 1/1;
  align-self: center; /* center and not stretch */
  border-radius: 50%;
  /* inside */
  display: flex;
  align-items: center;
  justify-content: center;
  /*  */
  padding: 1rem; /* fit in 80%=8rem */
  margin-bottom: 2rem;
  /*  */
  background-color: ${(props) => props.bgColor};
`;

const StyledImg = styled.img`
  height: 80%;
`;

function Image({ src, alt, bgColor }) {
  return (
    <ImageContainer bgColor={bgColor}>
      <StyledImg src={src} alt={alt} />
    </ImageContainer>
  );
}

export default Image;
