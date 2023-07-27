import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  DesignStructure,
  DesignsStructure,
  SetoutStructure,
  SetoutsStructure,
  UserStructure,
  UsersStructure,
} from "../../types/types";
import getInitials from "../../utils/getInitials";
import formatDate from "../../utils/formatDate";

interface CustomTableProps {
  tableType: "designs" | "setouts";
  dataToDisplay: DesignsStructure | SetoutsStructure;
  users?: UsersStructure;
}

const CustomTable = ({
  dataToDisplay,
  tableType,
  users,
}: CustomTableProps): React.ReactElement => {
  if (tableType === "designs") {
    const notFoundUser: UserStructure = {
      id: 0,
      name: "Not Found",
    };

    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Courses
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Wales
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Last Updated
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                By
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataToDisplay.map((element) => (
              <TableRow
                key={element.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {element.name}
                </TableCell>
                <TableCell align="center">
                  {(element as DesignStructure).wales}
                </TableCell>
                <TableCell align="center">{element.courses}</TableCell>
                <TableCell align="center">
                  {formatDate(element.updated)}
                </TableCell>
                <TableCell align="center">
                  {getInitials(
                    users?.find(
                      (user) =>
                        user.id ===
                        (element as DesignStructure).user_id_last_update,
                    ) ?? notFoundUser,
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Machine Name</TableCell>
            <TableCell align="center">Machine Width</TableCell>
            <TableCell align="center">Courses</TableCell>
            <TableCell align="center">Last Updated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataToDisplay.map((element) => (
            <TableRow
              key={element.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">
                {(element as SetoutStructure).machine_name}
              </TableCell>
              <TableCell align="center">
                {(element as SetoutStructure).machine_width}
              </TableCell>
              <TableCell align="center">{element.courses}</TableCell>
              <TableCell align="center">
                {formatDate(element.updated)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
