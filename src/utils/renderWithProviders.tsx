import React, { type PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import ThemeContextProvider from "../store/contexts/ThemeContextProvider";

const renderWithProviders = (ui: React.ReactElement) => {
  const Wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
    return <ThemeContextProvider>{children}</ThemeContextProvider>;
  };

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
