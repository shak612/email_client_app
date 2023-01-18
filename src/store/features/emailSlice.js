import { createSlice } from "@reduxjs/toolkit";

const emailSlice = createSlice({
  name: "email",
  initialState: [],
  reducers: {
    getData: (state, action) => {
      state.push(action.payload);
    },
    updateData: (state, action) => {
      let favElem = action.payload.data.filter((item) =>
        action.payload.id.includes(item.id)
      );
      return (state = favElem);
    },
  },
});

const readUnreadSlice = createSlice({
  name: "readunread",
  initialState: [],
  reducers: {
    readData: (state, action) => {
      let read = action.payload.data.filter((item) =>
        action.payload.id.includes(item.id)
      );
      return (state = read);
    },
    unreadData: (state, action) => {
      const { getData } = emailSlice.reducer;
      console.log("getData", getData);
      return (state = getData);
    },
  },
});

export const { getData, updateData } = emailSlice.actions;
export const { readData, unreadData } = readUnreadSlice.actions;

export const reducer = {
  email: emailSlice.reducer,
  readUnread: readUnreadSlice.reducer,
};
