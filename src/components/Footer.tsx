import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card py-12">
    <div className="container mx-auto px-4">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-3">
            <div className="rounded-lg bg-primary p-1.5">
              <Leaf className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground">FoodBridge</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Reducing food waste, improving food security — one meal at a time.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3">Platform</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/donor" className="hover:text-foreground transition-colors">Donate Food</Link>
            <Link to="/recipient" className="hover:text-foreground transition-colors">Request Food</Link>
            <Link to="/analytics" className="hover:text-foreground transition-colors">Analytics</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3">Resources</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>How It Works</span>
            <span>Impact Reports</span>
            <span>Food Safety</span>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>hello@foodbridge.org</span>
            <span>Community Forum</span>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
        © 2026 FoodBridge. Building a world with zero food waste.
      </div>
    </div>
  </footer>
);

export default Footer;
