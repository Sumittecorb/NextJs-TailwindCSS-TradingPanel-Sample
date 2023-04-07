import { FC } from "react";

const AddTrade: FC<{}> = () => {
  return (
    <div className="col-span-1 ">
      <div className="flex items-center px-0 py-2 shadow justify-end ">
        <button className="flex border-win border px-1 py-1 text-white text-base bg-win  mr-1">
          <span className="flex-inline">ADD TRADE</span>{" "}
        </button>
      </div>
    </div>
  );
};
export default AddTrade;
