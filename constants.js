export const METADATA = {
  author: "Dhinesh K",
  title: "Portfolio | Dhinesh K",
  description:
    "Dhinesh K is a Frontend Developer from Kuwait, interested in crafting beautiful and functional applications.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@shubh731",
  keywords: [
    "Dhinesh K",
    "Frontend Developer",
    "Web Developer",
    "React Native Developer",
    "Software Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1690572126/preview.png",
  language: "English",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Frontend Developer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: dhineshd68@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/dhinesh-k-985839284/",
  },
  {
    name: "github",
    url: "https://github.com/DhineshKrishnan1206",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/ig_dhineshk/",
  },
  
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    //"sass",
    // "cpp",
    "java",
    "c",
    "python",
    "nodejs",
    "aftereffects",
    "adobepremiere",
    //"webpack",
    //"vite",
    //"firebase",
    // "moralis",
    //"stripe",
    "figma",
    //"tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    //"styledcomponents",
    "antdesign",
    "chakra-ui",
  ],
  databases: ["mysql", "mongodb"],
  other: ["blender","unrealengine","git", "sanity-io"],
};

export const PROJECTS = [
  // {
  //   name: "Shotime",
  //   image: "",
  //   blurImage: "",
  //   description:
  //     "Developed with complete E-commerce functionality and User Authentication 🛍️",
  //   gradient: ["#FFCF1B", "#FF881B"],
  //   url: "https://shubh73-shotime.vercel.app/",
  //   tech: ["react", "tailwindcss", "redux", "mongodb", "stripe"],
  // },
  {
    name: "SyncUp",
    image: "/projects/syncup.jpg",
    blurImage: "/projects/syncup.jpg",
    description: "Music Player App using React Native | MongoDB",
    gradient: ["#F14658", "#DC2537"],
    url: "https://github.com/DhineshKrishnan1206/MusicPlayerNative",
    tech: ["react", "mongoDB", "Redux"],
  },
  {
    name: "ShopNex",
    image: "/projects/shopnex.png",
    blurImage: "/projects/shopnex.png",
    description: "Ecommerce Website using ReactJS | Redux + Tailwind CSS ✍🏻",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://github.com/DhineshKrishnan1206/ShopNex-Ecommerce-ReactJS",
    tech: [ "react", "nextjs", "tailwindcss", "strapi"],
  },
  {
    name: "Music Streaming Website",
    image: "/projects/",
    blurImage: "/projects/blur/",
    description:
      "Music Streaming Platform using ReactJS and MongoDb",
    gradient: ["#000066", "#6699FF"],
    url: "https://github.com/DhineshKrishnan1206/Music-Streaming-website",
    tech: ["react", "chakra-ui", "alan"],
  },
];

export const WORK = [
  {
    id: 1,
    company: "Dukaan",
    title: "Frontend Developer",
    location: "Bangalore, Karnataka",
    range: "December - Current",
    responsibilities: [
      "Led creation of a captivating cross-platform e-commerce solution.",
      "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
      "The app boasts a DAU base of 13k and an extensive MAU count of 170k.",
    ],
    url: "https://mydukaan.io/",
    video: "/work/dukaan.mp4",
  },
  {
    id: 2,
    company: "Aviate",
    title: "Frontend Developer Intern",
    location: "Goa",
    range: "May - October 2022",
    responsibilities: [
      "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
      "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
      "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
    ],
    url: "https://www.aviate.jobs/",
    video: "/work/aviate.mp4",
  },
  {
    id: 3,
    company: "Spacenos",
    title: "Web Developer Intern",
    location: "Bangalore, Karnataka",
    range: "September - December 2021",
    responsibilities: [
      "Led the Full Stack revamp on the Admin Portal.",
      "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
      "Implemented CRUD features for all the services and providers.",
    ],
    url: "https://spacenos.com/",
    video: "/work/spacenos.mp4",
  },
];

export const GTAG = "G-5HCTL2TJ5W";
