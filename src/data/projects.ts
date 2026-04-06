export type ProjectType = 'engineering' | 'vibe';

export type Project = {
  slug: string;
  title: string;
  date: string;
  type: ProjectType;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  link: string;
  repo?: string;
  image?: string;
  video?: string;
  links?: { text: string; url: string }[];
};

export const allProjects: Project[] = [
  {
    slug: "jlr-virtual-sensors",
    title: "Virtual Sensors",
    date: "May 2024 - Present",
    type: "engineering",
    shortDescription: "Engineered and deployed **ML models** to virtualize eight thermal sensors with **96% accuracy**.",
    longDescription: "At Jaguar Land Rover, I led the development and deployment of **industrialized Machine Learning models** directly onto **Edge hardware**. This system successfully virtualized physical thermal sensors aboard the vehicle platform, achieving a **96% real-time prediction accuracy**. I also built a comprehensive **ML data pipeline** that reduced the overall model delivery and testing cycle from **1 week down to just 4 hours**.",
    tags: ["Machine Learning", "Python", "MATLAB", "Simulink", "Mathematical Modelling"],
    link: "#",
    image: "/projects/Confidential_Image.png"
  },
  {
    slug: "jlr-advanced-controls",
    title: "EKF and MPC for Thermal Management Systems",
    date: "May 2024 - Present",
    type: "engineering",
    shortDescription: "Developing **grey-box state estimation algorithms** and an **MPC architecture** for automobile refrigerant systems.",
    longDescription: "At Jaguar Land Rover, I assisted in developing a supervisory controller (hypervisor) that provides a significant range benefit of 15-35 miles. Currently, my work focuses on:\n\n- Developing an **Extended Kalman Filter (EKF)** for robust grey-box state estimation.\n- Designing a deployable **Model Predictive Control (MPC)** architecture.\n- Optimizing passenger comfort and vehicle efficiency simultaneously.",
    tags: ["Control Systems", "MATLAB", "Simulink", "Mathematical Modelling"],
    link: "#",
    image: "/projects/Confidential_Image.png",
    links: [
      { text: "Read Paper", url: "https://example.com/paper" },
      { text: "MATLAB Workflow", url: "https://example.com/matlab" }
    ]
  },
  {
    slug: "jlr-structural-cae",
    title: "Reduced Order Modelling for Crash",
    date: "July 2022 - May 2024",
    type: "engineering",
    shortDescription: "Developed global topology optimization and 1D frontal crash modelling techniques for automotive structures.",
    longDescription: "As a Structural CAE Analyst at Jaguar Land Rover, I focused on Multi-disciplinary Optimization. I successfully developed topology optimization workflows that satisfied stringent frontal crash requirements while simultaneously reducing overall vehicle structure weight by 10%. Additionally, I advanced Reduced Order Modelling techniques, creating 1D frontal crash models to enable significantly faster turnaround times during early design verification stages.",
    tags: ["Mechanical Design", "Mathematical Modelling", "MATLAB", "Simulink"],
    link: "#",
    image: "/projects/Confidential_Image.png"
  },
  {
    slug: "underwater-localization",
    title: "Acoustic Localization of Underwater Robots",
    date: "May 2021 - May 2022",
    type: "engineering",
    shortDescription: "Developed acoustic sensor systems for real-time and accurate localization with a ±10cm accuracy across 1 km.",
    longDescription: "Undertaken at IIT Madras. This project involved deep fundamental research into how acoustic waves propagate through fluid-filled pipeline environments. By harnessing guided acoustic wave phenomena, we created a localization algorithm capable of pinpointing autonomous pipeline inspection robots with incredible ±10cm accuracy over immense distances (1 km). This solved critical infrastructure tracking problems.",
    tags: ["Robotics", "MATLAB", "Python"],
    link: "#"
  },
  {
    slug: "mars-rover",
    title: "Autonomous All-terrain Mars Rover",
    date: "Jan 2018 - May 2020",
    type: "engineering",
    shortDescription: "Led the Traversal team to develop a 5 DOF serial manipulator and rocker bogie suspension.",
    longDescription: "Led the Traversal team in building a fully functional mock Mars rover designed for extreme off-world terrains. I engineered a 5-Degree-Of-Freedom serial manipulator with a highly compliant gripper using complex Inverse Kinematics models. Additionally, I spearheaded the mechanical design of a rocker-bogie suspension system granting the rover the ability to effortlessly scale 45 cm vertical heights and traverse 30° inclined slopes seamlessly.",
    tags: ["Robotics", "Mechanical Design", "Control Systems", "ROS2", "C++", "Fusion 360"],
    link: "#",
    video: "/projects/Confidential_Image.png",
    links: [
      { text: "Detailed Schematic (PDF)", url: "/projects/rover-schematic.pdf" }
    ]
  },
  {
    slug: "pediatric-wheelchair",
    title: "Cerebral Palsy Assist Wheelchair",
    date: "July 2019 - July 2020",
    type: "engineering",
    shortDescription: "Mechatronics lead for developing pediatric wheelchairs with body movement-based control systems at IIT Madras.",
    longDescription: "Acted as the Mechatronics Lead for a critical healthcare initiative at IIT Madras focused on pediatric patients diagnosed with cerebral palsy. We ideated and prototyped an assistive wheelchair utilizing body movement-based control systems. This required designing robust sensor arrays capable of parsing involuntary versus voluntary muscular impulses and mapping them smoothly into directional motor actuation controls.",
    tags: ["Robotics", "Control Systems", "Mechanical Design", "C++"],
    link: "#"
  },
  {
    slug: "genai-portfolio",
    title: "Generative AI Portfolio Architect",
    date: "2026",
    type: "engineering",
    shortDescription: "A showcase of dynamic rendering techniques using foundation models to rapidly prototype a responsive Single Page Application.",
    longDescription: "This very website! Built to showcase the capabilities of generative AI assisted development workflows. It dynamically parses raw text data into an interactive portfolio leveraging modern web technologies. Focuses on minimal, aesthetic layout design combined with rich interactive micro-animations through Framer Motion.",
    tags: ["App Development", "Vibe Coded"],
    link: "https://saivenkat-portfolio.vercel.app",
    repo: "https://github.com/saivenkat1105/saivenkat-portfolio",
    image: "/projects/portfolio-vibe.png"
  }
];

export const getProjectsByType = (type: ProjectType) => allProjects.filter((p) => p.type === type);
export const getProjectBySlug = (slug: string) => allProjects.find((p) => p.slug === slug);
