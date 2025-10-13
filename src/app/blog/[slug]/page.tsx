import { blogPosts } from "@/data/blog-posts";
import { notFound } from "next/navigation";

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <time dateTime={post.publishDate}>
              {new Date(post.publishDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.readTime && <span>• {post.readTime}</span>}
            <span>• {post.author}</span>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Blog content will go here - could use MDX or markdown */}
          <p>{post.excerpt}</p>
        </div>
      </div>
    </article>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Together, Not For`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author],
      tags: post.tags,
    },
  };
}
