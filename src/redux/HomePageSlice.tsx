import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mission: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  contact: "We Provides More Details Let Me Know Solution What You Need Help",
};

const HomePageSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    updateMission: (state, action) => {
      state.mission = action.payload;
    },
    updateContact: (state, action) => {
      state.contact = action.payload;
    },
  },
});

export const { updateMission, updateContact } = HomePageSlice.actions;
export default HomePageSlice.reducer;
