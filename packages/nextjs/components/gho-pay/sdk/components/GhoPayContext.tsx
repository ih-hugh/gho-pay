// GhoPayContext built for react
// "use client";
import { createContext, useContext } from "react";

type GhoPayContextProps = {
  balanceDue: number;
};

export const GhoPayContext = createContext<GhoPayContextProps>({
  balanceDue: 0,
});

export const useGhoPayContext = () => useContext(GhoPayContext);
