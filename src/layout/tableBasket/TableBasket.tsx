import React, { useId } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

interface IProps {
  basket: any;
  addProductToBasket: (i: any) => void;
  removeProductFromBasket: (i: any) => void;
  deleteProductFromBasket: (i: any) => void;
}

const TableBasket = ({
  basket,
  addProductToBasket,
  removeProductFromBasket,
  deleteProductFromBasket,
}: IProps) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" size="small">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#00b0ff57" }}>
            <TableCell>Your order</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {basket.map((i: any) => (
            <TableRow
              key={i.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {i.name}
              </TableCell>
              <TableCell align="right">{i.price.toFixed(2)} $</TableCell>
              <TableCell align="right">x{i.count}</TableCell>
              <TableCell align="right">
                <IconButton
                  onClick={() => addProductToBasket(i)}
                  aria-label="add"
                  size="small"
                >
                  <AddIcon />
                </IconButton>
                <IconButton
                  onClick={() => removeProductFromBasket(i)}
                  size="small"
                  aria-label="remove"
                >
                  <RemoveIcon />
                </IconButton>
                <IconButton
                  onClick={() => deleteProductFromBasket(i)}
                  size="small"
                  aria-label="remove"
                >
                  <DeleteForeverOutlinedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableBasket;
