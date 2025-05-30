import Link from "next/link";

const SideItem = ({ href, icon: Icon, currentPath, label }: NavItem) => {

  const isActive = currentPath === href;


  // Active and Base classes
  const baseClasses = `hover:bg-gray-700 duration-300`;
  const activeClasses = `bg-[#F0F0F0] text-black`;

  return (
    <Link href={href} className={`${isActive ? activeClasses : baseClasses} w-full rounded-[2rem] flex gap-x-2 py-3 px-6 items-center`}>
      <Icon size="24" variant={isActive ? "Bold" : "Outline"} color={`${isActive ? "#000" : "#c8c8c9"}`} />
      <p className="font-semibold">{label}</p>
    </Link>
  );
};

export default SideItem;
