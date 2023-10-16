import React, { useState } from "react";
import ProjectDetails from "./components/ProjectDetails";
import ProjectImage from "./components/ProjectImage";
import {
  LinkContainer,
  ProjectContainer,
  SmallDescription,
  SmallDescriptionContainer,
  SmallScreenContainer,
  Text,
  Website,
} from "./styles";
import useBreakpoint from "../../../../utils/useMediaQuery";
import theme from "../../../../styles/theme";
import ramadanProj from "../../../../static/ramadnProj.png";
import ramadanProjDesktop from "../../../../static/ramadanjuice.png";
import ShowMoreText from "react-show-more-text";

export default function Project() {
  const isSmallSmallScreen = useBreakpoint(theme.breakingPoints.sm);
  const [isShowMoreClicked, setIsShowMoreClicked] = useState(false);

  return (
    <>
      {isSmallSmallScreen ? (
        [1, 2, 2, 2, 2].map(() => {
          return (
            <SmallScreenContainer isShowMoreClicked={isShowMoreClicked}>
              <ProjectImage src={ramadanProj} />
              <SmallDescriptionContainer>
                <SmallDescription>
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
                </SmallDescription>
                <LinkContainer>
                  <Text>visit : </Text>
                  <Website href="http://ramadanjuice-saida.com" target="_blank">
                    ramadanjuice-saida.com
                  </Website>
                </LinkContainer>
              </SmallDescriptionContainer>
            </SmallScreenContainer>
          );
        })
      ) : (
        <ProjectContainer>
          <ProjectImage src={ramadanProjDesktop} />
          <ProjectDetails />
        </ProjectContainer>
      )}
    </>
  );
}
