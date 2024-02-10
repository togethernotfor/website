import Link from "next/link";

export default function Header() {
  return (
    <div className="h-14 px-5 flex items-center drop-shadow-md">
      <Link href="/">
        <h5 className="font-bold">together, not for</h5>
      </Link>
    </div>
  );
}
