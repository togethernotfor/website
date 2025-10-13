import { BlogPost } from "@/data/blog-posts";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block border border-border/50 rounded-lg overflow-hidden hover:border-border hover:shadow-md transition-all"
    >
      {post.coverImage && (
        <div className="relative aspect-video overflow-hidden bg-muted">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-5 md:p-6 space-y-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="px-2 py-1 bg-muted rounded-md">{post.category}</span>
          <span>•</span>
          <time dateTime={post.publishDate}>
            {new Date(post.publishDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          {post.readTime && (
            <>
              <span>•</span>
              <span>{post.readTime}</span>
            </>
          )}
        </div>
        <h3 className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground">
          {post.excerpt}
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-muted/50 rounded-md text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
