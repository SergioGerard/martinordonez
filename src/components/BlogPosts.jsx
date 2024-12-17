"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { listPosts } from "@/lib/firestore";

const BlogPosts = ({ limit }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await listPosts();

      // Ordenar posts por fecha (más recientes primero)
      const sortedPosts = allPosts.sort(
        (a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      // Aplicar límite si está definido
      setPosts(limit ? sortedPosts.slice(0, limit) : sortedPosts);
    }

    fetchPosts();
  }, [limit]);

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
      id="blog-posts"
      className="flex flex-col items-center w-full pt-[3em] min-h-[100vh]"
    >
      <div className="w-[80%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card
              className="border flex flex-col overflow-hidden transition-colors hover:border-primary"
              key={post.id}
            >
              <CardHeader className="p-0">
                <img
                  src={convertDriveLinkToDirect(post.imagen)}
                  alt={post.title || "Post Image"}
                  width={300}
                  height={200}
                  className="object-cover w-full h-[200px]"
                />
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
                  href={`/news/${post.url}`}
                  variant="outline"
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

export default BlogPosts;
