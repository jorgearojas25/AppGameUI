const config = {
  APIURI: "https://proyecto-multimedia-360500.uc.r.appspot.com/API/",
  PATHS: {
    login: "login/",
    register: "signup",
    users: "users",
  },
  NAVIGATION: {
    site: {
      home: "/",
      signup: "signup",
      rhSignup: "rh/signup",
      adminSignup: "admin/signup",
      login: "login",
    },
    admin: {
      pruebas: "admin/pruebas",
      usuarios: "admin/usuarios",
      rh: "admin/rh",
    },
    user: {
      misPruebas: "user/pruebas",
      historial: "user/historial",
    },
    rh: {
      pruebas: "rh/pruebas",
      resultados: "rh/resultados",
    },
  },
};

export default config;
