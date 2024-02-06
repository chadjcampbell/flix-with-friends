import { signout } from "@/actions/auth/signout";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";

export default function ProfileMenu() {
  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <Avatar isBordered color="secondary" showFallback src="TODO" />
      </DropdownTrigger>
      <DropdownMenu aria-label="User Actions" variant="flat">
        <DropdownItem key="settings">My Settings</DropdownItem>
        <DropdownItem onClick={() => signout()} key="logout" color="danger">
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
