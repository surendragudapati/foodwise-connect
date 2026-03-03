import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";

const monthlyData = [
  { month: "Jan", rescued: 1200, wasted: 800 },
  { month: "Feb", rescued: 1400, wasted: 700 },
  { month: "Mar", rescued: 1800, wasted: 650 },
  { month: "Apr", rescued: 2100, wasted: 500 },
  { month: "May", rescued: 2400, wasted: 420 },
  { month: "Jun", rescued: 2500, wasted: 380 },
];

const categoryData = [
  { name: "Produce", value: 35 },
  { name: "Bakery", value: 25 },
  { name: "Dairy", value: 15 },
  { name: "Prepared", value: 15 },
  { name: "Canned", value: 10 },
];

const COLORS = ["hsl(152,55%,28%)", "hsl(38,75%,55%)", "hsl(200,70%,50%)", "hsl(152,60%,40%)", "hsl(25,80%,55%)"];

const trendData = [
  { week: "W1", efficiency: 62 },
  { week: "W2", efficiency: 68 },
  { week: "W3", efficiency: 71 },
  { week: "W4", efficiency: 75 },
  { week: "W5", efficiency: 78 },
  { week: "W6", efficiency: 82 },
  { week: "W7", efficiency: 85 },
  { week: "W8", efficiency: 88 },
];

const AnalyticsDashboard = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Analytics Dashboard</h1>
        <p className="text-muted-foreground">Track food waste trends and measure impact</p>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Rescue Rate", value: "88%", sub: "↑ 5% this month" },
          { label: "Avg Pickup Time", value: "2.4h", sub: "↓ 30min improved" },
          { label: "Active Routes", value: "24", sub: "12 cities" },
          { label: "CO₂ Saved", value: "4.2T", sub: "Equivalent to 9 cars/yr" },
        ].map((k) => (
          <Card key={k.label}>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-foreground">{k.value}</div>
              <div className="text-sm text-muted-foreground">{k.label}</div>
              <div className="text-xs text-primary mt-1">{k.sub}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader><CardTitle className="text-base">Food Rescued vs Wasted (lbs)</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(150,12%,85%)" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="rescued" fill="hsl(152,55%,28%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="wasted" fill="hsl(0,72%,51%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base">Donations by Category</CardTitle></CardHeader>
          <CardContent className="flex justify-center">
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie data={categoryData} cx="50%" cy="50%" outerRadius={90} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {categoryData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle className="text-base">Rescue Efficiency Trend (%)</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(150,12%,85%)" />
              <XAxis dataKey="week" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} domain={[50, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="efficiency" stroke="hsl(152,55%,28%)" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </main>
    <Footer />
  </div>
);

export default AnalyticsDashboard;
