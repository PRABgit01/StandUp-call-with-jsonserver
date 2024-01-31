import styled from "styled-components";

export const CardContainer = styled.li`
  width: 100%;
  max-width: 325px;
  height: 500px;
  margin: 54px auto;
  perspective: 1000px;
`;

export const CardInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const FrontCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-image: url(https://i.pinimg.com/564x/26/4c/88/264c88ab2dc1a090875cfcac75dccdb0.jpg);
  background-size: cover;
  background-position: center;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  backface-visibility: hidden;
`;

export const FrontHeadingText = styled.h4`
  font-weight: 500;
  margin: 0;
  color: #fff;
`;

export const FrontButton = styled.button`
  width: 120px;
  border: 1px solid #fff;
  background: transparent;
  border-radius: 16px;
  padding: 8px 20px;
  cursor: pointer;
  margin-top: 20px;
  color: #fff;
`;

export const FrontDiscription = styled.p`
  color: #ccc;
  font-size: 13px;
`;

export const BackCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 25px 20px;
  border-radius: 15px;
  background-image: url(https://i.pinimg.com/564x/be/3d/11/be3d11a1b647a18d85bc09af2f24983f.jpg);
  background-size: cover;
  background-position: center;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;

export const ImageAnimation = styled.img`
  width: 120px;
`;

export const StyledButtonAnimted = styled.button`
  background: transparent;
`;

export const BackHeading = styled.h3`
  color: #fff;
  font-size: 13px;
`;

export const CardContainerDiscriptionBox=styled.div`
    display: flex;
    align-items: center;
`
export const CardBoxHeading=styled.div`
padding: 0px 0px 0px 12px;
`
