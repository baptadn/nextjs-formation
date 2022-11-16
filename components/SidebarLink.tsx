import { useRouter } from "next/router";
import React, { ReactNode } from "react";

interface IProps {
  icon: ReactNode;
  label: string;
  href: string;
}

const SidebarLink = ({ href, icon, label }: IProps) => {
  const { pathname } = useRouter();

  const style =
    pathname === href
      ? "relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
      : "group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300";

  return (
    <li>
      <a className={style} href={href}>
        {icon}
        <span className="-mr-1 font-medium">{label}</span>
      </a>
    </li>
  );
};

export default SidebarLink;
