import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import * as React from "react";
import SherenergyContext from "store/context/context";

interface Column {
  id: "name" | "code" | "usinas";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "code", label: "Número", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "usinas", label: "Participação", minWidth: 170 },
];

interface Data {
  code: string;
  name: string;
  usinas: string;
}

function createData(code: string, name: string, usinas: string): Data {
  return { name, code, usinas };
}

export default function StickyHeadTable() {
  const { customers, setCustomer, setUsina, setIdCustomer } =
    React.useContext(SherenergyContext);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rows = customers?.map(({ numeroCliente, nomeCliente, usinas }) => {
    const participacao = usinas.reduce(
      (acc, elem) => (acc += " " + elem.percentualDeParticipacao + ","),
      ""
    );
    return createData(
      String(numeroCliente),
      nomeCliente,
      participacao.substr(0, participacao.length - 1)
    );
  });

  const selectRow = (data: any) => {
    const selected = customers.filter((item) => parseInt(data.code) === item.numeroCliente);
    const { usinas } = selected[0];

    setCustomer(selected[0]);
    setUsina(usinas[0]);
    setIdCustomer(selected[0].numeroCliente);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }} style={{backgroundColor: "rgba(0,0,0,0.3)"}}>
      <TableContainer sx={{ maxHeight: 440 }} >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          onClick={() => selectRow(row)}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 5, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}