import React from "react";

type Props = {};

function Logo({}: Props) {
  return ( <>
  <span className="flex justify-between items-center">
 <img
    className=" h-[35px] w-[40px] ml-[40px]"
    src="/thetalogo.png"
    alt=""
  />
  {''}
  <h1 className="mb-2 mt-2 text-blue-600 ml-3 text-2xl font-medium leading-tight text-primary">
  Theta Meet
</h1>
  </span>
    
  </>
 
  );
}

export default Logo;

