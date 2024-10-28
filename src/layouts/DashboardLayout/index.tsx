import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full">
      <DashboardSidebar />
      <section className="flex-1">{children}</section>
    </div>
  );
}
