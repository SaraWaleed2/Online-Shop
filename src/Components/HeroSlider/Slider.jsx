import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Box, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Slider() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box className="hero">
            <Container maxWidth="lg">
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
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="content">
                            <h4>Introducting the new</h4>
                            <h3>Microsoft Xbox <br /> 360 Controller</h3>
                            <p>Windows xp/10/7/8 ps3 Tv Box</p>
                            <Link to='/'>
                                <Button variant='contained' style={{ background: "var(--primary-color)", padding: isMobile ? "7px 12px" : "10px 30px", borderRadius: "25px" , fontSize:isMobile?"10px":""}}>Shop Now </Button>
                            </Link>
                        </div>
                        <img src="/img/banner_Hero1.jpg" alt="banner_Hero1" height={isMobile ? '300px' : '500px'} />
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="content">
                            <h4>new arrival</h4>
                            <h3>xiaomi air 75 <br /> earbuds</h3>
                            <p>AAC HD Sound Quality</p>
                            <Link to='/'>
                                <Button variant='contained' style={{ background: "var(--primary-color)", padding: isMobile ? "7px 12px" : "10px 30px", borderRadius: "25px" , fontSize:isMobile?"10px":""}}>Shop Now </Button>
                            </Link>
                        </div>
                        <img src="/img/banner_Hero2.jpg" alt="banner_Hero2" height={isMobile ? '300px' : '500px'} />
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="content">
                            <h4>mini-x6u speaker</h4>
                            <h3>Led Bluetooth <br /> speaker Lamp</h3>
                            <p>upport 3.5mm jack audio input</p>
                            <Link to='/'>
                                <Button variant='contained' style={{ background: "var(--primary-color)", padding: isMobile ? "7px 12px" : "10px 30px", borderRadius: "25px" , fontSize:isMobile?"10px":""}}>Shop Now </Button>
                            </Link>
                        </div>
                        <img src="/img/banner_Hero3.jpg" alt="banner_Hero3" height={isMobile ? '300px' : '500px'} />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </Box>
    );
}
