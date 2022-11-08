import { ArtivaContextType, Platform } from "@artiva/shared";
import React from "react";
import useColorScheme from "../hooks/useColorScheme";
import ThemeContext from "./ThemeContext";

const GlobalProvider = ({
  ctx,
  platform,
  children,
}: {
  ctx: ArtivaContextType;
  platform: Platform;
  children: React.ReactNode;
}) => {
  const { parentRef } = useColorScheme({ platform });
  return (
    <div id="theme">
      <div style={{ fontFamily: "Cormorant" }} ref={parentRef as any}>
        <ThemeContext.Provider value={ctx}>{children}</ThemeContext.Provider>
      </div>
    </div>
  );
};

export default GlobalProvider;
