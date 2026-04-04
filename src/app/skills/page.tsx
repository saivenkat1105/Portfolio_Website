"use client";
import { motion } from "framer-motion";

const skillsMap = {
  "Languages": ["Python", "C++"],
  "Modeling & Simulation": ["MATLAB", "Simulink", "Gazebo", "MuJoCo", "Isaac Sim"],
  "Frameworks": ["ROS2 (Humble)", "Nav2", "SLAM Toolbox"],
  "Machine Learning": ["Pytorch", "Scikit-learn", "Reinforcement Learning (PPO, SAC, DQN)", "RAG", "LLM"]
};

export default function Skills() {
  return (
    <section className="py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
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
  );
}
