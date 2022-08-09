import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination ,Autoplay} from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
import './locationSwiper.css';
export default function ActionAreaCard() {
    const arr2 = [1, 2, 3, 4, 5,6,7,8,9];
    return (
        <>
        <Typography marginLeft="20px" textAlign="start" variant='subtitle1'>
            Location Based
        </Typography>
            <Swiper
                className="swiper_container"
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={40}
                mousewheel={true}
                pagination={{
                    dynamicBullets: true,
                }}
                // autoplay={{
                //     delay: 4000,
                //     disableOnInteraction: true,
                //   }}
                modules={[Autoplay ,Mousewheel, Pagination]}
            >
                {
                arr2.map((index) => {
                    return (
                        <SwiperSlide>
                            <Card key={index.toString()} sx={{ maxWidth: 600, maxHeight: 300, marginLeft: "10px" }}>
                                <CardActionArea sx={{ display: "flex", }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://webmeup.com/upload/blog/lead-image-105.png"
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
                        </SwiperSlide>
                    )})
                }
            </Swiper>
        </>
    );
}
