import Wrapper from "../layout/Wrapper";
import ResponsiveImage from "./ResponsiveImage";

const Hero: React.FC = () => {
  return (
    <section className="py-6">
      <Wrapper className="relative">
        <div className="text-center text-white absolute top-1/2 left-1/2 -translate-1/2">
          <h2 className="text-3xl font-semibold text-nowrap">
            Find your favorite <br /> place here!
          </h2>
          <p className="text-xs font-medium pt-6">
            The best prices for over 2 million properties worldwide
          </p>
        </div>
        <ResponsiveImage
          small="/assets/images/hero.jpg"
          medium="/assets/images/hero-md.jpg"
          large="/assets/images/hero-lg.png"
          alt="Hero Image"
          width={1600}
          height={900}
          className="rounded-xl overflow-hidden"
        />
      </Wrapper>
    </section>
  );
};

export default Hero;
