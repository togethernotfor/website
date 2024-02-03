// "use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";

import bike_house from "../../public/bike-house_1_50.webp";
import policy_eagle from "../../public/policy-eagle.jpg";

export default function Portfolio() {
  const cards = [
    {
      src: bike_house,
      alt: "Picture of the Bike House Website",
      title: "Bike House",
      description: "Customer SignIn Site",
      href: "https://bikehouse.vercel.app/",
    },
    {
      src: policy_eagle,
      alt: "Picture of the Bike House Website",
      title: "Policy Eagle",
      description: "Legislation Tracking Site",
      href: "https://policy-eagle.vercel.app/",
    },
    // Add more card data here
  ];

  return (
    <div className="grid grid-col-1 md:grid-cols-2 3xl:grid-cols-3 mx-auto pt-12">
      {cards.map((card, index) => (
        <Link href={card.href} key={index}>
          <Card key={index} className="border-0 shadow-none">
            <CardContent>
              <div className="md:min-h-[400px] place-content-center">
                <Image src={card.src} alt={card.alt} priority={true} />
              </div>
              <div className="flex flex-col w-full text-end">
                <h1>{card.title}</h1>
                <p>{card.description}</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
