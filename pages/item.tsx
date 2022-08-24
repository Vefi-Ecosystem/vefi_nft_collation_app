import { Slider } from 'components';
import { ItemWrapper } from 'components/Carousel/Carousel.style';
import Form from 'components/Section/Form';
import React, { useEffect } from 'react';

const Item = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <>
      <ItemWrapper>
        <Slider />
        <Form />
      </ItemWrapper>
    </>
  );
};

export default Item;
