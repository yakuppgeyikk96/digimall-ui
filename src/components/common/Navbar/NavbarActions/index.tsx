import { NavbarItem } from "@nextui-org/navbar";
import AuthModal from "@/components/common/AuthModal";
import { useAuth } from "@/contexts/AuthContext";
import ProfileDropdown from "../../ProfileDropdown";
import { Skeleton } from "@nextui-org/react";

export default function NavbarActions() {
  const { loading, user } = useAuth();

  if (loading)
    return (
      <Skeleton className="w-24 h-8 rounded-lg">
        <div className="h-full w-full rounded-lg bg-default-200"></div>
      </Skeleton>
    );

  return (
    <NavbarItem>
      {user ? <ProfileDropdown user={user} /> : <AuthModal />}
    </NavbarItem>
  );
}
