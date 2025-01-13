import Hero from "./Hero/Hero";
import LatestBlog from "./LatestBlog/LatestBlog";
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
            <LatestBlog />
            <Updates/>
        </>
    )
}

export default Home;