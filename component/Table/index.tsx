
import { FC } from "react";
import TableColumns from "./Columns";
import TableData from "./TableData";

const Table: FC<{}> = () => {
  
  return (
    <div className="row-span-3 bg-main shadow rounded-lg mt-6">
      <div className="overflow-y-auto" style={{ maxHeight: "50rem" }}>
        <table className="table-auto rounded-lg mx-auto  w-full">
          <TableColumns />
          <TableData />
        </table>
      </div>
    </div>
  );
};
export default Table;
