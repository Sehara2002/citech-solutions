import Link from "next/link";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-paper p-8 md:p-10 h-full">
      <p className="annotation text-signal">{service.track}</p>
      <h3 className="display-md mt-4">{service.title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-graphite">
        {service.summary}
      </p>
      <Link
        href={`/services#${service.id}`}
        className="link annotation mt-6 inline-block"
      >
        Detail
      </Link>
    </div>
  );
}