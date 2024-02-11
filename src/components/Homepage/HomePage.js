import { Card } from "./Card/Card";
import { Heading } from "./Heading/Heading";
import {
  HomePageContainer,
  HomePageSection,
  InnerWrapper,
  Wrapper,
} from "./HomePage.styled";

export function HomePage() {
  return (
    <>
      <HomePageSection>
        <HomePageContainer>
          <Wrapper>
            <InnerWrapper>
              <Heading />
              <Card />
            </InnerWrapper>
          </Wrapper>
        </HomePageContainer>
      </HomePageSection>
    </>
  );
}
