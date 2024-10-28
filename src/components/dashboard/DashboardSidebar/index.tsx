"use client";

import useDashboardSidebarLogic from "./DashboardSidebar.logic";
import DashboardSidebarItem from "./DashboardSidebarItem";

import "./DashboardSidebar.css";

export default function DashboardSidebar() {
  const { dashboardSidebarItems } = useDashboardSidebarLogic();

  return (
    <aside>
      <nav>
        <ul className="nav-list">
          {dashboardSidebarItems.map((item) => (
            <DashboardSidebarItem
              key={item.key}
              title={item.title}
              href={item.href}
              Icon={item.Icon}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
