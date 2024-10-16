import BlogPosts from "@/components/BlogPosts";

export const metadata = {
  title: "Blog",
  description: "My thoughts on sustainable research, life and achievements",
};

export default function BlogPage() {
  return (
    <section className="container px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-8 text-center"></h1>
      <BlogPosts />
    </section>
  );
}
