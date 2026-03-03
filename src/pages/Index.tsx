import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatCard from "@/components/StatCard";
import RoleCard from "@/components/RoleCard";
import heroImage from "@/assets/hero-food.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Leaf,
  TrendingDown,
  Users,
  HandHeart,
  Building2,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  Package,
  Truck,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Fresh vegetables and fruits symbolizing food sustainability"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-36">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground mb-6">
              <Leaf className="h-4 w-4" />
              Reducing food waste, one meal at a time
            </motion.div>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Bridge the gap between{" "}
              <span className="text-gradient">surplus food</span> and{" "}
              <span className="text-gradient">hungry people</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-muted-foreground mb-8 max-w-lg"
            >
              FoodBridge connects food donors with those in need — tracking waste,
              optimizing logistics, and building a more food-secure world.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link to="/donor">
                  Start Donating <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/recipient">Request Food</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            icon={<TrendingDown className="h-5 w-5" />}
            value="2.5M lbs"
            label="Food Rescued"
            description="Diverted from landfills"
          />
          <StatCard
            icon={<Users className="h-5 w-5" />}
            value="12,400+"
            label="Meals Served"
            description="To families in need"
          />
          <StatCard
            icon={<HandHeart className="h-5 w-5" />}
            value="340+"
            label="Active Donors"
            description="Restaurants & grocers"
          />
          <StatCard
            icon={<Building2 className="h-5 w-5" />}
            value="85"
            label="Partner Orgs"
            description="Food banks & shelters"
          />
        </div>
      </section>

      {/* How it works */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-foreground mb-3">How FoodBridge Works</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Three simple steps to rescue food and reduce waste
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: <Package className="h-7 w-7 text-primary" />,
              step: "01",
              title: "List Surplus Food",
              desc: "Donors list their available surplus food with details on quantity, type, and pickup timing.",
            },
            {
              icon: <Truck className="h-7 w-7 text-secondary-foreground" />,
              step: "02",
              title: "Match & Coordinate",
              desc: "Our platform matches donations to nearby recipient organizations and coordinates logistics.",
            },
            {
              icon: <HandHeart className="h-7 w-7 text-success" />,
              step: "03",
              title: "Deliver & Track Impact",
              desc: "Food reaches those in need. Every meal is tracked to measure environmental and social impact.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent">
                {item.icon}
              </div>
              <span className="text-xs font-bold text-primary tracking-widest uppercase">
                Step {item.step}
              </span>
              <h3 className="text-lg font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Roles */}
      <section className="bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground mb-3">Your Role in the Solution</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Whether you donate, receive, analyze, or manage — you make a difference
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <RoleCard
              icon={<ShieldCheck className="h-6 w-6" />}
              title="Admin"
              description="Oversee platform operations and ensure quality"
              features={["Manage users & content", "Monitor data accuracy", "Platform analytics"]}
              to="/admin"
              color="primary"
            />
            <RoleCard
              icon={<HandHeart className="h-6 w-6" />}
              title="Food Donor"
              description="List surplus food and coordinate donations"
              features={["List available food", "Schedule pickups", "Track donation impact"]}
              to="/donor"
              color="secondary"
            />
            <RoleCard
              icon={<Building2 className="h-6 w-6" />}
              title="Recipient Org"
              description="Request food and distribute to communities"
              features={["Browse available food", "Manage logistics", "Distribution tracking"]}
              to="/recipient"
              color="success"
            />
            <RoleCard
              icon={<BarChart3 className="h-6 w-6" />}
              title="Data Analyst"
              description="Track trends and optimize food rescue"
              features={["Waste trend analysis", "Generate reports", "Efficiency insights"]}
              to="/analytics"
              color="info"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-24 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to make an impact?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join hundreds of organizations already using FoodBridge to rescue food
            and feed communities.
          </p>
          <Button size="lg" asChild>
            <Link to="/donor">
              Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
