import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination,Mousewheel } from "swiper";
import { IconButton } from "@mui/material";

import "swiper/css/grid";
import "swiper/css/pagination";
import './style.css'


const productArr =[
    {
        imageUrl:'https://www.oberlo.com/media/1603969791-image-1.jpg?fit=max&fm=jpg&w=1824',
        productTitle:'product tile 1',
        price:'100'
    },
    {
        imageUrl:'https://www.oberlo.com/media/1603969791-image-1.jpg?fit=max&fm=jpg&w=1824',
        productTitle:'product tile 2',
        price:'100'
    },
    {
        imageUrl:'https://www.oberlo.com/media/1603969791-image-1.jpg?fit=max&fm=jpg&w=1824',
        productTitle:'product tile 3',
        price:'100'
    },
    {
        imageUrl:'https://www.oberlo.com/media/1603969791-image-1.jpg?fit=max&fm=jpg&w=1824',
        productTitle:'product tile 4',
        price:'100'
    },
    {
        imageUrl:'https://www.oberlo.com/media/1603969791-image-1.jpg?fit=max&fm=jpg&w=1824',
        productTitle:'product tile 5',
        price:'100'
    },
    {
        imageUrl:'https://www.oberlo.com/media/1603969791-image-1.jpg?fit=max&fm=jpg&w=1824',
        productTitle:'product tile 6',
        price:'100'
    },
    {
        imageUrl:'https://www.oberlo.com/media/1603969791-image-1.jpg?fit=max&fm=jpg&w=1824',
        productTitle:'product tile 7',
        price:'100'
    },
    {
        imageUrl:'https://www.oberlo.com/media/1603969791-image-1.jpg?fit=max&fm=jpg&w=1824',
        productTitle:'product tile 8',
        price:'100'
    },
    {
        imageUrl:'https://www.oberlo.com/media/1603969791-image-1.jpg?fit=max&fm=jpg&w=1824',
        productTitle:'product tile 9',
        price:'100'
    },
]

const Product = ({title,rowsCount,slidesPerView}) => {
  return (
    <section className=" w-full mt-6">
        <h1 className=" text-lg font-bold mb-3">{title}</h1>
         <Swiper
        slidesPerView={Number(slidesPerView)}
        grid={{
          rows: Number(rowsCount),
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Grid, Pagination,Mousewheel]}
        className="mySwiper"
      >
        {productArr.map(({imageUrl,productTitle,price},index)=>
            <SwiperSlide key={index}>
                <ProducUnit imageUrl={imageUrl} productTitle={productTitle} price={price} id={index}/>
            </SwiperSlide>
        )}
      </Swiper>
    </section>
  )
}

export default Product

const ProducUnit = ({imageUrl,productTitle,price,id})=>(
        <IconButton sx={{
            padding:'4px',
            borderRadius:'5px',
            margin:'3px',
            marginBottom:'30px'
        }}>
    <div className=" w-full">
            <img src={imageUrl} alt={`product_unit_${id}`} className=" w-full object-contain" />
            <h3 className=" text-sm font-semibold text-stone-900">{productTitle}</h3>
            <h3 className=" text-stone-900 font-bold text-lg">Rs. {price}</h3>
    </div>
        </IconButton>
)