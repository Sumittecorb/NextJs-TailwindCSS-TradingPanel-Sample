import { FC } from "react";
import AveragePrice from "./AveragePrice";

const TableSec: FC<{}> = () => {
  return (
    <div className="row-span-3 bg-main shadow rounded-lg mt-6">
      <div className="overflow-y-auto" style={{ maxHeight: "50rem" }}>
        <table className="table-auto rounded-lg mx-auto  w-full">
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
          <tbody>
            <tr className="bg-Stone text-white hover:bg-gray-600">
              <td className="px-6 border-gray-600  py-3 text-center text-smalltext font-medium text-Red">
                <input
                  id="purple-checkbox"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 textmain-win bg-subMain border-subMain rounded focus:ring-win dark:focus:ring-tranparent dark:ring-tranparent focus:ring-0 dark:bg-subMain dark:border-subMain"
                />
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-green text-white px-2 py-1">Win</span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                SEPT 7,2019
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-blue">
                ANY
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $2.3
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $5.3
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                1,737
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="border border-green border-1 px-1 py-1">
                  LONG
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-win">
                5,373
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-win">
                26%
              </td>
              <td className="px-2 md:px-0 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-progressBar text-white md:px-0 px-2 py-1">
                  Earning winner
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-progressText">
                1+More
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <div className="w-full bg-gray-200 h-1 rounded  mt-1">
                  <div
                    className="bg-progressBar h-1 rounded"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </td>
            </tr>
            <tr className="bg-Stone text-white hover:bg-gray-600">
              <td className="px-6 border-gray-600  py-3 text-center text-smalltext font-medium text-Red">
                <input
                  id="purple-checkbox"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 text-win bg-subMain border-subMain rounded focus:ring-win dark:focus:ring-tranparent dark:ring-tranparent focus:ring-0 dark:bg-subMain dark:border-subMain"
                />
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-green text-white px-2 py-1">Win</span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                SEPT 7,2019
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-blue">
                ANY
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $2.3
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $5.3
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                1,737
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="border border-green border-1 px-1 py-1">
                  LONG
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-win">
                5,373
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-win">
                26%
              </td>
              <td className="px-2 md:px-0 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-progressBar text-white md:px-0 px-2 py-1">
                  Earning winner
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-progressText">
                1+More
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <div className="w-full bg-gray-200 h-1 rounded  mt-1">
                  <div
                    className="bg-progressBar h-1 rounded"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </td>
            </tr>
            <tr className="bg-Stone text-white hover:bg-gray-600">
              <td className="px-6 border-gray-600  py-3 text-center text-smalltext font-medium text-Red">
                <input
                  id="purple-checkbox"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 text-win bg-subMain border-subMain rounded focus:ring-win dark:focus:ring-tranparent dark:ring-tranparent focus:ring-0 dark:bg-subMain dark:border-subMain"
                />
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-lose text-white px-2 py-1">Lose</span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                SEPT 7,2019
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-blue">
                ANY
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $2.3
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $5.3
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                1,737
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="border border-green border-1 px-1 py-1">
                  LONG
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-win">
                5,373
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-win">
                26%
              </td>
              <td className="px-2 md:px-0 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-progressBar text-white md:px-0 px-2 py-1">
                  Earning winner
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-progressText">
                1+More
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <div className="w-full bg-gray-200 h-1 rounded  mt-1">
                  <div
                    className="bg-progressBar h-1 rounded"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </td>
            </tr>
            <tr className="bg-Stone text-white hover:bg-gray-600">
              <td className="px-6 border-gray-600  py-3 text-center text-smalltext font-medium text-Red">
                <input
                  id="purple-checkbox"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 text-win bg-subMain border-subMain rounded focus:ring-win dark:focus:ring-tranparent dark:ring-tranparent focus:ring-0 dark:bg-subMain dark:border-subMain"
                />
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-lose text-white px-2 py-1">Lose</span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                SEPT 7,2019
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-blue">
                ANY
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $2.3
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $5.3
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                1,737
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="border border-green border-1 px-1 py-1">
                  LONG
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-win">
                5,373
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-win">
                26%
              </td>
              <td className="md:px-0 px-2 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-progressBar md:px-0 text-white px-2 py-1">
                  Earning winner
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-progressText">
                1+More
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <div className="w-full bg-gray-200 h-1 rounded  mt-1">
                  <div
                    className="bg-progressBar h-1 rounded"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </td>
            </tr>
            <tr className="bg-Stone text-white hover:bg-gray-600">
              <td className="px-6 border-gray-600  py-3 text-center text-smalltext font-medium text-Red">
                <input
                  id="purple-checkbox"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 text-win bg-subMain border-subMain rounded focus:ring-win dark:focus:ring-tranparent dark:ring-tranparent focus:ring-0 dark:bg-subMain dark:border-subMain"
                />
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-lose text-white px-2 py-1">Lose</span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                SEPT 7,2019
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-blue">
                ANY
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $2.3
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $5.3
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                1,737
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="border border-green border-1 px-1 py-1">
                  LONG
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-win">
                5,373
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-win">
                26%
              </td>
              <td className="md:px-0 px-2 py-3 text-center text-smalltext font-medium text-Red">
                <span className="md:px-0 bg-progressBar text-white px-2 py-1">
                  Earning winner
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-progressText">
                1+More
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <div className="w-full bg-gray-200 h-1 rounded  mt-1">
                  <div
                    className="bg-progressBar h-1 rounded"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </td>
            </tr>
            <tr className="bg-Stone text-white hover:bg-gray-600">
              <td className="px-6 border-gray-600  py-3 text-center text-smalltext font-medium text-Red">
                <input
                  id="purple-checkbox"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 text-win bg-subMain border-subMain rounded focus:ring-win dark:focus:ring-tranparent dark:ring-tranparent focus:ring-0 dark:bg-subMain dark:border-subMain"
                />
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-green text-white px-2 py-1">Win</span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                SEPT 7,2019
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-blue">
                ANY
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $2.3
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $5.3
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                1,737
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="border border-green border-1 px-1 py-1">
                  LONG
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-win">
                5,373
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-win">
                26%
              </td>
              <td className="md:px-0 px-2 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-progressBar text-white md:px-0 px-2 py-1">
                  Earning winner
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-progressText">
                1+More
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <div className="w-full bg-gray-200 h-1 rounded  mt-1">
                  <div
                    className="bg-progressBar h-1 rounded"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </td>
            </tr>
            <tr className="bg-Stone text-white hover:bg-gray-600">
              <td className="px-6 border-gray-600  py-3 text-center text-smalltext font-medium text-Red">
                <input
                  id="purple-checkbox"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 text-win bg-subMain border-subMain rounded focus:ring-win dark:focus:ring-tranparent dark:ring-tranparent focus:ring-0 dark:bg-subMain dark:border-subMain"
                />
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-green text-white px-2 py-1">Win</span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                SEPT 7,2019
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-blue">
                ANY
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $2.3
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $5.3
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                1,737
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="border border-green border-1 px-1 py-1">
                  LONG
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-win">
                5,373
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-win">
                26%
              </td>
              <td className="md:px-0 px-2 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-progressBar text-white px-2 py-1 md:px-0">
                  Earning winner
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-progressText">
                1+More
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <div className="w-full bg-gray-200 h-1 rounded  mt-1">
                  <div
                    className="bg-progressBar h-1 rounded"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </td>
            </tr>
            <tr className="bg-Stone text-white hover:bg-gray-600">
              <td className="px-6 border-gray-600  py-3 text-center text-smalltext font-medium text-Red">
                <input
                  id="purple-checkbox"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 text-win bg-subMain border-subMain rounded focus:ring-win dark:focus:ring-tranparent dark:ring-tranparent focus:ring-0 dark:bg-subMain dark:border-subMain"
                />
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-green text-white px-2 py-1">Win</span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                SEPT 7,2019
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-blue">
                ANY
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $2.3
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $5.3
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                1,737
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="border border-green border-1 px-1 py-1">
                  LONG
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-win">
                5,373
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-win">
                26%
              </td>
              <td className="md:px-0 px-2 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-progressBar text-white px-2 py-1 md:px-0">
                  Earning winner
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-progressText">
                1+More
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <div className="w-full bg-gray-200 h-1 rounded  mt-1">
                  <div
                    className="bg-progressBar h-1 rounded"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </td>
            </tr>
            <tr className="bg-Stone text-white hover:bg-gray-600">
              <td className="px-6 border-gray-600  py-3 text-center text-smalltext font-medium text-Red">
                <input
                  id="purple-checkbox"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 text-win bg-subMain border-subMain rounded focus:ring-win dark:focus:ring-tranparent dark:ring-tranparent focus:ring-0 dark:bg-subMain dark:border-subMain"
                />
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-green text-white px-2 py-1">Win</span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                SEPT 7,2019
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-blue">
                ANY
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $2.3
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $5.3
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                1,737
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="border border-green border-1 px-1 py-1">
                  LONG
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-win">
                5,373
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-win">
                26%
              </td>
              <td className="md:px-0 px-2 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-progressBar text-white px-2 md:px-0 py-1">
                  Earning winner
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-progressText">
                1+More
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <div className="w-full bg-gray-200 h-1 rounded  mt-1">
                  <div
                    className="bg-progressBar h-1 rounded"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </td>
            </tr>
            <tr className="bg-Stone text-white hover:bg-gray-600">
              <td className="px-6 border-gray-600  py-3 text-center text-smalltext font-medium text-Red">
                <input
                  id="purple-checkbox"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 text-win bg-subMain border-subMain rounded focus:ring-win dark:focus:ring-tranparent dark:ring-tranparent focus:ring-0 dark:bg-subMain dark:border-subMain"
                />
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-lose text-white px-2 py-1">Lose</span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                SEPT 7,2019
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-blue">
                ANY
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $2.3
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $5.3
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                1,737
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="border border-green border-1 px-1 py-1">
                  LONG
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-win">
                5,373
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-win">
                26%
              </td>
              <td className="md:px-0 px-2 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-progressBar text-white px-2 py-1 md:px-0">
                  Earning winner
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-progressText">
                1+More
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <div className="w-full bg-gray-200 h-1 rounded  mt-1">
                  <div
                    className="bg-progressBar h-1 rounded"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </td>
            </tr>
            <tr className="bg-Stone text-white hover:bg-gray-600">
              <td className="px-6 border-gray-600  py-3 text-center text-smalltext font-medium text-Red">
                <input
                  id="purple-checkbox"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 text-win bg-subMain border-subMain rounded focus:ring-win dark:focus:ring-tranparent dark:ring-tranparent focus:ring-0 dark:bg-subMain dark:border-subMain"
                />
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-green text-white px-2 py-1">Win</span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                SEPT 7,2019
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-blue">
                ANY
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $2.3
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $5.3
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                1,737
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="border border-green border-1 px-1 py-1">
                  LONG
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-win">
                5,373
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-win">
                26%
              </td>
              <td className="md:px-0 px-2 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-progressBar text-white px-2 py-1 md:px-0">
                  Earning winner
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-progressText">
                1+More
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <div className="w-full bg-gray-200 h-1 rounded  mt-1">
                  <div
                    className="bg-progressBar h-1 rounded"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </td>
            </tr>
            <tr className="bg-Stone text-white hover:bg-gray-600">
              <td className="px-6 border-gray-600  py-3 text-center text-smalltext font-medium text-Red">
                <input
                  id="purple-checkbox"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 text-win bg-subMain border-subMain rounded focus:ring-win dark:focus:ring-tranparent dark:ring-tranparent focus:ring-0 dark:bg-subMain dark:border-subMain"
                />
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-green text-white px-2 py-1">Win</span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                SEPT 7,2019
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-blue">
                ANY
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $2.3
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $5.3
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                1,737
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="border border-green border-1 px-1 py-1">
                  LONG
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-win">
                5,373
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-win">
                26%
              </td>
              <td className="md:px-0 px-2 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-progressBar text-white px-2 py-1 md:px-0">
                  Earning winner
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-progressText">
                1+More
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <div className="w-full bg-gray-200 h-1 rounded  mt-1">
                  <div
                    className="bg-progressBar h-1 rounded"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </td>
            </tr>
            <tr className="bg-Stone text-white hover:bg-gray-600">
              <td className="px-6 border-gray-600  py-3 text-center text-smalltext font-medium text-Red">
                <input
                  id="purple-checkbox"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 text-win bg-subMain border-subMain rounded focus:ring-win dark:focus:ring-tranparent dark:ring-tranparent focus:ring-0 dark:bg-subMain dark:border-subMain"
                />
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-green text-white px-2 py-1">Win</span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                SEPT 7,2019
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-blue">
                ANY
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $2.3
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $5.3
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                1,737
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="border border-green border-1 px-1 py-1">
                  LONG
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-win">
                5,373
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-win">
                26%
              </td>
              <td className="md:px-0 px-2 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-progressBar text-white px-2 py-1 md:px-0">
                  Earning winner
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-progressText">
                1+More
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <div className="w-full bg-gray-200 h-1 rounded  mt-1">
                  <div
                    className="bg-progressBar h-1 rounded"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </td>
            </tr>
            <tr className="bg-Stone text-white hover:bg-gray-600">
              <td className="px-6 border-gray-600  py-3 text-center text-smalltext font-medium text-Red">
                <input
                  id="purple-checkbox"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 text-win bg-subMain border-subMain rounded focus:ring-win dark:focus:ring-tranparent dark:ring-tranparent focus:ring-0 dark:bg-subMain dark:border-subMain"
                />
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-green text-white px-2 py-1">Win</span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                SEPT 7,2019
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-blue">
                ANY
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $2.3
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-Lime">
                $5.3
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                1,737
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <span className="border border-green border-1 px-1 py-1">
                  LONG
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-win">
                5,373
              </td>
              <td className="px-6  py-3 text-center text-smalltext font-medium text-win">
                26%
              </td>
              <td className="md:px-0 px-2 py-3 text-center text-smalltext font-medium text-Red">
                <span className="bg-progressBar text-white px-2 py-1 md:px-0">
                  Earning winner
                </span>
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-progressText">
                1+More
              </td>
              <td className="px-6 py-3 text-center text-smalltext font-medium text-Red">
                <div className="w-full bg-gray-200 h-1 rounded  mt-1">
                  <div
                    className="bg-progressBar h-1 rounded"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TableSec;
