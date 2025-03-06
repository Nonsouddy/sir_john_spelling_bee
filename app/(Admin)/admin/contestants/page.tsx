//Actions
import getCurrentUser from "@/actions/fetch/currentUser";
import getAdmin from "@/actions/fetch/getAdmin";
import getContestants from "@/actions/fetch/getContestants";

//Components
import Heading from "@/components/Contestants/Heading";

export const dynamic = 'force-dynamic';
export const revalidate = 0;
const page = async () => {

    const accessTokenUser = await getCurrentUser();
    const currentAdmin = await getAdmin(accessTokenUser.id);
    const { nonPaidContestants, paidContestants } = await getContestants()

    return (
        <main>
            <Heading nonPaidContestants={nonPaidContestants} paidContestants={paidContestants} role={currentAdmin.role} />
        </main>
    );
}

export default page;