import { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../Layout/Layout";

const App = (): ReactElement => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  );
};

export default App;
