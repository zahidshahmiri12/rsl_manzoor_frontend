import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import './cards.css';
export default function Cards() {

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <Typography sx={{ marginTop: "70px", textAlign:"left" , marginLeft : "14px" }} variant="subtitle1" color="initial">
        Top Headlines
      </Typography>

      <Swiper
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        autoHeight={true}
        breakpoints={{
           // when window width is >= 340px
           340: {
            width: 340,
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
          },

        }}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {
          arr.map((data) => {
            return (
              <SwiperSlide>
                <Box key={data.toString()} sx={{width : "100%", dispaly: "flex", justifyContent: "center", alignItems: "center",padding: "5px", marginLeft :"14px" }}>
                <Card sx={{ maxWidth: 345, margin: "5px" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </Box>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </>
  );
}


