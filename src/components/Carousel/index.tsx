import { Swiper, SwiperSlide } from 'swiper/react'
import europeImage from '../../assets/europe.png'
import NAImage from '../../assets/NA.jpg'
import OceaniaImage from '../../assets/Oceania.jpg'
import SAImage from '../../assets/SAImage.jpg'
import AfricaImage from '../../assets/Africa.jpg'
import AsiaImage from '../../assets/Asia.jpg'

import 'swiper/css'
import 'swiper/css/navigation'

import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { Navigation, Pagination } from 'swiper'
import Link from 'next/link'

export const Carousel = () => {
  return (
    <Link href="/continent/" passHref>
      <Box as="a" display="block" w="1240px" h="450px" mt="52px" mb="40px">
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="swiper"
        >
          <SwiperSlide className="swiper-slide">
            <Image src={europeImage} alt="" layout="fill" />
            <VStack color="white">
              <Heading zIndex="base">Europa</Heading>
              <Text zIndex="base">O continente mais antigo.</Text>
            </VStack>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image
              src={NAImage}
              alt=""
              layout="fill"
              style={{ opacity: 0.7 }}
            />
            <VStack color="white">
              <Heading zIndex="base">América do Norte</Heading>
              <Text zIndex="base">O continente da Tecnologia.</Text>
            </VStack>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image
              src={AfricaImage}
              alt=""
              layout="fill"
              style={{ opacity: 0.7 }}
            />
            <VStack color="white">
              <Heading zIndex="base">África</Heading>
              {/* <Text zIndex="base">
              O continente da pluralidade étnica e cultural.
            </Text> */}
              <Text zIndex="base">O novíssimo continente.</Text>
            </VStack>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image
              src={OceaniaImage}
              alt=""
              layout="fill"
              style={{ opacity: 0.7 }}
            />
            <VStack color="white">
              <Heading zIndex="base">Oceania</Heading>
              {/* <Text zIndex="base">O novíssimo continente.</Text> */}
              <Text zIndex="base">O novíssimo continente.</Text>
            </VStack>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image
              src={SAImage}
              alt=""
              layout="fill"
              style={{ opacity: 0.7 }}
            />
            <VStack color="white">
              <Heading zIndex="base">América do Sul</Heading>
              {/* <Text zIndex="base">O continente .</Text> */}
              <Text zIndex="base">O novíssimo continente.</Text>
            </VStack>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image
              src={AsiaImage}
              alt=""
              layout="fill"
              style={{ opacity: 0.7 }}
            />
            <VStack color="white">
              <Heading zIndex="base">Europa</Heading>
              {/* <Text zIndex="base">O continente mais antigo.</Text> */}
              <Text zIndex="base">O novíssimo continente.</Text>
            </VStack>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Link>
  )
}
