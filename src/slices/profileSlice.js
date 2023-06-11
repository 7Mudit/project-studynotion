import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null
};

const profileSilce = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setUser( state , value) {
      state.user = value.payload;
    },
  },
});

export const { setUser } = profileSilce.actions;
export default profileSilce.reducer;
