import PlusIcon from "@/common/icons/PlusIcon";
import DashboardProductSearch from "./ProductSearch";
import LinkButton from "@/components/common/LinkButton";

export default function DashboardProductHeader() {
  return (
    <div className="mb-4 flex justify-between items-center">
      <DashboardProductSearch />
      <LinkButton
        href="/dashboard/products/add"
        color="primary"
        startContent={
          <div className="text-white">
            <PlusIcon className="w-5 h-5" />
          </div>
        }
      >
        Add product
      </LinkButton>
    </div>
  );
}
