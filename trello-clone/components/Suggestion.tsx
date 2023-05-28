import { UserCircleIcon } from "@heroicons/react/24/solid";

const Suggestion = () => {
  return (
    <div className="flex items-center justify-center px-5 md:py-5">
      <p
        className="flex items-center text-sm font-light p-5 shadow-xl
          rounded-xl w-fit bg-white italic max-w-xl"
      >
        <UserCircleIcon className="inline-block h-10 w-10 text-[#0055D1] mr-1" />
        GPT 4.0 is summarising your tasks for the day...
      </p>
    </div>
  );
};

export default Suggestion;
