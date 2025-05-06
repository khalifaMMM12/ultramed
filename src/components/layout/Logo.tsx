import Link from "next/link";

interface LogoProps {
  variant?: "default" | "white";
  size?: "default" | "large" | "small";
}

export function Logo({ variant = "default", size = "default" }: LogoProps) {
  return (
    <Link href="/" className="flex items-center">
      <img
        src="/logo.png"
        alt="UltraMed Logo"
        className={`h-10 w-auto ${variant === "white" ? "bg-white rounded" : ""}`}
        />
    </Link>
  );
}
