import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const Section = ({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) => (
  <section
    id={id}
    className={cn("w-full py-16 md:py-24 lg:py-28", className)}
  >
    <div className="container px-4 md:px-6">{children}</div>
  </section>
);

const SectionTitle = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
    <div className="space-y-2">
      <h2 className={cn(
        "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary",
        className
      )}>
        {children}
      </h2>
    </div>
  </div>
);

export { Section, SectionTitle };
