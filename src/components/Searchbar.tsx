import { Input } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <Input
      size="sm"
      radius="full"
      placeholder="Search for flix..."
      startContent={<FaSearch />}
    />
  );
};

export default Searchbar;
