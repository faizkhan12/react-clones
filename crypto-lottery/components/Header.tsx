import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import NavButton from "./NavButton";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";

const Header = () => {
  const address = useAddress();
  const disconnect = useDisconnect();

  return (
    <header className="grid  grid-cols-2 md:grid-cols-5 justify-between items-center p-5">
      {/* Left */}
      <div className="flex items-center space-x-2">
        <img
          className="rounded-full w-20  h-20 object-contain"
          src="https://faizkhan.xyz/static/media/avatar1.0a9cd4238e0eeabcf3de.png"
          alt=""
        />
        <div>
          <h1 className="text-lg text-white font-bold">Lottery Draw</h1>
          <p className="text-xs text-emerald-500 truncate">
            User:{address?.substring(0, 5)}...
            {address?.substring(address.length, address.length - 5)}
          </p>
        </div>
      </div>
      {/* Center */}
      <div className="hidden md:flex items-center justify-center rounded-md md:col-span-3">
        <div className="bg-[#0A1F1C] p-4 space-x-2">
          <NavButton isActive title="Buy Tickets" />
          <NavButton onClick={disconnect} title="Logout" />
        </div>
      </div>
      <div className="flex flex-col ml-auto text-right">
        <Bars3BottomRightIcon className="h-8 w-8 mx-auto text-white cursor-pointer" />
        <span className="md:hidden">
          <NavButton onClick={disconnect} title="Logout" />
        </span>
      </div>
    </header>
  );
};

export default Header;
