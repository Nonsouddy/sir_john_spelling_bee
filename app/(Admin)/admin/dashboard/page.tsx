
//Actions
import getContestants from "@/actions/fetch/getContestants";

//Components
import SummaryBox from "@/components/Dashboard/SummaryBox";

//Icons
import { UserSquare, Clock, TickSquare, BookSquare } from "iconsax-react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;
const page = async () => {

  const { allContestants, nonPaidContestants, paidContestants, totalSchools } = await getContestants()

  const summaryItems = [
    { title: "Total Contestants", icon: UserSquare, color: "#516fff", amount: allContestants.length, description:"Number of Students", classNames:"text-[#516fff]" },
    { title: "Total Non-Paid Contestants", icon: Clock, color: "#9879f4", amount: nonPaidContestants.length, description:"Number of Unpaid Students", classNames:"text-[#9879f4]" },
    { title: "Total Paid Contestants", icon: TickSquare, color: "#4AdE80", amount: paidContestants.length, description:"Number of Paid Students", classNames:"text-[#4AdE80]" },
    { title: "Total Schools", icon: BookSquare, color: "#f98838", amount: totalSchools, description:"Number of Unique Schools", classNames: "text-[#f98838]" },
  ]

  return (
    <main className="py-5">
      <div key={"summaryBox"} className="flex flex-wrap gap-5">
        {summaryItems.map((item, index) => (
          <SummaryBox key={`summary-${index}`} title={item.title} icon={item.icon} color={item.color} amount={item.amount} description={item.description} classNames={item.classNames} />
        ))}
      </div>
    </main>
  );
}

export default page;