import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: 'Popular',
    sortProperty: 'rating'
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      console.log(action.payload);
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  }
});

export const { setCategoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;