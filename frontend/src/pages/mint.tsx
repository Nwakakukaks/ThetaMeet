import Header from "@/components/Header";
import React, { useState } from "react";
import Button from "@/components/Button";

import HSB_ABI from "@/utils/hsbabi.json";
import { useAccount, useContract, useContractRead, useSigner } from "wagmi";
import { ChevronLeft, StepBack } from "lucide-react";
import Router from "next/router";
import { toast } from "react-hot-toast";

type Props = {};

function Mint({}: Props) {
  const { address } = useAccount();
  const { data: signer } = useSigner();
  const [tokenId, setTokenId] = useState<string | undefined>();

  const contract = useContract({
    address: "0x3c3414095Fdfc53B1DaA9B8cddcdE7CeB5F87BB1",
    abi: HSB_ABI,
    signerOrProvider: signer,
  });

  const mintNft = async () => {
    try {
      if (contract) {
        contract.mint(address).then((data: any) => {
          console.log(data);
          if (data) {
            data.wait(1).then((data: any) => {
              setTokenId(data.events[0].args.tokenId.toString());
              console.log("after mint", data.events[0].args.tokenId);
              toast(
                `Nft Minted ID : ${data.events[0].args.tokenId.toString()}`
              );
            });
          }
        });
      } else {
        console.error("contract is null");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="relative overflow-scroll pb-[40px] min-h-screen">
      <Header />
      <div className="asbolute ">
        <div className="gradient2"></div>
        <div className="gradient1"></div>
      </div>

      <div className="max-w-[1350px] mt-[50px] mx-auto flex flex-col  items-center justify-center z-50 relative">
        <div>
          <p
            onClick={() => Router.push("/")}
            className="pb-[10px] flex items-center  text-[18px] text-blue-800 w-[400px] "
          >
            <ChevronLeft />
            <span>Back</span>
          </p>
        </div>
        <div className="bg-white/10 rounded-[10px] w-[400px] p-[20px]">
          <p className="text-[22px] opacity-[60px]">ThetaMeet Pass</p>
          <p className="opacity-60">
          Experience seamless collaborations like never before. 
          Join forces on projects, engage in dynamic meetings, and spark creativity with ease.
          Mint now for exclusive access.
          </p>
          <img
            className="rounded-[10px] mt-[20px] h-[450px] w-[300px] ml-[30px]"
            src="/nft.png"
            alt=""
          />

          {Number(tokenId) ? (
            <div className="mt-[20px] ">
              <p className="text-[14px]">
                Contract: 0x3c3414095Fdfc53B1DaA9B8cddcdE7CeB5F87BB1{" "}
              </p>
              <p className="py-[7px] rounded-[10px] mt-[10px] px-[20px] w-full bg-green-600 text-center">
                Token ID : {tokenId}
              </p>
            </div>
          ) : (
            <Button onClick={() => mintNft()}>Mint Pass</Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mint;

