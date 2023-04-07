import { FC } from "react";

const PotentialProfit: FC<{}> = () => {
  return (
    <div className="row-span-3 bg-subMain shadow  mt-0">
      <div className="flex items-center justify-between px-2 py-2 font-semibold border-b border-gray-100">
        <span className=" text-smalltext font-medium text-white">
          Potental Perfomance
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
        <div className="flex items-center justify-between px-2 py-2 ">
          <span className="text-left text-lg font-medium text-white mt-3">
            Potental profit increase
          </span>
          <button
            className="inline-flex  relative justify-center rounded-md px-0 -mr-1  text-smalltext  font-medium "
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <img src="images/managementgraph.svg" alt="" className="w-24" />
            <span className="text-xl font-bold text-green absolute top-6 bottom-0 left-0 right-0 m-auto">
              +15
            </span>
          </button>
        </div>
        <div className="flex items-center justify-between px-1 py-1 gap-1 mt-4">
          <span className="flex items-center justify-between">
            <span className="text-progressText text-smalltext">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </span>
          </span>
        </div>
        <div className="mt-1 px-2 py-2 ">
          <div className="mb-4">
            <span className="flex items-center justify-between">
              <span className="text-progressText text-xs">
                As opposed to using ‘Content here
              </span>
              <span className="text-progressText text-xs">1/10</span>
            </span>
            <div className="w-full bg-gray-200 h-2 rounded  mt-1">
              <div
                className="bg-progressBar h-2 rounded"
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
                className="bg-progressBar h-2 rounded"
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
                className="bg-progressBar h-2 rounded"
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
                className="bg-progressBar h-2 rounded"
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
                className="bg-progressBar h-2 rounded"
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
export default PotentialProfit;
