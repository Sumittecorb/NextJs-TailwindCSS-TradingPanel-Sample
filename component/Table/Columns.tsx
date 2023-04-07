import { FC } from "react";

const Heading: FC<{ children?: any; title: string }> = ({
  children,
  title,
}) => {
  return (
    <th className="px-6 py-3 text-center text-smalltext font-medium text-white">
      {title}
    </th>
  );
};
const TableColumns: FC<{}> = () => {
  return (
    <thead className=" items-center bg-subMain shadow  border-subMain border rounded-lg">
      <tr>
        <Heading title="" />
        <Heading title="RESULT" />
        <Heading title="DATE" />
        <Heading title="TYPE" />
        <Heading title="RATE" />
        <Heading title="WIN RATE" />
        <Heading title="PARTICIPANT" />
        <Heading title="TIME" />
        <Heading title="AVERAGE RETURN" />
        <Heading title="PERCENTAGE" />
        <Heading title="WIN TYPE" />
        <Heading title="" />
        <Heading title="PROGRESS" />
      </tr>
    </thead>
  );
};
export default TableColumns;
