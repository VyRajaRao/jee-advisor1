import { Link } from "react-router-dom";
import { ArrowUpRight, GraduationCap, Search, Target, TrendingUp } from "lucide-react";

const pathways = [
  {
    href: "/explore",
    label: "01 / DISCOVER",
    title: "Explore colleges",
    description: "Search the field by rank, course, location, and institution type.",
    icon: Search,
    accent: "text-neon-blue",
  },
  {
    href: "/predictor",
    label: "02 / TEST",
    title: "Predict your range",
    description: "Turn your rank and preferences into a clear set of likely outcomes.",
    icon: Target,
    accent: "text-neon-purple",
  },
  {
    href: "/trends",
    label: "03 / READ",
    title: "Follow the movement",
    description: "See how cutoffs shift over time before you make your shortlist.",
    icon: TrendingUp,
    accent: "text-neon-pink",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 z-50 w-full border-b border-border/80 bg-background/95">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-8">
          <Link to="/" className="flex items-center gap-3 text-foreground" aria-label="RankAdvisor home">
            <span className="flex h-9 w-9 items-center justify-center border border-neon-purple/70 text-neon-purple">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="font-display text-lg tracking-[0.14em]">RANKADVISOR</span>
          </Link>
          <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.18em] text-muted-foreground md:flex">
            <Link to="/explore" className="transition-colors hover:text-neon-purple">Explore</Link>
            <Link to="/trends" className="transition-colors hover:text-neon-purple">Trends</Link>
            <Link to="/predictor" className="transition-colors hover:text-neon-purple">Predictor</Link>
            <Link to="/about" className="transition-colors hover:text-neon-purple">About</Link>
          </div>
          <Link to="/explore" className="hidden border border-neon-purple/70 px-4 py-2 text-xs uppercase tracking-[0.16em] text-neon-purple transition-colors hover:bg-neon-purple hover:text-primary-foreground sm:block">
            Begin search
          </Link>
        </div>
      </nav>

      <main>
        <section className="relative overflow-hidden border-b border-border/80 px-4 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-48">
          <div className="absolute right-[-8rem] top-24 h-96 w-96 rounded-full border border-neon-purple/20" aria-hidden="true" />
          <div className="absolute right-[-3rem] top-48 h-64 w-64 rounded-full border border-neon-blue/20" aria-hidden="true" />
          <div className="container relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div className="max-w-4xl animate-slide-up">
              <p className="mb-6 text-xs uppercase tracking-[0.24em] text-neon-blue">JEE decision intelligence / 2024 edition</p>
              <h1 className="max-w-4xl text-6xl leading-[0.86] text-foreground sm:text-8xl lg:text-[9rem]">
                Find the place<br />
                where your <span className="text-neon-purple">rank</span> belongs.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                A sharper way to read college admissions. Compare the signal, understand the trend, and make a choice you can stand behind.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Link to="/explore" className="inline-flex items-center gap-3 bg-neon-purple px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
                  Explore the database <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link to="/about" className="text-sm text-muted-foreground underline decoration-border underline-offset-8 transition-colors hover:text-foreground">
                  How the signal works
                </Link>
              </div>
            </div>

            <aside className="border-l border-neon-blue/60 pl-6 sm:pl-8 lg:mb-2" aria-label="RankAdvisor snapshot">
              <p className="text-xs uppercase tracking-[0.2em] text-neon-blue">The dataset</p>
              <div className="mt-8 space-y-7">
                <div>
                  <p className="font-display text-5xl text-neon-purple">150<span className="text-3xl">+</span></p>
                  <p className="mt-1 text-sm text-muted-foreground">institutions indexed</p>
                </div>
                <div className="border-t border-border pt-5">
                  <p className="font-display text-5xl text-neon-purple">08</p>
                  <p className="mt-1 text-sm text-muted-foreground">years of cutoff history</p>
                </div>
                <div className="border-t border-border pt-5">
                  <p className="font-display text-5xl text-neon-purple">95<span className="text-3xl">%</span></p>
                  <p className="mt-1 text-sm text-muted-foreground">prediction accuracy</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-8 sm:py-28">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-10 flex items-end justify-between gap-6 border-b border-border pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-neon-blue">Choose your next move</p>
                <h2 className="mt-3 text-4xl text-foreground sm:text-5xl">Read the field clearly.</h2>
              </div>
              <span className="hidden text-xs uppercase tracking-[0.16em] text-muted-foreground sm:block">01—03</span>
            </div>

            <div className="divide-y divide-border border-b border-border">
              {pathways.map(({ href, label, title, description, icon: Icon, accent }) => (
                <Link key={href} to={href} className="group grid gap-5 py-7 transition-colors hover:bg-card/60 sm:grid-cols-[0.55fr_1fr_1fr_auto] sm:items-center sm:px-5">
                  <span className={`text-xs uppercase tracking-[0.2em] ${accent}`}>{label}</span>
                  <span className="flex items-center gap-3 text-2xl text-foreground sm:text-3xl">
                    <Icon className={`h-5 w-5 ${accent}`} />
                    {title}
                  </span>
                  <span className="max-w-sm text-sm leading-relaxed text-muted-foreground">{description}</span>
                  <ArrowUpRight className={`h-5 w-5 ${accent} transition-transform group-hover:-translate-y-1 group-hover:translate-x-1`} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card/60 px-4 py-16 sm:px-8 sm:py-20">
          <div className="container mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_2fr] lg:items-center">
            <p className="text-xs uppercase tracking-[0.24em] text-neon-blue">A calmer decision</p>
            <p className="max-w-4xl text-3xl leading-tight text-foreground sm:text-5xl">
              The best shortlist is not the longest one. It is the one built from evidence.
            </p>
          </div>
        </section>
      </main>

      <footer className="px-4 py-8 sm:px-8">
        <div className="container mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs uppercase tracking-[0.16em] text-muted-foreground sm:flex-row">
          <span>RankAdvisor / JEE decision intelligence</span>
          <Link to="/about" className="transition-colors hover:text-neon-purple">Methodology & support</Link>
        </div>
      </footer>
    </div>
  );
};

export default Index;
