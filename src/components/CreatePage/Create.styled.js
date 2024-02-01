import styled from "styled-components";

export const HeadingTextBox = styled.div``;

export const CreateHeadingText = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`;

export const StyledTitle = styled.h3`
  color: #000;
  padding: 0px 20px 0px;
`;

export const StyledDate = styled.input`
  color: #000;
  margin: 20px;
`;

export const StyledDiscription = styled.textarea`
  color: #000;
  margin: 20px;
  width: 100%;
  max-width: 300px;
  height: 250px;
  padding: 10px;
  resize: none;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  outline: none;

  @media (max-width: 991px) {
    max-width: 258px;
    height: 246px;
  }
`;
