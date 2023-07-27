import { render, screen } from "@testing-library/react";
import CustomTable from "./CustomTable";
import { designsMock } from "../../mocks/designsMocks";
import { usersMock } from "../../mocks/usersMocks";

describe("Given a CustomTable component", () => {
  describe("When rendered with  the tableType equal to designs and a list designs and users", () => {
    test("Then it should show a column title equal to `Wales`", () => {
      const walesTitle = "Wales";

      render(
        <CustomTable
          dataToDisplay={designsMock}
          tableType="designs"
          users={usersMock}
        />,
      );

      const walesTitleElement = screen.getByText(walesTitle);

      expect(walesTitleElement).toBeInTheDocument();
    });
  });
});
