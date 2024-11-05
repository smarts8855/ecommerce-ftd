import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/users/usersSlice";
import productReducer from "../slices/products/productSlices";
import categoryReducer from "../slices/categories/categoriesSlice";
import brandsReducer from "../slices/categories/brandsSlice";

//store

const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productReducer,
    categories: categoryReducer,
    brands: brandsReducer,
  },
});

export default store;
