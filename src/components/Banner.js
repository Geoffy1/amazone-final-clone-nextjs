import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const Banner = () => {
  return (
    <div className="relative">
        <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"></div>
        <Carousel
            //autoplay
            infinteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={1000}
        >
            <div>
                <img loading="lazy" src="https://links.papareact.com/gi1" alt="/images/client1.jpg" />
            </div>
            <div>
                <img loading="lazy" src="https://links.papareact.com/7ma" alt="/images/client1.jpg" />
            </div>
            <div>
                <img loading="lazy" src="https://links.papareact.com/6ff" alt="/images/client1.jpg" />
            </div>
        </Carousel>
    </div>
  )
}
export default Banner