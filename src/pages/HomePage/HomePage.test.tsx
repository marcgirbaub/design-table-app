import { screen } from "@testing-library/react";
import renderRouterWithProviders from "../../utils/renderRouterWithProviders";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When rendered", () => {
    test("Then it should show a text welcoming the user", () => {
      const welcomeText =
        "Welcome, user! Please click on the links to navigate around the app!";

      renderRouterWithProviders(<HomePage />);

      const textElement = screen.getByText(welcomeText);

      expect(textElement).toBeInTheDocument();
    });
  });
});
