import { IDashboardPageLayoutProps } from "./DashboardPageLayout.model";
import Breadcrumb from "@/components/common/Breadcrumb";

export default function DashboardPageLayout({
  title,
  breadcrumbs,
  children,
}: IDashboardPageLayoutProps) {
  return (
    <section className="flex-1 w-full px-8">
      <div className="my-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">{title}</h1>
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <Breadcrumb items={breadcrumbs} />
        ) : null}
      </div>
      <div className="h-[1px] w-full bg-default-400"></div>
      <section className="py-6">{children}</section>
    </section>
  );
}
