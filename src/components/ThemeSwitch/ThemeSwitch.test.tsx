import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/renderWithProviders";
import ThemeSwitch from "./ThemeSwitch";

describe("Given a ThemeSwitch component", () => {
  test("Then should render", async () => {
    renderWithProviders(<ThemeSwitch />);

    const switchElement = screen.getByTestId("dark-theme-switch");

    expect(switchElement).toBeInTheDocument();
  });
});
