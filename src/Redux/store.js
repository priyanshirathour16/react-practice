import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/Counter/CounterSlice.jsx";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
