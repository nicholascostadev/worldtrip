import { Text, useColorModeValue, VStack } from '@chakra-ui/react'
import Image from 'next/image'

interface ContinentAdvantageProps {
  advantageImage: string
  text: string
}

export const ContinentAdvantage = ({
  advantageImage,
  text,
}: ContinentAdvantageProps) => {
  const textColor = useColorModeValue('gray.600', 'initial')
  return (
    <VStack spacing="4">
      <Image
        src={advantageImage}
        alt=""
        layout="fixed"
        width={85}
        height={85}
      />
      <Text fontWeight="bold" color={textColor}>
        {text}
      </Text>
    </VStack>
  )
}
