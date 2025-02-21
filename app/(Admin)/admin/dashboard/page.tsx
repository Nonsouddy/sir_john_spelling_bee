
//Actions
import getCurrentUser from "@/actions/fetch/currentUser";
import getAdmin from "@/actions/fetch/getAdmin";
import getContestants from "@/actions/fetch/getContestants";

//Components
import SummaryBox from "@/components/Dashboard/SummaryBox";
import StudentTable from "@/components/Dashboard/StudentTable";

//Icons
import { UserSquare, Clock, TickSquare, BookSquare } from "iconsax-react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;
const page = async () => {

  const accessTokenUser = await getCurrentUser();
  const currentAdmin = await getAdmin(accessTokenUser.id);
  const { allContestants, nonPaidContestants, paidContestants, lastTwentyUnPaidContestants, totalSchools } = await getContestants();

  const summaryItems = [
    { title: "Total Contestants", icon: UserSquare, color: "#516fff", amount: allContestants.length, description: "Number of Students", classNames: "text-[#516fff]" },
    { title: "Total Non-Paid Contestants", icon: Clock, color: "#9879f4", amount: nonPaidContestants.length, description: "Number of Unpaid Students", classNames: "text-[#9879f4]" },
    { title: "Total Paid Contestants", icon: TickSquare, color: "#4AdE80", amount: paidContestants.length, description: "Number of Paid Students", classNames: "text-[#4AdE80]" },
    { title: "Total Schools", icon: BookSquare, color: "#f98838", amount: totalSchools, description: "Number of Unique Schools", classNames: "text-[#f98838]" },
  ]

  return (
    <main className="py-5">
      <div key={"summaryBox"} className="flex flex-wrap gap-5">
        {summaryItems.map((item, index) => (
          <SummaryBox key={`summary-${index}`} title={item.title} icon={item.icon} color={item.color} amount={item.amount} description={item.description} classNames={item.classNames} />
        ))}
      </div>
      <div key={"table"} className="mt-10 p-4 border border-slate-800 rounded-xl">
        <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-y-1 pb-2 border-slate-800 border-b">
          <p className="font-semibold text-white text-sm md:text-base xl:text-lg">Latest Contestants<span className="sm:hidden ml-6 text-[10px] md:text-xs xl:text-sm">Last 10 (Ten) Unpaid Contestants</span></p>
          <p className="hidden sm:block text-[10px] md:text-xs xl:text-sm">Last 20 (Twenty) Unpaid Contestants</p>
        </div>
        <div className="mt-5">
          <StudentTable contestants={lastTwentyUnPaidContestants} role={currentAdmin.role} />
        </div>
      </div>
    </main>
  );
}

export default page;
