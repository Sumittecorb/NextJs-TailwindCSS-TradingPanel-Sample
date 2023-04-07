import { FC } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

const PotentialPerfomance: FC<{}> = () => {
  return (
    <div className="row-span-3 bg-subMain shadow -lg mt-6">
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
          <span className="text-left text-normaltext font-medium text-white mt-3">
            Potental Perfomance
          </span>
          <button
            type="button"
            className="inline-flex  relative justify-center rounded-md px-0 -mr-1  text-smalltext  font-medium "
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <img src="images/pontenalperfo.svg" alt="" className="w-32" />
            <span className="  text-xl font-medium text-white absolute top-5 bottom-0 left-3 right-0 m-auto">
              37%
            </span>
          </button>
        </div>
        <div className="flex items-center justify-between px-1 py-1 gap-1 mt-4">
          <div className="flex items-center justify-center  overflow-hidden relative rounded-full">
            <div style={{ width: 52, height: 52 }}>
              <CircularProgressbar value={66} />
            </div>
            <span
              className="absolute text-xxl text-white top-2 right-0 left-3 bottom-0 z-50"
              x-text="`12%`"
            >
              12%
            </span>
          </div>
          <div className="flex items-center justify-center  overflow-hidden relative rounded-full">
            <div style={{ width: 52, height: 52 }}>
              <CircularProgressbar value={66} />
            </div>
            <span
              className="absolute text-xxl text-white top-2 right-0 left-3 bottom-0 z-50"
              x-text="`12%`"
            >
              12%
            </span>
          </div>
          <div className="flex items-center justify-center  overflow-hidden relative rounded-full">
            <div style={{ width: 52, height: 52 }}>
              <CircularProgressbar value={66} />
            </div>
            <span
              className="absolute text-xxl text-white top-2 right-0 left-3 bottom-0 z-50"
              x-text="`12%`"
            >
              12%
            </span>
          </div>
          <div className="flex items-center justify-center  overflow-hidden relative rounded-full">
            <div style={{ width: 52, height: 52 }}>
              <CircularProgressbar value={66} />
            </div>
            <span
              className="absolute text-xxl text-white top-2 right-0 left-3 bottom-0 z-50"
              x-text="`12%`"
            >
              12%
            </span>
          </div>
          <div className="flex items-center justify-center  overflow-hidden relative rounded-full">
            <div style={{ width: 52, height: 52 }}>
              <CircularProgressbar value={66} />
            </div>
            <span
              className="absolute text-xxl text-white top-2 right-0 left-3 bottom-0 z-50"
              x-text="`12%`"
            >
              12%
            </span>
          </div>
          {/* <!-- --------------- --> */}
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
export default PotentialPerfomance;
