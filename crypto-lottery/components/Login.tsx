import React from "react";
import { useMetamask } from "@thirdweb-dev/react";

const Login = () => {
  const connectWithMetamask = useMetamask();

  return (
    <div className="bg-[#081B18] min-h-screen flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center justify-center mb-10">
        <img
          className="rounded-full h-56 w-56 mb-10"
          src="https://faizkhan.xyz/static/media/avatar1.0a9cd4238e0eeabcf3de.png"
          alt=""
        />
        <h1 className="text-6xl text-white font-bold">
          Lottery Draw using Web3
        </h1>
        <h2 className="text-white">Log in with your MetaMask Wallet</h2>
        <button
          onClick={connectWithMetamask}
          className="bg-white px-8 py-5 mt-10 rounded-lg font-bold shadow-lg"
        >
          Login with MetaMask
        </button>
      </div>
    </div>
  );
};

export default Login;
