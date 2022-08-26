const config = {
  APIURI: "http://localhost:3001/api/",
  PATHS: {
    firstCharge: "pokemon?limit=100&offset=0",
    searchPokemon: (pokemon) => `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
    login: "usuario/login",
    register: "usuario",
    registerRestaurant: "restaurante",
  },
  NAVIGATION: {
    site: {
      home: "/",
      signup: "signup",
      rhSignup: "rh/signup",
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
