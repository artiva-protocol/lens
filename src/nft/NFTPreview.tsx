import { NFTObject } from "@zoralabs/nft-hooks";
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export const NFTPreview = React.memo(({ nft }: { nft?: NFTObject }) => {
  const { components } = useContext(ThemeContext)!;
  const { NFTRenderer } = components;

  return (
    <div className="w-full cursor-pointer ">
      {nft ? (
        <NFTRenderer nft={nft} className="w-full object-cover" />
      ) : (
        <div className="bg-gray-100 w-full h-full rounded-t-md animate-pulse"></div>
      )}
    </div>
  );
});

export default NFTPreview;
