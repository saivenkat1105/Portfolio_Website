"use client";
import { Mail, FileText, ChevronDown, ExternalLink, X, Layers, Code, Globe, Cpu, Box, Brain, Terminal } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { allProjects, getProjectsByType, Project } from "@/data/projects";
import ReactMarkdown from "react-markdown";

// Defined strict taxonomy for tagging
const DOMAIN_TAGS = ["Robotics", "Machine Learning", "Control Systems", "Mathematical Modelling", "Mechanical Design", "FEA", "Vibe Coded", "App Development"];
const TECH_STACK_TAGS = ["Python", "C++", "MATLAB", "Simulink", "ROS2", "Gazebo", "MuJoCo", "Pytorch", "RL", "Fusion 360"];

const skillsMap = {
  "Languages": ["Python", "C++"],
  "Software/ Tools": ["MATLAB", "Simulink", "Gazebo", "MuJoCo", "Autodesk Fusion 360"],
  "Frameworks": ["ROS2 (Humble)", "Nav2", "SLAM Toolbox", "PyTorch", "Scikit-learn"],
  "Skillset": ["Control Systems", "Machine Learning", "Reinforcement Learning", "Mathematical Modelling", "Robotics Simulation", "State Estimation", "SLAM and Path Planning", "FEA", "Mechanical Design", "3D Printing"]
};

const experiences = [
  {
    company: "Jaguar Land Rover",
    location: "Bengaluru, India",
    role: "Advanced Controls Engineer",
    date: "May 2024 - Present",
    bullets: [
      "Virtual Sensors: Engineered and deployed industrialized ML models to edge hardware to virtualize thermal sensors achieving 96% real time prediction accuracy.",
      "ML Data Pipelines: Built a complete ML pipeline reducing delivery cycle from 1 week to 4 hours.",
      "Hypervisor: Assisted in developing a supervisory controller providing a range benefit of 15-35 miles.",
      "Engineering Lifecycle: Managed complete delivery from requirement definition to validation.",
      "State Estimation (EKF): Developing an Extended Kalman Filter for grey-box state estimation.",
      "Model Predictive Control (MPC): Developing deployable MPC architecture to optimize comfort and efficiency."
    ]
  },
  {
    company: "Jaguar Land Rover",
    location: "Bengaluru, India",
    role: "Structural CAE Analyst",
    date: "July 2022 - May 2024",
    bullets: [
      "Multi-disciplinary Optimization: Developed topology optimization satisfying crash requirements, reducing weight by 10%.",
      "Reduced Order Modelling: Developed 1D frontal crash modelling techniques for quick design verification."
    ]
  }
];

const educations = [
  {
    institution: "Indian Institute of Technology Madras",
    location: "Chennai, India",
    degree: "Dual Degree (B.Tech + M.Tech) Honours in Mechanical Engineering",
    score: "GPA: 9.14",
    date: "Aug 2017 – May 2022",
  }
];

// Slug mapping for Simple Icons
const skillSlugMap: Record<string, string> = {
  "Python": "python",
  "C++": "cplusplus",
  "MATLAB": "mathworks",
  "Simulink": "mathworks",
  "Gazebo": "gazebo",
  "MuJoCo": "openai", // Fallback for specialized robotics
  "Autodesk Fusion 360": "autodesk",
  "ROS2 (Humble)": "ros",
  "Nav2": "ros",
  "SLAM Toolbox": "ros",
  "PyTorch": "pytorch",
  "Scikit-learn": "scikitlearn",
  "RL (PPO, SAC, DQN)": "openai"
};

// Helper to define category-specific styling
const categoryTheme = {
  "Languages": {
    color: "text-blue-600 dark:text-blue-400",
    accent: "bg-blue-500",
  },
  "Software/ Tools": {
    color: "text-emerald-600 dark:text-emerald-400",
    accent: "bg-emerald-500",
  },
  "Frameworks": {
    color: "text-amber-600 dark:text-amber-400",
    accent: "bg-amber-500",
  },
  "Skillset": {
    color: "text-cyan-600 dark:text-cyan-400",
    accent: "bg-cyan-500",
  }
};

