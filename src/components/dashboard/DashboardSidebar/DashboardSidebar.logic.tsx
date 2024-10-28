import HomeIcon from "@/common/icons/HomeIcon";
import RectangleGroupIcon from "@/common/icons/RectangleGroupIcon";
import { useMemo } from "react";
import { IDashboardSidebarItem } from "./DashboardSidebar.model";

const useDashboardSidebarLogic = () => {
  const dashboardSidebarItems = useMemo(() => {
    const items: IDashboardSidebarItem[] = [
      {
        key: "dashboard",
        title: "Dashboard",
        Icon: HomeIcon,
        href: "/dashboard",
      },
      {
        key: "products",
        title: "Products",
        Icon: RectangleGroupIcon,
        href: "/dashboard/products",
      },
    ];
    return items;
  }, []);

  return {
    dashboardSidebarItems,
  };
};

export default useDashboardSidebarLogic;
