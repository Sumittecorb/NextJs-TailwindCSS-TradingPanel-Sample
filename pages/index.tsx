import { FC } from "react"
import TableSec from "../component/TableSec"
import TopButtonSec from "../component/TopButtonSec"
import TopHeader from "../component/TopHeader"
import Table from "../component/Table"
const Investment: FC<{}> = () => {
    return (
        <>
            <TopHeader />
            <div className="p-2 sm:p-6 space-y-2">
                <TopButtonSec />
                <Table />
                <div className="grid grid-cols-3 gap-4">
                    <TableSec />

                </div>
            </div>

        </>
    )
}
export default Investment