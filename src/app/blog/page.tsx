import BlogPosts from "@/components/BlogPosts";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

export default function BlogPage() {
  return (
    <section className="container px-4 md:px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest Posts</h1>
      <BlogPosts limit={8} /> {/* Puedes ajustar el límite según necesites */}
    </section>
  );
}
