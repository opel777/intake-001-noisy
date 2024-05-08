import Navbar from "@/components/navbarComponent/navbar"

import { ChakraProvider, ColorModeScript, localStorageManager } from "@chakra-ui/react"

import { ReactNode } from "react"

const LandingLayout = ({ children }: { children: ReactNode }) => {
    return (
      <>
        <Navbar></Navbar>
         {children}
      </>
    )
  }
  export default LandingLayout