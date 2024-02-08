import { signout } from "@/actions/auth/signout";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { Key } from "react";

export default function ProfileMenu() {
  const itemSelection = (key: Key) => {
    switch (key) {
      case "logout":
        signout();
        break;

      default:
        break;
    }
  };

  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          showFallback
          src="TODO"
        />
      </DropdownTrigger>
      <DropdownMenu
        onAction={(key) => itemSelection(key)}
        aria-label="User Actions"
        variant="flat"
      >
        <DropdownItem key="settings">My Settings</DropdownItem>
        <DropdownItem key="logout" color="danger">
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
