export default function Greeting() {
  return (
    <div className="flex min-h-[32rem] flex-col justify-center bg-cover-yellow relative">
      <div className="max-w-4xl mx-auto w-full px-6 py-12 md:px-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold">Hello, we are</h1>
            <h1 className="text-4xl md:text-5xl font-bold">
              together, not for
            </h1>
          </div>

          <div className="space-y-4 text-lg md:text-xl max-w-2xl">
            <p className="font-semibold">
              We are a socially conscious software solutions company.
            </p>
            <p>
              Our mission is to provide custom software solutions for local
              governments, small businesses, and non-profits — including maps
              and websites, designed to empower and uplift communities.
            </p>
          </div>

          <div className="pt-4">
            <a
              href="#contact"
              className="inline-block bg-foreground text-background px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Let&apos;s Build Together
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
