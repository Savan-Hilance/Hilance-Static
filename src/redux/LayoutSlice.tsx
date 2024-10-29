import { createSlice} from "@reduxjs/toolkit";

interface LayoutState {
  sidebarOpen: boolean;
}

const initialState: LayoutState = {
  sidebarOpen: false,
};

const LayoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export const { toggleSidebar } = LayoutSlice.actions;
export default LayoutSlice.reducer;
