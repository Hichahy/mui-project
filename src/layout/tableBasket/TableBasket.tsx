import React, { useId } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableBasket = (basket: any) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" size="small">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#00b0ff57" }}>
            <TableCell>Your order</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {basket.basket.map((i: any) => (
            <TableRow
              key={useId()}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {i.name}
              </TableCell>
              <TableCell align="right">{i.price.toFixed(2)} $</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableBasket;
