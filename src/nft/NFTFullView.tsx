import { NFTObject } from "@zoralabs/nft-hooks";
import React, { Fragment, useContext } from "react";
import NFTMarketView from "./NFTMarketView";
import ThemeContext from "../context/ThemeContext";
import { useRouter } from "next/router";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

export const NFTFullView = ({ nft }: { nft?: NFTObject }) => {
  const { components } = useContext(ThemeContext)!;
  const { NFTRenderer, AddressView, Link, AvatarView } = components;

  return (
    <div>
      <div className="sm:flex w-full mt-0 sm:mt-8 text-black dark:text-white">
        <div className="w-full sm:w-3/5">
          <div className="relative px-0 sm:px-6 h-auto">
            {nft ? (
              <NFTRenderer
                nft={nft}
                renderingContext={"FULL"}
                className={`w-full max-h-[90vh] object-contain`}
              />
            ) : (
              <span className="mediaLoader"></span>
            )}
          </div>
          <div className="hidden sm:block">
            <PostInfo nft={nft} />
          </div>
        </div>
        <div className="px-6 sm:px-10 w-full mt-6 sm:mt-0 sm:w-2/5">
          <div className="w-full">
            <h2 className="text-4xl">{nft?.metadata?.name}</h2>
            <div className="mt-6 flex">
              <div>
                <div className="font-light text-gray-500 dark:text-gray-300 text-sm">
                  Minted by
                </div>
                {nft?.nft?.minted.address && (
                  <div className="mt-2 flex items-center">
                    <AvatarView
                      address={nft?.nft?.minted.address}
                      className="rounded-full w-6 h-6"
                    />
                    <AddressView
                      address={nft?.nft?.minted.address}
                      className="text-md text-gray-700 dark:text-gray-300 ml-2"
                    />
                  </div>
                )}
              </div>
              {nft?.nft?.contract.name && (
                <div className="ml-8">
                  <div className="font-light text-gray-500 dark:text-gray-300 text-sm">
                    Contract
                  </div>
                  <Link href={`/assets/ETHEREUM/${nft?.nft?.contract.address}`}>
                    <a className="bg-black dark:bg-white text-white dark:text-black text-md rounded-md text-center inline-block px-4 py-1 mt-1">
                      {nft?.nft?.contract.name}
                    </a>
                  </Link>
                </div>
              )}
            </div>

            <div className="mt-10">
              <div className="font-light text-gray-500 dark:text-gray-300 text-sm">
                Description
              </div>
              <h3 className="mt-1 text-lg text-gray-600 dark:text-gray-200 w-full break-word whitespace-pre-wrap">
                {nft?.metadata?.description}
              </h3>
            </div>
          </div>

          <div className="mt-10">
            <NFTMarketView nft={nft} />
          </div>

          <div className="block sm:hidden">
            <PostInfo nft={nft} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const PostInfo = ({ nft }: { nft?: NFTObject }) => {
  const {
    query: { platform },
  } = useRouter();
  const contractAddress = nft?.nft?.contract.address;

  return (
    <div className="mt-10 px-0 sm:px-5">
      <div className="mt-1 grid grid-cols-1 gap-2 border-l border-r rounded-md border-gray-300 dark:border-gray-700">
        <a
          href={`https://polygonscan.com/address/${platform}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border-t border-gray-300 dark:border-gray-700 rounded-md p-2 px-4">
            <div className="text-xs text-gray-400 mt-1">Platform Address</div>
            <div className="flex items-center justify-between">
              <div className="text-gray-700 dark:text-gray-300">{`${platform?.slice(
                0,
                6
              )}...${platform?.slice(
                platform?.length - 6,
                platform?.length
              )}`}</div>
              <ArrowTopRightOnSquareIcon className="h-4" />
            </div>
          </div>
        </a>
        <a
          href={`https://etherscan.io/address/${contractAddress}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border-t border-gray-300 dark:border-gray-700 rounded-md p-2 px-4">
            <div className="text-xs text-gray-400 mt-1">NFT Address</div>
            <div className="flex items-center justify-between">
              <div className="text-gray-700 dark:text-gray-300">{`${contractAddress?.slice(
                0,
                6
              )}...${contractAddress?.slice(
                contractAddress?.length - 6,
                contractAddress?.length
              )}`}</div>
              <ArrowTopRightOnSquareIcon className="h-4" />
            </div>
          </div>
        </a>
        <div className="border-t border-b pb-4 border-gray-300 dark:border-gray-700 rounded-md p-2 px-4">
          <div className="text-xs text-gray-400 mt-1">NFT Blockchain</div>
          <div className="text-gray-700 dark:text-gray-300">{"ETHEREUM"}</div>
        </div>
      </div>
    </div>
  );
};

export default NFTFullView;
