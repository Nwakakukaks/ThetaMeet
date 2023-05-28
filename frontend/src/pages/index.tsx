import React, { useEffect, useRef, useState } from "react";
import { useEventListener, useHuddle01 } from "@huddle01/react";
import { useLobby } from "@huddle01/react/hooks";
import Button from "../components/Button";
import Header from "../components/Header";
import VideoCard from "../components/Modals/VideoCard";
import Menu from "../components/Menu";
import Router from "next/router";
import toast, { Toaster } from "react-hot-toast";
import { useRoomId } from "@/hooks/useRoomIdStore";
import InitHuddle from "@/components/InitHuddle";
import { useDisplayName } from "@huddle01/react/app-utils";
import { useAccount, useContractRead } from "wagmi";
import HSB_ABI from "@/utils/hsbabi.json";

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [displayNameText, setDisplayNameText] = useState("Guest");
  const { error } = useLobby();
  const { roomId } = useRoomId();
  const { joinLobby } = useLobby();
  const { address, isConnecting, isDisconnected } = useAccount();

  const [tokenId, setTokenId] = useState<string | undefined>();

  const {
    setDisplayName,
    error: displayNameError,
    displayName,
  } = useDisplayName();

  const handleEnterLobby = () => {
    joinLobby(`${roomId}`);
    console.log(error, displayNameError, "sucess");
    setDisplayName(displayNameText);
  };

  const handleEnterRoom = () => {
    Router.push(`/${roomId}`);
  };

  useEventListener("lobby:joined", () => {
    console.log("lobby:joined", displayName);
    toast("Lobby joined");
  });

  const { data: balance } = useContractRead({
    address: "0x3c3414095Fdfc53B1DaA9B8cddcdE7CeB5F87BB1",
    abi: HSB_ABI,
    functionName: "balanceOf",
    args: [address],
    onSuccess(data) {
      setTokenId(data?.toString());
    },
  });

  const isNFT = parseInt(tokenId || "0", 10);

  return (
    <div className="relative overflow-hidden pb-[40px] min-h-screen">
      <Header />
      <InitHuddle />
      <Toaster position="top-right" reverseOrder={false} />
      <div className="asbolute ">
        <div className="gradient2"></div>
        <div className="gradient1"></div>
      </div>
      <div className="max-w-[1350px] mt-[110px] mx-auto   z-50 relative">
        <div className="flex space-x-[20px] h-[470px]">
          <div className="relative  w-full flex items-center justify-center space-y-[10px] flex-col rounded-[10px] overflow-hidden ">
            <div className="max-w-[550px]">
              <p className="text-[40px] font-bold opacity-90 space-x-2">
                <span className="bg-clip-text text-black-500">
                  Premium video meetings.
                </span>
              </p>
              <p className="text-[40px] font-bold opacity-90 space-x-2">
                <span className="bg-clip-text text-black-500">
                  Now free for every one.
                </span>
              </p>
              <p className="mt-[10px] opacity-80 text-[18px]">
                Tap into the full potential of Token-Gated Meets, Live
                Transcription, and AI powered meeting summaries. Join forces on
                projects, engage in dynamic meetings, and spark creativity with
                ease.
              </p>

              {isNFT ? (
                <div>
                  <input
                    type="text"
                    placeholder="Display name here 🖊️"
                    value={displayNameText}
                    onChange={(e) => setDisplayNameText(e.target.value)}
                    className="mt-[26px] rounded-[10px] w-full px-[20px] py-[10px] text-16px bg-white/5 border border-white/10 outline-none"
                  />
                  <div className="flex ]">
                    <div className=" w-[180px] mr-6">
                      <Button
                        disabled={loading || !address}
                        onClick={(
                          event?: React.MouseEvent<HTMLButtonElement>
                        ) => {
                          if (event) {
                            event.preventDefault();
                          }
                          handleEnterRoom();
                        }}
                      >
                        {!address
                          ? "Connect wallet"
                          : loading
                          ? "Loading..."
                          : error
                          ? `Error: ${error}`
                          : "Join Meet"}
                      </Button>
                    </div>
                    <form className="flex items-center mt-5">
                      <label className="sr-only">Search</label>
                      <div className="relative w-full">
                        <input
                          type="text"
                          id="voice-search"
                          className=" border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Invite participants"
                        ></input>
                      </div>
                      <button
                        type="submit"
                        className="inline-flex items-center py-2.5 px-3 text-sm font-medium text-blue-800 hover:text-black-400 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300  dark:focus:ring-blue-800"
                      >
                        Invite
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                <div>
                  <button
                    disabled={isNFT ? false : true}
                    onClick={() => console.log("")}
                    className="py-[10px] mt-[20px] cursor-not-allowed	 bg-red-500 w-full rounded-[10px]"
                  >
                    Please Get Mint NFT to Access App
                  </button>
                  <div className="flex items-center ">
                    <button
                      onClick={() => Router.push("/mint")}
                      className="mt-[15px] cursor-pointer text-cyan-500 text-center w-full"
                    >
                      Get Access NFT
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="relative w-full">
            <div className=" border h-full relative border-white/10 bg-white/5 rounded-[10px] overflow-hidden"></div>
            <div className="flex items-center justify-center mt-[20px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
