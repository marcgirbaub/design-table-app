import { fireEvent, screen } from "@testing-library/react";
import renderWithProviders from "../../utils/renderWithProviders";
import ThemeSwitch from "./ThemeSwitch";

describe("Given a ThemeSwitch component", () => {
  describe("When rendered", () => {
    test("Then it should show a switch with a test id equal to `dark-theme-switch`", () => {
      renderWithProviders(<ThemeSwitch />);

      const switchElement = screen.getByTestId("dark-theme-switch");

      fireEvent.click(switchElement);

      expect(switchElement).toBeInTheDocument();
    });
  });
});
