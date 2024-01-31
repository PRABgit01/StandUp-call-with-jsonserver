import styled from "styled-components";

export const CreatePageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CreatePageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 855px;
  height: 551px;
  background-image: url(https://i.pinimg.com/originals/91/1d/91/911d914aaf6194489a3f5626bed2bd3a.gif);
  background-repeat: no-repeat;
  /* background-color: #1e1d30; */
  background-size: cover;
  padding: 20px;
  border-radius: 12px;
  margin: 20px;
`;

export const InnerCreateBox = styled.div`
  color: #fff;
`;

export const HeadingTextBox = styled.div``;

export const CreateHeadingText = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

export const CreateLeftBox = styled.div``;
export const CreateRightBox = styled.div``;
export const CardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const LeftCreateBox = styled.div`
  background-color: #fff;
  height: 424px;
  width: 100%;
  max-width: 384px;
  margin-top: 20px;
  border-radius: 15px;
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
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

export const RightCreateBox = styled.div`
  background-color: #fff;
  height: 424px;
  width: 100%;
  max-width: 384px;
  margin-top: 20px;
  border-radius: 15px;
`;
