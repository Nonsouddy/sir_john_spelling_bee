
//Actions
import getMaterials from "@/actions/fetch/getMaterials";

//Components
import Heading from "@/components/Heading";
import MaterialsDisplay from "@/components/Materials/MaterialDisplay";

//Icons
import { Book1 } from "iconsax-react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;
const page = async () => {

  const materials = await getMaterials();

  return (
    <main>
      <Heading totalEvents={materials.length} page="resources" Icon={<Book1 variant="Bold" size="28" color="#FFF" />} />
      <MaterialsDisplay materials={materials} />
    </main>
  );
}

export default page;