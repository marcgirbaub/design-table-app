import { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const App = (): ReactElement => {
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}></QueryClientProvider>;
};

export default App;
