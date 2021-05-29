import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../assets/images/banner-1.jpg';
import banner2 from '../../assets/images/banner-2.jpg';
import banner3 from '../../assets/images/banner-3.jpg';
import { Container } from 'react-bootstrap';

const banners = [
    { img: banner1 },
    { img: banner2 },
    { img: banner3 },
]

const HeaderBanner = () => {
    return (
        <section className="banner-area pt-3">
            <Container>
                <Carousel showThumbs={false} showStatus={false} autoPlay={true} 
            interval={10000}  infiniteLoop={true}>
                    {
                        banners.map((banner) => <div>
                            <img src={banner.img} alt='' />
                        </div>)
                    }

                </Carousel>
            </Container>
        </section>
    );
};

export default HeaderBanner;