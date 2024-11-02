import { useCallback, useMemo } from "react";
import {
  IDashboardProductTableColumnItem,
  IDashboardProductTableColumnNames,
  IDashboardProductTableData,
  IDashboardProductTableProps,
} from "./models";
import { Image, Tooltip } from "@nextui-org/react";
import NextImage from "next/image";
import EyeIcon from "@/common/icons/EyeIcon";
import EditIcon from "@/common/icons/EditIcon";
import TrashIcon from "@/common/icons/TrashIcon";

import "./styles.css";

const useDashboardProductTableLogic = ({
  products,
}: IDashboardProductTableProps) => {
  const columns: IDashboardProductTableColumnItem[] = [
    {
      key: "index",
      label: "#",
    },
    {
      key: "images",
      label: "Images",
    },
    {
      key: "name",
      label: "Name",
    },
    {
      key: "description",
      label: "Description",
    },
    {
      key: "price",
      label: "Price",
    },
    {
      key: "stock",
      label: "Stock",
    },
    {
      key: "sku",
      label: "SKU",
    },
    {
      key: "actions",
      label: "Actions",
    },
  ];

  const rows: IDashboardProductTableData[] = useMemo(() => {
    return products.map((product, index) => ({
      index: index + 1,
      id: product.id,
      name: product.name,
      description: product.description || "-",
      price: product.price,
      stock: product.stock,
      sku: product.sku,
      images: product.images,
    }));
  }, [products]);

  const renderCell = useCallback(
    (
      item: IDashboardProductTableData,
      columnKey: IDashboardProductTableColumnNames
    ) => {
      let cellValue = null;

      if (columnKey !== "actions") {
        cellValue = item[columnKey];
      }

      switch (columnKey) {
        case "index":
          return <div className="text-center">{cellValue}</div>;
        case "images":
          return (
            <Image
              as={NextImage}
              sizes="100vw"
              width={0}
              height={0}
              src={
                typeof cellValue === "object" && cellValue ? cellValue[0] : ""
              }
              alt={item.name}
              className="w-24 h-auto"
            />
          );
        case "name":
          return <div>{cellValue}</div>;
        case "description":
          return <div className="max-w-96">{cellValue}</div>;
        case "price":
          return `$${cellValue}`;
        case "actions":
          return (
            <div className="flex items-center gap-2">
              <Tooltip content="Details">
                <div className="action-icon-container text-primary-500">
                  <EyeIcon />
                </div>
              </Tooltip>
              <Tooltip content="Edit user">
                <div className="action-icon-container">
                  <EditIcon />
                </div>
              </Tooltip>
              <Tooltip content="Delete user">
                <div className="action-icon-container text-danger-500">
                  <TrashIcon />
                </div>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  return {
    columns,
    rows,
    renderCell,
  };
};

export default useDashboardProductTableLogic;
