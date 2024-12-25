import * as React from 'react';
import "./Blog.css"
import BlogCard from './BlogCard';
import Blog1 from "../assets/pix6.jpg"
import Blog2 from "../assets/pix2.jpeg"


const Blog = () => {



  return (
    <div className='Blog-Main-Container'>
        <h4 style={{textAlign:"center", margin:"15px 0", fontFamily: "cursive"}}>RECENT BLOG POSTS</h4>
        <div className='Blog-Main-Wrapper'>
           <BlogCard 
            title="Empowering the Future: A Strategic Approach to Youth Engagement "
           avatimage={Blog1}
            description="In a notable development towards empowering Nigeria's youth, Dare Ojepe, the Senior Special Assistant to the President on..."
            blogdate="Dec. 18, 2024"
            fullheader="Empowering the Future: A Strategic Approach to Youth Engagement"
            para1="In a notable development towards empowering Nigeria's youth, Dare Ojepe, the Senior Special Assistant to the President on Youth Engagement, met with Mobolaji Ogunlende, the Commissioner for Youth and Social Development, Lagos. This significant meeting focused on crafting strategies to ensure active youth involvement in the nation’s developmental agenda."
            para2="The discussion centered around the renewed hope agenda, which aims to foster a sense of belonging and encourage youth participation across the country. Both leaders emphasized the importance of inclusivity, aiming to implement policies that ensure no young person is left behind."
            para3="Commissioner Ogunlende expressed optimism about the collaboration, highlighting the potential for their joint efforts to make a meaningful impact on youth empowerment in Nigeria. The productive exchange is expected to lead to initiatives that will drive substantial change and enhance the socio-economic landscape, ensuring that young Nigerians play a pivotal role in shaping the country's future."
           />

           <BlogCard 
           title= "Embracing Tax Reform: A Call to Action for Nigeria's Youth - Dare Ojepe"
            avatimage={Blog2}
            description="At this significant crossroads, the future prosperity of Nigeria heavily relies on visionary reforms and active civic participation. One such critical..."
            blogdate="Dec. 23, 2024"
            fullheader="Embracing Tax Reform: A Call to Action for Nigeria's Youth - Dare Ojepe"
            para1="At this significant crossroads, the future prosperity of Nigeria heavily relies on visionary reforms and active civic participation. One such critical reform, currently pursued by President Bola Tinubu GCFR, involves the restructuring of our nation’s tax system—a move that promises to lay the foundation for sustainable economic growth and enhanced socio-economic equity.
                Let us begin with the essence of the reform. These changes are not just about numbers and policies; they represent a transformative vision for our country; one where resources are judiciously managed, and opportunities are equitably distributed among all Nigerians, especially the youth, who are the backbone of our nation."
            para2="Driving Economic Growth:
                The proposed tax reform is designed to foster an economic environment where businesses can thrive and innovation is encouraged. By broadening the tax base and ensuring efficiency in collection, the government aims to create a more stable economic foundation. This stability is crucial for attracting domestic and international investments which, in turn, translate to increased job opportunities, particularly for young Nigerians entering the workforce."
            para3="Enhancing Public Services:
                The link between tax reform and public service improvement cannot be overstated. With better compliance and fairer distribution, tax revenues can significantly boost funding for essential services such as education, healthcare, and infrastructure. Imagine schools with state-of-the-art facilities, hospitals with modern equipment, and roads that connect our nation seamlessly, all attainable with the right fiscal policies."
            para4="Empowering Youth and Entrepreneurs:
                One of the exciting aspects of these reforms is the focus on creating a supportive environment for youth entrepreneurship. The reforms include some tax exemptions for businesses with annual returns less than fifty million naira, which significantly benefits budding entrepreneurs. This measure encourages startups and small enterprises, enabling young Nigerians to transform their innovative ideas into flourishing businesses without the immediate pressure of financial burdens.
                Furthermore, the reform proposes some tax exemptions for employees whose annual income is less than ten million naira. This initiative directly impacts young professionals entering the workforce, allowing them to save more and invest in their future, thereby enhancing their economic stability."
            para5="Ensuring Transparency and Accountability:
                At the heart of any effective reform is transparency. The proposed changes include measures to enhance accountability in tax administration, ensuring that every naira collected is directed towards meaningful development projects. This approach aims to build public trust and foster a civic culture where contributing to national growth is seen as a collective responsibility."
            para6="A Call to Action:
                To the vibrant youth of our nation, your role in this transformation is indispensable. We urge you to engage in this dialogue, to understand the nuances of these policy shifts, and to advocate for transparent and equitable reforms. Your voices, your ideas, and your actions are essential in driving this change and securing a prosperous future for all.
                Let us unite with purpose and determination, embracing these reforms not as mere policy adjustments but as the stepping stones to a brighter Nigeria. Together, we can create an enduring legacy of prosperity and equity for generations to come."
           blogclosing=" Dare Ojepe is the Senior Special Assistant to the President on Youth Engagement"
           />
        </div>
    </div>
  )
}

export default Blog