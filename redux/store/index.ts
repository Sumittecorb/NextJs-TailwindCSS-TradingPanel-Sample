import { configureStore } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import tableReducer from "../slice/table";

const tablePersist = {
  key: "table",
  storage,
};

const persistHomeReducer = persistReducer(tablePersist, tableReducer);

export const store = configureStore({
  reducer: {
    tableData: persistHomeReducer,
  },
});
export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
