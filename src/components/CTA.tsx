import {
  Box,
  Center,
  Heading,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { Carousel } from './Carousel'

export const CTA = () => {
  const textColors = useColorModeValue('gray.600', 'initial')
  return (
    <Center py="52px">
      <Box>
        <Stack direction="column" textAlign="center">
          <Heading color={textColors}>Vamos nessa?</Heading>
          <Heading color={textColors}>Então escolha seu continente</Heading>
        </Stack>
        <Carousel />
      </Box>
    </Center>
  )
}
