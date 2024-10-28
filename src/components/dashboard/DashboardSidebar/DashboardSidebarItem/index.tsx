"use client";

import Link from "next/link";

interface IDashboardSidebarItemProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  href: string;
}

import "./DashboardSidebarItem.css";
import { usePathname } from "next/navigation";
import { cn } from "@nextui-org/react";

export default function DashboardSidebarItem({
  Icon,
  title,
  href,
}: IDashboardSidebarItemProps) {
  const pathname = usePathname();

  return (
    <li>
      <Link href={href} legacyBehavior>
        <a className={cn("nav-link", pathname === href && "active")}>
          <Icon />
          <span>{title}</span>
        </a>
      </Link>
    </li>
  );
}
