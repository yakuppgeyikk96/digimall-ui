"use client";

import {
  Pagination as NextUIPagination,
  PaginationProps,
} from "@nextui-org/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function Pagination({
  isCompact,
  showControls,
  total,
  page,
  className,
}: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", newPage.toString());
    params.set("pageSize", params.get("pageSize") || "10");

    router.push(`${pathname}?${params.toString()}`);
  };

  const totalPage = useMemo(() => {
    const currentPageSize = parseInt(searchParams.get("pageSize") || "10");

    return Math.ceil(total / currentPageSize);
  }, [total, searchParams]);

  return (
    <NextUIPagination
      className={className}
      isCompact={isCompact}
      showControls={showControls}
      total={totalPage}
      page={page}
      onChange={handlePageChange}
    />
  );
}
