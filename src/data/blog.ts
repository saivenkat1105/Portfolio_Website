export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string; // 1-2 sentences for carousel & listing
  tags?: string[];
};

// This catalog is the source of truth for METADATA.
// Article CONTENT lives in /content/blog/[slug].md
export const allBlogPosts: BlogPost[] = [
  {
    slug: "team-anveshak",
    title: "Team Anveshak: The Story of Me and A Mars Rover",
    date: "June 9, 2020",
    coverImage: "/projects/Anveshak.avif",
    tags: ["Robotics", "Personal"],
    excerpt: "If I had to describe my 3 years at IIT Madras with a single word, it would be Anveshak. This is the story of building 3 Mars Rovers, winning competitions, and growing up.",
  },
  {
    slug: "ml-at-the-edge",
    title: "Machine Learning at the Edge: Lessons from JLR",
    date: "March 15, 2026",
    coverImage: "/projects/Confidential_Image.png",
    tags: ["Machine Learning", "Industry"],
    excerpt: "Deploying ML models onto embedded hardware inside vehicles is a completely different problem than training them on a GPU cluster. Here's what I learned.",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return allBlogPosts.find((p) => p.slug === slug);
}
