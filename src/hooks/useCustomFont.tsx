import { Platform } from "@artiva/shared";
import { RefObject, useEffect } from "react";
import useCustomProperties from "./useCustomProperties";

const useCustomFont = ({
  platform,
  parentElement,
}: {
  platform: Platform;
  parentElement: RefObject<HTMLDivElement>;
}) => {
  const custom = useCustomProperties({ platform });

  useEffect(() => {
    if (!parentElement.current) return;
    const div = parentElement.current;

    div.classList.remove("font-sans");
    div.classList.remove("font-bodoni");
    div.classList.remove("font-cormorant");
    div.classList.remove("font-jura");
    div.classList.remove("font-raleway");

    switch (custom.font) {
      case "Basic":
        div.classList.add("font-sans");
        break;
      case "Bodoni Moda":
        div.classList.add("font-bodoni");
        break;
      case "Cormorant":
        div.classList.add("font-cormorant");
        break;
      case "Jura":
        div.classList.add("font-jura");
        break;
      case "Raleway":
        div.classList.add("font-raleway");
        break;
    }
  }, [custom.font, parentElement]);
};

export default useCustomFont;
