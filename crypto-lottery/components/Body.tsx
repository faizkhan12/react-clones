import { useState, useEffect } from "react";
import {
  useContract,
  useContractRead,
  useContractWrite,
  useAddress,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { currency } from "../constants";
import CountDownTimer from "./CountDownTimer";
import toast from "react-hot-toast";

const Body = () => {
  const address = useAddress();

  const { contract } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const { data: remainingTickets } = useContractRead(
    contract,
    "RemainingTickets"
  );
  const { data: currentWinningReward } = useContractRead(
    contract,
    "CurrentWinningReward"
  );
  const { data: ticketPrice } = useContractRead(contract, "ticketPrice");
  const { data: ticketCommission } = useContractRead(
    contract,
    "ticketCommission"
  );
  const { data: expiration } = useContractRead(contract, "expiration");
  const { data: tickets } = useContractRead(contract, "getTickets");

  const { mutateAsync: BuyTickets } = useContractWrite(contract, "BuyTickets");

  const [quantity, setQuantity] = useState(0);

  const [userTickets, setUserTickets] = useState(0);

  useEffect(() => {
    if (!tickets) return;

    const totalTickets: string[] = tickets;

    const noOfUserTickets = totalTickets.reduce((total, ticketAddress) =>
      ticketAddress === address ? total + 1 : total
    );

    setUserTickets(noOfUserTickets);
  }, [tickets, address]);

  const handleClick = async () => {
    if (!ticketPrice) return;

    const notification = toast.loading("Buying your tickets...");

    try {
      const data = await BuyTickets([
        {
          value: ethers.utils.parseEther(
            (
              Number(ethers.utils.formatEther(ticketPrice)) * quantity
            ).toString()
          ),
        },
      ]);
      toast.success("Tickets purchased successfully!", {
        id: notification,
      });
    } catch (error) {
      toast.error("Something went wrong!", {
        id: notification,
        duration: 2000,
      });
    }
  };
  return (
    <div className="space-y-5 md:space-y-0 m-5 md:flex md:flex-row items-start justify-center md:space-x-5">
      {/* Left Box */}
      <div className="stats-container">
        <h1 className="text-5xl text-white font-semibold text-center">
          The Next Draw
        </h1>

        <div className="flex justify-between p-2 space-x-2">
          <div className="stats">
            <h2 className="text-sm">Total Pool</h2>
            <p className="text-xl">
              {currentWinningReward &&
                ethers.utils.formatEther(currentWinningReward.toString())}{" "}
              {currency}
            </p>
          </div>
          <div className="stats">
            <h2 className="text-sm">Tickets Remaining</h2>
            <p className="text-xl">{remainingTickets?.toNumber()}</p>
          </div>
        </div>
        {/* CountDown Timer */}
        <div className="mt-5 mb-3">
          <CountDownTimer />
        </div>
      </div>

      {/* Right Box */}

      <div className="stats-container space-y-2">
        <div className="stats">
          <div className="flex justify-between items-center text-white pb-2">
            <h2>Price Per Ticket</h2>
            <p>
              {" "}
              {ticketPrice &&
                ethers.utils.formatEther(ticketPrice.toString())}{" "}
              {currency}
            </p>
          </div>
          <div className="flex items-center space-x-2 text-white bg-[#091B18] border-[#004337] p-4 border">
            <p>TICKETS</p>
            <input
              className="flex w-full bg-transparent outline-none text-right"
              type="number"
              min={1}
              max={10}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
          <div className="space-y-2 mt-5">
            <div className="flex items-center justify-between text-emerald-300 text-sm italic font-extrabold">
              <p>Total cost of tickets</p>
              <p>
                {" "}
                {ticketPrice &&
                  Number(ethers.utils.formatEther(ticketPrice.toString())) *
                    quantity}{" "}
                {currency}
              </p>
            </div>
            <div className="flex items-center justify-between text-emerald-300 text-sm italic font-extrabold">
              <p>Service fees</p>
              <p>
                {" "}
                {ticketCommission &&
                  ethers.utils.formatEther(ticketCommission.toString())}{" "}
                {currency}
              </p>
            </div>
            <div className="flex items-center justify-between text-emerald-300 text-sm italic font-extrabold">
              <p>+ Network Fees</p>
              <p>TBC</p>
            </div>
          </div>
          <button
            onClick={handleClick}
            disabled={
              remainingTickets?.toNumber() === 0 ||
              expiration?.toString() < Date.now().toString()
            }
            className="mt-5 w-full bg-gradient-to-br from-orange-500 to-emerald-600 px-10 py-5 rounded-md text-white shadow-xl disabled:from-gray-600 disabled:text-gray-100 disabled:to-gray-100 disabled:cursor-not-allowed font-semibold"
          >
            Buy {quantity} tickets for{" "}
            {ticketPrice &&
              Number(ethers.utils.formatEther(ticketPrice.toString())) *
                quantity}
          </button>

          {/* {userTickets > 0 && (
            <div className="stats">
              You have {userTickets}
              Tickets in this draw{" "}
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Body;
