"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { listPosts } from "@/lib/firestore";

const BlogPostFilter = () => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await listPosts();
      setPosts(allPosts);
    }
    fetchPosts();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  const categories = [...new Set(posts.map((post) => post.category))];

  function convertDriveLinkToDirect(link) {
    const match = link.match(/[-\w]{25,}/); // Extraer el FILE_ID del enlace
    if (match) {
      const fileId = match[0];
      return `https://drive.google.com/thumbnail?sz=w640&id=${fileId}`;
    }
    throw new Error("El enlace proporcionado no es válido.");
  }

  return (
    <section
      id="last-news"
      className="flex flex-col pt-[3em] items-center w-full min-h-[100vh]"
    >
      {/* Filtro por categorías */}
      <div className="flex justify-center mb-[60px]">
        <button
          className="mr-2 p-2 inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm"
          onClick={() => handleCategoryChange("")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className="mr-2 p-2 inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm"
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className=" w-[80%] flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex justify-between md:w-[80%] py-8">
          {filteredPosts.map((post) => (
            <Card
              className="border flex flex-col overflow-hidden transition-colors hover:border-primary"
              key={post.id}
            >
              <CardHeader className="p-0">
                <div style={{ position: "relative" }}>
                  <img
                    src={convertDriveLinkToDirect(post.imagen)}
                    alt={
                      post.title && post.title.length > 150
                        ? `${post.title.substring(0, 150)}...`
                        : post.title
                    }
                    width={300}
                    height={200}
                    className="object-cover w-full h-[200px]"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <Badge>{post.category}</Badge>
                <CardTitle className="text-base text-foreground mb-2 mt-2">
                  {post.title && post.title.length > 150
                    ? `${post.title.substring(0, 150)}...`
                    : post.title}
                </CardTitle>
                <p className="font-sans text-xs mb-2">{post.date}</p>
                <CardDescription className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert line-clamp-3">
                  {post.subtitle && post.subtitle.length > 180
                    ? `${post.subtitle.substring(0, 180)}...`
                    : post.subtitle}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link
                  className="w-full"
                  variant="outline"
                  href={`/news/${post.url}`}
                >
                  Read More
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPostFilter;
