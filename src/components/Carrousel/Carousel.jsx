import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from '../../Img/carousel01.gif'
import Carousel2 from '../../Img/carousel02.png'
import Carousel3 from '../../Img/carousel03.png'


 const ImagemCarousel = [
    {
        img: Carousel1,
    },
    {
        img: Carousel2,
    },
    {
        img: Carousel3,
    },
]


function DarkVariantExample() {
  return (
    <Carousel variant="dar">
        {ImagemCarousel.map((item, index)=>{

            return(
                      <Carousel.Item key={index}>
                        <img
                        className="d-block CarouselPromo w-100"
                        src={item.img}
                        />
                        <Carousel.Caption>
                        <h5>{item.title}</h5>
                      
                        </Carousel.Caption>
                    </Carousel.Item>
            )
        })}

    </Carousel>
  );
}

export default DarkVariantExample;