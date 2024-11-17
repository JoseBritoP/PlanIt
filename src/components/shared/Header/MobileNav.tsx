import Image from "next/image";
import NavItems from "./NavItems";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="align-middle">
            <Image
              src="/assets/icons/menu.svg"
              alt="menu"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </MenubarTrigger>
          <MenubarContent className="py-4 px-2">
           <NavItems/>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </nav>
  );
};

export default MobileNav;
