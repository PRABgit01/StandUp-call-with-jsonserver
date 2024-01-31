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
} from "../CreatePage/Create.styled";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { CardStyledButton } from "../Homepage/Button.style";
import { ButtonBox, StyledBackButton } from "./Update.styled";

export function UpdatePage() {
  const { id } = useParams();

  const [value, setValue] = useState({
    Date: "",
    WhatIHaveDone: "",
    WhatIwillDo: "",
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
      <CreatePageContainer>
        <CreatePageWrapper>
          <InnerCreateBox>
            <HeadingTextBox>
              <CreateHeadingText>
                DATE:
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
            <ButtonBox>
              <CardStyledButton onClick={handleSubmit}>SUBMIT</CardStyledButton>
              <StyledBackButton to={"/"}>back</StyledBackButton>
            </ButtonBox>
          </InnerCreateBox>
        </CreatePageWrapper>
      </CreatePageContainer>
    </>
  );
}
