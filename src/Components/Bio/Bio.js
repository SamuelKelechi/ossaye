import "./Bio.css"
import Avatar from "../assets/pics1.png"
import Avatar2 from "../assets/pix5.jpg"
import Avatar3 from "../assets/pics2.jpeg"


const Bio = () => {
    return(
        <div className="Bio-Main-Container">
            <div className='Home-Hero-Continer1'>
                <div className='Home-Hero-Wrapper1'>
                    <img className="Bio-Avatar" src={Avatar} alt="Dare pix"/>
                    <div className="Bio-text">At the helm of Swagger International Magazine, which boasts offices in Lagos, Germany, and the United States, Dare provides a powerful platform for young Nigerians making significant contributions globally</div>
                </div>
            </div>
            <br/>   
            <h3 className="Bio-Header">BIOGRAPHY</h3>
            <div className="Bio-Section-One">
                <img className="Section-One-Avatar" src={Avatar2} alt="Dare pix"/>
                <div className="Para-Holder">
                    <p>Dare Ojepe is a young man committed to recognizing and honoring the accomplishments of his peers. With a degree in Education majoring in Economics from the University of Lagos, Dare has harnessed his academic prowess to drive impactful change across various domains.</p>
                    <p>At the helm of Swagger International Magazine, which boasts offices in Lagos, Germany, and the United States, Dare provides a powerful platform for young Nigerians making significant contributions globally. The magazine shines a light on innovators and change-makers who are redefining the limits of possibility and driving youth transformation with their extraordinary accomplishments.</p>
                    <p>Dare's global travels have enriched his understanding of public infrastructure, inspiring him to prioritize development in Nigeria. His proactive engagement with local governments as a consultant led to two terms as Supervisor for Works, where he initiated projects that emphasize sustainable urban growth. His efforts contribute to the vision of Lagos as a smart city, setting a new benchmark for infrastructure development that balances modernization with sustainability.</p>
                </div>
            </div>

            <div className="Bio-Section-One2">
                <div className="Para-Holder">
                    <p>Parallel to his endeavors in publishing and public infrastructure, Dare is also a FIFA/CONCACAF licensed referee trained in the United States. As a member of the Referee Association of the USA, he integrates this passion into his broader mission, applying international standards and practices to enhance the sporting landscape.</p>
                    <p>Dare's entrepreneurial spirit extends to the creation of Lead Lagos Magazine, a publication devoted to capturing the innovative spirit of both individuals and institutions in Lagos. Through this initiative, he reinforces the importance of documenting progress and highlights the significant impact of role models in driving societal change.</p>
                    <p>In the sports realm, Dare’s commitment overflows into supporting underprivileged youth. By providing funding for specialized training and facilitating life-changing contracts, he has enabled over 100 young athletes to pursue their dreams and excel. His mentorship builds a strong future for sports, nurturing talent that might otherwise remain undiscovered.</p>
                    <p>Dare Ojepe embodies a holistic approach to progress and innovation, weaving together his pursuits in publishing, public service, and sports. His visionary leadership and unwavering support for the next generation position him as both an enabler of individual achievements and a catalyst for broader societal advancements, crafting a legacy of empowerment and success for young Nigerians everywhere.</p>
                </div>
                <img className="Section-One-Avatar" src={Avatar3} alt="Dare pix"/>
            </div>
        </div>
    )
}

export default Bio;

    
