"use client";

import { usePathname } from "next/navigation";

//Component
import SideItem from "./SideItem";

//Icons
import { Calendar1, HomeHashtag, Profile2User, Gallery, BookSaved, Logout } from "iconsax-react";

const navItems = [
  { href: "/admin/dashboard", icon: HomeHashtag, label: "Dashboard" },
  { href: "/admin/events", icon: Calendar1, label: "Events" },
  { href: "/admin/gallery", icon: Gallery, label: "Gallery" },
  { href: "/admin/resources", icon: BookSaved, label: "Materials" },
  {href: "/admin/staff", icon: Profile2User, label: "Staff", role: "super_admin"}
];

const logoutItem = { href: "/logout", icon: Logout, label: "Logout" };

const SideBar = ({ role }: { role: string }) => {
  const currentPath = usePathname();

  // Filter navItems based on role
  const filteredNavItems = navItems.filter(item => !item.role || item.role === role);

  return (
    <main className="fixed flex flex-col bg-[#262626] px-10 py-6 w-[20rem] h-dvh text-[#c8c8c9]">
      <div className="flex flex-col flex-grow gap-y-8 mt-20">
        {filteredNavItems.map((item, index) => (
          <SideItem key={`items-${index}`} currentPath={currentPath} href={item.href} icon={item.icon} label={item.label} />
        ))}
      </div>
      <div className="mt-8">
        <SideItem currentPath={currentPath} href={logoutItem.href} icon={logoutItem.icon} label={logoutItem.label} />
      </div>
    </main>
  );
};

export default SideBar;
