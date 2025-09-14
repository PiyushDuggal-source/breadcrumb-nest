import React, { createContext, useState, type ReactNode } from "react";

type Crumb = {
  label: string;
  path: string;
};

type BreadcrumbContextType = {
  crumbs: Crumb[];
  setCrumbs: (crumbs: Crumb[]) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const BreadcrumbContext = createContext<
  BreadcrumbContextType | undefined
>(undefined);

export const BreadcrumbProvider = ({ children }: { children: ReactNode }) => {
  const [crumbs, setCrumbs] = useState<Crumb[]>([]);
  return (
    <BreadcrumbContext.Provider value={{ crumbs, setCrumbs }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};
