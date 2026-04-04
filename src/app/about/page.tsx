"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h1>
        <div className="mt-6 space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Hello! I am Sai Venkat Gunda, an Advanced Controls and ML Engineer with over 4 years of industry experience. I am deeply passionate about bridging the gap between theoretical models and real-world physical systems.
          </p>
          <p>
            My expertise spans the entire engineering product lifecycle. I take complex system requirements, model them mathematically, rigorously test them using advanced simulation frameworks (like MATLAB/Simulink, Gazebo, MuJoCo), and finally deploy these data-driven control strategies onto physical hardware (Edge AI). 
          </p>
          <p>
            Currently, my core focus is on the rapidly evolving Physical AI space. I want to build systems that interact intelligently with the physical world, pushing the boundaries of what autonomous and control systems can accomplish. My recent work has involved engineering industrialized ML virtual sensors with 96% real-time prediction accuracy for production vehicles, and developing large-scale deployable MPC architectures.
          </p>
          <p>
            When I am not working on modeling or ML, you can find me exploring cutting-edge robotics research, experimenting with new open-source ML frameworks, and building tools to make complex engineering tasks easier.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
