import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

//reset error action

export const resetErrAction = createAsyncThunk("resetErr-Action", () => {
  return {};
});

//reset success action

export const resetSuccessAction = createAsyncThunk("resetErr-Action", () => {
  return {};
});
