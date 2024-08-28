import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";



const userSlice = createSlice({
  //state
  name: 'user',
  initialState: {
    user: {
    },
    loading: false,
    error: null
  },
  //actions
  reducers: {
    setUser: (state, action) => {
      // console.log(state)

      state.user = action.payload

    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
})
//exporting action to store;
export const { setUser, setLoading } = userSlice.actions
//exporting to store reducers
export default userSlice.reducer