// Skills that prioritize local assets from /public/icons/tech/
const LOCAL_ICONS: Record<string, string> = {
  "MATLAB": "png",
  "Simulink": "png",
  "Gazebo": "png",
  "MuJoCo": "png",
  "PyTorch": "png",
  "Scikit-learn": "png"
};

function getIconForSkill(skill: string) {
  const slug = skillSlugMap[skill];

  // 1. Priority Local Load for high-fidelity brand icons
  if (LOCAL_ICONS[skill]) {
    const ext = LOCAL_ICONS[skill];
    return (
      <img
        src={`/icons/tech/${skill}.${ext}`}
        alt={skill}
        className="w-4 h-4 object-contain"
        onError={(e) => {
          // Final fallback to CDN or Avatar if local file is missing
          const target = e.target as HTMLImageElement;
          if (slug) {
            target.src = `https://cdn.simpleicons.org/${slug}`;
          } else {
            target.src = `https://ui-avatars.com/api/?name=${skill}&background=white&color=black&size=32&bold=true`;
          }
        }}
      />
    );
  }

  if (!slug) return <Code className="w-4 h-4 text-black" />;

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt={skill}
      className="w-4 h-4 object-contain"
      onError={(e) => {
        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${skill}&background=white&color=black&size=32&bold=true`;
      }}
    />
  );
}

export default function Home() {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Listen for navigation events to safely discard the modal popup
  useEffect(() => {
    const handleClose = () => setSelectedProject(null);
    document.addEventListener("close-project-modal", handleClose);
    return () => {
      document.removeEventListener("close-project-modal", handleClose);
    };
  }, []);

  const toggleTag = (tag: string) => {
    if (tag === "All") {
      setActiveTags([]);
      return;
    }
    setActiveTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const getFilteredAndSorted = (projects: Project[]) => {
    let result = projects;

    if (activeTags.length > 0) {
      result = projects
        .map(p => ({ project: p, matches: activeTags.filter(tag => p.tags.includes(tag)).length }))
        .filter(p => p.matches > 0)
        .sort((a, b) => b.matches - a.matches)
        .map(p => p.project);
    }

    const engineering = result.filter(p => p.type !== 'vibe');
    const vibe = result.filter(p => p.type === 'vibe');
    return [...engineering, ...vibe];
  };

  const filteredProjects = getFilteredAndSorted(allProjects);

  return (
    <div className="flex flex-col pb-24">
      {/* 1. Unified Intro & About Me */}
      <section id="about" className="min-h-[calc(100vh-3.5rem)] flex flex-col justify-center relative pt-12 pb-24 scroll-mt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(280px,350px)] gap-16 items-center w-full"
        >
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl/tight">
                Sai Venkat Gunda
              </h1>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                Advanced Controls & ML Engineer
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg pb-8 border-b border-border/50">
              <p>
                Hey there! Welcome to <span className="text-primary font-semibold">my space</span>. I really want to tell you that this is not your
                regular portfolio page that you haven't seen already but unfortunately it is. I currently
                work at <span className="text-primary font-semibold">Jaguar Land Rover</span> on building <span className="text-primary font-semibold">Virtual Sensors</span> and <span className="text-primary font-semibold">Advanced Control Systems</span> to improve vehicle range. My speciality lies in handling the <span className="text-primary font-semibold">entire engineering lifecycle</span> -
                translating the initial fuzzy ideas
                to concrete requirements, building the initial MVPs and the finally
                developing a production ready system.
              </p>
              <p>
                Aside from my standard intro, what I really love is <span className="text-primary font-semibold">solving complex problems </span>
                and I have always loved machines doing things on their own. So I figured <span className="text-primary font-semibold">robotics</span> is a pretty good field to work on. I worked on some amazing projects like <span className="text-primary font-semibold">building rovers, autonomous wheelchairs,
                  pipeline robots</span> in university.
                Then life took a different turn and I ended up
                in the automobile industry which was equally exciting, but a small part of me always stayed with robotics.
              </p>
              <p>
                I am proficient in <span className="text-primary font-semibold">classical and modern control systems, applied ML and
                  RL</span>. I also love <span className="text-primary font-semibold">chess, travel and movies. </span>
                My current passion project is vibe coding everything that I can think of.
                The rapidly evolving <span className="text-primary font-semibold">physical AI</span> space is something I am excited about and would
                like to contribute towards. If you want to talk about robotics, engineering,
                how to improve my chess ELO or
                anything under the sun, hit me up.

              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-4 text-sm font-bold tracking-wide text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-105"
              >
                <FileText className="mr-2 h-4 w-4" /> View Full Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-input bg-card px-6 py-4 text-sm font-bold tracking-wide shadow-sm transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105"
              >
                <Mail className="mr-2 h-4 w-4" /> Get in Touch
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 mt-8 lg:mt-0">
            <div className="w-64 md:w-full aspect-square rounded-[2rem] bg-muted border border-border shadow-xl overflow-hidden relative rotate-2 hover:rotate-0 transition-transform duration-500 will-change-transform group">
              <img src="profile.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Casual Look" />
              <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/60 to-transparent">
                <span className="text-white text-xs font-bold tracking-widest uppercase">The Casual Look</span>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]" />
            </div>
            <div className="w-48 aspect-square rounded-[2rem] bg-muted border border-border shadow-xl overflow-hidden relative -mt-24 lg:-mt-16 ml-32 lg:-ml-12 -rotate-6 hover:rotate-0 transition-transform duration-500 hidden md:block group z-10 hover:z-20">
              <img src="profile_2.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Ready to fly away" />
              <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/60 to-transparent">
                <span className="text-white text-xs font-bold tracking-widest uppercase">Ready to fly away</span>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]" />
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-muted-foreground/50">
          <ChevronDown className="h-6 w-6" />
        </div>
      </section>

      {/* 2. Skills & Tools Tile Layout */}
      <section id="skills" className="pt-24 scroll-mt-14">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Tech Stack</h1>
          <p className="text-xl md:text-2xl font-bold text-muted-foreground/80">What I think I am good at.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 md:gap-12">
          {/* Column 1: Skillset */}
          <div className="space-y-8">
            {Object.entries(skillsMap)
              .filter(([category]) => category === "Skillset")
              .map(([category, skills]) => {
                const theme = categoryTheme[category as keyof typeof categoryTheme];
                return (
                  <div key={category} className={`p-6 rounded-[2rem] border border-border bg-card/50 transition-all hover:bg-card hover:shadow-md relative overflow-hidden group h-full`}>
                    <div className={`absolute top-0 left-0 w-1.5 h-full ${theme?.accent} opacity-20 group-hover:opacity-100 transition-opacity`} />
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className={`h-1.5 w-8 rounded-full ${theme?.accent}`} />
                        <h3 className="text-2xl font-black tracking-tight text-foreground">
                          {category}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {skills.map((skill) => (
                          <motion.div
                            key={skill}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center px-4 py-2 bg-white border border-border shadow-sm rounded-lg group cursor-default"
                          >
                            <div className="w-5 h-5 flex items-center justify-center shrink-0">
                              {getIconForSkill(skill)}
                            </div>
                            <span className="ml-3 text-black text-sm font-bold tracking-tight">
                              {skill}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Column 2: Others */}
          <div className="flex flex-col gap-8 md:gap-12">
            {Object.entries(skillsMap)
              .filter(([category]) => category !== "Skillset")
              .map(([category, skills]) => {
                const theme = categoryTheme[category as keyof typeof categoryTheme];
                return (
                  <div key={category} className={`p-6 rounded-[2rem] border border-border bg-card/50 transition-all hover:bg-card hover:shadow-md relative overflow-hidden group`}>
                    <div className={`absolute top-0 left-0 w-1.5 h-full ${theme?.accent} opacity-20 group-hover:opacity-100 transition-opacity`} />
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className={`h-1.5 w-8 rounded-full ${theme?.accent}`} />
                        <h3 className="text-2xl font-black tracking-tight text-foreground">
                          {category}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {skills.map((skill) => (
                          <motion.div
                            key={skill}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center px-4 py-2 bg-white border border-border shadow-sm rounded-lg group cursor-default"
                          >
                            <div className="w-5 h-5 flex items-center justify-center shrink-0">
                              {getIconForSkill(skill)}
                            </div>
                            <span className="ml-3 text-black text-sm font-bold tracking-tight">
                              {skill}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* 3. Filterable Projects Engine */}
      <section id="projects" className="pt-24 scroll-mt-14">
        <div className="space-y-4 mb-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Projects</h1>
          <p className="text-xl md:text-2xl font-bold text-muted-foreground/80">What all have I been up to ...</p>
        </div>

        {/* Local Sidebar Layout */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 xl:gap-12 relative items-start mt-8">

          {/* Local Sticky Filter Engine */}
          <div className="w-full md:w-40 lg:w-48 xl:w-56 shrink-0 sticky top-20 md:top-24 max-h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar pb-4 md:pb-8 flex flex-col gap-4 md:gap-6 z-20 bg-background/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b md:border-none border-border/50 -mx-4 px-4 md:mx-0 md:px-0 pt-2 md:pt-0">
            <button
              onClick={() => toggleTag("All")}
              className={`w-full px-4 py-2 rounded-lg text-sm font-bold transition-all text-left border shadow-sm ${activeTags.length === 0 ? "bg-primary/10 text-primary border-primary/30" : "bg-card border-border/50 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
            >
              All Projects
            </button>

            {/* Domain List */}
            <div className="flex flex-col gap-2 md:gap-3">
              <h3 className="text-[10px] md:text-xs font-black text-muted-foreground uppercase tracking-widest pl-2 border-l-2 border-primary/30">Domains</h3>
              <div className="flex flex-row md:flex-col gap-1.5 flex-nowrap overflow-x-auto no-scrollbar pb-1 md:pb-0 md:flex-wrap">
                {DOMAIN_TAGS.map(tag => {
                  const isActive = activeTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`shrink-0 px-3 py-1.5 md:py-1 md:px-2 rounded-md text-[11px] md:text-sm font-semibold transition-all text-left border md:border-none ${isActive ? "bg-primary text-primary-foreground md:bg-primary/10 md:text-primary md:border-primary/30 shadow md:shadow-none" : "bg-card border-border/50 md:bg-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tech Stack List */}
            <div className="flex flex-col gap-2 md:gap-3">
              <h3 className="text-[10px] md:text-xs font-black text-muted-foreground uppercase tracking-widest pl-2 border-l-2 border-primary/30">Tech Stack</h3>
              <div className="flex flex-row md:flex-col gap-1.5 flex-nowrap overflow-x-auto no-scrollbar pb-1 md:pb-0 md:flex-wrap">
                {TECH_STACK_TAGS.map(tag => {
                  const isActive = activeTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`shrink-0 px-3 py-1.5 md:py-1 md:px-2 rounded-md text-[11px] md:text-sm font-semibold transition-all text-left border md:border-none ${isActive ? "bg-primary text-primary-foreground md:bg-primary/10 md:text-primary md:border-primary/30 shadow md:shadow-none" : "bg-card border-border/50 md:bg-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Unified Projects Grid */}
          <div className="flex-1 min-w-0 w-full project-grid">
            <div className="grid gap-6 sm:grid-cols-1 xl:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => {
                  const isVibe = project.type === 'vibe';
                  return (
                    <motion.div
                      key={project.slug}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <button onClick={() => setSelectedProject(project)} className={`text-left flex flex-col h-full w-full rounded-[2rem] border border-border shadow-sm transition-all group hover:-translate-y-1 ${isVibe
                        ? "bg-gradient-to-br from-card to-muted p-8 hover:shadow-xl border-l-4 border-l-primary"
                        : "bg-card p-8 hover:shadow-xl hover:border-primary/50"
                        }`}>
                        <div className="flex justify-between items-start mb-4 w-full">
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors pr-4">{project.title}</h3>
                          <ExternalLink className="h-5 w-5 text-muted-foreground/30 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 shrink-0" />
                        </div>
                        <p className={`mt-1 text-xs font-mono mb-6 ${isVibe ? 'text-primary' : 'text-muted-foreground'}`}>{project.date}</p>
                        <div className="text-muted-foreground text-sm leading-relaxed flex-1">
                          <ReactMarkdown
                            components={{
                              p: ({ children }) => <>{children}</>,
                              strong: ({ children }) => <strong className="text-primary font-extrabold">{children}</strong>,
                            }}
                          >
                            {project.shortDescription}
                          </ReactMarkdown>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-2">
                          {project.tags.map(tag => {
                            const isHighlighted = activeTags.includes(tag);
                            return (
                              <span key={tag} className={`inline-flex items-center rounded-lg border px-2.5 py-1 text-[10px] uppercase font-bold tracking-widest shadow-sm transition-colors ${isHighlighted
                                ? "bg-primary border-primary text-primary-foreground"
                                : (isVibe ? "border-border/50 bg-background/50 text-muted-foreground" : "border-border/50 bg-background text-muted-foreground")
                                }`}>
                                {tag}
                              </span>
                            );
                          })}
                        </div>
                      </button>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
              {filteredProjects.length === 0 && (
                <div className="col-span-full py-12 px-6 rounded-[2rem] border border-dashed border-border flex flex-col items-center justify-center text-center">
                  <p className="text-muted-foreground">No projects found matching the selected tags.</p>
                  <button onClick={() => toggleTag("All")} className="mt-4 text-sm text-primary hover:underline">Clear Filters</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>



      {/* 5. Experience */}
      <section id="experience" className="pt-24 scroll-mt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Experience</h1>
          <p className="mt-4 text-muted-foreground">My professional journey and career milestones.</p>

          <div className="mt-8 space-y-12 bg-card p-8 rounded-[2rem] border border-border shadow-sm">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-6 sm:pl-8">
                {index !== experiences.length - 1 && (
                  <div className="absolute left-0 top-3 bottom-[-3rem] w-px bg-border" />
                )}
                <div className="absolute left-[-4px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background shadow-sm" />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className="mt-1 text-sm font-mono text-muted-foreground sm:mt-0 bg-background px-3 py-1 rounded-md border border-border/50">{exp.date}</span>
                </div>
                <p className="font-semibold text-primary mt-2">{exp.company} &mdash; {exp.location}</p>

                <ul className="mt-6 list-outside space-y-3 text-muted-foreground">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-sm leading-relaxed flex items-start">
                      <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/30 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 6. Education */}
      <section id="education" className="pt-24 scroll-mt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Education</h1>
          <p className="mt-4 text-muted-foreground">My academic background.</p>

          <div className="mt-8 space-y-12 bg-card p-8 rounded-[2rem] border border-border shadow-sm">
            {educations.map((edu, index) => (
              <div key={index} className="relative pl-6 sm:pl-8">
                <div className="absolute left-[-4px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background shadow-sm" />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-bold">{edu.institution}</h3>
                  <span className="mt-1 text-sm font-mono text-muted-foreground sm:mt-0 bg-background px-3 py-1 rounded-md border border-border/50">{edu.date}</span>
                </div>
                <p className="font-semibold text-primary mt-3">{edu.degree}</p>
                <p className="mt-2 text-sm text-muted-foreground">{edu.score} &mdash; {edu.location}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 7. Contact Section */}
      <section id="contact" className="pt-32 pb-4 scroll-mt-14 mt-12 border-t border-border">
        <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-2xl mx-auto py-16 bg-card rounded-[3rem] border border-border shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
          <h1 className="text-5xl font-extrabold tracking-tight z-10">Get in Touch</h1>
          <p className="text-muted-foreground text-lg z-10 max-w-md px-4">
            Always open for a chat about physical AI systems, robotics, or creative software engineering.
          </p>
          <a href="mailto:1105saivenkat@gmail.com" className="z-10 px-8 py-4 bg-primary text-primary-foreground font-bold tracking-wide rounded-2xl shadow-xl shadow-primary/25 hover:-translate-y-1 transition-all duration-300">
            Drop an Email
          </a>

          <div className="pt-12 text-sm text-muted-foreground flex gap-8 z-10">
            <a href="https://github.com/saivenkat1105" target="_blank" rel="noreferrer" className="flex items-center hover:text-primary transition-colors font-medium">
              <GithubIcon className="w-4 h-4 mr-2" /> GitHub
            </a>
            <a href="https://linkedin.com/in/sai-venkat-gunda" target="_blank" rel="noreferrer" className="flex items-center hover:text-primary transition-colors font-medium">
              <LinkedinIcon className="w-4 h-4 mr-2" /> LinkedIn
            </a>
            <a href="resume.pdf" target="_blank" rel="noreferrer" className="flex items-center hover:text-primary transition-colors font-medium">
              <FileText className="w-4 h-4 mr-2" /> Resume
            </a>
          </div>
        </div>

        <div className="mt-16 text-center text-xs text-muted-foreground/60 flex flex-col sm:flex-row justify-center items-center gap-2">
          <span>Built with Next.js & Tailwind CSS.</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>Static Deployment via GitHub Actions.</span>
        </div>
      </section>

      {/* 8. Project Detail Overlay Popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-14 bottom-0 left-0 right-0 z-40 flex justify-end"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-background/50 backdrop-blur-sm cursor-pointer"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Body */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full md:max-w-2xl lg:max-w-4xl h-full bg-background border-l border-border shadow-[0_0_80px_rgba(0,0,0,0.1)] flex flex-col"
            >
              {/* Sticky Header with Close Button */}
              <div className="sticky top-0 z-20 flex justify-end items-center p-4 md:px-6 md:py-4 bg-background/90 backdrop-blur-xl border-b border-border/40 shrink-0">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:rotate-90 pointer-events-auto"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Content layout */}
              <div className="p-4 md:p-6 flex-1 min-h-0 overflow-y-auto md:overflow-hidden">
                {(() => {
                  const hasLinks = !!selectedProject.repo || (selectedProject.links && selectedProject.links.length > 0);
                  return (
                    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[minmax(0,1fr)_auto] gap-4 h-full max-w-5xl mx-auto">

                      {/* Block 1: Intro */}
                      <div className="flex flex-col space-y-3 p-6 rounded-[2rem] bg-card border border-border shadow-sm overflow-hidden flex-1 min-h-0">
                        <h1 className="text-2xl font-extrabold tracking-tight xl:text-3xl shrink-0">{selectedProject.title}</h1>
                        <p className="font-mono text-xs text-muted-foreground shrink-0">{selectedProject.date}</p>
                        <div className="text-muted-foreground mt-2 leading-relaxed overflow-y-auto text-base shrink pr-2">
                          <ReactMarkdown
                            components={{
                              p: ({ children }) => <p className="mb-4 last:mb-0">{children}</p>,
                              strong: ({ children }) => <strong className="text-primary font-extrabold">{children}</strong>,
                              ul: ({ children }) => <ul className="list-disc pl-4 mb-4 space-y-1">{children}</ul>,
                              li: ({ children }) => <li>{children}</li>,
                            }}
                          >
                            {selectedProject.longDescription}
                          </ReactMarkdown>
                        </div>
                      </div>

                      {/* Block 2: Visual */}
                      <div className={`relative w-full rounded-[2rem] bg-muted border border-border overflow-hidden group h-full min-h-[300px] ${!hasLinks ? "md:row-span-2" : ""}`}>
                        {selectedProject.images && selectedProject.images.length > 1 ? (
                          <div className="flex flex-col space-y-4 p-4 h-full overflow-y-auto custom-scrollbar">
                            {selectedProject.images.slice(0, 3).map((img, idx) => (
                              <div key={idx} className="relative w-full aspect-video flex-shrink-0 bg-background/30 rounded-xl overflow-hidden border border-border/50">
                                <img
                                  src={img}
                                  className="absolute inset-0 w-full h-full object-contain"
                                  alt={`${selectedProject.title} screenshot ${idx + 1}`}
                                />
                              </div>
                            ))}
                          </div>
                        ) : selectedProject.video ? (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                            <video
                              src={selectedProject.video}
                              className="w-full h-full object-contain"
                              autoPlay
                              muted
                              loop
                              playsInline
                            />
                          </div>
                        ) : selectedProject.image || (selectedProject.images && selectedProject.images.length === 1) ? (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                            <img
                              src={selectedProject.image || (selectedProject.images && selectedProject.images[0])}
                              className="w-full h-full object-contain"
                              alt={selectedProject.title}
                            />
                          </div>
                        ) : (
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-background opacity-50" />
                            <Layers className="h-16 w-16 text-muted-foreground opacity-20 group-hover:scale-110 transition-transform duration-500 ease-out" />
                            <div className="absolute bottom-4 left-0 right-0 text-center">
                              <span className="text-xs font-semibold px-3 py-1.5 bg-background/50 backdrop-blur-md rounded-full text-foreground border border-border/50">Media Placeholder</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Block 3: Tech Stack */}
                      <div className="p-6 rounded-[2rem] bg-card border border-border shadow-sm flex flex-col space-y-4 overflow-hidden h-full">
                        <div className="flex items-center space-x-2 shrink-0">
                          <Code className="h-5 w-5 text-primary" />
                          <h3 className="text-lg font-bold tracking-tight">Tech Stack</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 overflow-y-auto content-start pr-2">
                          {selectedProject.tags.map((tech) => {
                            const isHighlighted = activeTags.includes(tech);
                            return (
                              <div key={tech} className={`px-3 py-1.5 rounded-xl text-xs font-bold border flex items-center shadow-sm transition-colors ${isHighlighted
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-secondary text-secondary-foreground border-border/50"
                                }`}>
                                <span>{tech}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Block 4: Links - Conditionally Rendered */}
                      {hasLinks && (
                        <div className="p-6 rounded-[2rem] bg-card border border-border shadow-sm flex flex-col space-y-4">
                          <div className="flex items-center space-x-2">
                            <ExternalLink className="h-5 w-5 text-primary" />
                            <h3 className="text-lg font-bold tracking-tight">Launch Links</h3>
                          </div>
                          <div className="flex flex-wrap gap-3">
                            {selectedProject.repo && (
                              <a href={selectedProject.repo} target="_blank" rel="noreferrer" className="flex items-center px-4 py-2 bg-secondary text-secondary-foreground text-sm font-bold rounded-xl border border-border hover:bg-accent transition-all">
                                GitHub Code <GithubIcon className="ml-2 h-4 w-4" />
                              </a>
                            )}
                            {selectedProject.links?.map((customLink, idx) => {
                              const isPdf = customLink.url.toLowerCase().endsWith('.pdf');
                              return (
                                <a key={idx} href={customLink.url} target="_blank" rel="noreferrer" className="flex items-center px-4 py-2 bg-secondary text-secondary-foreground text-sm font-bold rounded-xl border border-border hover:bg-accent transition-all">
                                  {customLink.text} {isPdf ? <FileText className="ml-2 h-4 w-4" /> : <ExternalLink className="ml-2 h-4 w-4" />}
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
