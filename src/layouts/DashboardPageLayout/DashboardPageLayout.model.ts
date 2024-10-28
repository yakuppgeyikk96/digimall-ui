import { IBreadcrumbItem } from "@/components/common/Breadcrumb/models";

export interface IDashboardPageLayoutProps {
  title: string;
  children: React.ReactNode;
  breadcrumbs?: IBreadcrumbItem[];
}
