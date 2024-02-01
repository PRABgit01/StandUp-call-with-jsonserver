import styled from "styled-components";

export const CardContainer = styled.li`
  width: 100%;
  max-width: 307px;
  height: 431px;
  margin: 25px;

  @media (max-width: 991px) {
    height: 350px;
    margin: 12px;
  }
`;

export const CardInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const FrontCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-image: url(https://i.pinimg.com/564x/1c/d0/98/1cd0982716709847c6909cb99e300022.jpg);
  background-size: cover;
  background-position: center;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  backface-visibility: hidden;

  @media (max-width: 991px) {
    padding: 6px 5px;
    max-height: 400px;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: end;
  width: 100%;
`;
export const FrontHeadingText = styled.h5`
  font-weight: 500;
  margin: 10px;
  color: #000;
  text-align: right;
  font-size: 20px;
`;

export const FrontButton = styled.button`
  width: 120px;
  border: 1px solid #fff;
  background: transparent;
  border-radius: 16px;
  padding: 8px 20px;
  cursor: pointer;
  margin-top: 20px;
  color: #000;
`;

export const FrontDiscription = styled.p`
  color: #000;
  font-size: 13px;
`;


export const BackHeading = styled.h3`
  color: #000;
  font-size: 13px;
`;

export const CardContainerDiscriptionBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 400px;

  @media (max-width: 991px) {
    height: 300px;
  }
`;

export const CardBoxHeading = styled.div`
  padding: 0px 0px 0px 12px;
`;

export const DiscriptionBox = styled.div`
  height: 100%;
`;
