import { HStack } from '@chakra-ui/react'
import building from '../assets/building.svg'
import cocktail from '../assets/cocktail.svg'
import earth from '../assets/earth.svg'
import museum from '../assets/museum.svg'
import surf from '../assets/surf.svg'
import { ContinentAdvantage } from './ContinentAdvantage'

const continentAdvantages = [
  {
    image: cocktail,
    text: 'vida noturna',
  },
  {
    image: surf,
    text: 'praia',
  },
  {
    image: building,
    text: 'moderno',
  },
  {
    image: museum,
    text: 'clássico',
  },
  {
    image: earth,
    text: 'e mais...',
  },
] as const

export const ContinentAdvantages = () => {
  return (
    <HStack p="140px" align="center" justify="center" spacing="130px">
      {continentAdvantages.map((advantage) => (
        <ContinentAdvantage
          key={advantage.text}
          advantageImage={advantage.image}
          text={advantage.text}
        />
      ))}
    </HStack>
  )
}
