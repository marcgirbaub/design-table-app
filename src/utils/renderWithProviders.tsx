import React, { type PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import ThemeContextProvider from "../store/contexts/ThemeContextProvider";
import { QueryClient, QueryClientProvider } from "react-query";

const renderWithProviders = (ui: React.ReactElement) => {
  const queryClient = new QueryClient();

  const Wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </QueryClientProvider>
    );
  };

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
