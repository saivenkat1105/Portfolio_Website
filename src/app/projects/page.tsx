"use client";
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

export default function Projects() {
  return (
    <section className="py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
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
  );
}
