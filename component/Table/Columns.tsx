import { FC } from "react";

const Heading: FC<{ title: string }> = ({ title }) => {
  return (
    <th className="px-6 py-3 text-center text-smalltext font-medium text-white">
      RESULT
    </th>
  );
};
const TableColumns: FC<{}> = () => {
  return (
    <thead className=" items-center bg-subMain shadow  border-subMain border rounded-lg">
      <tr>
        <th></th>
        <th className="px-6 py-3 text-center text-smalltext font-medium text-white">
          RESULT
        </th>
        <th className="px-6 py-3 text-center text-smalltext font-medium text-white">
          DATE
        </th>
        <th className="px-6 py-3 text-center text-smalltext font-medium text-white">
          RESULT
        </th>
        <th className="px-6 py-3 text-center text-smalltext font-medium text-white">
          RATE
        </th>
        <th className="px-6 py-3 text-center text-smalltext font-medium text-white">
          RESULT
        </th>
        <th className="px-6 py-3 text-center text-smalltext font-medium text-white">
          RESULT
        </th>
        <th className="px-6 py-3 text-center text-smalltext font-medium text-white">
          RESULT
        </th>
        <th className="px-6 py-3 text-center text-smalltext font-medium text-white">
          RETURN
        </th>
        <th className="px-6 py-3 text-center text-smalltext font-medium text-white">
          RESULT
        </th>
        <th className="px-6 py-3 text-center text-smalltext font-medium text-white">
          RESULT
        </th>
        <th className="px-6 py-3 text-center text-smalltext font-medium text-white"></th>
        <th className="px-6 py-3 text-center text-smalltext font-medium text-white">
          RESULT
        </th>
      </tr>
    </thead>
  );
};
export default TableColumns;
