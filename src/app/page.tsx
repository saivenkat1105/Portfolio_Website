"use client";
import { Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="flex flex-col items-start py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Sai Venkat Gunda
        </h1>
        <h2 className="mt-4 text-xl font-bold tracking-tight text-muted-foreground sm:text-2xl md:text-3xl">
          Advanced Controls & ML Engineer
        </h2>
        <p className="mt-6 max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg">
          I specialize in the full engineering lifecycle: translating complex system requirements into mathematical models, testing them in simulation, and deploying data-driven control strategies to hardware. Currently targeting roles in the Physical AI space that require a deep mix of physical modeling, simulation, and applied machine learning.
        </p>
        
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="Resume/Sai_Venkat_CV.pdf"
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
    </section>
  );
}
