import { CardBox } from "../HomePage.styled";
import {
  BackHeading,
  CardBoxHeading,
  CardContainer,
  CardContainerDiscriptionBox,
  CardInner,
  DateContainer,
  DiscriptionBox,
  FrontCard,
  FrontDiscription,
  FrontHeadingText,
} from "./Card.styled";
import {
  ButtonCardBox,
  StyledPrimaryButton,
  StyledLinkButton,
} from "../Button/Button.style";
import axios from "axios";
import { useEffect, useState } from "react";

export function Card() {
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
      <CardInner>
        <FrontCard>
          <DateContainer>
            <FrontHeadingText>{d.Date}</FrontHeadingText>
          </DateContainer>
          <CardContainerDiscriptionBox>
            <CardBoxHeading>
              <BackHeading>what i have done ⁇</BackHeading>
              <DiscriptionBox>
                <FrontDiscription>{d.TaskDone}</FrontDiscription>
              </DiscriptionBox>
            </CardBoxHeading>
            <CardBoxHeading>
              <BackHeading>what i will do ⁇</BackHeading>
              <DiscriptionBox>
                <FrontDiscription>{d.PendingTask}</FrontDiscription>
              </DiscriptionBox>
            </CardBoxHeading>
          </CardContainerDiscriptionBox>
          <ButtonCardBox>
            <StyledPrimaryButton onClick={() => handleDel(d.id)}>
              delete
            </StyledPrimaryButton>
            <StyledLinkButton to={`/update/${d.id}`}>update</StyledLinkButton>
          </ButtonCardBox>
        </FrontCard>
      </CardInner>
    </CardContainer>
  ));
  return (
    <>
      <CardBox>{HomePageData}</CardBox>
    </>
  );
}
