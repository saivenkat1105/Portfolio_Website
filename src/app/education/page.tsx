"use client";
import { motion } from "framer-motion";

const educations = [
  {
    institution: "Indian Institute of Technology Madras",
    location: "Chennai, India",
    degree: "Dual Degree (B.Tech + M.Tech) Honours in Mechanical Engineering",
    score: "GPA: 9.14",
    date: "Aug 2017 – May 2022",
  }
];

export default function Education() {
  return (
    <section className="py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
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
  );
}
