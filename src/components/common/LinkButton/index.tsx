"use client";

import { Button, ButtonProps } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export interface ILinkButtonProps extends ButtonProps {
  href: string;
}

export default function LinkButton({
  children,
  href,
  color,
  variant,
  startContent,
  endContent,
}: ILinkButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <Button
      startContent={startContent}
      endContent={endContent}
      color={color}
      variant={variant}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
