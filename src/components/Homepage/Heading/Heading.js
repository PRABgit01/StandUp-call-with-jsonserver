import { StyledLinkButton } from "../Button/Button.style";
import { Box, HeadingText, SubText, SubTextPart } from "../HomePage.styled";

export function Heading() {
  return (
    <>
      <Box>
        <HeadingText>
          <SubText>stand</SubText>
          <SubTextPart>UP</SubTextPart>
          <SubText>Meeting</SubText>
        </HeadingText>
        <StyledLinkButton to={"/create"}>+</StyledLinkButton>
      </Box>
    </>
  );
}
