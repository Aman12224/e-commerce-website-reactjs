import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
import { Link } from "react-router-dom";

const carousel = [hero1, hero2, hero3, hero4];
const Hero = () => {
  return (
    <div className="grid items-center gap-24 lg:grid-cols-2">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="max-w-xl mt-8 text-lg leading-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel dolorem
          obcaecati excepturi asperiores dolorum odit qui consequatur, minus
          voluptates labore.
        </p>
        <div className="mt-10">
          <Link to="/products" className=" btn btn-primary">
            our products
          </Link>
        </div>
      </div>

      <div className="hidden h-[28rem] lg:carousel carousel-center space-x-4 bg-neutral rounded-box p-4">
        {carousel.map((item) => {
          return (
            <div key={item} className="carousel-item">
              <img
                src={item}
                className="object-cover h-full w-80 rounded-box"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
