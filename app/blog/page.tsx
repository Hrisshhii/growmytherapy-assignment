
import Footer from "../Components/Footer";
import BlogPrimary from "./blog-components/BlogPrimary";
import BlogPosts from "./blog-components/BlogPosts";

export default function BlogPage(){
  return (
    <main>
      <BlogPrimary />
      <BlogPosts />
      <Footer />
    </main>
  );
}