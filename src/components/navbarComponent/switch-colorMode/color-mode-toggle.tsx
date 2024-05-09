
import { IoMdMoon } from 'react-icons/io'
import {
  IconButton,
  IconButtonProps,
  useColorMode,
  Flex,
  Switch,
  Spacer,

} from '@chakra-ui/react'

type ColorModeToggleProps = Omit<
  IconButtonProps,
  'aria-label' | 'icon' | 'onClick'
>

function ColorModeToggle({ ...rest }: ColorModeToggleProps) {
  const { colorMode, toggleColorMode } = useColorMode()
 
  return (
    <Flex alignItems="center" marginRight={4}>
      <IconButton
        {...rest}
        aria-label="Dark mode"
        icon={<IoMdMoon height='19.99px' width='18.66px' color="muted" />}
        onClick={toggleColorMode}
        variant="ghost"
      />
      <Spacer />
      <Switch
        id="color-mode-switch"
        colorScheme="yellow"  
        color="yellow.300"
        size="md"
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
    </Flex>
  )
}

export default ColorModeToggle
