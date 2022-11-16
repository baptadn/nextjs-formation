import React from "react";
import DashboardIcon from "./icons/DashboardIcon";
import FolderIcon from "./icons/FolderIcon";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800 dark:border-gray-700">
      <div>
        <div className="mt-8 text-center">
          <h5 className="mt-4 hidden text-xl font-semibold text-gray-600 lg:block dark:text-gray-300">
            John Doe
          </h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="mt-8 space-y-2 tracking-wide">
          <SidebarLink href="/" label="Dashboard" icon={<DashboardIcon />} />
          <SidebarLink
            href="/trending"
            label="Trending"
            icon={<FolderIcon />}
          />
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
