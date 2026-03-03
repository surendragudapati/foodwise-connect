import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Package, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const availableFood = [
  { id: 1, item: "Fresh Vegetables (Mixed)", qty: "50 lbs", location: "Downtown Market", time: "Pickup by 6PM today", distance: "1.2 mi" },
  { id: 2, item: "Bakery Bread & Pastries", qty: "30 units", location: "Main St Bakery", time: "Pickup by 8PM today", distance: "0.8 mi" },
  { id: 3, item: "Rice & Grains", qty: "75 lbs", location: "Costco Warehouse", time: "Pickup by noon tomorrow", distance: "3.5 mi" },
  { id: 4, item: "Prepared Meals", qty: "40 servings", location: "Hotel Grand", time: "Pickup by 9PM today", distance: "2.1 mi" },
];

const RecipientDashboard = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="container mx-auto px-4 py-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Recipient Dashboard</h1>
          <p className="text-muted-foreground">Browse available food donations near you</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Pending Requests", value: "3" },
          { label: "Food Received", value: "280 lbs" },
          { label: "People Fed", value: "520" },
        ].map((s) => (
          <Card key={s.label}>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-foreground">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input className="pl-10" placeholder="Search available food near you..." />
      </div>

      {/* Available food */}
      <h2 className="text-lg font-semibold text-foreground mb-4">Available Near You</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {availableFood.map((f) => (
          <Card key={f.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <CardTitle className="text-base">{f.item}</CardTitle>
                <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                  {f.distance}
                </Badge>
              </div>
              <CardDescription className="flex flex-wrap items-center gap-3 mt-1">
                <span className="inline-flex items-center gap-1"><Package className="h-3.5 w-3.5" /> {f.qty}</span>
                <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {f.location}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {f.time}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" className="w-full">Request This Food</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default RecipientDashboard;
