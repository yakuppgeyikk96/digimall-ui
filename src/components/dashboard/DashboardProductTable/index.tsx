"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import useDashboardProductTableLogic from "./DashboardProductTable.logic";
import {
  IDashboardProductTableColumnNames,
  IDashboardProductTableProps,
} from "./models";

export default function DashboardProductTable({
  products,
}: IDashboardProductTableProps) {
  const { rows, columns, renderCell } = useDashboardProductTableLogic({
    products,
  });

  return (
    <Table
      removeWrapper
      selectionMode="multiple"
      className="border border-default-400 rounded-lg"
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody items={rows} emptyContent="No data found!">
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>
                {renderCell(
                  item,
                  columnKey as IDashboardProductTableColumnNames
                )}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
