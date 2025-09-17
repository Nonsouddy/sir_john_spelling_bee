//Components
import Posts from "@/components/Blog/Posts";

export const revalidate = 0;
const page = () => {
    return ( 
        <main>
            <Posts />
        </main>
     );
}
 
export default page;