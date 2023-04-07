import { FC } from "react";

const AverageCard: FC<{
  title: string;
  price: number;
  percenatge: string;
  status: string;
}> = ({ title, price, percenatge, status }) => {
  const winStatus = status === "win" ? "text-win" : "text-wrong";
  return (
    <div className="flex items-center px-4 py-2 bg-subMain shadow  border-subMain border rounded-lg">
      <div className=" mr-4 w-32">
        <span className="block text-smalltext text-white">{title}</span>
        <span className="flex text-white text-base">
          {`$${price}`}
          <span className={`flex text-boxtext ${winStatus} ml-2`}>
            {percenatge}
            <img src="images/arrowup.svg" alt="" />
          </span>
        </span>
      </div>
      <div className="inline-flex h-10 w-full">
        <img src="images/avggraph.svg" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default AverageCard;
