import { FC } from "react";

const ClearFilter: FC<{}> = () => {
  return (
    <button className="flex px-1 py-1 text-white text-base rounded  mb-2 mr-1">
      <span className="flex-inline">CLEAR FILTER</span>{" "}
    </button>
  );
};
export default ClearFilter;
