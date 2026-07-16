import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/config/site";


export function Wordmark() {
  return (
    <Link href="/" className="flex items-center" aria-label={`${SITE.name} — home`}>
      <Image
        src="/logo2.png"
        alt={SITE.name}
        /* Intrinsic size of the file. Fixes the aspect ratio and reserves
           space so the nav doesn't jump on load. Not the display size. */
        width={1083}
        height={300}
        /* This is the display size. h-9 puts the CITECH wordmark at ~13px —
           legible, and still clear of the 80px bar. */
        className="h-8 w-auto md:h-9"
        priority
      />
    </Link>
  );
}