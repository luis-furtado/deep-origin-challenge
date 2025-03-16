import type { ReactNode } from "react";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`border rounded-lg shadow-md bg-white p-4 w-full max-w-md ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }: { children: ReactNode, className?: string }) {
    return <div className={`p-2 ${className}`}>{children}</div>;
  }