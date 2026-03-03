import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface RoleCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  to: string;
  color: "primary" | "secondary" | "success" | "info";
}

const colorMap = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary-foreground",
  success: "bg-success/10 text-success",
  info: "bg-info/10 text-info",
};

const RoleCard = ({ icon, title, description, features, to, color }: RoleCardProps) => (
  <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col">
    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${colorMap[color]}`}>
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground mb-4">{description}</p>
    <ul className="flex-1 space-y-2 mb-4">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
          {f}
        </li>
      ))}
    </ul>
    <Link
      to={to}
      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline group-hover:gap-2 transition-all"
    >
      Open Dashboard <ArrowRight className="h-4 w-4" />
    </Link>
  </div>
);

export default RoleCard;
