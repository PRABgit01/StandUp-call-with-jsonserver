import {
  CardBox,
  CreateHeadingText,
  CreatePageContainer,
  CreatePageWrapper,
  HeadingTextBox,
  InnerCreateBox,
  LeftCreateBox,
  RightCreateBox,
  StyledDate,
  StyledDiscription,
  StyledTitle,
} from "./Create.styled";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CardStyledButton } from "../Homepage/Button.style";

export function CreatePage() {
  const [value, setValue] = useState({
    Date: "",
    WhatIHaveDone: "",
    WhatIwillDo: "",
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
      <CreatePageContainer>
        <CreatePageWrapper>
          <InnerCreateBox>
            <HeadingTextBox>
              <CreateHeadingText>
                DATE :
                <StyledDate
                  type="text"
                  placeholder="Enter Date"
                  value={value.Date}
                  onChange={(e) => setValue({ ...value, Date: e.target.value })}
                />
              </CreateHeadingText>
            </HeadingTextBox>
            <CardBox>
              <LeftCreateBox>
                <StyledTitle>What i have done ⁇</StyledTitle>
                <StyledDiscription
                  type="text"
                  placeholder="what i will do?"
                  value={value.WhatIHaveDone}
                  onChange={(e) =>
                    setValue({ ...value, WhatIHaveDone: e.target.value })
                  }
                />
              </LeftCreateBox>
              <RightCreateBox>
                <StyledTitle>What i will do ⁇</StyledTitle>
                <StyledDiscription
                  type="text"
                  placeholder="what i have done ?"
                  value={value.WhatIwillDo}
                  onChange={(e) =>
                    setValue({ ...value, WhatIwillDo: e.target.value })
                  }
                />
              </RightCreateBox>
            </CardBox>
            <CardStyledButton onClick={handleSubmit}>SUBMIT</CardStyledButton>
          </InnerCreateBox>
        </CreatePageWrapper>
      </CreatePageContainer>
    </>
  );
}
