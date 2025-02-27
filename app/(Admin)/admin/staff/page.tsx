import { redirect } from 'next/navigation';

//Actions
import getCurrentUser from "@/actions/fetch/currentUser";
import getAdmin from "@/actions/fetch/getAdmin";
import getStaff from "@/actions/fetch/getStaff";

//Components
import Heading from "@/components/Heading";
import StaffTable from "@/components/Staff/Table";

//ICons
import { SecurityUser } from "iconsax-react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;
const page = async () => {

  const accessTokenUser = await getCurrentUser();
  const currentAdmin = await getAdmin(accessTokenUser.id);

  //Redirect to Dashboard if it's not a super admin
  if (currentAdmin.role !== "super_admin") {
    redirect(`/unauthorised`)
  }

  const admins = await getStaff();
  const staff = admins.filter((admin) => admin.email !== "developer@admin.com")

  return (
    <main>
      <Heading totalEvents={staff.length} page="staff" Icon={<SecurityUser variant="Bold" size="28" color="#16a34a" />} />
      <StaffTable admins={staff} />
    </main>
  );
}

export default page;