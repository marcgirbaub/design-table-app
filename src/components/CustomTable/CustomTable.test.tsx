import { render, screen } from "@testing-library/react";
import CustomTable from "./CustomTable";
import { designsMock } from "../../mocks/designsMocks";
import { usersMock } from "../../mocks/usersMocks";
import { setoutsMocks } from "../../mocks/setoutsMocks";

describe("Given a CustomTable component", () => {
  describe("When rendered with the tableType equal to designs and a list designs and users", () => {
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

  describe("When rendered the tableType equal to setouts and a list of setouts", () => {
    test("Then it should show the name and machine width of the fifth setout", () => {
      const fifthSetoutName = setoutsMocks[4].name;
      const fifthSetoutMachineWidth = setoutsMocks[4].machine_width;

      render(<CustomTable dataToDisplay={setoutsMocks} tableType="setouts" />);

      const nameElement = screen.getByText(fifthSetoutName);
      const machineWidhtElements = screen.getAllByText(fifthSetoutMachineWidth);

      expect(nameElement).toBeInTheDocument();
      expect(machineWidhtElements.length).toBeGreaterThan(0);
    });
  });
});
