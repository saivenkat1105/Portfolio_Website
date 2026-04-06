import Link from "next/link";
import { allBlogPosts } from "@/data/blog";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import { asset } from "@/lib/assets";

export default function BlogListingPage() {
  const posts = [...allBlogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Page header */}
      <div className="border-b border-border/40 bg-background/80 backdrop-blur-xl sticky top-14 z-30 py-4 px-4 md:px-8">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <Link
            href="/#blog"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Main Page
          </Link>
          <span className="text-border">|</span>
          <h1 className="text-sm font-semibold">All Articles</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        {/* Hero text */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight mb-3">Blog</h1>
          <p className="text-muted-foreground text-lg">
            Thoughts on robotics, machine learning, and whatever else I happen to be working on.
          </p>
        </div>

        {/* Article list */}
        <div className="flex flex-col divide-y divide-border">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group py-8 flex gap-6 items-start">
              {/* Cover thumbnail */}
              <div className="relative w-32 h-24 shrink-0 rounded-xl overflow-hidden border border-border bg-muted">
                <img
                  src={asset(post.coverImage)}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 min-w-0">
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        <Tag className="h-2.5 w-2.5" /> {tag}
                      </span>
                    ))}
                  </div>
                )}

                <h2 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors mb-2 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-muted-foreground/70">
                  <Calendar className="h-3 w-3" />
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            <p className="text-lg font-medium">No articles yet.</p>
            <p className="text-sm mt-1">Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
