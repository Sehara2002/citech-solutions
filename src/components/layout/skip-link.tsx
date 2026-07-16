export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-ink focus:text-paper focus:px-4 focus:py-2"
    >
      Skip to content
    </a>
  );
}