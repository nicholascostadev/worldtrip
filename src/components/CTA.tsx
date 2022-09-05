import { Center, Heading, Stack, useColorModeValue } from '@chakra-ui/react'

export const CTA = () => {
  const textColors = useColorModeValue('gray.600', 'initial')
  return (
    <Center py="52px">
      <Stack direction="column" textAlign="center">
        <Heading color={textColors}>Vamos nessa?</Heading>
        <Heading color={textColors}>Então escolha seu contiente</Heading>
      </Stack>
    </Center>
  )
}
