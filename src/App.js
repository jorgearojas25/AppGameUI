import { ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/Navbar";
import config from "./config";
import AdminPruebas from "./pages/Dashboard/Admin/Pruebas/AdminPruebas";
import AdminRRHH from "./pages/Dashboard/Admin/RRHH/AdminRRHH";
import AdminUsers from "./pages/Dashboard/Admin/Users/AdminUsers";
import Dashboard from "./pages/Dashboard/Dashboard";
import Historial from "./pages/Dashboard/Historial/Historial";
import MisPruebas from "./pages/Dashboard/MisPruebas/MisPruebas";
import Pruebas from "./pages/Dashboard/Pruebas/Pruebas";
import Resultados from "./pages/Dashboard/Resultados/Resultados";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Module from "./pages/Module";
import AdminSignup from "./pages/Signup/AdminSignup";
import RHSignup from "./pages/Signup/RHSignup";
import Signup from "./pages/Signup/Signup";
import { myTheme } from "./theme/theme";

function App() {
  const userInfo = useSelector((store) => store.User.user);
  const { NAVIGATION } = config;
  const { site, user, rh, admin } = NAVIGATION;
  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        {(!userInfo?.id_usuario || !userInfo?.id_restaurante) && (
          <ResponsiveAppBar />
        )}
        <Routes>
          <Route index element={<Home />} path={site.home} />
          <Route path="/module" element={<Module />} />
          <Route path={site.login} element={<Login />} />
          <Route path={site.signup} element={<Signup />} />
          <Route path={site.rhSignup} element={<RHSignup />} />
          <Route path={site.adminSignup} element={<AdminSignup />} />
          <Route path="dashboard" element={<Dashboard rol={userInfo.rol} />}>
            <Route path={admin.usuarios} element={<AdminUsers />} />
            <Route path={admin.pruebas} element={<AdminPruebas />} />
            <Route path={admin.rh} element={<AdminRRHH />} />
            <Route path={rh.pruebas} element={<Pruebas />} />
            <Route path={user.historial} element={<Historial />} />
            <Route path={user.misPruebas} element={<MisPruebas />} />
            <Route path={rh.resultados} element={<Resultados />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
