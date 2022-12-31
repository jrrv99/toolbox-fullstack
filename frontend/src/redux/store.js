import { configureStore } from "@reduxjs/toolkit";
import { filesMiddleware, filesReducer, reducerPath as filesPath } from "./api/files";

const store = configureStore({
  reducer: {
    [filesPath]: filesReducer
  },
  middleware: getDefaultMiddlewares => getDefaultMiddlewares({/* Other config here */}).concat(filesMiddleware)
})

export default store;