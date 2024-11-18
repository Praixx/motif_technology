import BlogCard from "../ui/BlogCard";
import BlogMain from "../ui/BlogMain";

function BlogSection() {
  return (
    <div className="mt-8 pl-8 pr-8 md:pl-0 md:mt-40 md:pr-0 md:mr-16 md:ml-16">
      <h1 className="mb-6 text-3xl font-bold md:text-5xl">
        Read more in our blog
      </h1>

      <div className="flex flex-col-reverse mt-11 md:gap-16  md:mt-20 md:grid md:grid-flow-col-dense md:grid-cols-[1fr_1fr]">
        <div>
          <BlogCard />
        </div>
        <div>
          <BlogMain />
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
