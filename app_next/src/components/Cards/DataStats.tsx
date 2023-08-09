import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

const DataStats = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0">
        <div className="flex items-center justify-center gap-2 border-b border-stroke pb-5 dark:border-strokedark xl:border-b-0 xl:border-r xl:pb-0">
          <div>
            <h4 className="mb-0.5 text-xl font-semibold text-black dark:text-white md:text-title-lg">
              $4,350
            </h4>
            <p className="text-sm font-medium">Unique Visitors</p>
          </div>
          <div className="flex items-center gap-1">
            <ArrowUpIcon className="h-6 w-6 text-meta-3" />
            <span className="text-meta-3">18%</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 border-b border-stroke pb-5 dark:border-strokedark xl:border-b-0 xl:border-r xl:pb-0">
          <div>
            <h4 className="mb-0.5 text-xl font-semibold text-black dark:text-white md:text-title-lg">
              55.9K
            </h4>
            <p className="text-sm font-medium">Total Pageviews</p>
          </div>
          <div className="flex items-center gap-1">
            <ArrowUpIcon className="h-6 w-6 text-meta-3" />
            <span className="text-meta-3">25%</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 border-b border-stroke pb-5 dark:border-strokedark sm:border-b-0 sm:pb-0 xl:border-r">
          <div>
            <h4 className="mb-0.5 text-xl font-semibold text-black dark:text-white md:text-title-lg">
              54%
            </h4>
            <p className="text-sm font-medium">Bounce Rate</p>
          </div>
          <div className="flex items-center gap-1">
            <ArrowDownIcon className="h-6 w-6 text-meta-8" />
            <span className="text-meta-8">7%</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div>
            <h4 className="mb-0.5 text-xl font-semibold text-black dark:text-white md:text-title-lg">
              2m 56s
            </h4>
            <p className="text-sm font-medium">Visit Duration</p>
          </div>
          <div className="flex items-center gap-1">
            <ArrowUpIcon className="h-6 w-6 text-meta-3" />
            <span className="text-meta-3">12%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataStats;
