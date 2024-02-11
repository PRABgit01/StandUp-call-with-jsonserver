import {
  CreateHeadingText,
  HeadingTextBox,
  StyledDate,
  StyledDiscription,
  StyledTitle,
} from "../CreatePage/Create.styled";

import {
  ButtonCardBox,
  StyledLinkButton,
  StyledPrimaryButton,
} from "../Homepage/Button/Button.style.js";

import {
  StyleStandUpCard,
  StyleStandUpCardBox,
  StyleStandUpInnerCard,
  StyledContainerDetails,
  StyledInnerWrapper,
  StyledSection,
  StyledStandUpContainer,
  StyledWrapper,
} from "../CreatePage/AddCardcomponent/CardComponent.Styled.js";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function UpdatePage() {
  const { id } = useParams();

  const [value, setValue] = useState({
    Date: "",
    TaskDone: "",
    PendingTask: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:1000/users/${id}`)
      .then((res) => setValue(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:1000/users/${id}`, value)
      .then((res) => {
        console.log("Update successful:", res.data);
      })
      .catch((err) => console.log("Update failed:", err));
  };

  return (
    <>
      <StyledSection>
        <StyledStandUpContainer>
          <StyledWrapper>
            <StyledInnerWrapper>
              <StyleStandUpCard>
                <HeadingTextBox>
                  <CreateHeadingText>
                    DATE :
                    <StyledDate
                      type="date"
                      value={value.Date}
                      onChange={(e) =>
                        setValue({ ...value, Date: e.target.value })
                      }
                    />
                  </CreateHeadingText>
                </HeadingTextBox>
                <StyleStandUpInnerCard>
                  <StyleStandUpCardBox>
                    <StyledTitle>What i have done ⁇</StyledTitle>
                    <StyledDiscription
                      type="text"
                      value={value.TaskDone}
                      onChange={(e) =>
                        setValue({ ...value, TaskDone: e.target.value })
                      }
                    />
                  </StyleStandUpCardBox>
                  <StyleStandUpCardBox>
                    <StyledContainerDetails>
                      <StyledTitle>What i have done ⁇</StyledTitle>
                      <StyledDiscription
                        type="text"
                        value={value.PendingTask}
                        onChange={(e) =>
                          setValue({ ...value, PendingTask: e.target.value })
                        }
                      />
                    </StyledContainerDetails>
                  </StyleStandUpCardBox>
                </StyleStandUpInnerCard>
                <ButtonCardBox>
                  <StyledPrimaryButton onClick={handleSubmit}>
                    SUBMIT
                  </StyledPrimaryButton>
                  <StyledLinkButton to={"/"}> BACK</StyledLinkButton>
                </ButtonCardBox>
              </StyleStandUpCard>
            </StyledInnerWrapper>
          </StyledWrapper>
        </StyledStandUpContainer>
      </StyledSection>
    </>
  );
}
