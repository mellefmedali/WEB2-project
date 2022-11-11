import Carousel from 'react-bootstrap/Carousel';

function SportCarousel() {
    return (
        <div className='sportCarousel'>
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="carouselimage"
                    src="./images/sportShowroom/sportcarousel/sportcarousel (1).jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carouselimage"
                    src="./images/sportShowroom/sportcarousel/sportcarousel (2).jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carouselimage"
                    src="./images/sportShowroom/sportcarousel/sportcarousel (3).jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default SportCarousel;