"use client"

import { useState } from "react";

//Components
import PaidTable from "@/components/Contestants/PaidTable";
import UnPaidTable from "@/components/Contestants/UnPaidTable";

const Heading = ({ nonPaidContestants, paidContestants }: { nonPaidContestants: Contestant[], paidContestants: Contestant[], }) => {

    const [table, setTable] = useState<string>("paid")
    
    return (
        <main>
            {table === "paid" ? <PaidTable contestants={paidContestants} />
                : table === "unpaid" ? <UnPaidTable contestants={nonPaidContestants} />
                    : <PaidTable contestants={paidContestants} />
            }
        </main>
    );
}

export default Heading;