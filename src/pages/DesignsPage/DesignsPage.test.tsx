import { render, screen } from "@testing-library/react";
import { useQuery } from "react-query";
import DesignsPage from "./DesignsPage";
import { designsMock } from "../../mocks/designsMocks";

const mockUseQuery = useQuery as jest.Mock;

jest.mock("react-query", () => ({
  useQuery: jest.fn(),
}));

describe("Given a DesignsPage component", () => {
  describe("When rendered and the data is being loaded", () => {
    test("Then it should show a loader", () => {
      mockUseQuery.mockReturnValue({ isLoading: true });

      render(<DesignsPage />);

      const loaderElement = screen.getByRole("progressbar");

      expect(loaderElement).toBeInTheDocument();
    });
  });

  describe("When rendered and the data is loaded", () => {
    test("Then it should show a table with the title `Wales` and `By`", () => {
      const walesTitle = "Wales";
      const byTitle = "By";

      mockUseQuery.mockReturnValue({
        isLoading: false,
        data: { data: designsMock },
      });

      render(<DesignsPage />);

      const walesTitleElement = screen.getByText(walesTitle);
      const byTitleElement = screen.getByText(byTitle);

      expect(walesTitleElement).toBeInTheDocument();
      expect(byTitleElement).toBeInTheDocument();
    });
  });
});
