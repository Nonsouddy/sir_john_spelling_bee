"use client"

import { useState } from "react";

//Components
import PaidTable from "@/components/Contestants/PaidTable";
import UnPaidTable from "@/components/Contestants/UnPaidTable";

const Heading = ({ nonPaidContestants, paidContestants, role }: { nonPaidContestants: Contestant[], paidContestants: Contestant[], role: string }) => {

    const [table, setTable] = useState<string>("paid")

    return (
        <main>
            <div className="flex gap-x-5 mt-4 mb-10">
                <button onClick={() => setTable("paid")} className={`${table === "paid" ? "border-b-2 border-normalBlue text-normalBlue" : ""}`}>Paid Contestants <sup>{paidContestants.length}</sup></button>
                <button onClick={() => setTable("unpaid")} className={`${table === "unpaid" ? "border-b-2 border-normalBlue text-normalBlue" : ""}`}>Unpaid Contestants <sup>{nonPaidContestants.length}</sup></button>
            </div>
            {table === "paid" ? <PaidTable contestants={paidContestants} role={role} />
                : table === "unpaid" ? <UnPaidTable contestants={nonPaidContestants} role={role} />
                    : <PaidTable contestants={paidContestants} role={role} />
            }
        </main>
    );
}

export default Heading;