import { screen } from "@testing-library/react";
import renderRouterWithProviders from "../../utils/renderRouterWithProviders";
import LeftSideMenu from "./LeftSideMenu";

describe("Given a LeftSideMenu component", () => {
  describe("When rendered", () => {
    test("Then it should show two links with the text `Designs` and `Setouts`", () => {
      renderRouterWithProviders(<LeftSideMenu />);

      const designsLinkElement = screen.getByRole("link", { name: "Designs" });
      const setoutsLinkElement = screen.getByRole("link", { name: "Setouts" });

      expect(designsLinkElement).toBeInTheDocument();
      expect(setoutsLinkElement).toBeInTheDocument();
    });
  });
});
