import React, { useState } from "react";
import ProjectImage from "../projectImage";
import {
  LinkContainer,
  Description,
  DescriptionContainer,
  Container,
  Text,
  Website,
} from "./styles";
import ramadanProj from "../../../../../static/ramadnProj.png";
import ShowMoreText from "react-show-more-text";

export default function ProjectsMobileVersion() {
  const [isShowMoreClicked, setIsShowMoreClicked] = useState(false);

  return (
    <>
      {[1, 2, 2, 2, 2].map(() => {
        return (
          <Container isShowMoreClicked={isShowMoreClicked}>
            <ProjectImage src={ramadanProj} />
            <DescriptionContainer>
              <Description>
                <ShowMoreText
                  lines={1}
                  more="read more"
                  less="read less"
                  onClick={() => setIsShowMoreClicked(isShowMoreClicked)}
                  expanded={isShowMoreClicked}
                  truncatedEndingComponent={"... "}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid, odio enim dolorum quia nostrum et architecto alias
                  atque omnis ex
                </ShowMoreText>
              </Description>
              <LinkContainer>
                <Text>visit : </Text>
                <Website href="http://ramadanjuice-saida.com" target="_blank">
                  ramadanjuice-saida.com
                </Website>
              </LinkContainer>
            </DescriptionContainer>
          </Container>
        );
      })}
    </>
  );
}
