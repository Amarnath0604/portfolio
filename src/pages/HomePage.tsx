import { FC } from "react";
import * as SC from "../StyledComponents";
import { FloatingButton, LeftContent, MobilePage, RightContent } from "src/components";

interface IHomePageProps {}

export const HomePage: FC<IHomePageProps> = () => {
  return (
    <SC.Page>
      <SC.CustomGrid columns="40% auto" gap="20px">
        <LeftContent />
        <SC.DesktopView>
          <RightContent />
        </SC.DesktopView>
      </SC.CustomGrid>
      <SC.MobileView>
        <MobilePage />
        <FloatingButton id="back-to-top" onClick={() => window.scrollTo({ top: 0 })}>
          <SC.UpArrowSvg viewBox="0 0 24 24">
            <path d="M7.997 10l3.515-3.79a.672.672 0 0 1 .89-.076l.086.075L16 10 13 10.001V18h-2v-7.999L7.997 10z"></path>
          </SC.UpArrowSvg>
        </FloatingButton>
      </SC.MobileView>
    </SC.Page>
  );
};
