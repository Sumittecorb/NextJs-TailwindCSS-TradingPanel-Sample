import { FC } from "react";

const AccountPerfomanceGraph: FC<{}> = () => {
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
      <div className="flex items-center justify-between px-2 py-2 gap-1 mt-4">
        <span className="  text-white  rounded-md relative">
          <span className=" text-smalltext font-medium text-white ">
            ABG 
          </span>
          <span className=" text-normaltext font-medium text-white "> $521</span>
        </span>
        <span className="  text-white  rounded-md relative">
          <span className=" text-smalltext font-medium text-white ">
            ABG 
          </span>
          <span className=" text-normaltext font-medium text-white "> 10%</span>
        </span>
        <span className="  text-white  rounded-md relative">
          <span className=" text-smalltext font-medium text-white ">
            Win 
          </span>
          <span className=" text-normaltext font-medium text-white "> 37%</span>
        </span>
      </div>
      <div className="flex items-center justify-between px-2 py-2 gap-1 mt-4">
        <span className="  text-white h-16 w-full md:h-24  rounded-md relative">
          <img src="images/accountgraph.svg" alt="" className="w-full h-full" />
        </span>
      </div>
    </div>
  );
};
export default AccountPerfomanceGraph;
