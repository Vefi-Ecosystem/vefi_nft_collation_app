import Container from 'components/Layout/Container';
import React from 'react';
import { Image } from '../../components';
import { SliderWrapper } from './Carousel.style';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slider = () => {
  return (
    <>
      <SliderWrapper>
        <Container>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={10000}
            centerMode={false}
            autoPlay
            focusOnSelect={false}
            infinite
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 1,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 1,
              },
            }}
            rewind={true}
            rewindWithAnimation={true}
            rtl={false}
            shouldResetAutoplay
            slidesToSlide={1}
            swipeable
          >
            <div className="slider__container">
              <Image
                src="/images/1.jpg"
                alt="image"
                width="300px"
                height="300px"
              />
              <Image
                src="/images/1.jpg"
                alt="image"
                width="300px"
                height="300px"
              />
              <Image
                src="/images/1.jpg"
                alt="image"
                width="300px"
                height="300px"
              />
              <Image
                src="/images/1.jpg"
                alt="image"
                width="300px"
                height="300px"
              />
            </div>
          </Carousel>
        </Container>
      </SliderWrapper>
    </>
  );
};

export default Slider;
