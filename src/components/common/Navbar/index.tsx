import {
  NavbarBrand,
  Navbar as NavbarContainer,
  NavbarContent,
} from "@nextui-org/navbar";
import NavbarActions from "./NavbarActions";

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
        <NavbarActions />
      </NavbarContent>
    </NavbarContainer>
  );
}
