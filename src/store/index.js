import {configureStore} from "@reduxjs/toolkit";
import todoItemsSlice from "./todoItems-slice.js";

const store=configureStore({
    reducer:{todo:todoItemsSlice.reducer}
})

export default store;