import {
  ButtonCardBox,
  CardStyledButton,
  CreateButtonDesign,
} from "./Button.style";
import {
  BackCard,
  BackHeading,
  CardBoxHeading,
  CardContainer,
  CardContainerDiscriptionBox,
  CardInner,
  FrontButton,
  FrontCard,
  FrontDiscription,
  FrontHeadingText,
  ImageAnimation,
  StyledButtonAnimted,
} from "./Card.styled";
import {
  Box,
  CardBox,
  HeadingText,
  HomePageContainer,
  HomePageSection,
  InnerWrapper,
  SubText,
  SubTextPart,
  Wrapper,
} from "./HomePage.styled";
import axios from "axios";
import { useEffect, useState } from "react";

export function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDel = (id) => {
    const confirmDelete = window.confirm("Would you like to delete?");
    if (confirmDelete) {
      axios
        .delete(`http://localhost:1000/users/${id}`)
        .then((res) => {
          console.log("Delete successful:", res.data);
          setData((prevData) => prevData.filter((item) => item.id !== id));
        })
        .catch((err) => console.log("Delete failed:", err));
    }
  };

  const HomePageData = data.map((d, i) => (
    <CardContainer key={i}>
      <ButtonCardBox>
        <CardStyledButton onClick={() => handleDel(d.id)}>
          delete
        </CardStyledButton>
        <CreateButtonDesign to={`/update/${d.id}`}>update</CreateButtonDesign>
      </ButtonCardBox>
      <CardInner>
        <FrontCard>
          <FrontHeadingText>{d.Date}</FrontHeadingText>
          <FrontDiscription>details</FrontDiscription>
          <FrontButton>hover me</FrontButton>
        </FrontCard>
        <BackCard>
          <ImageAnimation src={"https://i.gifer.com/1614.gif"} />
          <FrontHeadingText>{d.Date}</FrontHeadingText>
          <FrontDiscription>details</FrontDiscription>
          {/* discription details */}
          <CardContainerDiscriptionBox>
            <CardBoxHeading>
              <BackHeading>what i have done ⁇</BackHeading>
              <FrontDiscription>{d.WhatIHaveDone}</FrontDiscription>
            </CardBoxHeading>
            <CardBoxHeading>
              <BackHeading>what i will do ⁇</BackHeading>
              <FrontDiscription>{d.WhatIwillDo}</FrontDiscription>
            </CardBoxHeading>
          </CardContainerDiscriptionBox>
        </BackCard>
      </CardInner>
    </CardContainer>
  ));

  return (
    <>
      <HomePageSection>
        <HomePageContainer>
          <Wrapper>
            <InnerWrapper>
              <Box>
                <HeadingText>
                  <SubText>stand</SubText>
                  <SubTextPart>UP</SubTextPart>
                  <SubText>Metting</SubText>
                </HeadingText>
                <CreateButtonDesign to={"/create"}>+</CreateButtonDesign>
              </Box>
              <CardBox>{HomePageData}</CardBox>
            </InnerWrapper>
          </Wrapper>
        </HomePageContainer>
      </HomePageSection>
    </>
  );
}
