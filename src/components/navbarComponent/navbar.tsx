'use client';
import { ReactNode, useEffect, useRef, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
 
 

} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { routes } from "@/constants/app-routes";
import MenuDrawer from "./navbar-menu-drawer";
import ColorModeToggle from "./switch-colorMode/color-mode-toggle";
import useAuthStore from "@/authStore";



const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    fontSize={{ lg: '18x'}}
   
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.300", "gray.400"),
    }}
    href={href}
    
  >
    {children}
  </Link>
);


export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
 
   
   const { isAuthenticated, login, logout } = useAuthStore();

const bg =useColorModeValue('gray.200','gray.900');


  return (
    <Box
      
      px={4}
      bg= {bg}
    
     
      p="15px"
    >

      <Flex  alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <HStack>
            <Image
              src="/noisy_isotipo1000.png"
              alt="logonoisy"
              width={"50px"}
              height="43px"
              top="27px"
              left="23px"
            />
            <Image  
             src={useColorModeValue( "/Logo_dark.png" , "/logoNoisyLight.png")}
              alt="logo"
              width={"96x"}
              height="96px"

            />
          </HStack>
         
        </Box>
        <HStack spacing={4} alignItems={"center"}>
          <HStack
            as={"nav"}
            display={{ base: "none", lg: "flex", md: "none" }}
            spacing={{ lg: "2", xl: "16" }}
          >
            {routes.map((link) => (
              <NavLink  key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        
        <MenuDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />

        {isDrawerOpen && (
          <MenuDrawer
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          />
        )}

        <HStack marginTop="8px">
          <Button
            size={"md"}
            aria-label={"Open Menu"}
            display={{ lg: "none" }}
            onClick={toggleDrawer}
            backgroundColor="transparent"
            style={{
              marginLeft: "80px",

              outline: "none",
            }}
          >
            <HamburgerIcon width="32px" height="32px" top="31px" left="303px" />
          </Button>

          <Box
            top="1rem"
            right="1rem"
            display={{ base: "none", lg: "flex", md: "none" }}
          >
            <ColorModeToggle />
          </Box>
         
         <Menu>
     <MenuButton>
       <Avatar  src="" />

     </MenuButton>
     <MenuList>
     {isAuthenticated? (
                <MenuItem onClick={logout}
                >
                Cerrar sesión
              </MenuItem>):(
                <>
                <MenuItem
                onClick={login}
                  
                >
                  Inicia sesión
                </MenuItem>
                <MenuDivider></MenuDivider>
                <MenuItem
                  onClick={login}
                  
                >
                  Regístrate
                </MenuItem>
                
                </>
                )}
     </MenuList>
        </Menu>
          
        </HStack>
       
      </Flex>
      
    </Box>
    
  );
}
