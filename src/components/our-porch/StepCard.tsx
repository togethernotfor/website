interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

export default function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="relative p-4 space-y-2">
      <div className="flex items-center space-x-4">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-cover-yellow text-black font-bold text-xl flex-shrink-0">
          {number}
        </div>
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <p className="text-muted-foreground leading-relaxed pl-[4.5rem]">
        {description}
      </p>
    </div>
  );
}
