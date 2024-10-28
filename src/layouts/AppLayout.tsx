"use client";

import Navbar from "@/components/common/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main>{children}</main>
    </QueryClientProvider>
  );
}
