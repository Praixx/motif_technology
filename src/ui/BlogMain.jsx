import BlogImage from "../assets/blog-main.png";

function BlogMain() {
  const card = {
    readTime: "8",
    title:
      "Marketplace Design for Yacht-selling That Received 3 Red Dot Awards",
    image: BlogImage,
  };

  return (
    <div className="mb-16 cursor-pointer md:mb-0">
      <div>
        <img src={card.image} alt="" className="w-full md:w-full" />
        <p className="font-light pt-2 pb-2 text-stone-400">{card.readTime} mins read</p>
        <h2 className="font-semibold text-xl">{card.title}</h2>
      </div>
    </div>
  );
}

export default BlogMain;
