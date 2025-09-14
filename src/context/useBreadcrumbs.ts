import { useContext } from "react";
import { BreadcrumbContext } from "./BreadCrumbContext";

export const useBreadcrumbs = () => {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error("useBreadcrumbs must be used within BreadcrumbProvider");
  }
  return context;
};
