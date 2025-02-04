//Components
import LoginForm from "@/components/Auth/LoginForm";

const page = () => {
    return ( 
        <main className="place-content-center grid bg-black">
            <section className="bg-gray-800 rounded-2xl">
                <LoginForm />
            </section>
        </main>
     );
}
 
export default page;