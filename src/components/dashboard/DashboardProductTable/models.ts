import IProduct from "@/common/models/product/IProduct";

export interface IDashboardProductTableData {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  sku: string;
  images: string[];
}

export type IDashboardProductTableColumnNames =
  | "name"
  | "description"
  | "price"
  | "stock"
  | "sku"
  | "images"
  | "actions";

export interface IDashboardProductTableColumnItem {
  key: IDashboardProductTableColumnNames;
  label: string;
}

export interface IDashboardProductTableProps {
  products: IProduct[];
}
