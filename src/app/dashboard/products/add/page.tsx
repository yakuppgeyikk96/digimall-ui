import ProductAddForm from "@/components/dashboard/ProductAddForm";
import DashboardPageLayout from "@/layouts/DashboardPageLayout";
import { Card, CardBody } from "@nextui-org/card";

export default function AddProductPage() {
  return (
    <DashboardPageLayout
      title="Add Product"
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        { label: "Products", href: "/dashboard/products" },
        { label: "Add Product" },
      ]}
    >
      <Card className="p-4 shadow-none border">
        <CardBody>
          <ProductAddForm />
        </CardBody>
      </Card>
    </DashboardPageLayout>
  );
}
