import React from "react";
import AllBlogs from "./AllBlogs";




// import { createContext } from "vm";

// export const BlogContext = createContext();
const Bloggers = [
    {
        id:1,
        blogTitle: "Mark Zuckerberg",
        readtime : "3min Read",
        blogDesc : "Mark Zuckerberg was born on May 14, 1984, in New York. He attended Harvard University,",
        imageUrl : "https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg",
        title : "CoFounder - Meta Platforms",
        story :"Mark Zuckerberg was born on May 14, 1984, in New York. He attended Harvard University, where he launched Facebook in 2004 with his roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes. What started as a college social network quickly grew into a global phenomenon, with over 2.8 billion monthly active users as of 2021.Zuckerberg's success with Facebook has made him one of the wealthiest people in the world, with a net worth of over $100 billion as of 2021. He has used his wealth and influence to support various philanthropic causes, including education, healthcare, and immigration reform.Despite his success, Zuckerberg has faced criticism and controversy throughout his career. Facebook has been accused of various privacy violations, misinformation, and facilitating the spread of hate speech. Zuckerberg has testified before Congress on multiple occasions to address these concerns and has made efforts to improve Facebook's policies and practices.In addition to his work with Facebook, Zuckerberg has also been involved in various other projects and initiatives. He founded the Chan Zuckerberg Initiative with his wife, Priscilla Chan, which is dedicated to promoting education, science, and equal opportunity. He has also been involved in initiatives related to internet connectivity, artificial intelligence, and virtual reality.Overall, Mark Zuckerberg is a complex and controversial figure in the tech industry. While he has achieved incredible success with Facebook, he has also faced significant criticism and scrutiny. Despite these challenges, he continues to be one of the most influential figures in the tech industry and a prominent philanthropist.",
    },
   
    {
        id:2,
        blogTitle: "Twitter",
        readtime : "1-2min Read",
        blogDesc : "witter is a social media platform that allows users to post and interact with short messages",
        imageUrl : "https://img.freepik.com/free-photo/black-friday-elements-white-background_23-2148665518.jpg?w=996&t=st=1689272322~exp=1689272922~hmac=f6fcdb6743776a715d77345ac8d5f9772682cdb622c6037c4c531af3e5f223dc",
        title : "Socia media Platform",
        story :"Twitter is a social media platform that allows users to post and interact with short messages, or tweets, of up to 280 characters. It was founded in 2006 and has since become one of the most popular social media platforms in the world, with millions of users from all walks of life.One of the key features of Twitter is its real-time nature. Users can post tweets instantly, and these tweets are visible to their followers and anyone who searches for relevant keywords or hashtags. This makes Twitter an ideal platform for breaking news, live events, and real-time conversations.Another important feature of Twitter is its use of hashtags. Hashtags are keywords or phrases preceded by the  symbol, which allow users to tag their tweets with relevant topics and make them more discoverable. Hashtags are used for everything from trending news topics to social activism movements and can help users connect with like-minded individuals and stay up-to-date on the latest trends and events.Twitter is also known for its ability to facilitate public conversations and debates. Users can reply to tweets, retweet them to their followers, and quote tweets to add their own commentary. This makes Twitter an ideal platform for sharing opinions, engaging in discussions, and even influencing public opinion.Aside from personal use, Twitter has also become an important tool for businesses and organizations. Companies can use Twitter to promote their products and services, engage with customers, and build their brand reputation. Non-profit organizations can use Twitter to raise awareness about important social issues and mobilize supporters to take action.Overall, Twitter is a unique social media platform that has revolutionized the way we communicate and share information. Its real-time nature, use of hashtags, and ability to facilitate public conversations make it an invaluable tool for individuals, businesses, and organizations alike. As Twitter continues to evolve, we can expect to see even more exciting developments in the world of social media and online communication.",
    },
    {
        id:3,
        blogTitle: "Threads",
        readtime : "3min Read",
        blogDesc : "Mark Zuckerberg's new Threads app has become one of the most rapidly downloaded apps ever,",
        imageUrl : "https://static01.nyt.com/images/2023/07/07/multimedia/07THREADS-LOGO-zmkv/07THREADS-LOGO-zmkv-superJumbo.jpg",
        title : "Meta Platform",
        story :"Mark Zuckerberg's new Threads app has become one of the most rapidly downloaded apps ever, and it comes with its own unique logo. The logo features a springy, counterclockwise coil against a black background that has led to many comparisons and speculations.Some see it as an abstract representation of the @ symbol, while others see letters from different alphabets, the number 6, or even a snippet of thread. The logo's ambiguity has led to mixed reactions from designers, with some appreciating its distinctiveness and others finding it too confusing.Like most corporate logos, the Threads logo is required to be highly adaptable and legible across various mediums and languages. It may also be aimed at improving Meta's public image, projecting certain values and masking weaknesses.The design of the Threads logo extends and jolts the trend of ultrasmooth, minimal, single-line symbols that many tech companies have adopted. Its lively and asymmetrical design implies easy-flowing communication and a more human touch.Threads is just the latest Twitter competitor to nod to the platform's visual identity, with other alternative social platforms like Mastodon and Bluesky also incorporating hues of blue and animal mascots in their logos.Overall, the Threads logo's distinctiveness, ambiguity, and adaptability make it a memorable and recognizable symbol for the app and its parent company.",
    },
    
]

const Section2 = () => {

  
    return (
           
        <div className="container">

            { Bloggers.map(blog => (
              
                 <AllBlogs Blogg={blog} key={blog.id} />
               


                
             ) )}
           
        </div>
      
        
    );
  
}

export default Section2;
