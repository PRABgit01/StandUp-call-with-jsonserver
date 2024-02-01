import styled from "styled-components";

export const StyledSection = styled.section`
  background-image: url(https://i.pinimg.com/564x/31/02/e3/3102e35670a6e24a8611c317606cabc0.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const StyledStandUpContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  height: 620px;
`;

export const StyledWrapper = styled.div`
  width: 100%;
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyleStandUpCard = styled.div`
background-image: url(https://i.pinimg.com/564x/1a/29/a9/1a29a9326f5356f06127d7e7cdae3d4c.jpg);
  width: 100%;
  max-width: 900px;
  height: 100%;
  margin: 20px;
  padding: 12px;
  border-radius: 12px;
  box-shadow: 1px 1px 100px #ccc;
`;

export const StyleStandUpInnerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const StyleStandUpCardBox = styled.div`
  width: 100%;
  max-width: 373px;
  height: 100%;
  color: #fff;
  background-color: #fff;
  border-radius: 12px;
`;

export const StyledTitle = styled.h3`
  color: #000;
  padding: 0px 20px 0px;
`;

export const StyledContainerDetails = styled.div``;
