import {
  heavenShop,
  gpt3,
  githubFinder,
  gerich,
  dalleClone,
  feedback,
  houseMarketplace,
  Tshirt,
  adminPanel,
  promptopia,
  metaversus,
  android,
  nextjs,
  firebase,
  // wordpress,
  // clang,
  // typescript,
  // java,
  // angular,
  // php,
  // mysql,
  bootstrap,
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  logoETI,
  logoMe,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Android",
    icon: android,
  },
  {
    name: "Next Js",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Leverage",
    icon: logoETI,
    iconBg: "#383E56",
    date: "Sep 2022 - Dec 2022",
    points: [
      "Proficient in front-end (HTML, CSS, JavaScript, React) and back-end (PHP) technologies for complete web application development.",
      "Skilled in SQL and experienced in database administration, optimizing data storage and retrieval.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer (Internship)",
    company_name: "Leverage",
    icon: logoETI,
    iconBg: "#383E56",
    date: "Dec 2022 - March 2023",
    points: [
      "Proficient in both front-end (HTML, CSS, JavaScript, React) and back-end (PHP) development, capable of creating end-to-end web applications.",
      "Skilled in SQL and database administration, ensuring efficient data storage and retrieval.",
      "Certified Full Stack Developer with a commitment to continuous learning, keeping up with industry trends and emerging technologies.",
    ],
  },

  {
    title: "Full Stack Developer (Freelancer) ",
    company_name: "Leverage",
    icon: logoMe,
    iconBg: "#383E56",
    date: "Sep 2020 - Now",
    points: [
      "As a self-taught Full Stack developer, I've acquired a diverse skill set encompassing MERN stack technologies (MongoDB, Express, React, Redux, Node.js). I specialize in web application development, delivering end-to-end solutions.",

      "Proficient in managing databases with experience in Firebase and MongoDB. I design and maintain structured databases and utilize Firebase for real-time features, ensuring optimal data storage and retrieval.",

      "Skilled in creating responsive user interfaces using React, Next.js, and Tailwind CSS. I focus on crafting visually appealing and user-friendly web and mobile applications.",

      "Well-versed in Figma for UI/UX design, emphasizing the importance of aesthetics and user-friendliness in application development. My designs prioritize the user experience, enhancing overall functionality.",

      "Experienced in back-end development with Node.js and Express, enabling the creation of robust server-side logic and APIs. Proficient in version control using Git, ensuring efficient code management and collaboration.",

      "Skilled in implementing state management with Redux, facilitating the management of complex application states and ensuring efficient data flow within web applications. This expertise enhances the performance and scalability of my projects,",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "T-Shirt Creator",
    description:
      "The AI T-Shirt Designer is a web app that empowers users to create personalized T-shirts. It combines Three.js, React, and Tailwind CSS for a responsive design interface. Users can upload custom logos and designs, and leverage an AI design generator for additional design options.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Tshirt,
    source_code_link: "https://github.com/AbbasNaim21/Threejs_T-shirt",
    visit_link: "https://the-t-shirt-customizer.netlify.app",
  },
  {
    name: "Promptopia",
    description:
      "Promptopia is a platform for AI prompt sharing that combines a Next.js frontend and a MERN stack backend, ensuring efficient data management. It also integrates Google Authentication for user security and utilizes the OpenAI API for prompt integration, fostering community collaboration and AI project development.",
    tags: [
      {
        name: "MERN stack",
        color: "blue-text-gradient",
      },
      {
        name: "restAPI",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "orange-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
    ],
    image: promptopia,
    source_code_link: "https://github.com/AbbasNaim21/promptopia",
    visit_link: "https://promptopia-three-eta.vercel.app/",
  },
  {
    name: "DALL-E Clone",
    description:
      "DALL-E Clone: A creative image generation platform inspired by DALL-E, empowering users to generate unique images from text descriptions. It supports sharing with the community and is powered by cutting-edge AI technology.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MERN",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "orange-text-gradient",
      },
      {
        name: "restAPI",
        color: "pink-text-gradient",
      },
    ],
    image: dalleClone,
    source_code_link: "https://github.com/AbbasNaim21/DALL-E-Clone",
    visit_link: "https://dallll-e.netlify.app",
  },
  {
    name: "Metaversus",
    description:
      "Metaversus: A Next.js front-end project enriched with Framer Motion and Tailwind CSS for an engaging and stylish user experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "orange-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: metaversus,
    source_code_link: "https://github.com/AbbasNaim21/metaversus-nextjs",
    visit_link: "https://metaversus-madness-01.netlify.app",
  },
  {
    name: "Shopper's Heaven",
    description:
      "My e-commerce venture offering a diverse product range with real-time updates via Firebase, a user-friendly shopping experience powered by Redux Toolkit, and a blend of design and motion enhancements.",
    tags: [
      {
        name: "Fullstack",
        color: "blue-text-gradient",
      },
      {
        name: "firebase9",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
      {
        name: "reactstrap-css-3",
        color: "green-text-gradient",
      },
    ],
    image: heavenShop,
    source_code_link: "#",
    visit_link: "https://app.netlify.com/sites/heavenshop/overview",
  },
  {
    name: "Admin Panel",
    description:
      "Shared my React Admin Panel on LinkedIn, featuring React Router DOM, Material-UI icons, and customizable data management through JavaScript files on Vercel.",
    tags: [
      {
        name: "Material-UI icons",
        color: "pink-text-gradient",
      },
      {
        name: "reactjs",
        color: "orange-text-gradient",
      },
      {
        name: "scss-sass",
        color: "blue-text-gradient",
      },
    ],
    image: adminPanel,
    source_code_link: "https://github.com/AbbasNaim21/admin-panel",
    visit_link: "https://my-aaddmin-panel.vercel.app/",
  },
  {
    name: "Gerich Restaurant",
    description:
      "Gerich, bringing a delightful dining experience to your screen! Explore our exquisite menu, ambiance, and unique flavors—all from the comfort of your home.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "react-icons",
        color: "green-text-gradient",
      },
      {
        name: "css-3",
        color: "orange-text-gradient",
      },
    ],
    image: gerich,
    source_code_link: "https://github.com/AbbasNaim21/gerich-resto",
    visit_link: "https://gerich-restaurant23.netlify.app",
  },
  {
    name: "GPT-3",
    description:
      "Crafted on Figma and transformed into an interactive, responsive React web app, it's a perfect blend of creativity and technology. Let's discover the power of AI and great user experiences together!",
    tags: [
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "css-3",
        color: "orange-text-gradient",
      },
    ],
    image: gpt3,
    source_code_link: "https://github.com/AbbasNaim21/GPT-3",
    visit_link: "https://gpt-3-reactjs.netlify.app",
  },
  {
    name: "House Marketplace",
    description:
      "An innovative web application that will revolutionize the way we search for our dream homes. House Market Place is the result of my dedication, utilizing the power of React.js and the flexibility of Firebase to create a seamless house hunting experience",
    tags: [
      {
        name: "Fullstack",
        color: "pink-text-gradient",
      },
      {
        name: "firebase9",
        color: "orange-text-gradient",
      },
      {
        name: "react-leaflet",
        color: "blue-text-gradient",
      },
      {
        name: "react-toastify",
        color: "green-text-gradient",
      },
      {
        name: "swiper",
        color: "pink-text-gradient",
      },
      {
        name: "css-3",
        color: "orange-text-gradient",
      },
    ],
    image: houseMarketplace,
    source_code_link: "https://github.com/AbbasNaim21/House-Marketplace",
    visit_link: "https://an-house-marketplace.netlify.app",
  },
  {
    name: "Github Finder",
    description:
      "Github Finder is a powerful web application that allows users to search for GitHub users by their usernames. Leveraging React Router and Link components, the app provides a seamless navigation experience, ensuring smooth transitions between different pages",
    tags: [
      {
        name: "reactjs",
        color: "pink-text-gradient",
      },
      {
        name: "restAPI",
        color: "orange-text-gradient",
      },
      {
        name: "daisyui",
        color: "blue-text-gradient",
      },
      {
        name: "react-icons",
        color: "green-text-gradient",
      },
    ],
    image: githubFinder,
    source_code_link: "https://github.com/AbbasNaim21/github-finder-app",
    visit_link: "https://github-finder-an21.netlify.app/",
  },
  {
    name: "Feedback UI",
    description:
      "A React app with Framer Motion enabling users to share opinions and feedback, along with a 1 to 10 rating system for user input",
    tags: [
      {
        name: "reactjs",
        color: "pink-text-gradient",
      },
      {
        name: "framerMotion",
        color: "orange-text-gradient",
      },
      {
        name: "react-icons",
        color: "green-text-gradient",
      },
    ],
    image: feedback,
    source_code_link: "https://github.com/AbbasNaim21/feedback-app",
    visit_link: "#",
  },
];

export { services, technologies, experiences, testimonials, projects };
