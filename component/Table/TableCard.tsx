import { FC } from "react";

const TableDataCard: FC<{
  tData: any;
}> = ({ tData }) => {
  const {
    id,
    result,
    date,
    type,
    rate,
    win_rate,
    participant,
    time,
    avg_return,
    percentage,
    win_type,
    win_person,
    progress,
  } = tData;
  return (
    <tr key={id} className="bg-Stone text-white hover:bg-gray-600">
      <td className="px-6 border-gray-600  py-3 text-center text-smalltext font-medium text-Red">
        <input
          id="purple-checkbox"
          type="checkbox"
          value=""
          className="w-6 h-6 textmain-win bg-subMain border-subMain rounded focus:ring-win dark:focus:ring-tranparent dark:ring-tranparent focus:ring-0 dark:bg-subMain dark:border-subMain"
        />
      </td>
      <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
        <span
          className={`${
            result === "Win" ? "bg-green" : "bg-lose"
          } text-white px-2 py-1`}
        >
          {result}
        </span>
      </td>
      <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
        {date}
      </td>
      <td className="px-6 py-3 text-center text-smalltext font-medium text-blue">
        {type}
      </td>
      <td className="px-6 py-3 text-center text-smalltext font-medium text-Lime">
        {rate}
      </td>
      <td className="px-6 py-3 text-center text-smalltext font-medium text-Lime">
        {win_rate}
      </td>
      <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
        {participant}
      </td>
      <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
        <span className="border border-green border-1 px-1 py-1">{time}</span>
      </td>
      <td className="px-6 py-3 text-center text-smalltext font-medium text-win">
        {avg_return}
      </td>
      <td className="px-6 py-3 text-center text-smalltext font-medium text-win">
        {percentage}
      </td>
      <td style={{width:"150px"}} className="px-2 md:px-0 py-3 text-center text-smalltext font-medium text-Red">
        <span className="bg-progressBar text-white md:px-0 px-2 py-1">
          {win_type}
        </span>
      </td>
      <td className="px-6 py-3 text-center text-smalltext font-medium text-progressText">
        {win_person > 1 ? ` 1+More` : win_person}
      </td>
      <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
        <div className="w-full bg-gray-200 h-1 rounded  mt-1">
          <div
            className="bg-progressBar h-1 rounded"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </td>
    </tr>
  );
};

export default TableDataCard;
