import { FC } from "react"

const TopHeader:FC<{}>=()=>{
    return(
        <div className="bg-subMain py-2 px-6 ">
        <div className="grid grid-cols-3 gap-4 ">
            <div className="col-span-2 ">
                <div className="flex items-center px-0  mt-2 shadow  flex-wrap">
                    <button className="flex px-1 py-1 text-win text-base mb-2  ml-1 mr-1">
                        <span className="flex-inline">Report</span> </button>
                    <button className="flex border-gray-500 border px-1 py-1 text-white text-base rounded  mb-2 mr-1">
                        <span className="flex-inline">SYMBOL</span> </button>
                    <button className="flex border-gray-500 border px-1 py-1 text-white text-base rounded  mb-2 mr-1">
                        <span className="flex-inline">SETUPS</span> </button>
                    <button className="flex border-gray-500 border px-1 py-1 text-white text-base rounded  mb-2 mr-1">
                        <span className="flex-inline">SIDES</span> </button>
                    <button className="flex border-gray-500 border px-1 py-1 text-white text-base rounded  mb-2 mr-1">
                        <span className="flex-inline">MISTAKE</span> </button>
                    <button className="flex border-gray-500 border px-1 py-1 text-white text-base rounded  mb-2 mr-1">
                        <span className="flex-inline">STATUS</span> </button>
                    <button className="flex border-gray-500 border px-1 py-1 text-white text-base rounded  mb-2 mr-1">
                        <span className="flex-inline">FORTAUD</span> </button>
                    <button className="flex border-gray-500 border px-1 py-1 text-white text-base rounded  mb-2 mr-1">
                        <span className="flex-inline">NOV 17,2019-DEC 17 2019</span> </button>
                    <button className="flex px-1 py-1 text-white text-base rounded  mb-2 mr-1">
                        <span className="flex-inline">CLEAR FILTER</span> </button>
                </div>
            </div>
            <div className="col-span-1 ">
                <div className="flex items-center px-0 py-2 shadow justify-end ">
                    <button className="flex border-win border px-1 py-1 text-white text-base bg-win  mr-1">
                        <span className="flex-inline">ADD TRADE</span> </button>
                </div>
            </div>

        </div>
    </div>
    )
}
export default TopHeader