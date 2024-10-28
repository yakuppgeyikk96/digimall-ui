import {
  NavbarBrand,
  Navbar as NavbarContainer,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button, Link } from "@nextui-org/react";

export default function Navbar() {
  return (
    <NavbarContainer className="border-b">
      <NavbarBrand>
        <p className="font-bold text-inherit">DigiMall</p>
      </NavbarBrand>
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/" color="primary">
            Home
          </Link>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NavbarContainer>
  );
}
