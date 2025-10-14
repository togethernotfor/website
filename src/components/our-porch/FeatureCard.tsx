import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card className="border-2 hover:border-cover-yellow dark:bg-muted/30 dark:hover:border-cover-yellow transition-colors duration-300">
      <CardContent className="p-5 space-y-3">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-cover-yellow/20 dark:bg-cover-yellow/30">
          {icon}
        </div>
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
