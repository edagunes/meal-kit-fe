import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

const images = [
    {
        url:
          'https://media.blueapron.com/assets/registration/homepage/desktop-splash-v2.webp?height=800&quality=90&format=pjpg',
      },
      {
        url:
          'https://media.blueapron.com/assets/registration/homepage/cooking-pot.webp?height=600&quality=90',
      },
      {
        url:
          'https://nilsenreport.ca/wp-content/uploads/2021/09/Meal-Kits.jpg?ezimgfmt=ng:webp/ngcb2',
      }
];

export function CarouselPic() {
    const autoplay = useRef(Autoplay({ delay: 4000 }));
    const slides = images.map((item) => (
        <Carousel.Slide key={item.url}>
          <Image src={item.url} />
        </Carousel.Slide>
    ));
    
    return (
        <Carousel 
            slideSize="100%" 
            height="100%" 
            width="100%"
            sx={{ flex: 1 }} 
            align="start" 
            slideGap="xs" 
            controlsOffset="xs" 
            controlSize={24} 
            loop dragFree
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
        >
            {slides}
        </Carousel>
    );
}