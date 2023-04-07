import { FC } from "react";

const TopButtonSec: FC<{}> = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-3  ">
        <div className="flex items-center px-0 pb-2 shadow flex-wrap">
          <button className="flex bg-progressBar border-progressBar px-1 py-1 mb-2 text-white text-smalltext rounded mr-1">
            <span className="flex-inline">LEARNING WINNNER</span>
            <img className="flex-inline ml-1" src="images/cross.png" alt="" />
          </button>
          <button className="flex bg-winner border-blue px-1 py-1 mb-2 text-white text-smalltext rounded mr-1">
            <span className="flex-inline">LEARNING WINNNER</span>
            <img className="flex-inline ml-1" src="images/cross.png" alt="" />
          </button>
          <button className="flex bg-blue border-blue px-1 py-1 mb-2 text-white text-smalltext rounded mr-1">
            <span className="flex-inline">LEARNING WINNNER</span>
            <img className="flex-inline ml-1" src="images/cross.png" alt="" />
          </button>
          <button className="flex bg-progressBar border-progressBar px-1 py-1 mb-2 text-white text-smalltext rounded mr-1">
            <span className="flex-inline">LEARNING WINNNER</span>
            <img className="flex-inline ml-1" src="images/cross.png" alt="" />
          </button>
          <button className="flex bg-green border-green px-1 py-1 mb-2 text-white text-smalltext rounded mr-1">
            <span className="flex-inline">LEARNING WINNNER</span>
            <img className="flex-inline ml-1" src="images/cross.png" alt="" />
          </button>
          <button className="flex bg-lose border-lose px-1 py-1 mb-2 text-white text-smalltext rounded mr-1">
            <span className="flex-inline">LEARNING WINNNER</span>
            <img className="flex-inline ml-1" src="images/cross.png" alt="" />
          </button>
          <button className="flex bg-lightBlue border-lightBlue px-1 py-1 mb-2 text-white text-smalltext rounded mr-1">
            <span className="flex-inline">LEARNING WINNNER</span>
            <img className="flex-inline ml-1" src="images/cross.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default TopButtonSec;
