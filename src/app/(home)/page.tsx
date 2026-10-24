import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative isolate flex flex-col items-center justify-center text-center flex-1 gap-4 px-4 overflow-hidden">
      <div aria-hidden className="hc-rising-glow pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[90%]" />
      <p className="hc-eyebrow">Hack Club</p>
      <h1 className="text-5xl sm:text-6xl font-bold tracking-tight relative">
        YSWS <span className="text-fd-primary">Handbook</span>
        <p className='italic text-fd-muted-foreground text-sm font-mono absolute top-0 -right-18'>by Ridit :3</p>
      </h1>
      <p className="text-fd-muted-foreground max-w-md text-lg">
        Got an idea for a YSWS? This is how you ship it.
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-3">
        <Link href="/docs" className="hc-button lg">
          Read the docs
        </Link>
        <Link href="/docs/tldr" className="hc-button lg outline">
          Read the TL;DR
        </Link>
      </div>
    </div>
  );
}
