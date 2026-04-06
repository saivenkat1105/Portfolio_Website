import { notFound } from "next/navigation";
import Link from "next/link";
import { allBlogPosts, getBlogPost } from "@/data/blog";
import { getBlogPostContent } from "@/lib/blog";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import { CoverflowCarousel } from "@/components/blog/CoverflowCarousel";
import ReactMarkdown from "react-markdown";

export function generateStaticParams() {
  return allBlogPosts.map((post) => ({ slug: post.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Read article content from /content/blog/[slug].md at build time
  const content = getBlogPostContent(slug);

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky breadcrumb */}
      <div className="border-b border-border/40 bg-background/80 backdrop-blur-xl sticky top-14 z-30 py-3 px-4 md:px-8">
        <div className="max-w-3xl mx-auto flex items-center gap-3 text-sm text-muted-foreground">
          <Link href="/#blog" className="hover:text-foreground transition-colors flex items-center gap-1">
            <ArrowLeft className="h-3.5 w-3.5" /> Main Page
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-foreground font-medium truncate max-w-[200px]">{post.title}</span>
        </div>
      </div>

      {/* Hero cover */}
      <div className="relative w-full h-[340px] md:h-[440px] overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-4 md:px-8 pb-10">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-primary text-primary-foreground"
                >
                  <Tag className="h-3 w-3" /> {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
        </div>
      </div>

      {/* Article content */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        <article className="max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-3xl font-extrabold tracking-tight mt-10 mb-4 text-foreground">{children}</h1>,
              h2: ({ children }) => <h2 className="text-2xl font-extrabold tracking-tight mt-10 mb-4 pb-3 border-b border-border text-foreground">{children}</h2>,
              h3: ({ children }) => <h3 className="text-xl font-bold mt-8 mb-3 text-foreground">{children}</h3>,
              p: ({ children }) => <p className="text-base text-muted-foreground leading-relaxed mb-5">{children}</p>,
              strong: ({ children }) => <strong className="text-foreground font-extrabold">{children}</strong>,
              em: ({ children }) => <em className="italic text-muted-foreground">{children}</em>,
              ul: ({ children }) => <ul className="list-disc pl-6 mb-5 space-y-2 text-muted-foreground">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal pl-6 mb-5 space-y-2 text-muted-foreground">{children}</ol>,
              li: ({ children }) => <li className="text-base leading-relaxed marker:text-primary">{children}</li>,
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-primary pl-5 py-1 my-6 text-muted-foreground italic bg-primary/5 rounded-r-xl pr-4">
                  {children}
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a href={href} target="_blank" rel="noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/70 transition-colors">
                  {children}
                </a>
              ),
              code: ({ children }) => (
                <code className="bg-muted text-foreground px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
              ),
              pre: ({ children }) => (
                <pre className="bg-muted rounded-xl p-4 overflow-x-auto my-6 text-sm font-mono border border-border">{children}</pre>
              ),
              img: ({ src, alt }) => (
                <figure className="my-8">
                  <img src={src} alt={alt} className="rounded-2xl border border-border shadow-md w-full object-contain max-h-[500px]" />
                  {alt && <figcaption className="text-center text-xs text-muted-foreground/70 mt-2">{alt}</figcaption>}
                </figure>
              ),
              hr: () => <hr className="border-border my-10" />,
            }}
          >
            {content}
          </ReactMarkdown>
        </article>

        {/* More Articles */}
        <div className="mt-20 mb-12 border-t border-border pt-12">
          <h2 className="text-2xl font-extrabold tracking-tight mb-2">More Articles</h2>
          <p className="text-muted-foreground text-sm mb-8">Keep reading — here's what else I've written.</p>
          <CoverflowCarousel posts={allBlogPosts} currentSlug={post.slug} />
        </div>

        {/* Back links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-border mt-8">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> All Articles
          </Link>
          <Link
            href="/#blog"
            className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            ← Main Page
          </Link>
        </div>
      </div>
    </div>
  );
}
