import { getBlogPosts } from "@/data/blog"
import Link from "next/link"
import Image from "next/image"
import BlurFade from "@/components/magicui/blur-fade"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
}

const BLUR_FADE_DELAY = 0.04

// Definimos la interfaz para las props del componente
interface BlogPageProps {
  limit?: number
}

export default async function BlogPage({ limit }: BlogPageProps) {
  const posts = await getBlogPosts()

  // Ordenar publicaciones por fecha y aplicar el límite si está definido
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  )
  const displayedPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts

  return (
    <section className="container px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedPosts.map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <Card className="border flex flex-col overflow-hidden transition-colors hover:border-primary">
                <CardHeader className="p-0">
                  <Image
                    src={post.metadata.image || "/placeholder.svg"}
                    alt={post.metadata.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.metadata.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-base text-foreground mb-2 mt-2">
                    {post.metadata.title}
                  </CardTitle>
                  <CardDescription className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert line-clamp-3">
                    {post.metadata.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <p className="text-xs text-muted-foreground">
                    {new Date(post.metadata.publishedAt).toLocaleDateString()}
                  </p>
                </CardFooter>
              </Card>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  )
}
