import Hero from "./Hero/Hero";
import Mandate from "./Mandate/Mandate";
import MeetSao from "./Meet/MeetSao";
import Updates from "./Updates/Updates";
import YouTube from "./YouTube/YouTube";

const Home = () => {
    return(
        <>
            <Hero/>
            <MeetSao />
            <Mandate/>
            <YouTube />
            <Updates/>
        </>
    )
}

export default Home;