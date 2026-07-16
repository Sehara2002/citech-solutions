import Link from "next/link";

/** Say what happened and give the two doors out. No apology, no joke. */
export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 blueprint opacity-60" aria-hidden />
      <div className="shell relative flex min-h-[70vh] flex-col justify-center py-24">
        <p className="annotation">Error 404</p>
        <h1 className="display-xl mt-6 max-w-3xl">
          This page isn&apos;t on the drawing.
        </h1>
        <p className="lede mt-6 max-w-md">
          The link may be out of date, or the page may have moved.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Back to home
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Tell us what broke
          </Link>
        </div>
      </div>
    </section>
  );
}