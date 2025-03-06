//Actions
import getGallery from "@/actions/fetch/getGallery";

//Components
import Heading from "@/components/Heading";
import GalleryList from "@/components/Gallery/GalleryList";

//Icons
import { GalleryTick } from "iconsax-react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;
const page = async () => {

  const gallery = await getGallery();

  return (
    <main>
      <Heading totalEvents={gallery.length} page="gallery" Icon={<GalleryTick variant="Bold" size="28" color="#007bff" />} />
      <GalleryList gallery={gallery} />
    </main>
  );
}

export default page;