import BlogImage from "../assets/blog-1.png"
import Blog2 from "../assets/blog-2.png"
import Blog3 from "../assets/blog-3.png"
import Blog4 from "../assets/blog-4.png"

function BlogCard() {
    
    const cards = [
        {
            title: "How to Create an AI Product: A Comprehensive Guide by Motif Technology's CTO",
            image: BlogImage
        },
        {
            title: "AI App Development: Its Benefits, Main Types, Features, and Tech Stack Needed",
            image: Blog2
        },
        {
            title: "Digital Product Design Secrets from Motif Technology’s CDO",
            image: Blog3
        },
        {
            title: "Process of Product Design from Motif Technology's CDO",
            image: Blog4
        }
    ]
    
    return (
        <div className="mt-16 md:mt-0">
            {cards.map((card, index )=>
                <div key={index} className="mb-10 cursor-pointer flex gap-6 items-center ">
                    <img src={card.image} alt="" />
                    <h3 className="font-semibold">{ card.title}</h3>
            </div>
        )}
        </div>
    )
}

export default BlogCard
