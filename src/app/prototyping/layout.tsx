import type { Metadata } from "next";
import "./shared/gradients.css";

export const metadata: Metadata = {
  title: "MooHive — Visual Prototypes",
  description: "Landing page visual identity explorations",
};

export default function PrototypingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
