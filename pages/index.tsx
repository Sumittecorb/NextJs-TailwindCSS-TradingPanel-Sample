import { FC } from "react";
import TableSec from "../component/TableSec";
import TopButtonSec from "../component/TopButtonSec";
import TopHeader from "../component/TopHeader";
import Table from "../component/Table";
import Header from "@/component/Header";
import AveragePrice from "@/component/AveragePrice";
const Investment: FC<{}> = () => {
  return (
    <>
      <Header />
      <div className="p-2 sm:p-6 space-y-2">
        {/* <TopButtonSec /> */}
      
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 md:col-span-3 lg:col-span-2">
            <AveragePrice />
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};
export default Investment;
