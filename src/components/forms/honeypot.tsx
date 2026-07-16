/** Hidden from people, irresistible to bots. Validated in the schema. */
export function Honeypot() {
  return (
    <div aria-hidden className="absolute -left-[9999px]">
      <label htmlFor="website">Website</label>
      <input id="website" name="website" tabIndex={-1} autoComplete="off" />
    </div>
  );
}