'use client'

import theme from '@/providers/chakraui-theme'
import { ChakraProvider, ColorModeScript, localStorageManager} from '@chakra-ui/react'
import { ReactNode } from 'react'

export function ChakraUIProvider({ children }: { children: ReactNode }) {
  return (
    <>
     <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
      {children}
    </ChakraProvider></>
  )
}
