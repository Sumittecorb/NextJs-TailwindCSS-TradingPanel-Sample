import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { fecthTable } from "@/redux/slice/table";
import { useEffect } from "react";
import { FC } from "react";
import TableColumns from "./Columns";

const Table: FC<{}> = () => {
  const dispatch = useAppDispatch();
  const table: any = useAppSelector((state) => state.tableData);
  useEffect(() => {
    getTableData();
  }, []);

  const getTableData = async () => {
    await fetch(`json/table.json`)
      .then((r) => r.json())
      .then((list) => {
        console.log("tableData", list);
        dispatch(fecthTable(list));
      });
  };
  console.log("table", table);
  return (
    <div className="row-span-3 bg-main shadow rounded-lg mt-6">
      <div className="overflow-y-auto" style={{ maxHeight: "50rem" }}>
        <table className="table-auto rounded-lg mx-auto  w-full">
          <TableColumns />
        </table>
      </div>
    </div>
  );
};
export default Table;
