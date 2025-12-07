import DesktopFilter from "../components/common/DesktopFilter";
import Hero from "../components/common/Hero";
import MobileFilter from "../components/common/MobileFilter";
import Listing from "../components/layout/Listing";
import { PROPERTYLISTINGSAMPLE } from "../constants";

const Home: React.FC = () => {
  return (
    <>
      <MobileFilter />
      <Hero />
      <DesktopFilter />
      <Listing listings={PROPERTYLISTINGSAMPLE} />
    </>
  );
};

export default Home;
