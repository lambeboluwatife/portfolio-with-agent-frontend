import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Lambe Boluwatife",
  keywords: [
    "Lambe Boluwatife",
    "Web Developer",
    "Software Engineer",
    "AI Agent Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Next.js",
    "Tailwind CSS",
    "Express.js",
    "MongoDB",
    "Mastra",
  ],
  description:
    "Lambe Boluwatife is a versatile web developer and software engineer specializing in AI agent development, with expertise in both frontend and backend technologies.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "manifest", url: "manifest.json" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

