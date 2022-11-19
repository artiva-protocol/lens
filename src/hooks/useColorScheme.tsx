import { Platform } from "@artiva/shared";
import { MutableRefObject, RefObject, useEffect, useRef } from "react";
import useCustomProperties from "./useCustomProperties";
import { useRouter } from "next/router";

const useColorScheme = ({
  platform,
  parentElement,
}: {
  platform: Platform;
  parentElement: RefObject<HTMLDivElement>;
}) => {
  const custom = useCustomProperties({ platform });
  const { asPath } = useRouter();

  useEffect(() => {
    if (!parentElement.current) return;
    const isDark =
      true ||
      custom.color_scheme === "Dark" ||
      (custom.color_scheme === "Auto" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) parentElement.current.classList.add("dark");
    else parentElement.current.classList.remove("dark");

    if (isDark) document.body.style.backgroundColor = "black";
    else document.body.style.backgroundColor = "white";
  }, [custom.color_scheme, parentElement, asPath]);
};

export default useColorScheme;
