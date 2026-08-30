import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

/**
 * Re-mounts its children on every pathname change so the page-in
 * animation replays. The animation itself is disabled by the
 * prefers-reduced-motion media query in styles.css.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div key={pathname} className="animate-page-in">
      {children}
    </div>
  );
}
