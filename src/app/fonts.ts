import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

/**
 * Archivo's variable width axis is pushed to 112 in typography.css —
 * that's where the display face gets its engineered feel.
 */
export const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const fontVariables = [
  archivo.variable,
  plexSans.variable,
  plexMono.variable,
].join(" ");