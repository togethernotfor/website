export default function Greeting() {
  return (
    <div className="flex  min-h-[26rem] flex-col justify-between bg-cover-yellow relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full p-3">
        <div className="pb-5">
          <h1 className="text-4xl bold">Hello,</h1>
          <h1 className="text-4xl bold">welcome to </h1>
          <h1 className="text-4xl bold">together, not for</h1>
        </div>
        <div className="space-y-2">
          <p>We are a socially conscious software solutions company.</p>
          <p>
            Our mission is to provide tailored customer software solutions,
            including maps and websites, designed to empower and uplift
            communities.
          </p>
          <p>Check out what we've been up to and get to know us better!</p>
        </div>
      </div>
    </div>
  );
}
