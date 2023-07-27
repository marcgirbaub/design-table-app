import { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../Layout/Layout";
import ThemeContextProvider from "../../store/contexts/ThemeContextProvider";

const App = (): ReactElement => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <Layout />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
};

export default App;
