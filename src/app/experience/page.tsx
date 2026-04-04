"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Jaguar Land Rover",
    location: "Bengaluru, India",
    role: "Advanced Controls Engineer",
    date: "May 2024 - Present",
    bullets: [
      "Virtual Sensors: Engineered and deployed industrialized ML models to edge hardware to virtualize thermal sensors achieving 96% real time prediction accuracy in production vehicles.",
      "ML Data Pipelines: Built a complete ML pipeline to create Virtual Sensors. Reduced the complete delivery cycle from 1 week to 4 hours.",
      "Hypervisor: Assisted in developing a model-based supervisory controller that calculates thermal energy parameters real time. Currently providing a range benefit of 15-35 miles depending on ambient conditions.",
      "Engineering Lifecycle: Managed the complete delivery of Hypervisor from requirement definition, failure mode analysis, system validation across unit, rig and vehicle levels and feature delivery.",
      "State Estimation (EKF): Developing an Extended Kalman Filter for the refrigerant system to replace existing black box Virtual Sensors with grey-box state estimation techniques.",
      "Model Predictive Control (MPC): Currently developing a deployable Model Predictive Controller architecture for vehicle refrigerant systems to optimize between comfort, performance, component durability and efficiency."
    ]
  },
  {
    company: "Jaguar Land Rover",
    location: "Bengaluru, India",
    role: "Structural CAE Analyst",
    date: "July 2022 - May 2024",
    bullets: [
      "Multi-disciplinary Optimization: Developed multi-objective topology optimization methods to satisfy conflicting durability and crash requirements reducing weight by 10% and improving fastener performance by 16%.",
      "Reduced Order Modelling: Developed reduced order 1D frontal crash modelling techniques providing quick verification of design ideas in seconds with an accuracy of 80%."
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Experience</h1>
        <p className="mt-4 text-muted-foreground">My professional journey and career milestones.</p>

        <div className="mt-8 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 sm:pl-8">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-0 top-3 bottom-[-3rem] w-px bg-border" />
              )}
              {/* Timeline Dot */}
              <div className="absolute left-[-4px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
              
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <span className="mt-1 text-sm text-muted-foreground sm:mt-0">{exp.date}</span>
              </div>
              <p className="font-medium text-emerald-600 dark:text-emerald-400">{exp.company} &mdash; {exp.location}</p>
              
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
  );
}
