import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from 'reactstrap';

const items = [
  {
    src: 'https://i.imgur.com/riWZK4t.gif',
    altText: 'Lista de tarefas utilizando JavaScript e CSS puros',
    caption: 'TO DO LIST',
    key: 1,
  },
  {
    src: 'https://i.imgur.com/AAaL1h8.gif',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://i.imgur.com/7cxc2l1.gif',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
];

const SCarrousel = styled.section`
  ${tw`
  block
  p-10
  `}
  max-width: 700px;
  background-color: rgba(0, 0, 0, 0.400);
  border-radius: 30px;

    @media (max-width: 480px) {
    max-width: 400px;
  }
`;

function Carrousel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => (
    <CarouselItem
      onExiting={ () => setAnimating(true) }
      onExited={ () => setAnimating(false) }
      key={ item.src }
    >
      <img
        src={ item.src }
        alt={ item.altText }
        className="d-block w-100"
      />
    </CarouselItem>
  ));

  return (
    <SCarrousel>
      <Carousel
        activeIndex={ activeIndex }
        next={ next }
        previous={ previous }
        { ...args }
        fade
      >
        <CarouselIndicators
          items={ items }
          activeIndex={ activeIndex }
          onClickHandler={ goToIndex }
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={ previous }
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={ next }
        />
      </Carousel>

    </SCarrousel>
  );
}

export default Carrousel;
