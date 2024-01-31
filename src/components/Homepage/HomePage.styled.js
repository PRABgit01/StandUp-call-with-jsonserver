import styled from "styled-components";

export const HomePageSection = styled.section``;

export const HomePageContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

export const Wrapper = styled.div``;

export const InnerWrapper = styled.div`
  font-size: 40px;
  margin: 20px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HeadingText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
`;

export const SubText = styled.span`
  margin: 40px;
  font-family: "Helvetica Neue";
`;

export const SubTextPart = styled.span`
  font-size: 12rem;
  filter: invert(1) grayscale(1) brightness(2) contrast(2) #fff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
`;

export const CardBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  width: 100%;
  padding: 0;
  margin: 0;
  max-width: 1128px;
  list-style: none;
  gap: 10px;
`;
