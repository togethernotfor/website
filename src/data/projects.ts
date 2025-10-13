import { StaticImageData } from "next/image";
import bike_house from "../../public/bike-house_1_50.webp";
import policy_eagle from "../../public/policy-eagle.jpg";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: "government" | "business" | "nonprofit";
  image: StaticImageData;
  imageAlt: string;
  href: string;
  featured?: boolean;
  tags?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  techStack?: string[];
  completionDate?: string;
}

export const projects: Project[] = [
  {
    id: "bike-house",
    title: "Bike House",
    description: "Customer sign-in and management system for local bike shop",
    longDescription:
      "A streamlined customer management platform that helps a local bike shop track customer visits, manage memberships, and improve service delivery.",
    category: "business",
    image: bike_house,
    imageAlt: "Screenshot of the Bike House customer sign-in website",
    href: "https://bikehouse.vercel.app/",
    featured: true,
    tags: ["web app", "customer management", "small business"],
  },
  {
    id: "policy-eagle",
    title: "Policy Eagle",
    description: "Legislation tracking platform for civic engagement",
    longDescription:
      "A comprehensive legislation tracking tool that makes government more transparent and accessible, helping citizens stay informed about policy changes.",
    category: "government",
    image: policy_eagle,
    imageAlt: "Screenshot of the Policy Eagle legislation tracking website",
    href: "https://policy-eagle.vercel.app/",
    featured: true,
    tags: ["civic tech", "transparency", "government"],
  },
];
