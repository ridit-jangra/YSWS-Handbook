import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative isolate flex flex-col items-center justify-center text-center flex-1 gap-4 px-4 overflow-hidden">
      <div aria-hidden className="hc-rising-glow pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[90%]" />
      <p className="hc-eyebrow">Hack Club</p>
      <h1 className="text-6xl font-bold tracking-tight">
        YSWS <span className="text-fd-primary">Handbook</span>
      </h1>
      <p className="text-fd-muted-foreground max-w-md text-lg">
        This handbook answers the question "How to start a ysws?"
      </p>
      <Link href="/docs" className="hc-button lg mt-2">
        Read the docs
      </Link>
    </div>
  );
}
