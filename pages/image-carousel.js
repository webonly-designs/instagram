
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselI() {
  return (
    <div>
         <div className="relative">
            <div className="absolute w-full h-36"/>
            <Carousel 
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                interval={5000}
            >
            <div>
                <img loading="lazy" src="/banff.png" alt="" />
            </div>

            <div>
                <img loading="lazy" src="vancouver.png" alt="" />
            </div>

            <div>
                <img loading="lazy" src="toronto.png" alt="" />
            </div>
            </Carousel>
        </div>
    </div>
  )
}

export default CarouselI