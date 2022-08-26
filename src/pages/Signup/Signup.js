import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Layout from "../../components/Layout";
import useField from "../../hooks/useField";
import { useDispatch, useSelector } from "react-redux";
import { reloadUser, signup } from "../../store/reducers/UserReducer";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const Signup = ({ rol = "aspirante", titulo = "Registrate!" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registered = useSelector((store) => store.User.userCreated);

  const documento = useField();
  const primerNombre = useField();
  const primerApellido = useField();
  const sexo = useField();
  const correo = useField();
  const celular = useField();
  const clave = useField();

  const handleRegister = () => {
    dispatch(
      signup({
        documento: documento.value,
        primerApellido: primerApellido.value,
        primerNombre: primerNombre.value,
        sexo: sexo.value,
        correo: correo.value,
        celular: celular.value,
        clave: clave.value,
        rol: rol,
        fechaRegistro: moment().format(),
      })
    );
  };

  React.useEffect(() => {
    if (registered) {
      dispatch(reloadUser());
      documento.setValue("");
      primerApellido.setValue("");
      sexo.setValue("");
      correo.setValue("");
      celular.setValue("");
      clave.setValue("");

      navigate("/login", { replace: true });
    }
  }, [registered, dispatch]);

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "95vh",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            minWidth: 275,
            padding: "20px 0 ",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexFlow: "column",
            }}
          >
            <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
              {titulo}
            </Typography>

            <TextField
              margin="normal"
              id="documento-field"
              label="Documento"
              value={documento.value}
              onChange={documento.onChange}
            />
            <TextField
              margin="normal"
              id="apellido-field"
              label="Primer Apellido"
              value={primerApellido.value}
              onChange={primerApellido.onChange}
            />
            <TextField
              margin="normal"
              id="nombre-field"
              label="Primer Nombre"
              value={primerNombre.value}
              onChange={primerNombre.onChange}
            />
            <FormControl>
              <InputLabel id="sexo-select-label">Sexo</InputLabel>
              <Select
                labelId="sexo-select-label"
                id="sexo-select-field"
                value={sexo.value}
                label="Sexo"
                onChange={sexo.onChange}
              >
                <MenuItem value={"M"}>Femenino</MenuItem>
                <MenuItem value={"F"}>Masculino</MenuItem>
                <MenuItem value={"O"}>Otro</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="normal"
              id="nombre-field"
              label="Correo"
              value={correo.value}
              onChange={correo.onChange}
              type="email"
            />
            <TextField
              margin="normal"
              id="nombre-field"
              label="Celular"
              value={celular.value}
              onChange={celular.onChange}
              type="number"
            />
            <TextField
              margin="normal"
              id="nombre-field"
              label="Contraseña"
              value={clave.value}
              onChange={clave.onChange}
              type="password"
            />
          </CardContent>
          <CardActions
            style={{
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Button variant="contained">Log in</Button>
            <Button variant="contained" onClick={handleRegister}>
              Sign Up
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Layout>
  );
};

export default Signup;
