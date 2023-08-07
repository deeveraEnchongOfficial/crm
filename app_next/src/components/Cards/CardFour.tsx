import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { UsersIcon } from "@heroicons/react/24/outline";

const CardFour = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <UsersIcon className="h-6 w-6 text-meta-5" />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            3.456
          </h4>
          <span className="text-sm font-medium">Total Users</span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-5">
          0.95%
          <ArrowDownIcon className="h-6 w-6 text-gray-500" />
        </span>
      </div>
    </div>
  );
};

export default CardFour;
