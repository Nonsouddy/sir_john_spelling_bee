import Link from "next/link";


const NavItem = ({ href, icon: Icon, currentPath, label }: NavItem) => {
    const isActive = currentPath === href;

    return (
        <Link href={href} className={`${isActive && "p-2 rounded-[2rem] bg-[#F0F0F0] text-black"} flex gap-x-1 items-center text-gray-600 w-auto duration-300`}>
            <Icon size="24" color={`${isActive ? "#000" : "#6E6E6E"}`} variant={isActive ? "Bold" : "Outline"} />
            {isActive && <p className="font-semibold">{label}</p>}
        </Link>
    );
};

export default NavItem;