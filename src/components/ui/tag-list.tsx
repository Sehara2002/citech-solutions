export function TagList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="annotation border border-line px-2.5 py-1">
          {item}
        </li>
      ))}
    </ul>
  );
}