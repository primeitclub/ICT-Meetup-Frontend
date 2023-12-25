import About from "../../components/Global/About";
import Events from "../../components/Global/Events";
import FAQAccordion from "../../components/Global/FaqAccordion";
import Hero from "../../components/Global/Hero";
import HomePageGlimpses from "../../components/Global/HomePageGlimpses";
import JoinUs from "../../components/Global/JoinUs";
import SneakPeak from "../../components/Global/SneakPeak";
import Sponsors from "../../components/Global/Sponsors";
import MaxWidthHOC from "../../hoc/MaxWidth";
import { getEvents } from "../../services/firebaseRequest";

const Home = () => {
    return (
        <>
            <MaxWidthHOC>
                <Hero />
            </MaxWidthHOC>
            <About />
            <Events />
            {/* <Events />
      <MaxWidthHOC>
        <Speakers />
      </MaxWidthHOC>
      <SneakPeak /> */}
            <MaxWidthHOC>
                <SneakPeak />
            </MaxWidthHOC>

            <MaxWidthHOC>
                <Sponsors />
                <HomePageGlimpses />
                <FAQAccordion />
            </MaxWidthHOC>
            <JoinUs />
        </>
    );
};

export default Home;
