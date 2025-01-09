import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//initialState
const initialState = {
  cartItems: [],
  loading: false,
  error: null,
  isAdded: false,
  isUpdated: false,
  isDeleted: false,
};

//add product to cart
export const addOrderToCartAction = createAsyncThunk(
  "cart/add-to-cart",
  async (cartItem) => {
    const cartItems = localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [];
    //push to storage
    cartItems.push(cartItem);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
);

//slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    //add to cart
    builder.addCase(addOrderToCartAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addOrderToCartAction.fulfilled, (state, action) => {
      state.loading = false;
      state.cartItems = action.payload;
      state.isAdded = true;
    });
    builder.addCase(addOrderToCartAction.rejected, (state, action) => {
      state.loading = false;
      state.cartItems = null;
      state.isAdded = false;
      state.error = action.payload;
    });
  },
});

//generate the reducer
const cartReducer = cartSlice.reducer;

export default cartReducer;
