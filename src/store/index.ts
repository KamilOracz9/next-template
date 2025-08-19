import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

export function makeStore(preloadedState?: any) {
  return configureStore({
    reducer: { 
      auth: authReducer,
    } as any,
    preloadedState
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];