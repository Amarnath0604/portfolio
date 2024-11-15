import { createContext, useContext } from "react";
import { PageType } from "../types";

export type PageContextType = {
  page: PageType;
  setPage: (val: PageType) => void;
};

export const PageContext = createContext<PageContextType>({ page: "about", setPage: (val) => {} });

export const usePageCtx = () => useContext(PageContext);
