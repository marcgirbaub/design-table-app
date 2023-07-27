import { render, screen } from "@testing-library/react";
import { useQuery } from "react-query";
import SetoutsPage from "./SetoutsPage";
import { setoutsMocks } from "../../mocks/setoutsMocks";

const mockUseQuery = useQuery as jest.Mock;

jest.mock("react-query", () => ({
  useQuery: jest.fn(),
}));

describe("Given a SetoutsPage component", () => {
  describe("When rendered and the data is being loaded", () => {
    test("Then it should show a loader", () => {
      mockUseQuery.mockReturnValue({ isLoading: true });

      render(<SetoutsPage />);

      const loaderElement = screen.getByRole("progressbar");

      expect(loaderElement).toBeInTheDocument();
    });
  });

  describe("When rendered and the data is loaded", () => {
    test("Then it should show a table with the title `Machine Name` and `Machine Width`", () => {
      const nameTitle = "Machine Name";
      const widthTitle = "Machine Width";

      mockUseQuery.mockReturnValue({
        isLoading: false,
        data: { data: setoutsMocks },
      });

      render(<SetoutsPage />);

      const machineNameTitleElement = screen.getByText(nameTitle);
      const machineWidthTitleElement = screen.getByText(widthTitle);

      expect(machineNameTitleElement).toBeInTheDocument();
      expect(machineWidthTitleElement).toBeInTheDocument();
    });
  });
});
