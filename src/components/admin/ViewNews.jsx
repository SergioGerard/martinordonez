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

const ViewNews = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await listPosts();
      setPosts(allPosts);
    }
    fetchPosts();
  }, []);

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
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      viewport={{ once: true }}
      id="last-news"
      className="flex flex-col pt-[3em] items-center w-full bg-[#140f1a] min-h-[100vh]"
    >
      <div className="text-start text-primary text-2xl pb-[1em]">
        <a
          href="/admin/add-news"
          style={{
            margin: "20px",
            padding: "10px 20px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add New
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 flex justify-between w-[80%] py-16">
        {posts.map((post) => (
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
                      ? `${post.title.substring(0, 150) + "..."}`
                      : post.title
                  }
                  width={300}
                  height={200}
                  className="object-cover w-full h-[200px]"
                />
                <a
                  href={"/admin/config-news/" + `${post.id}`}
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    margin: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#fff",
                    color: "#000",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </a>
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <Badge>{post.category}</Badge>
              <CardTitle className="text-base text-foreground mb-2 mt-2">
                {post.title && post.title.length > 150
                  ? `${post.title.substring(0, 150) + "..."}`
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
                href={"news/" + `${post.url}`}
              >
                Read More
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ViewNews;
