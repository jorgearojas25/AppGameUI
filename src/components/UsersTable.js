import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/reducers/AdminReducer";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const UsersTable = ({ checkboxSelection = false }) => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.Admin.users);

  const columns = [
    { field: "documento", headerName: "Documento", width: 150 },
    { field: "primerApellido", headerName: "Primer Apellido", width: 300 },
    { field: "primerNombre", headerName: "Primer Nombre", width: 200 },
    { field: "sexo", headerName: "Sexo", width: 200 },
    { field: "correo", headerName: "Correo", width: 200 },
    { field: "celular", headerName: "Celular", width: 200 },
    { field: "rol", headerName: "Rol", width: 200 },
    { field: "fechaRegistro", headerName: "Registro", width: 200 },
  ];

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "40rem",
        marginTop: "25px",
        backgroundColor: "background.paper",
      }}
    >
      <DataGrid
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        checkboxSelection={checkboxSelection}
        components={{ Toolbar: GridToolbar }}
        columns={columns}
        rows={users}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </Box>
  );
};

export default UsersTable;
