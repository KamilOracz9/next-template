import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export function makeStore(preloadedState?: any) {
  return configureStore({
    reducer: { counter: counterReducer } as any,
    preloadedState
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];