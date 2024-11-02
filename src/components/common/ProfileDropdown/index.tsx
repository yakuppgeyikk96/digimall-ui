import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { IProfileDropdownProps } from "./models";
import LogoutIcon from "@/common/icons/LogoutIcon";
import { signout } from "@/services/auth/signout";

export default function ProfileDropdown({ user }: IProfileDropdownProps) {
  return (
    <Dropdown placement="bottom-end" size="sm" className="p-0">
      <DropdownTrigger>
        <Avatar isBordered as="button" className="transition-transform" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" className="p-0" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <div className="p-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{user.displayName || user.email}</p>
          </div>
        </DropdownItem>
        <DropdownItem
          key="sign-out"
          className="h-14 border"
          onClick={() => signout()}
        >
          <div className="flex gap-2 items-center p-2">
            <LogoutIcon />
            <span>Sign out</span>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
