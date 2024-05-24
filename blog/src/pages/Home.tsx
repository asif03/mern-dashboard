import Hero from "@/components/Hero";
import PostList from "@/features/posts/PostList";

const Home = () => {
  return (
    <div className="w-full container">
      <Hero
        tag=""
        title="The Impact of Technology on the Workplace: How Technology is Changing"
        subtitle=""
      />
      <div className="py-12">
        <h2 className="py-4 text-primary dark:text-primary font-bold text-2xl">
          Latest Post
        </h2>
        <PostList />
      </div>
    </div>
  );
};

export default Home;
