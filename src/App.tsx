import { useState, useEffect } from "react";
import { PageContext } from "./context";
import { HomePage, Page404, Project } from "./pages";
import { PageType } from "./types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<PageType>("about");

  const resizeListener = () => {
    const body = document.getElementsByTagName("body")[0];

    if (window.outerWidth <= 767 || window.innerWidth <= 767) {
      body.style.overflow = "auto";
    } else {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      body.style.overflow = "hidden";
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeListener);
    window.addEventListener("load", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
      window.removeEventListener("load", resizeListener);
    };
  }, []);

  return (
    <PageContext.Provider value={{ page: selectedPage, setPage: setSelectedPage }}>
      <Router>
        <div className="route-wrapper">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/projects/:slug" component={Project} />
            <Route exact path="/404" component={Page404} />
            <Route path="*" component={Page404} />
          </Switch>
        </div>
      </Router>
    </PageContext.Provider>
  );
};

export default App;
