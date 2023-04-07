import { FC } from "react";
import AccountPerfomance from "./AccountPerfom";
import AccountPerfomanceGraph from "./AccountPerfomanceGraph";
import AccountProfit from "./AccountProfitPerfom";
import AddInvest from "./AddInvest";
import PotentialPerfomance from "./PotentialPerfom";
import PotentialProfit from "./PotentialProfit";

const Perfomance: FC<{}> = () => {
  return (
    <div className="col-span-3 md:col-span-3 lg:col-span-1">
      <section className="grid md:grid-cols-2 xl:grid-cols-2 gap-6 mt-0">
        <div className="flex flex-col md:col-span-1 md:row-span-1">
          <AddInvest />
          <PotentialPerfomance />
          <AccountPerfomanceGraph />
          <AccountPerfomance />
        </div>
        <div className="flex flex-col md:col-span-1 md:row-span-1">
        
         <PotentialProfit />
         <AccountProfit />
        </div>
      </section>
    </div>
  );
};
export default Perfomance;
