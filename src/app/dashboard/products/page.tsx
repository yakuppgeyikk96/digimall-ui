import Pagination from "@/components/common/Pagination";
import DashboardProductHeader from "@/components/dashboard/DashboardProductHeader";
import DashboardProductTable from "@/components/dashboard/DashboardProductTable";
import DashboardPageLayout from "@/layouts/DashboardPageLayout";
import { getProducts } from "@/services/product/get";

interface IProductPageProps {
  searchParams: {
    text?: string;
    page?: string;
    pageSize?: string;
  };
}

export default async function ProductPage({ searchParams }: IProductPageProps) {
  const text = searchParams.text;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const pageSize = searchParams.pageSize ? parseInt(searchParams.pageSize) : 1;

  const productsResponse = await getProducts({
    text,
    page,
    pageSize,
  });

  if (productsResponse.data === null) {
    return <div>Failed to load products</div>;
  }

  return (
    <DashboardPageLayout
      title="My products"
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        { label: "Products" },
      ]}
    >
      <DashboardProductHeader />
      <div className="min-h-[calc(100vh-20rem)]">
        <DashboardProductTable products={productsResponse.data} />
      </div>
      <Pagination
        isCompact
        className="mt-4 flex justify-center"
        total={100}
        initialPage={1}
      />
    </DashboardPageLayout>
  );
}
