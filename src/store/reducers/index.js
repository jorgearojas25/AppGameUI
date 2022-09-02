import PokeAPIReducer from "./PokeAPIReducer";
import UserReducer from "./UserReducer";
import AdminReducer from "./AdminReducer";

const reducers = {
  Admin: AdminReducer,
  PokeAPI: PokeAPIReducer,
  User: UserReducer,
};

export default reducers;
