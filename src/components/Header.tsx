import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export default function Header() {
  return (
    <div className="h-14 px-5 flex items-center justify-between drop-shadow-md">
      <Link href="/">
        <h5 className="font-bold">together, not for</h5>
      </Link>
      <ModeToggle />
    </div>
  );
}
