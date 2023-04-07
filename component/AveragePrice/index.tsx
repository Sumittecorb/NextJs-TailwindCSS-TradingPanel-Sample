import { FC } from "react";
import AverageCard from "./Card";

const AveragePrice: FC<{}> = () => {
  return (
    <section className="grid md:grid-cols-3 xl:grid-cols-3 gap-6">
      <AverageCard title="AVG RETURNS" price={12312312} percenatge="45%" status="win" />
      <AverageCard title="AVG RETURNS"  price={623312} percenatge="21%" status="loss" />
      <AverageCard title="AVG RETURNS"  price={2332312312} percenatge="55%" status="win" />
    </section>
  );
};
export default AveragePrice;
