import { Typography } from "@mui/material";
import React from "react";
import UsersTable from "../../../../components/UsersTable";

const AdminUsers = () => {
  return (
    <>
      <Typography>Admin Users</Typography>
      <UsersTable checkboxSelection />
    </>
  );
};

export default AdminUsers;
