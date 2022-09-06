import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Flex, IconButton, useColorMode } from '@chakra-ui/react'
import NextImage from 'next/image'

export const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <Flex justify="space-between" align="center" height={100} px="140px">
      <NextImage
        src="/logo.svg"
        alt="logo"
        layout="fixed"
        width={184}
        height={45}
        placeholder="blur"
        blurDataURL="/fallbackImage.png"
      />
      <IconButton
        aria-label="Search database"
        icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      />
    </Flex>
  )
}
