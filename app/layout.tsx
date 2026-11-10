import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

// TODO: replace with your real domain
const siteUrl = "https://your-domain.com";

export const metadata: Metadata = {
  title: "Narasimha Pujith - Product Consultant & Integration Engineer",
  description: "Product Consultant at Juspay in Bengaluru, with a Master's in Computer Applications and a background in Python, data science and machine learning. Previously an Integration Engineer at eShipz.",
  keywords: [
    "Narasimha Pujith",
    "B Reddi Sri Lakshmi Narasimha",
    "Product Consultant",
    "Integration Engineer",
    "Juspay",
    "eShipz",
    "Python Developer",
    "Data Science",
    "Machine Learning",
    "Deep Learning",
    "Object Detection",
    "Bengaluru",
    "Portfolio",
  ],
  authors: [{ name: "Narasimha Pujith" }],
  creator: "Narasimha Pujith",
  publisher: "Narasimha Pujith",
  openGraph: {
    type: "website",
    locale: "en_US",