import ProjectDetails from "./projectDetails";
import ProjectImage from "./projectImage";
import { ProjectContainer } from "./styles";
import useBreakpoint from "../../../../utils/useMediaQuery";
import theme from "../../../../styles/theme";
import ramadanProjDesktop from "../../../../static/ramadanjuice.png";
import ProjectsMobileVersion from "./projectMobileVersion";
import ProjectMobile from "./projectMobile";
import Stars from "../../../../styles/reusable/Stars";

export default function Project() {
  const isSmallSmallScreen = useBreakpoint(theme.breakingPoints.sm);

  return (
    <>
      {isSmallSmallScreen ? (
        // <ProjectsMobileVersion />
        <ProjectMobile/>
      ) : (
        <ProjectContainer>
          <ProjectImage src={ramadanProjDesktop} />
          <ProjectDetails />
        </ProjectContainer>
      )}
    </>
  );
}
