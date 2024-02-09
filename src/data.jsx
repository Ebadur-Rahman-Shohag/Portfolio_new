import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#contact", text: "contact" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://i.ibb.co/bH9t37d/Worldwise.png",
    url: "https://world-wise-xped.vercel.app/",
    github: "https://github.com/Ebadur-Rahman-Shohag/WorldWise",
    title: "WorldWise",
    text: "It is a web application where travelers can track and keep notes of the places they have visited. The application supports Geolocation. User can add and delete cities as they wish.",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/1sXrnpn/pizza-order.png",
    url: "https://order-your-pizza.netlify.app/",
    github: "https://github.com/Ebadur-Rahman-Shohag/order-your-pizza",
    title: "Order Your Pizza",
    text: "It is a web application where users can order one or more pizzas from a menu. Requires no user account and no login. And payments are made on delivery. This application supports GPS location",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/ChbYBDK/image-search.png",
    url: "https://get-images-from-api.vercel.app/",
    github: "https://github.com/Ebadur-Rahman-Shohag/Get-Images-From-Api",
    title: "Image Search Engine",
    text: "This is simple React application users can search their favorite images. The images will show in gallery form.",
  },
];
