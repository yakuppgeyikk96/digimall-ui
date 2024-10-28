"use client";

import MagnifyingGlass from "@/common/icons/MagnifyingGlass";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";

export default function DashboardProductSearch() {
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;

    router.push("/dashboard/products" + `${text ? `?text=${text}` : ""}`);
  };

  return (
    <Input
      className="max-w-96"
      type="text"
      placeholder="Search..."
      startContent={
        <div className="text-primary-300">
          <MagnifyingGlass />
        </div>
      }
      classNames={{
        inputWrapper: "focus-within:border focus-within:border-primary-300",
        input:
          "placeholder:text-default-700 focus-within:placeholder:invisible",
      }}
      onChange={handleSearch}
    />
  );
}
