import { FC } from "react";
import AddTrade from "./AddTrade";
import ClearFilter from "./ClearFilter";
import Report from "./Report";

const Wrapper: FC<{ title: string }> = ({ title }) => {
  return (
    <button className="flex border-gray-500 border px-1 py-1 text-white text-base rounded  mb-2 mr-1">
      <span className="test flex-inline">{title}</span>{" "}
    </button>
  );
};
const Header: FC<{}> = () => {
  return (
    <div className="  bg-subMain py-2 px-6 ">
      <div className="grid grid-cols-3 gap-4 ">
        <div className="col-span-2 ">
          <div className="flex items-center px-0  mt-2 shadow  flex-wrap">
            <Report />

            <Wrapper title="SYMBOL" />
            <Wrapper title="SETUPS" />
            <Wrapper title="SIDES" />
            <Wrapper title="MISTAKE" />
            <Wrapper title="STATUS" />
            <Wrapper title="FORTAUD" />
            <Wrapper title="NOV 17,2019-DEC 17 2019" />

            <ClearFilter />
          </div>
        </div>
        <AddTrade />
      </div>
    </div>
  );
};
export default Header;
