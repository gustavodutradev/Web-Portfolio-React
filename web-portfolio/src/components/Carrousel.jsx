import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
  {
    src: 'https://i.imgur.com/riWZK4t.gif',
    altText: 'Slide 1',
    caption: 'Slide 1',
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
      <img src={ item.src } alt={ item.altText } />
    </CarouselItem>
  ));

  return (
    <section className="carrousel-container">
      <Carousel
        activeIndex={ activeIndex }
        next={ next }
        previous={ previous }
        { ...args }
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
          className="carrousel-control"
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={ next }
          className="carrousel-control"
        />
      </Carousel>
    </section>
  );
}

export default Carrousel;
