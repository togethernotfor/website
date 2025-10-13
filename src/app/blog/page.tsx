import { blogPosts } from "@/data/blog-posts";

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Insights on civic tech, community impact, and mission-driven
            technology
          </p>
        </div>

        {blogPosts.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-block px-8 py-12 bg-muted/30 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground max-w-md">
                We're working on creating valuable content about civic
                technology, community impact, and our project experiences. Check
                back soon!
              </p>
            </div>
          </div>
        ) : (
          <div className="grid gap-8">
            {/* Blog posts will be rendered here when available */}
            {blogPosts.map((post) => (
              <div key={post.slug} className="border rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export const metadata = {
  title: "Blog | Together, Not For",
  description:
    "Insights on civic tech, community impact, and mission-driven technology from Together, Not For.",
};
