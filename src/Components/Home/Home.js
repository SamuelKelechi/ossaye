import Hero from "./Hero/Hero";
import Mandate from "./Mandate/Mandate";
import MeetSao from "./Meet/MeetSao";
import Updates from "./Updates/Updates";

const Home = () => {
    return(
        <>
            <Hero/>
            <MeetSao />
            <Mandate/>
            <Updates/>
        </>
    )
}

export default Home;