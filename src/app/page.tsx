"use client";
import { Mail, FileText, User } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Acoustic Localization of Underwater Robots",
    date: "May 2021 - May 2022",
    description: "Developed acoustic sensor systems for real-time and accurate localization with a ±10cm accuracy across 1 km for pipeline robots using guided acoustic waves. Undertaken at IIT Madras.",
    tags: ["Acoustics", "Robotics", "Localization", "Sensors"],
    link: "#"
  },
  {
    title: "Autonomous All-terrain Mars Rover",
    date: "Jan 2018 - May 2020",
    description: "Led the Traversal team to develop a 5 DOF serial manipulator with compliant gripper using Inverse Kinematics. Built a rocker bogie suspension for all-terrain travel, capable of climbing 45 cm heights and 30° slopes.",
    tags: ["Robotics", "Kinematics", "Mechatronics", "Control Systems"],
    link: "#"
  },
  {
    title: "Cerebral Palsy Assist Wheelchair",
    date: "July 2019 - July 2020",
    description: "Mechatronics lead for developing pediatric wheelchairs with body movement-based control systems to assist patients diagnosed with cerebral palsy at IIT Madras.",
    tags: ["Mechatronics", "Control Systems", "Healthcare"],
    link: "#"
  }
];

const vibeCodedProjects = [
  {
    title: "Generative AI Portfolio Architect",
    date: "2026",
    description: "A showcase of dynamic rendering techniques using foundation models. Rapidly prototyped a responsive Single Page Application with dynamic theme injection and interactive intersections.",
    tags: ["Generative AI", "React", "Next.js", "AI-Assisted Dev"],
    link: "#"
  }
];

const skillsMap = {
  "Languages": ["Python", "C++"],
  "Modeling & Simulation": ["MATLAB", "Simulink", "Gazebo", "MuJoCo", "Isaac Sim"],
  "Frameworks": ["ROS2 (Humble)", "Nav2", "SLAM Toolbox"],
  "Machine Learning": ["Pytorch", "Scikit-learn", "Reinforcement Learning (PPO, SAC, DQN)", "RAG", "LLM"]
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

export default function Home() {
  return (
    <div className="flex flex-col space-y-24 md:space-y-32 pb-24">
      {/* 1. Introduction */}
      <section id="introduction" className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 md:pt-16 scroll-mt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Sai Venkat Gunda
          </h1>
          <h2 className="mt-4 text-xl font-bold tracking-tight text-primary sm:text-2xl md:text-3xl">
            Advanced Controls & ML Engineer
          </h2>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg">
            I specialize in the full engineering lifecycle: translating complex system requirements into mathematical models, testing them in simulation, and deploying data-driven control strategies to hardware. Currently targeting roles in the Physical AI space that require a deep mix of physical modeling, simulation, and applied machine learning.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              <FileText className="mr-2 h-4 w-4" />
              Get Resume
            </a>
            <a
              href="mailto:1105saivenkat@gmail.com"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Mail className="mr-2 h-4 w-4" />
              Send Mail
            </a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="shrink-0"
        >
          {/* Profile Photo Placeholder */}
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-border overflow-hidden bg-muted flex items-center justify-center relative shadow-xl group cursor-pointer">
            <User className="w-24 h-24 text-muted-foreground opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-xs font-semibold px-4 text-center">Update src="/profile.jpg"<br/>in Code</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. About Me */}
      <section id="about" className="pt-16 scroll-mt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h1>
          
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_minmax(250px,300px)] gap-10">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Hello! I am Sai Venkat Gunda, an Advanced Controls and ML Engineer with over 4 years of industry experience. I am deeply passionate about bridging the gap between theoretical models and real-world physical systems.
              </p>
              <p>
                My expertise spans the entire engineering product lifecycle. I take complex system requirements, model them mathematically, rigorously test them using advanced simulation frameworks (like MATLAB/Simulink, Gazebo, MuJoCo), and finally deploy these data-driven control strategies onto physical hardware (Edge AI). 
              </p>
              <p>
                Currently, my core focus is on the rapidly evolving Physical AI space. I want to build systems that interact intelligently with the physical world, pushing the boundaries of what autonomous and control systems can accomplish.
              </p>
            </div>
            <div className="hidden lg:flex justify-end items-start">
              <div className="w-full aspect-square rounded-2xl bg-muted border border-border shadow-sm flex items-center justify-center relative overflow-hidden group">
                <User className="w-16 h-16 text-muted-foreground opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-6">
                  <span className="text-white text-sm font-medium text-center">About Photo Placeholder<br/>(Update in Code)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. Projects */}
      <section id="projects" className="pt-16 scroll-mt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Projects</h1>
          <p className="mt-4 text-muted-foreground">A showcase of the engineering projects and academic research I have contributed to.</p>
          
          <div className="mt-8 grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-1 text-sm text-primary">{project.date}</p>
                  <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. Skills & Tools */}
      <section id="skills" className="pt-16 scroll-mt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Skills & Tools</h1>
          <p className="mt-4 text-muted-foreground">The technical stack and simulation tools I use on a daily basis.</p>
          
          <div className="mt-8 space-y-8">
            {Object.entries(skillsMap).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <div 
                      key={skill}
                      className="flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. Experience */}
      <section id="experience" className="pt-16 scroll-mt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Experience</h1>
          <p className="mt-4 text-muted-foreground">My professional journey and career milestones.</p>

          <div className="mt-8 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-6 sm:pl-8">
                {index !== experiences.length - 1 && (
                  <div className="absolute left-0 top-3 bottom-[-3rem] w-px bg-border" />
                )}
                <div className="absolute left-[-4px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
                
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className="mt-1 text-sm text-muted-foreground sm:mt-0">{exp.date}</span>
                </div>
                <p className="font-medium text-primary">{exp.company} &mdash; {exp.location}</p>
                
                <ul className="mt-4 list-outside list-disc space-y-2 pl-4 text-muted-foreground">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-sm leading-relaxed">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 6. Education */}
      <section id="education" className="pt-16 scroll-mt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Education</h1>
          <p className="mt-4 text-muted-foreground">My academic background.</p>

          <div className="mt-8 space-y-12">
            {educations.map((edu, index) => (
              <div key={index} className="relative pl-6 sm:pl-8">
                <div className="absolute left-[-4px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
                
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-bold">{edu.institution}</h3>
                  <span className="mt-1 text-sm text-muted-foreground sm:mt-0">{edu.date}</span>
                </div>
                <p className="font-medium text-primary mt-1">{edu.degree}</p>
                <p className="mt-2 text-sm text-muted-foreground">{edu.score} &mdash; {edu.location}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 7. Vibe Coded Projects */}
      <section id="vibe-coded" className="pt-16 scroll-mt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Vibe Coded Projects</h1>
          <p className="mt-4 text-muted-foreground">Experimental implementations, generative AI workflows, and creative coding built entirely from vibes.</p>
          
          <div className="mt-8 grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            {vibeCodedProjects.map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md border-l-4 border-l-primary"
              >
                <div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-1 text-sm text-primary">{project.date}</p>
                  <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
