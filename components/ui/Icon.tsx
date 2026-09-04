export type IconName =
  | "arrow"
  | "github"
  | "linkedin"
  | "mail"
  | "download"
  | "file"
  | "code"
  | "briefcase"
  | "graduation"
  | "book"
  | "user"
  | "menu"
  | "close";

export default function Icon({
  name,
  size = 18,
}: {
  name: IconName;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "arrow") return <svg {...common}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>;
  if (name === "github") return <svg {...common}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3a5.4 5.4 0 0 0-.1-4S18-1.4 15 1.1a13.4 13.4 0 0 0-7 0C5-1.4 3.8-.9 3.8-.9a5.4 5.4 0 0 0-.1 4A5.8 5.8 0 0 0 2.2 7c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 8 18v4"/><path d="M8 19c-3 .9-3-1.5-4.2-2"/></svg>;
  if (name === "linkedin") return <svg {...common}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><path d="M2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>;
  if (name === "mail") return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>;
  if (name === "download") return <svg {...common}><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>;
  if (name === "file") return <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h6"/></svg>;
  if (name === "code") return <svg {...common}><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></svg>;
  if (name === "briefcase") return <svg {...common}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/></svg>;
  if (name === "graduation") return <svg {...common}><path d="m2 10 10-5 10 5-10 5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/><path d="M22 10v6"/></svg>;
  if (name === "book") return <svg {...common}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4v15.5"/><path d="M20 22H6.5A2.5 2.5 0 0 1 4 19.5V4a2 2 0 0 1 2-2h14Z"/></svg>;
  if (name === "user") return <svg {...common}><circle cx="12" cy="8" r="4"/><path d="M4 22a8 8 0 0 1 16 0"/></svg>;
  if (name === "menu") return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
  if (name === "close") return <svg {...common}><path d="m6 6 12 12M18 6 6 18"/></svg>;
  return null;
}
