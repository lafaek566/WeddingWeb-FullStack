import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  realEstate,
  texal,
  realEstateP,
  texalP,
  person1,
  person2,
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
    title: "React Native Developer",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Petrus Avelindo Bria, S.T",
    company_name: "Putra dari:",
    icon: person2,
    iconBg: "#383E56",
    date: "About the groom",
    points: [
      "Anak pertama dari empat bersaudara pasangan :",
      "Ayah - Albertus Bria Nahak",
      "Ibu  - Maria Luruk Seran ",
    ],
  },
  {
    title: "Magdalena Afrita Tae",
    company_name: "Putri dari:",
    icon: person1,
    iconBg: "#E6DEDD",
    date: "About the bride",
    points: [
      "Anak keempat dari enam bersaudara pasangan :",
      "Ayah - Yohanes Un Tae",
      "Ibu  - Leonarda Rika",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Toni Andrian",
    designation: "CEO",
    company: "Texal-Oil",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_GggyGX1jTYTXUgYt951ihl_m8Ni4d8F0w&s",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Eko Kurniawan Khannedy",
    designation: "Programmer",
    company: "Blibli.com",
    image: "https://pzn.codepolitan.com/assets/img/img-about-2.png",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Enigma Camp",
    designation: "Programmer",
    company: "Enigmaa-camp",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdBe9IcFbsR2CDvvMQ3cZYmCalbkq97rggNgq4GB2zOQ-zfSqYmyXTVEGdPu2Y5sOBSCc&usqp=CAU",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/lafaek566/Car-Rent-web",
  },
  {
    name: "E-commerce (texal-oil)",
    description:
      "The engine oil e-commerce platform allows users to search for products by brand, specifications, get complete details, add to cart, select payment method, track delivery.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "orange-text-gradient",
      },
    ],
    image: texalP,
    source_code_link: "https://github.com/lafaek566/webtexaloil",
  },
  {
    name: "RealEstate",
    description:
      "RealEstate website is an e-commerce that allows property sellers and prospective buyers to interact easily through features such as home searches based on location, price, type and size filters.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
    ],
    image: realEstateP,
    source_code_link: "https://github.com/lafaek566/e-commerce",
  },
];

export { services, technologies, experiences, testimonials, projects };
