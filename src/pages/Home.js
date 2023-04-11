import { CarouselPic } from "../components/CarouselPic";
import { FeaturesCards } from "../components/FeatureCards";
import { FooterSocial } from "../components/FooterSocial"
import { HeaderMenu } from "../components/HeaderMenu"
import { SectionOne } from "../components/SectionOne";
import { SectionTwo } from "../components/SectionTwo";

const Home = () => {
    return(
        <>
            <HeaderMenu />
            <CarouselPic />
            <FeaturesCards />
            <SectionOne />
            <SectionTwo />
            <FooterSocial />
        </>
    )
}

export default Home;