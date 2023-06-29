import { CarouselPic } from "../components/CarouselPic";
import { FeaturesCards } from "../components/FeatureCards";

import { SectionOne } from "../components/SectionOne";
import { SectionTwo } from "../components/SectionTwo";

const Home = () => {
  return (
    <>
      <CarouselPic />
      <FeaturesCards />
      <SectionOne />
      <SectionTwo />
    </>
  );
};

export default Home;
