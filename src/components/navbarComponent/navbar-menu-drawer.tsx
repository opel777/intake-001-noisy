"use client";
import { ReactNode, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Link,
  VStack,
} from "@chakra-ui/react";

import useAuthStore from "@/authStore";
import { routes } from "@/constants/app-routes";
import ColorModeToggle from "./switch-colorMode/color-mode-toggle";
const MenuDrawer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { isAuthenticated, login, logout } = useAuthStore();

  return (
    <>
      <Drawer size="full" isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgGradient="linear( #6B46C1 , #9F7AEA )">
          <Box>
            <DrawerCloseButton color="#FFFFFF" width="40px" height="40px" />
          </Box>

          <DrawerHeader
            color="#FFFFFF"
            padding={8}
            fontFamily="Lato"
            fontSize="18px"
          >
            Menú
          </DrawerHeader>
          <Flex justifyContent="space-between" alignItems="center">
            <ColorModeToggle marginLeft={4} />
            <HStack spacing={4} paddingRight={8}>
              <Avatar width="42px" height="42px" marginRight={6} />
            </HStack>
          </Flex>

          <DrawerBody>
            <Flex
              direction={{ base: "column", md: "column" }}
              textAlign={{ base: "right", md: "center" }}
              padding={{ base: 8, md: 8 }}
              bottom={{ base: 8, md: 10 }}
            >
              {routes.map((route, index) => (
                <Box key={index} marginBottom={{ base: 8, md: 8 }}>
                  <Link
                    key={index}
                    href={route.href}
                    onClick={onClose}
                    marginTop={{ base: 8, md: 8 }}
                    fontFamily="Lato"
                    color="#FFFFFF"
                    fontSize={{ base: "18px", md: "20px" }}
                    fontWeight="bold"
                    px={2}
                    py={1}
                    width="93px"
                    height="49px"
                    _hover={{
                      textDecoration: "none",
                      width: "93px",
                      height: "49px",
                      background: "purple.600",
                    }}
                  >
                    {route.label}
                  </Link>
                </Box>
              ))}
            </Flex>
            <VStack spacing={12}>
              <HStack spacing={8} justifyContent="center">
                {isAuthenticated ? (
                  <Button
                    onClick={logout}
                    style={{ padding: "0px 16px 0px 16px" }}
                    backgroundColor="#6B46C1"
                    fontFamily="Inter"
                    fontWeight="600px"
                    color="#FFFFFF"
                    fontSize="16px"
                    lineHeight="24px"
                  >
                    Cerrar sesión
                  </Button>
                ) : (
                  <>
                    <Button
                      onClick={login}
                      style={{ padding: "0px 16px 0px 16px" }}
                      backgroundColor="#6B46C1"
                      fontFamily="Inter"
                      fontWeight="600px"
                      color="#FFFFFF"
                      fontSize="16px"
                      lineHeight="24px"
                    >
                      Regístrate
                    </Button>
                    <Button
                      onClick={login}
                      style={{ padding: "0px 16px 0px 16px" }}
                      backgroundColor="#6B46C1"
                      fontFamily="Inter"
                      fontWeight="600px"
                      color="#FFFFFF"
                      fontSize="16px"
                      lineHeight="24px"
                    >
                      Inicia sesión
                    </Button>
                  </>
                )}
              </HStack>

              <Button
                borderColor="Purple600"
                border=" 1px solid var(--Purple600, #6B46C1)"
                style={{ padding: "0px 16px 0px 16px" }}
                backgroundColor="transparent"
                fontFamily="Inter"
                fontWeight="600px"
                color="#FFFFFF"
                fontSize="16px"
                lineHeight="24px"
              >
                Regístrate como organizador
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
