
//Actions
import getMaterials from "@/actions/fetch/getMaterials";

//Components
import Heading from "@/components/Heading";

//Icons
import { Book1 } from "iconsax-react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;
const page = async () => {

  const materials = await getMaterials();

  return ( 
    <main>
      <Heading totalEvents={materials.length} page="materials" Icon={<Book1 variant="Bold" size="28" color="#FFF" />} />
    </main>
   );
}
 
export default page;