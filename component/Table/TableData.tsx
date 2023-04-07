import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { fecthTable } from "@/redux/slice/table";
import { useEffect } from "react";
import { FC } from "react";
import TableDataCard from "./TableCard";


const TableData: FC<{}> = () => {
  const dispatch = useAppDispatch();
  const { tableData }: any = useAppSelector((state) => state.tableData);
  useEffect(() => {
    getTableData();
  }, []);

  const getTableData = async () => {
    await fetch(`json/table.json`)
      .then((r) => r.json())
      .then((list) => {
        dispatch(fecthTable(list));
      });
  };

  return (
    <tbody>
      {tableData &&
        tableData.map((tData: any) => {
          return <TableDataCard tData={tData} />;
        })}
    </tbody>
  );
};
export default TableData;
