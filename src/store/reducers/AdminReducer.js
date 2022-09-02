import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config";

const UserSlice = createSlice({
  name: "admin",

  // state

  initialState: {
    loading: "idle",
    user: {},
    userCreated: false,
    users: [],
  },
  reducers: {
    // actions that modify the state

    loading(state) {
      if (state.loading === "idle") state.loading = "pending";
    },
    setUsers(state, action) {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.users = action.payload;
      }
    },
  },
});

const { actions, reducer } = UserSlice;

export const { loading, setUsers } = actions;

export const getUsers = () => async (dispatch) => {
  // start charging
  dispatch(loading());

  // get API data
  const response = await axios.get(`${config.APIURI}${config.PATHS.users}`);

  if (response.status === 200) {
    response.data.map((e) => (e.id = Math.random()));
    // send API data
    dispatch(setUsers(response.status === 200 ? response.data : []));
  }
};

export default reducer;
