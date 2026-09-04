import "./globals.css";
import AnthonyNav from "@/components/navigation/AnthonyNav";

export const metadata = {
  title: "Anthony — Software Engineering Portfolio",
  description: "Anthony's software engineering portfolio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><AnthonyNav/>{children}</body></html>;
}
