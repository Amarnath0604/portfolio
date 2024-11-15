import { FC, useEffect } from "react";
import { Error404Page, Error404Wrapper, Error404Title, Error404Text } from "../StyledComponents";

interface IPage404Props {}

export const Page404: FC<IPage404Props> = () => {
  const listener = () => {
    const visual = document.getElementById("visual");
    const width = window.innerWidth;
    const height = window.innerHeight;
    const ratio = 45 / (width / height);
    if (visual) {
      visual.style.transform = "translate(-50%, -50%) rotate(-" + ratio + "deg)";
    }
  };

  useEffect(() => {
    const routerWrapper = document.getElementsByClassName("route-wrapper")[0];
    const child = routerWrapper.children[0] as HTMLDivElement;
    child.style.position = "unset";

    window.addEventListener("resize", listener);
    window.addEventListener("load", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("load", listener);
    };
  }, []);

  return (
    <Error404Page className="error-page">
      <Error404Wrapper>
        <Error404Title id="visual">404</Error404Title>
      </Error404Wrapper>
      <Error404Text>The page you’re looking for does not exist.</Error404Text>
    </Error404Page>
  );
};
