//Components
import Post from "@/components/Blog/Post";

export const revalidate = 0;
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {

    const slug = (await params).slug;

    return (
        <Post slug={slug} />
    );
}

export default page;