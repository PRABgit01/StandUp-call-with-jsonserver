import {
  CreateHeadingText,
  HeadingTextBox,
  StyledDate,
  StyledDiscription,
  StyledTitle,
} from "../Create.styled";
import {
  StyleStandUpCard,
  StyleStandUpCardBox,
  StyleStandUpInnerCard,
  StyledContainerDetails,
  StyledInnerWrapper,
  StyledSection,
  StyledStandUpContainer,
  StyledWrapper,
} from "./CardComponent.Styled";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  ButtonCardBox,
  StyledLinkButton,
  StyledPrimaryButton,
} from "../../Homepage/Button/Button.style";

export function DataStore() {
  const [value, setValue] = useState({
    Date: "",
    TaskDone: "",
    PendingTask: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:1000/users", value);
      console.log("Data submitted successfully:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error submitting data:", error.message);
    }
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
                      <StyledTitle>What i will do ⁇</StyledTitle>
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
