"use client";

import { usePathname } from "next/navigation";

//Components
import NavItem from "./NavItem";

//Icons
import { Calendar1, HomeHashtag, Profile2User, Gallery, BookSaved } from "iconsax-react";

const navItems = [
  { href: "/admin/dashboard", icon: HomeHashtag, label: "Dashboard" },
  { href: "/admin/events", icon: Calendar1, label: "Events" },
  { href: "/admin/gallery", icon: Gallery, label: "Gallery" },
  { href: "/admin/resources", icon: BookSaved, label: "Materials" },
  {href: "/admin/staff", icon: Profile2User, label: "Staff", role: "super_admin"}
];

const DownBar = ({ role }: { role: string }) => {
  const currentPath = usePathname();

  // Filter navItems based on role
  const filteredNavItems = navItems.filter(item => !item.role || item.role === role);

  return (
    <main className="bottom-0 left-0 fixed bg-[#F0F0F0] p-2 w-full">
      <div className="flex justify-between items-center bg-black p-2 rounded-[2rem]">
        {filteredNavItems.map((item) => (
          <NavItem key={item.label} currentPath={currentPath} href={item.href} icon={item.icon} label={item.label} />
        ))}
      </div>
    </main>
  );
};

export default DownBar;
