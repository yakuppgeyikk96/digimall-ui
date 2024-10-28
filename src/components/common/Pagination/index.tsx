"use client";

import {
  Pagination as NextUIPagination,
  PaginationProps,
} from "@nextui-org/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
    params.set("pageSize", "1");

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <NextUIPagination
      className={className}
      isCompact={isCompact}
      showControls={showControls}
      total={total}
      page={page}
      onChange={handlePageChange}
    />
  );
}
