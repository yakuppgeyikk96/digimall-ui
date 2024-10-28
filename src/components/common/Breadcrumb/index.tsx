"use client";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";
import { IBreadcrumbItem, IBreadcrumbProps } from "./models";

export default function Breadcrumb({ items }: IBreadcrumbProps) {
  return (
    <Breadcrumbs>
      {items.map((item: IBreadcrumbItem, index) => (
        <BreadcrumbItem key={index} href={item.href}>
          {item.label}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
}
