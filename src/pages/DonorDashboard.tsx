import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, MapPin, Clock, Package } from "lucide-react";

const mockDonations = [
  { id: 1, item: "Fresh Vegetables (Mixed)", qty: "50 lbs", location: "Downtown Market", time: "Pickup by 6PM today", status: "available" },
  { id: 2, item: "Bakery Bread & Pastries", qty: "30 units", location: "Main St Bakery", time: "Pickup by 8PM today", status: "available" },
  { id: 3, item: "Canned Goods Assortment", qty: "100 cans", location: "Grocery Outlet", time: "Pickup by noon tomorrow", status: "claimed" },
  { id: 4, item: "Dairy Products", qty: "20 gallons", location: "Farm Fresh Dairy", time: "Pickup by 5PM today", status: "delivered" },
];

const statusColors: Record<string, string> = {
  available: "bg-success/10 text-success border-success/20",
  claimed: "bg-warning/10 text-warning border-warning/20",
  delivered: "bg-primary/10 text-primary border-primary/20",
};

const DonorDashboard = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="container mx-auto px-4 py-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Donor Dashboard</h1>
          <p className="text-muted-foreground">List surplus food and track your donations</p>
        </div>
        <Button className="mt-4 sm:mt-0">
          <Plus className="mr-2 h-4 w-4" /> List New Food
        </Button>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Active Listings", value: "2" },
          { label: "Total Donated", value: "450 lbs" },
          { label: "Meals Provided", value: "360" },
        ].map((s) => (
          <Card key={s.label}>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-foreground">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Listings */}
      <h2 className="text-lg font-semibold text-foreground mb-4">Your Listings</h2>
      <div className="grid gap-4">
        {mockDonations.map((d) => (
          <Card key={d.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-base">{d.item}</CardTitle>
                  <CardDescription className="flex items-center gap-4 mt-1">
                    <span className="inline-flex items-center gap-1"><Package className="h-3.5 w-3.5" /> {d.qty}</span>
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {d.location}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {d.time}</span>
                  </CardDescription>
                </div>
                <Badge variant="outline" className={statusColors[d.status]}>
                  {d.status}
                </Badge>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default DonorDashboard;
