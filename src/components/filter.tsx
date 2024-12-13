"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BlurFade from "./magicui/blur-fade";
import { Badge } from "./ui/badge";
import Link from "next/link";

const BlogPostFilter = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.metadata.category === selectedCategory)
    : posts;

  const categories = [...new Set(posts.map((post) => post.metadata.category))];

  return (

    <>
    <div className="flex justify-center mb-[60px]">
        <button
          className={`mr-2 p-2 inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm`}
          onClick={() => handleCategoryChange("")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`mr-2 p-2 inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>


    <div className="flex justify-center">
      
      <div className=" w-[80%]">
        <div className="flex grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4">
          {filteredPosts
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post, id) => (
              <BlurFade delay={0.1 * id} key={post.slug}>
                <Link
                  className="flex flex-col space-y-1 mb-4"
                  href={`/blog/${post.slug}`}
                >
                  <Card className="border flex flex-col overflow-hidden transition-colors hover:border-primary">
                    <CardHeader className="p-0">
                      <Image
                        src={post.metadata.image}
                        alt={post.metadata.title}
                        width={300}
                        height={200}
                        className="object-cover w-full h-[200px]"
                      />
                    </CardHeader>
                    <CardContent className="flex-grow p-6">
                      <Badge>{post.metadata.category}</Badge>
                      <CardTitle className="text-base text-foreground mb-2 mt-2">
                        {post.metadata.title}
                      </CardTitle>
                      <p className="font-sans text-xs mb-2">
                        {post.metadata.publishedAt}
                      </p>
                      <CardDescription className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert line-clamp-3">
                        {post.metadata.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Link
                        className="w-full"
                        variant="outline"
                        href={`/blog/${post.slug}`}
                      >
                        Learn More
                      </Link>
                    </CardFooter>
                  </Card>
                </Link>
              </BlurFade>
            ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default BlogPostFilter;
