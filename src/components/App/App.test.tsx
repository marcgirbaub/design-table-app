import { screen } from "@testing-library/react";
import renderRouterWithProviders from "../../utils/renderRouterWithProviders";
import App from "./App";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show two links with the text `Designs` and `Setouts`", () => {
      renderRouterWithProviders(<App />);

      const designsLinkElement = screen.getByRole("link", { name: "Designs" });
      const setoutsLinkElement = screen.getByRole("link", { name: "Setouts" });

      expect(designsLinkElement).toBeInTheDocument();
      expect(setoutsLinkElement).toBeInTheDocument();
    });
  });
});
