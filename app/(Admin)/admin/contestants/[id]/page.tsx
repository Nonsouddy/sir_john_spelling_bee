
//Actions
import getContestant from "@/actions/fetch/getContestant";

//Components
import UserDataDisplay from "@/components/Contestants/UserData";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {

    const id = (await params).id;
    const { success, contestant } = await getContestant(id);

    if (success && contestant !== null) {
        return <UserDataDisplay contestant={contestant} />;
    }

    return <main className="place-items-center grid">Contestant not found</main>;
}