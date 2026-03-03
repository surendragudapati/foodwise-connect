import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  description?: string;
}

const StatCard = ({ icon, value, label, description }: StatCardProps) => (
  <div className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:shadow-lg hover:-translate-y-1">
    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
      {icon}
    </div>
    <div className="text-3xl font-bold text-foreground animate-count-up">{value}</div>
    <div className="text-sm font-medium text-foreground mt-1">{label}</div>
    {description && (
      <p className="text-xs text-muted-foreground mt-2">{description}</p>
    )}
  </div>
);

export default StatCard;
