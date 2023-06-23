import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";

const adsElement = [
    {
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXnC3fwMwkbIt3ejGRIw3NmbDyUtgS5g2jA&usqp=CAU",
        index:1
    },
    {
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXnC3fwMwkbIt3ejGRIw3NmbDyUtgS5g2jA&usqp=CAU",
        index:2
    },
    {
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXnC3fwMwkbIt3ejGRIw3NmbDyUtgS5g2jA&usqp=CAU",
        index:3
    },
    {
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXnC3fwMwkbIt3ejGRIw3NmbDyUtgS5g2jA&usqp=CAU",
        index:4
    },
]

const Ads = () => {
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className=" rounded-lg overflow-hidden"
      >
        {adsElement.map((ad)=>(
            <SwiperSlide key={ad.index}>
                <AdUnit imageUrl={ad.imageUrl} id={ad.index}/>
            </SwiperSlide>
        ))}
      </Swiper>
  )
}

export default Ads

const AdUnit = ({imageUrl,id})=>(
            <img 
                src={imageUrl} 
                alt={`ad${id}`}
                className=" w-full object-contain rounded-lg" 
            />
)