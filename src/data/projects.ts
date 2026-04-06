export type ProjectType = 'engineering' | 'vibe';

export type Project = {
  slug: string;
  title: string;
  date: string;
  type: ProjectType;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  repo?: string;
  image?: string;
  video?: string;
  link?: string;
  links?: { text: string; url: string }[];
  images?: string[];
};

export const allProjects: Project[] = [
  {
    slug: "jlr-virtual-sensors",
    title: "Virtual Sensors",
    date: "May 2024 - Present",
    type: "engineering",
    shortDescription: "Engineered and deployed **ML models** to virtualize eight thermal sensors with **96% accuracy**. Developed the end to end **ML pipeline** from data collection to deployment.",
    longDescription: "Virtual Sensors are models used to mimic the behavior of physical sensors to replace them. In this project, I have developed 8 thermal Virtual Sensors that predict the variables at different operating conditions. \n\n - Developed an end to end **ML pipeline** from data collection from multiple sources(1D simulations, rigs, vehicles etc), pre-processing, feature engineering, model training, validation and deployment.  \n - Achieved a **96% accuracy** in predictions across all operating conditions. \n - Reduced the delivery cycle time from **1 week to 4 hours.**  \n -Instrumental in achieving a range increase of **15 - 35 miles.**  \n - ",
    tags: ["Machine Learning", "Python", "MATLAB", "Simulink", "Mathematical Modelling"],
    link: "#",
    image: "/projects/Confidential_Image.png",
    images: ["/projects/Confidential_Image.png"]
  },
  {
    slug: "jlr-advanced-controls",
    title: "EKF and MPC for Thermal Management Systems",
    date: "May 2024 - Present",
    type: "engineering",
    shortDescription: "Developing **grey-box state estimation algorithms** and an **MPC architecture** for automobile refrigerant systems.",
    longDescription: "At Jaguar Land Rover, I am currently working on developing **grey-box state estimation algorithms** to replace the heavy dependence on vehicle level tests for data collection. \n\n - Developing the complex **state space representation** for the refrigerant system. \n - Using **Extended Kalman Filters(EKF)** to estimate the the required missing states of the system. \n- Next step is to identify the possiility of implementing **Model Predictive Control(MPC)** to optimize the performance of the system.  ",
    tags: ["Control Systems", "MATLAB", "Simulink", "Mathematical Modelling"],

    image: "/projects/Confidential_Image.png",

  },
  {
    slug: "jlr-structural-cae",
    title: "Reduced Order Modelling for Crash",
    date: "July 2022 - May 2024",
    type: "engineering",
    shortDescription: "Developed 1D Reduced Order Models for Frontal Crash reducing computation time from **>12 hours to seconds** while preserving an **accuracy of 80%**.",
    longDescription: "Frontal crash simulations are computationally expensive prohibiting design exploration and optimization. A 1D reduced order model was developed to replicate the frontal crash structure behavior during crash events. \n\n - Achieved an **accuracy of 80%** in predictions. \n\n- Reduced the computation time from >12 hours to seconds. \n- Enabled quick design verification of new design ideas. \n - Enabled multi-disciplinary optimization across material and geometry for structural members. ",
    tags: ["Mechanical Design", "Mathematical Modelling", "FEA", "MATLAB", "Simulink"],
    link: "#",
    image: "/projects/Confidential_Image.png"
  },
  {
    slug: "underwater-localization",
    title: "Acoustic Localization of Underwater Robots",
    date: "May 2021 - May 2022",
    type: "engineering",
    shortDescription: "Developed an **acoustic based sensor system** for real-time and accurate localization of pipeline robots with a **±10cm accuracy** across 1 km distance.",
    longDescription: "Pipeline robots are used for failure detection across extremely long pipelines. Since the pipelines could be underground, regular localization or tracking systems do not work. \n\n - Engineered a novel **guided acoustic waves based sensor system** to accurately locate the robot in pipelines.",
    tags: ["Robotics", "MATLAB", "Python", "FEA"],
    links: [
      { text: "Thesis", url: "/projects/ME17B013_Thesis.pdf" }
    ],
    images: ["/projects/elec_arch.png", "/projects/endobot.png"]
  },
  {
    slug: "mars-rover",
    title: "Autonomous All-terrain Mars Rover",
    date: "Jan 2018 - May 2020",
    type: "engineering",
    shortDescription: "Led **Team Anveshak** in building a semi-autonomous **all-terrain Mars rover** complete with a **5 DOF manipulator** and a compliant gripper.",
    longDescription: "Team and Traversal Lead for Team Anveshak, IIT Madras which builds a **semi-autonomous Mars rover** for extra-terrestrial applications. \n\n - Led the Traversal team in developing a **rocker-bogie suspension system** capable of climbing **45 cm heights and 30 degree inclines**. \n - Developed a **5 DOF manipulator** with a compliant gripper and integrated a **closed loop control system** using Inverse Kinematics for Robust Manipulation. \n - Won the Indian Rover Challenge 2019 and placed 12th internationally in University Rover Challenge 2019.",
    tags: ["Robotics", "Mechanical Design", "Control Systems", "ROS2", "C++", "Fusion 360", "MATLAB", "Gazebo", "FEA"],
    links: [{ text: "Blog Post", url: "https://1105saivenkat.wixsite.com/liteonly/post/team-anveshak-the-story-of-me-and-a-mars-rover" }],
    images: ["/projects/Anveshak.avif", "projects/Caesar.avif"],

  },
  {
    slug: "pediatric-wheelchair",
    title: "Cerebral Palsy Assist Wheelchair",
    date: "July 2019 - July 2020",
    type: "engineering",
    shortDescription: "Developed an **assistive wheelchair** for patients with cerebral palsy using **body movement-based control**.",
    longDescription: "In some cases of cerebral palsy, patients do not have precise control over their hand movements in order to use the joysticks present in electric wheelchairs. We have built a **special assisted wheelchair** that translates **gross body movements** to joystick actions enabling mobility. \n\n - Built a **custom sensor array** integrated into off the shelf wheelchairs to capture gross body movements. \n - Used **extensive signal processing techniques** integrating with a **PID based control system** to enable smooth movement and enhanced safety. ",
    tags: ["Robotics", "Control Systems", "Mechanical Design", "MATLAB", "FEA"],
    link: "#"
  },
];

export const getProjectsByType = (type: ProjectType) => allProjects.filter((p) => p.type === type);
export const getProjectBySlug = (slug: string) => allProjects.find((p) => p.slug === slug);
