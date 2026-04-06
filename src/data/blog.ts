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
    slug: "dish-washing",
    title: "A Comprehensive Guide For Dish Washing Like A Pro",
    date: "June 18, 2020",
    coverImage: "/blog/dish_washing_cover.avif",
    tags: ["Satire", "Personal"],
    excerpt: "A satirical take on everything Indian: from the intricate art of removing curry stains to national politics.",
  },
  {
    slug: "unrequited-lovers",
    title: "Unrequited Lovers",
    date: "June 11, 2020",
    coverImage: "/blog/poetry_cover.avif",
    tags: ["Poetry", "Mythology"],
    excerpt: "A poem on the Women of Lemnos from Greek mythology and their encounter with the Argonauts.",
  },
  {
    slug: "12-years-a-student",
    title: "12 Years a Student",
    date: "June 11, 2020",
    coverImage: "/blog/school.avif",
    tags: ["Poetry", "Life"],
    excerpt: "2 days separated by 12 years had something in common. Tears. But the reasons could not have been more different.",
  },
  {
    slug: "all-it-took-was-a-tempest",
    title: "All It Took Was A Tempest",
    date: "June 11, 2020",
    coverImage: "/blog/cyclone.avif",
    tags: ["Poetry", "Nature"],
    excerpt: "A poem about the destruction a cyclone causes one fateful night and the wreck it leaves behind.",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return allBlogPosts.find((p) => p.slug === slug);
}
