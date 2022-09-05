import {
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import airplane from '../assets/airplane.svg'

export const Hero = () => {
  const textColors = useColorModeValue('white', 'initial')
  return (
    <Flex
      position="relative"
      h={335}
      w="full"
      align="center"
      bgImage="/heroBackground.svg"
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box p="140px">
        <VStack textAlign="left" align="start" zIndex="base" color={textColors}>
          <Heading>5 Continentes, Infinitas possibilidades.</Heading>
          <Text>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.{' '}
          </Text>
        </VStack>
        <Box w={417} h={270} bottom={0} right="140px" position="absolute">
          <Image src={airplane} alt="" layout="fill" />
        </Box>
      </Box>
    </Flex>
  )
}
