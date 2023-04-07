import { FC } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const RightSec: FC<{}> = () => {
    return (
        <div className="col-span-3 md:col-span-3 lg:col-span-1">
            <section className="grid md:grid-cols-2 xl:grid-cols-2 gap-6 mt-0">
                <div className="flex flex-col md:col-span-1 md:row-span-1">
                    <button
                        className="flex items-center justify-center px-4 py-4 bg-subMain shadow rounded-lg  border-gray-600 border text-white text-normaltext">
                        Add Invest
                    </button>
                    <div className="row-span-3 bg-subMain shadow -lg mt-6">
                        <div
                            className="flex items-center justify-between px-2 py-2 font-semibold border-b border-gray-100">
                            <span className=" text-smalltext font-medium text-white">Potental Perfomance</span>
                            <button type="button"
                                className="inline-flex justify-center rounded-md px-1 -mr-1  text-smalltext leading-5 font-medium text-gray-500 hover:text-gray-600"
                                id="options-menu" aria-haspopup="true" aria-expanded="true">
                                <img src="images/settings.svg" alt="" />
                            </button>
                        </div>
                        <div>
                            <div className="flex items-center justify-between px-2 py-2 ">
                                <span className="text-left text-normaltext font-medium text-white mt-3">Potental
                                    Perfomance</span>
                                <button type="button"
                                    className="inline-flex  relative justify-center rounded-md px-0 -mr-1  text-smalltext  font-medium "
                                    id="options-menu" aria-haspopup="true" aria-expanded="true">
                                    <img src="images/pontenalperfo.svg" alt="" className="w-32" />
                                    <span
                                        className="  text-xl font-medium text-white absolute top-5 bottom-0 left-3 right-0 m-auto">37%</span>
                                </button>
                            </div>
                            <div className="flex items-center justify-between px-1 py-1 gap-1 mt-4">

                                <div className="flex items-center justify-center  overflow-hidden relative rounded-full">
                                    <div style={{ width: 52, height: 52 }}>
                                        <CircularProgressbar value={66} />
                                    </div>
                                    <span className="absolute text-xxl text-white top-2 right-0 left-3 bottom-0 z-50" x-text="`12%`">12%</span>
                                </div>
                                <div className="flex items-center justify-center  overflow-hidden relative rounded-full">
                                    <div style={{ width: 52, height: 52 }}>
                                        <CircularProgressbar value={66} />
                                    </div>
                                    <span className="absolute text-xxl text-white top-2 right-0 left-3 bottom-0 z-50" x-text="`12%`">12%</span>
                                </div>
                                <div className="flex items-center justify-center  overflow-hidden relative rounded-full">
                                    <div style={{ width: 52, height: 52 }}>
                                        <CircularProgressbar value={66} />
                                    </div>
                                    <span className="absolute text-xxl text-white top-2 right-0 left-3 bottom-0 z-50" x-text="`12%`">12%</span>
                                </div>
                                <div className="flex items-center justify-center  overflow-hidden relative rounded-full">
                                    <div style={{ width: 52, height: 52 }}>
                                        <CircularProgressbar value={66} />
                                    </div>
                                    <span className="absolute text-xxl text-white top-2 right-0 left-3 bottom-0 z-50" x-text="`12%`">12%</span>
                                </div>
                                <div className="flex items-center justify-center  overflow-hidden relative rounded-full">
                                    <div style={{ width: 52, height: 52 }}>
                                        <CircularProgressbar value={66} />
                                    </div>
                                    <span className="absolute text-xxl text-white top-2 right-0 left-3 bottom-0 z-50" x-text="`12%`">12%</span>
                                </div>
                                {/* <!-- --------------- --> */}

                            </div>
                            <div className="mt-1 px-2 py-2 ">
                                <div className="mb-4">
                                    <span className="flex items-center justify-between">
                                        <span className="text-progressText text-xs">As opposed to using ‘Content
                                            here</span>
                                        <span className="text-progressText text-xs">1/10</span>

                                    </span>
                                    <div className="w-full bg-gray-200 h-2 rounded  mt-1">
                                        <div className="bg-progressBar h-2 rounded" style={{ width: '40%' }}></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="flex items-center justify-between">
                                        <span className="text-progressText text-xs">As opposed to using ‘Content
                                            here</span>
                                        <span className="text-progressText text-xs">1/10</span>

                                    </span>
                                    <div className="w-full bg-gray-200 h-2 rounded  mt-1">
                                        <div className="bg-progressBar h-2 rounded" style={{ width: '70%' }}></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="flex items-center justify-between">
                                        <span className="text-progressText text-xs">As opposed to using ‘Content
                                            here</span>
                                        <span className="text-progressText text-xs">1/10</span>

                                    </span>
                                    <div className="w-full bg-gray-200 h-2 rounded  mt-1">
                                        <div className="bg-progressBar h-2 rounded" style={{ width: '20%' }}></div>
                                    </div>
                                    <span className="flex items-center justify-end mt-1">
                                        <span className="text-progressText text-xs">More</span>

                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row-span-3 bg-subMain shadow mt-3">
                        <div
                            className="flex items-center justify-between px-2 py-2 font-semibold border-b border-gray-100">
                            <span className=" text-smalltext font-medium text-white">Account Perfomance</span>
                            <button type="button"
                                className="inline-flex justify-center rounded-md px-1 -mr-1  text-smalltext leading-5 font-medium text-gray-500 hover:text-gray-600"
                                id="options-menu" aria-haspopup="true" aria-expanded="true">
                                <img src="images/settings.svg" alt="" />
                            </button>
                        </div>
                        <div className="flex items-center justify-between px-2 py-2 gap-1 mt-4">
                            <span className="  text-white  rounded-md relative">
                                <span className=" text-smalltext font-medium text-white ">ABG RETURN</span>
                                <span className=" text-normaltext font-medium text-white ">$521</span>
                            </span>
                            <span className="  text-white  rounded-md relative">
                                <span className=" text-smalltext font-medium text-white ">ABG RETURN</span>
                                <span className=" text-normaltext font-medium text-white ">10%</span>
                            </span>
                            <span className="  text-white  rounded-md relative">
                                <span className=" text-smalltext font-medium text-white ">Win RETURN</span>
                                <span className=" text-normaltext font-medium text-white ">37%</span>
                            </span>
                        </div>
                        <div className="flex items-center justify-between px-2 py-2 gap-1 mt-4">
                            <span className="  text-white h-16 w-full md:h-24  rounded-md relative">
                                <img src="images/accountgraph.svg" alt="" className="w-full h-full" />
                            </span>
                        </div>
                    </div>
                    <div className="row-span-3 bg-subMain shadow mt-3">
                        <div
                            className="flex items-center justify-between px-2 py-2 font-semibold border-b border-gray-100">
                            <span className=" text-smalltext font-medium text-white">Account Perfomance</span>
                            <button type="button"
                                className="inline-flex justify-center rounded-md px-1 -mr-1  text-smalltext leading-5 font-medium text-gray-500 hover:text-gray-600"
                                id="options-menu" aria-haspopup="true" aria-expanded="true">
                                <img src="images/settings.svg" alt="" />
                            </button>
                        </div>
                        <div>
                            <div className="mt-3  px-2 py-2 ">
                                <div className="mb-4">
                                    <span className="flex items-center justify-between">
                                        <span className="text-progressText text-xs">As opposed to using ‘Content
                                            here</span>
                                        <span className="text-progressText text-xs">1/10</span>

                                    </span>
                                    <div className="w-full bg-gray-200 h-2 rounded  mt-1">
                                        <div className="bg-win h-2 rounded" style={{ width: '40%' }}></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="flex items-center justify-between">
                                        <span className="text-progressText text-xs">As opposed to using ‘Content
                                            here</span>
                                        <span className="text-progressText text-xs">1/10</span>

                                    </span>
                                    <div className="w-full bg-gray-200 h-2 rounded  mt-1">
                                        <div className="bg-lose h-2 rounded" style={{ width: '70%' }}></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="flex items-center justify-between">
                                        <span className="text-progressText text-xs">As opposed to using ‘Content
                                            here</span>
                                        <span className="text-progressText text-xs">1/10</span>

                                    </span>
                                    <div className="w-full bg-gray-200 h-2 rounded  mt-1">
                                        <div className="bg-win h-2 rounded" style={{ width: '20%' }}></div>
                                    </div>
                                    <span className="flex items-center justify-end mt-1">
                                        <span className="text-progressText text-xs">More</span>

                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:col-span-1 md:row-span-1">
                    <div className="row-span-3 bg-subMain shadow  mt-0">
                        <div
                            className="flex items-center justify-between px-2 py-2 font-semibold border-b border-gray-100">
                            <span className=" text-smalltext font-medium text-white">Potental Perfomance</span>
                            <button type="button"
                                className="inline-flex justify-center rounded-md px-1 -mr-1  text-smalltext leading-5 font-medium text-gray-500 hover:text-gray-600"
                                id="options-menu" aria-haspopup="true" aria-expanded="true">
                                <img src="images/settings.svg" alt="" />
                            </button>
                        </div>
                        <div>
                            <div className="flex items-center justify-between px-2 py-2 ">
                                <span className="text-left text-lg font-medium text-white mt-3">Potental profit
                                    increase</span>
                                <button
                                    className="inline-flex  relative justify-center rounded-md px-0 -mr-1  text-smalltext  font-medium "
                                    id="options-menu" aria-haspopup="true" aria-expanded="true">
                                    <img src="images/managementgraph.svg" alt="" className="w-24" />
                                    <span
                                        className="text-xl font-bold text-green absolute top-6 bottom-0 left-0 right-0 m-auto">+15</span>
                                </button>
                            </div>
                            <div className="flex items-center justify-between px-1 py-1 gap-1 mt-4">
                                <span className="flex items-center justify-between">
                                    <span className="text-progressText text-smalltext">
                                        It is a long established fact that a reader will be distracted by the
                                        readable content of a page when looking at its layout.
                                    </span>
                                </span>
                            </div>
                            <div className="mt-1 px-2 py-2 ">
                                <div className="mb-4">
                                    <span className="flex items-center justify-between">
                                        <span className="text-progressText text-xs">As opposed to using ‘Content
                                            here</span>
                                        <span className="text-progressText text-xs">1/10</span>

                                    </span>
                                    <div className="w-full bg-gray-200 h-2 rounded  mt-1">
                                        <div className="bg-progressBar h-2 rounded" style={{ width: '40%' }}></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="flex items-center justify-between">
                                        <span className="text-progressText text-xs">As opposed to using ‘Content
                                            here</span>
                                        <span className="text-progressText text-xs">1/10</span>

                                    </span>
                                    <div className="w-full bg-gray-200 h-2 rounded  mt-1">
                                        <div className="bg-progressBar h-2 rounded" style={{ width: '70%' }}></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="flex items-center justify-between">
                                        <span className="text-progressText text-xs">As opposed to using ‘Content
                                            here</span>
                                        <span className="text-progressText text-xs">1/10</span>

                                    </span>
                                    <div className="w-full bg-gray-200 h-2 rounded  mt-1">
                                        <div className="bg-progressBar h-2 rounded" style={{ width: '40%' }}></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="flex items-center justify-between">
                                        <span className="text-progressText text-xs">As opposed to using ‘Content
                                            here</span>
                                        <span className="text-progressText text-xs">1/10</span>

                                    </span>
                                    <div className="w-full bg-gray-200 h-2 rounded  mt-1">
                                        <div className="bg-progressBar h-2 rounded" style={{ width: '70%' }}></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="flex items-center justify-between">
                                        <span className="text-progressText text-xs">As opposed to using ‘Content
                                            here</span>
                                        <span className="text-progressText text-xs">1/10</span>

                                    </span>
                                    <div className="w-full bg-gray-200 h-2 rounded  mt-1">
                                        <div className="bg-progressBar h-2 rounded" style={{ width: '20%' }}></div>
                                    </div>
                                    <span className="flex items-center justify-end mt-1">
                                        <span className="text-progressText text-xs">More</span>

                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row-span-3 bg-subMain shadow mt-3">
                        <div
                            className="flex items-center justify-between px-2 py-2 font-semibold border-b border-gray-100">
                            <span className=" text-smalltext font-medium text-white">Account Perfomance</span>
                            <button type="button"
                                className="inline-flex justify-center rounded-md px-1 -mr-1  text-smalltext leading-5 font-medium text-gray-500 hover:text-gray-600"
                                id="options-menu" aria-haspopup="true" aria-expanded="true">
                                <img src="images/settings.svg" alt="" />
                            </button>
                        </div>
                        <div>
                            <div className="mt-3  px-2 py-2 ">
                                <div className="mb-4">
                                    <span className="flex items-center justify-between">
                                        <span className="text-progressText text-xs">As opposed to using ‘Content
                                            here</span>
                                        <span className="text-progressText text-xs">1/10</span>

                                    </span>
                                    <div className="w-full bg-gray-200 h-2 rounded  mt-1">
                                        <div className="bg-win h-2 rounded" style={{ width: '40%' }}></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="flex items-center justify-between">
                                        <span className="text-progressText text-xs">As opposed to using ‘Content
                                            here</span>
                                        <span className="text-progressText text-xs">1/10</span>

                                    </span>
                                    <div className="w-full bg-gray-200 h-2 rounded  mt-1">
                                        <div className="bg-win h-2 rounded" style={{ width: '40%' }}></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="flex items-center justify-between">
                                        <span className="text-progressText text-xs">As opposed to using ‘Content
                                            here</span>
                                        <span className="text-progressText text-xs">1/10</span>

                                    </span>
                                    <div className="w-full bg-gray-200 h-2 rounded  mt-1">
                                        <div className="bg-win h-2 rounded" style={{ width: '40%' }}></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="flex items-center justify-between">
                                        <span className="text-progressText text-xs">As opposed to using ‘Content
                                            here</span>
                                        <span className="text-progressText text-xs">1/10</span>

                                    </span>
                                    <div className="w-full bg-gray-200 h-2 rounded  mt-1">
                                        <div className="bg-lose h-2 rounded" style={{ width: '70%' }}></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="flex items-center justify-between">
                                        <span className="text-progressText text-xs">As opposed to using ‘Content
                                            here</span>
                                        <span className="text-progressText text-xs">1/10</span>

                                    </span>
                                    <div className="w-full bg-gray-200 h-2 rounded  mt-1">
                                        <div className="bg-lose h-2 rounded" style={{ width: '70%' }}></div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <span className="flex items-center justify-between">
                                        <span className="text-progressText text-xs">As opposed to using ‘Content
                                            here</span>
                                        <span className="text-progressText text-xs">1/10</span>

                                    </span>
                                    <div className="w-full bg-gray-200 h-2 rounded  mt-1">
                                        <div className="bg-lose h-2 rounded" style={{ width: '20%' }}></div>
                                    </div>
                                    <span className="flex items-center justify-end mt-1">
                                        <span className="text-progressText text-xs">More</span>

                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
export default RightSec