import { FC } from "react";

const AccountProfit: FC<{}> = () => {
  return (
    <div className="row-span-3 bg-subMain shadow mt-3">
      <div className="flex items-center justify-between px-2 py-2 font-semibold border-b border-gray-100">
        <span className=" text-smalltext font-medium text-white">
          Account Perfomance
        </span>
        <button
          type="button"
          className="inline-flex justify-center rounded-md px-1 -mr-1  text-smalltext leading-5 font-medium text-gray-500 hover:text-gray-600"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <img src="images/settings.svg" alt="" />
        </button>
      </div>
      <div>
        <div className="mt-3  px-2 py-2 ">
          <div className="mb-4">
            <span className="flex items-center justify-between">
              <span className="text-progressText text-xs">
                As opposed to using ‘Content here
              </span>
              <span className="text-progressText text-xs">1/10</span>
            </span>
            <div className="w-full bg-gray-200 h-2 rounded  mt-1">
              <div
                className="bg-win h-2 rounded"
                style={{ width: "40%" }}
              ></div>
            </div>
          </div>
          <div className="mb-4">
            <span className="flex items-center justify-between">
              <span className="text-progressText text-xs">
                As opposed to using ‘Content here
              </span>
              <span className="text-progressText text-xs">1/10</span>
            </span>
            <div className="w-full bg-gray-200 h-2 rounded  mt-1">
              <div
                className="bg-win h-2 rounded"
                style={{ width: "40%" }}
              ></div>
            </div>
          </div>
          <div className="mb-4">
            <span className="flex items-center justify-between">
              <span className="text-progressText text-xs">
                As opposed to using ‘Content here
              </span>
              <span className="text-progressText text-xs">1/10</span>
            </span>
            <div className="w-full bg-gray-200 h-2 rounded  mt-1">
              <div
                className="bg-win h-2 rounded"
                style={{ width: "40%" }}
              ></div>
            </div>
          </div>
          <div className="mb-4">
            <span className="flex items-center justify-between">
              <span className="text-progressText text-xs">
                As opposed to using ‘Content here
              </span>
              <span className="text-progressText text-xs">1/10</span>
            </span>
            <div className="w-full bg-gray-200 h-2 rounded  mt-1">
              <div
                className="bg-lose h-2 rounded"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
          <div className="mb-4">
            <span className="flex items-center justify-between">
              <span className="text-progressText text-xs">
                As opposed to using ‘Content here
              </span>
              <span className="text-progressText text-xs">1/10</span>
            </span>
            <div className="w-full bg-gray-200 h-2 rounded  mt-1">
              <div
                className="bg-lose h-2 rounded"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>

          <div className="mb-4">
            <span className="flex items-center justify-between">
              <span className="text-progressText text-xs">
                As opposed to using ‘Content here
              </span>
              <span className="text-progressText text-xs">1/10</span>
            </span>
            <div className="w-full bg-gray-200 h-2 rounded  mt-1">
              <div
                className="bg-lose h-2 rounded"
                style={{ width: "20%" }}
              ></div>
            </div>
            <span className="flex items-center justify-end mt-1">
              <span className="text-progressText text-xs">More</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountProfit;
