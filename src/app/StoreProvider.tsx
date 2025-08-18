"use client";

import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/store";
import { useRef } from "react";

export default function Providers({
  children,
  preloadedState
}: {
  children: React.ReactNode;
  preloadedState?: any;
}) {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    storeRef.current = makeStore(preloadedState);
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}