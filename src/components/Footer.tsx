import SocialShareLinks from "./SocialShareLinks";

export default function Footer() {
  return (
    <div className="py-3 flex flex-col items-center space-y-2">
      <h3 className="font-bold text-sm md:text-2xl">
        Lets build something{" "}
        <span className="text-cover-yellow">together, not for</span>
      </h3>
      <SocialShareLinks />
      <div className="font-sans text-xs opacity-30 md:text-sm">
        together, not for © 2025
      </div>
    </div>
  );
}
