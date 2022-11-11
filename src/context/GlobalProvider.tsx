import { ArtivaContextType, Platform } from "@artiva/shared";
import React, { useRef } from "react";
import useColorScheme from "../hooks/useColorScheme";
import ThemeContext from "./ThemeContext";
import useCustomFont from "../hooks/useCustomFont";

const GlobalProvider = ({
  ctx,
  platform,
  children,
}: {
  ctx: ArtivaContextType;
  platform: Platform;
  children: React.ReactNode;
}) => {
  const parentRef = useRef<HTMLDivElement>(null);
  useColorScheme({ platform, parentElement: parentRef });
  useCustomFont({ platform, parentElement: parentRef });

  return (
    <div id="theme">
      <div ref={parentRef as any}>
        <ThemeContext.Provider value={ctx}>{children}</ThemeContext.Provider>
      </div>
    </div>
  );
};

export default GlobalProvider;
