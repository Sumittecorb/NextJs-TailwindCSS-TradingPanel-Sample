import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { fecthTable } from "@/redux/slice/table";
import { useEffect } from "react";
import { FC } from "react";

const Table: FC<{}> = () => {
  const dispatch = useAppDispatch();
  const table: any = useAppSelector((state) => state.tableData);
  useEffect(() => {
    getTableData()
  }, []);

  const getTableData =async () => {
    await fetch(`json/table.json`)
    .then((r) => r.json())
    .then((list) => {
      console.log("tableData", list);
      dispatch(fecthTable(list))
    });
  }
  console.log("table",table)
  return <></>;
};
export default Table;
