import { ArrowUpIcon } from '@heroicons/react/24/solid';
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const CardThree = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
      <ShoppingBagIcon className="h-6 w-6 text-meta-5" />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            2.450
          </h4>
          <span className="text-sm font-medium">Total Product</span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
          2.59%
          <ArrowUpIcon className="h-6 w-6 text-gray-500" />
        </span>
      </div>
    </div>
  );
};

export default CardThree;
