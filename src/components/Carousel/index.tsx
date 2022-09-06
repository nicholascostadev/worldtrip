import { Swiper, SwiperSlide } from 'swiper/react'
import AfricaImage from '../../assets/Africa.jpg'
import AsiaImage from '../../assets/Asia.jpg'
import EuropeImage from '../../assets/europe.png'
import NAImage from '../../assets/NA.jpg'
import OceaniaImage from '../../assets/Oceania.jpg'
import SAImage from '../../assets/SAImage.jpg'

import 'swiper/css'
import 'swiper/css/navigation'

import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation, Pagination } from 'swiper'

const carousels = [
  {
    image: NAImage,
    heading: 'América do Norte',
    text: 'O Continente da tecnologia',
  },
  {
    image: SAImage,
    heading: 'América do Sul',
    text: 'O Continente da putaria',
  },
  {
    image: OceaniaImage,
    heading: 'Oceania',
    text: 'O novíssimo continente.',
  },
  {
    image: AfricaImage,
    heading: 'África',
    text: 'O continente da pluralidade étnica e cultural.',
  },
  {
    image: EuropeImage,
    heading: 'Europa',
    text: 'O continente mais antigo.',
  },
  {
    image: AsiaImage,
    heading: 'Ásia',
    text: 'O Continente dos xinglinglinglongpingpong',
  },
] as const

export const Carousel = () => {
  return (
    <Box display="block" w="1240px" h="450px" mt="52px" mb="40px">
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="swiper"
      >
        {carousels.map((item) => (
          <SwiperSlide key={item.heading} className="swiper-slide">
            <Image src={item.image} alt="" layout="fill" />

            <VStack color="white">
              <Link
                key={item.heading}
                href={`/continent/${item.heading}`}
                passHref
              >
                <Heading as="a" zIndex="base">
                  {item.heading}
                </Heading>
              </Link>

              <Link
                key={item.heading}
                href={`/continent/${item.heading}`}
                passHref
              >
                <Text as="a" zIndex="base">
                  {item.text}
                </Text>
              </Link>
            </VStack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
