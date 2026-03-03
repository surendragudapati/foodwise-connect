import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Package, Building2, AlertTriangle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const recentActivity = [
  { id: 1, action: "New donor registered", user: "Green Grocer Co.", time: "2 min ago" },
  { id: 2, action: "Donation delivered", user: "City Food Bank", time: "15 min ago" },
  { id: 3, action: "Listing flagged", user: "System", time: "1 hour ago" },
  { id: 4, action: "New recipient org", user: "Hope Shelter", time: "2 hours ago" },
  { id: 5, action: "Report generated", user: "Analytics Bot", time: "3 hours ago" },
];

const AdminDashboard = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage platform operations and monitor activity</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { icon: <Users className="h-5 w-5" />, label: "Total Users", value: "1,240" },
          { icon: <Package className="h-5 w-5" />, label: "Active Listings", value: "89" },
          { icon: <Building2 className="h-5 w-5" />, label: "Organizations", value: "85" },
          { icon: <AlertTriangle className="h-5 w-5" />, label: "Flagged Items", value: "3" },
        ].map((s) => (
          <Card key={s.label}>
            <CardContent className="pt-6 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                {s.icon}
              </div>
              <div>
                <div className="text-xl font-bold text-foreground">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="activity">
        <TabsList>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="activity" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Activity Feed</CardTitle>
              <CardDescription>Latest platform events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((a) => (
                  <div key={a.id} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                    <div>
                      <div className="text-sm font-medium text-foreground">{a.action}</div>
                      <div className="text-xs text-muted-foreground">{a.user}</div>
                    </div>
                    <Badge variant="outline" className="text-xs">{a.time}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="mt-4">
          <Card>
            <CardContent className="pt-6 text-center text-muted-foreground">
              User management features coming soon — connect a backend to enable this.
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="mt-4">
          <Card>
            <CardContent className="pt-6 text-center text-muted-foreground">
              Report generation will be available with analytics integration.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
    <Footer />
  </div>
);

export default AdminDashboard;
