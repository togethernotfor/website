import { StaticImageData } from "next/image";
import bike_house from "../../public/bike-house_1_50.webp";
import policy_eagle from "../../public/policy-eagle.jpg";
import our_porch from "../../public/our-porch/icon1-cropped-trans-2.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: "government" | "business" | "nonprofit" | "community";
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
    id: "our-porch",
    title: "Our Porch",
    description: "Privacy-first mobile app for building stronger neighborhood connections",
    longDescription:
      "A mobile app that helps you nurture meaningful relationships with your neighbors through smart reminders, contact tracking, and personalized organization. All data stays on your device with no cloud sync required.",
    category: "community",
    image: our_porch,
    imageAlt: "Our Porch app icon",
    href: "/our-porch/support",
    featured: true,
    tags: ["mobile app", "privacy-first", "community building"],
  },
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
