import React from "react";
import Logo from "./Logo";
import { ConnectKitButton } from "connectkit";
import Router from "next/router";
import DateTime from "./time";

type Props = {};

function Header({ }: Props) {
  return (
    <div className=" border-b border-white/10 w-full relative z-10">
      <div className="container mx-auto max-w-[1350px] py-[10px] flex justify-between items-center">
        <div onClick={() => Router.push("/")}>
          <Logo />
        </div>
        <div className="flex justify-between items-center">
          <div> <DateTime /> </div>
          <div>   <ConnectKitButton /></div>

        </div>
      </div>
    </div>
  );
}

export default Header;
