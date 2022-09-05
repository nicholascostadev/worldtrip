import { Flex } from '@chakra-ui/react'
import NextImage from 'next/image'

export const Header = () => {
  return (
    <Flex justify="center" align="center" height={100}>
      <NextImage
        src="/logo.svg"
        alt="logo"
        layout="fixed"
        width={184}
        height={45}
        placeholder="blur"
        blurDataURL="/fallbackImage.png"
      />
    </Flex>
  )
}
