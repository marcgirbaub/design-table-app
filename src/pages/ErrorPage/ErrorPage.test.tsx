import { screen } from "@testing-library/react";
import renderRouterWithProviders from "../../utils/renderRouterWithProviders";
import ErrorPage from "./ErrorPage";

describe("Given a ErrorPage component", () => {
  describe("When rendered", () => {
    test("Then it should show the 404 text", () => {
      const textCode = "404";

      renderRouterWithProviders(<ErrorPage />);

      const textElement = screen.getByText(textCode);

      expect(textElement).toBeInTheDocument();
    });
  });
});
