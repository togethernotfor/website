export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  lastModified?: string;
  category: string;
  tags: string[];
  coverImage: string;
  coverImageAlt: string;
  featured?: boolean;
  readTime?: string; // "5 min read"
}

// TODO: Add blog posts here when ready
export const blogPosts: BlogPost[] = [
  // Example:
  // {
  //   slug: "building-civic-tech-for-communities",
  //   title: "Building Civic Tech for Communities",
  //   excerpt: "How we approach civic technology projects with a community-first mindset.",
  //   author: "Together, Not For Team",
  //   publishDate: "2025-03-01",
  //   category: "Civic Tech",
  //   tags: ["civic tech", "community", "local government"],
  //   coverImage: "/blog/civic-tech-cover.jpg",
  //   coverImageAlt: "Community members collaborating",
  //   featured: true,
  //   readTime: "5 min read",
  // },
];
