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
    title: "Senior FullStack Developer",
    company_name: "Uniq Partner",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2019 - Jan 2023",
    points: [
      "Consult with project managers, business analysis and development teams on development and business plans.",
      "Provides strategic and technical assistance to Management on architectural strategies by evaluating approaches and alternatives.",
      "Tested website and performed troubleshooting prior to deployment.",
      "Handled whole projects from scratch idea to production deployment.",
      "React/React Native, Vue, NodeJS, C#,.NET, Spring Boot, PostgreSQL, RestAPI, Git, JIRA, SlACK",
    ],
  },
  {
    title: "FullStack Developer",
    company_name: "Uniq Partner",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2015 - Feb 2019",
    points: [
      "Leading and managing a team of 4 developers",
      "Working on integration with REST based company's gateways and third party software",
      "Working in Agile environment using scrum methodology",
      "React/React Native, Golang, Drupal, ASP.NET, Google Firebase, Flutter, MySQL, REST API, GIT, JIRA, CONFLUENCE, Linux",
    ],
  },
  {
    title: "Junior FullStack Developer",
    company_name: "FUNCTIONEIGHT",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2013 - Jan 2016",
    points: [
      "Getting Requirements, Analyzing the Requirements",
      "Single-handedly building front-end and the back-end of many sites.",
      "IA CodeIgniter based CMS for Tripzy.ae and a CMS for B3adventures using the PHP CodeIgniter, Bootstrap.",
      "React/React Native, NodeJS, Google analytics, Django, MySQL, MongoDB, GIT",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He always provide excellent, perfect services and have best communication skills.",
    name: "Blad Morhan",
    designation: "CFO",
    company: "Uniq Partner",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Florin does.",
    name: "Charles Lon",
    designation: "CTO",
    company: "Uniq Partner",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    testimonial:
      "After Florin optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Jack Lee",
    designation: "CTO",
    company: "Functionate",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
];

const projects = [
  {
    name: "Car Seller",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "C#, .NET",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tutor System",
    description:
      "Web application that enables parent search online tutors and let them teach their childrens. Used React for frontend and java, Spring boot framework for backend",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "strap api",
        color: "green-text-gradient",
      },
      {
        name: "spring boot",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
