import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`logo-mark inline-flex items-center text-foreground ${className}`}>
      <span className="text-primary">C</span>
      <span>ORTVEX</span>
    </Link>
  );
}
