import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Calendar, 
  Upload, 
  ChevronLeft, 
  ChevronRight,
  Users,
  Clock,
  Coffee,
  AlertCircle,
  User,
  UserCheck,
  ExternalLink
} from "lucide-react";
import { useParams, Link } from "react-router-dom";

const internData = {
  id: "1",
  name: "John Doe",
  role: "Web Intern",
  status: "Active",
  avatar: "",
  stats: {
    daysPresent: 18,
    daysChange: "+5% from Last Month",
    avgHours: "7.2 H",
    avgHoursChange: "(Stable)",
    totalBreak: 10,
    breakChange: "+5% from Last Month",
    lateArrival: 2,
    lateChange: "-1% from Last Month",
  },
};

const attendanceHistory = [
  { date: "1 Nov, 2025", checkIn: "09:30 AM", checkOut: "05:30 PM", breakDuration: "1h 15m", breakCount: 3, netHours: "8h" },
  { date: "2 Nov, 2025", checkIn: "09:30 AM", checkOut: "05:30 PM", breakDuration: "1h 15m", breakCount: 3, netHours: "8h" },
  { date: "3 Nov, 2025", checkIn: "09:30 AM", checkOut: "05:30 PM", breakDuration: "1h 15m", breakCount: 3, netHours: "8h" },
  { date: "4 Nov, 2025", checkIn: "09:30 AM", checkOut: "05:30 PM", breakDuration: "1h 15m", breakCount: 3, netHours: "8h" },
  { date: "5 Nov, 2025", checkIn: "09:30 AM", checkOut: "05:30 PM", breakDuration: "1h 15m", breakCount: 2, netHours: "8h" },
];

const dailyTimeline = [
  { time: "09:30 AM", event: "Check-in", icon: UserCheck, color: "bg-cyan-500" },
  { time: "11:00 AM", event: "On Break", icon: Coffee, color: "bg-amber-500" },
  { time: "11:30 AM", event: "Resume Work", icon: UserCheck, color: "bg-cyan-500" },
  { time: "01:00 PM", event: "On Break", icon: Coffee, color: "bg-pink-500" },
  { time: "01:30 PM", event: "Resume Work", icon: UserCheck, color: "bg-cyan-500" },
  { time: "05:30 PM", event: "Check-out", icon: UserCheck, color: "bg-pink-500" },
];

const meetingLogs = [
  { time: "10:30 AM - 11:00 AM", title: "Daily Standup", host: "Ravi Kumar", status: "Attended", duration: "30m" },
  { time: "10:30 AM - 11:00 AM", title: "Daily Standup", host: "Ravi Kumar", status: "Missed", duration: "30m" },
  { time: "10:30 AM - 11:00 AM", title: "Daily Standup", host: "Ravi Kumar", status: "Scheduled", duration: "30m" },
];

const keyTasks = [
  { category: "UI/UX", task: "Designed Login Page (Completed)", link: "Link to Figma", status: "completed" },
  { category: "Communication", task: "Client Meeting", link: null, status: "in-progress" },
];

const timeAllocation = [
  { task: "Design Work", hours: "4h" },
  { task: "Meetings/Review", hours: "2h" },
  { task: "Learning/Documentation", hours: "1h" },
];

const StatCard = ({ icon: Icon, label, value, change, variant }: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  change: string;
  variant: "blue" | "cyan" | "teal" | "orange";
}) => {
  const variants = {
    blue: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
    cyan: "bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200",
    teal: "bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200",
    orange: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200",
  };

  const iconVariants = {
    blue: "bg-blue-500",
    cyan: "bg-cyan-500",
    teal: "bg-teal-500",
    orange: "bg-orange-400",
  };

  return (
    <div className={`${variants[variant]} rounded-xl p-4 border`}>
      <div className={`${iconVariants[variant]} w-8 h-8 rounded-lg flex items-center justify-center mb-3`}>
        <Icon className="h-4 w-4 text-white" />
      </div>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className={`text-xs mt-1 ${change.includes('+') ? 'text-green-600' : change.includes('-') ? 'text-red-500' : 'text-muted-foreground'}`}>
        {change}
      </div>
    </div>
  );
};

export default function InternDetails() {
  const { id } = useParams();

  return (
    <DashboardLayout title="Intern Details">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/attendance" className="hover:text-primary">Attendance</Link>
        <span>›</span>
        <span>Intern Logs</span>
        <span>›</span>
        <span className="text-foreground font-medium">{internData.name}</span>
      </div>

      {/* Intern Profile Card */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-6">
              <Avatar className="h-24 w-24 border-4 border-primary/20">
                <AvatarImage src={internData.avatar} />
                <AvatarFallback className="bg-gradient-to-br from-blue-400 to-cyan-500 text-white text-2xl">
                  <User className="h-10 w-10" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-semibold text-primary">{internData.name}</h2>
                <p className="text-muted-foreground">{internData.role}</p>
                <Badge className="mt-2 bg-green-100 text-green-700 border-green-200">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-1" />
                  {internData.status}
                </Badge>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="30">
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Last 30 Days" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">Last 7 Days</SelectItem>
                  <SelectItem value="15">Last 15 Days</SelectItem>
                  <SelectItem value="30">Last 30 Days</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm" className="gap-2">
                <Upload className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <StatCard 
              icon={Users} 
              label="Days Present" 
              value={internData.stats.daysPresent} 
              change={internData.stats.daysChange}
              variant="blue"
            />
            <StatCard 
              icon={Clock} 
              label="Avg Hours" 
              value={internData.stats.avgHours} 
              change={internData.stats.avgHoursChange}
              variant="cyan"
            />
            <StatCard 
              icon={Coffee} 
              label="Total Break" 
              value={internData.stats.totalBreak} 
              change={internData.stats.breakChange}
              variant="teal"
            />
            <StatCard 
              icon={AlertCircle} 
              label="Late Arrival" 
              value={internData.stats.lateArrival} 
              change={internData.stats.lateChange}
              variant="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Main Content Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Left Column - Attendance History */}
        <div className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-semibold">Attendance Log History</CardTitle>
              <Select defaultValue="15">
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Last 15 Days" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">Last 7 Days</SelectItem>
                  <SelectItem value="15">Last 15 Days</SelectItem>
                  <SelectItem value="30">Last 30 Days</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-medium">Date</TableHead>
                    <TableHead className="font-medium">Check-In</TableHead>
                    <TableHead className="font-medium">Check-out</TableHead>
                    <TableHead className="font-medium">Break Duration</TableHead>
                    <TableHead className="font-medium">Net Hours</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {attendanceHistory.map((record, idx) => (
                    <TableRow key={idx} className="hover:bg-muted/30">
                      <TableCell className="text-muted-foreground">{record.date}</TableCell>
                      <TableCell className="text-muted-foreground">{record.checkIn}</TableCell>
                      <TableCell className="text-muted-foreground">{record.checkOut}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {record.breakDuration}
                        <span className="text-xs block">({record.breakCount} Breaks)</span>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{record.netHours}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Daily Timeline & Meeting Logs */}
          <Card>
            <CardContent className="p-6">
              <div className="text-sm text-muted-foreground mb-4">5 Nov, 2025</div>
              <div className="grid grid-cols-2 gap-6">
                {/* Daily Timeline */}
                <div>
                  <h4 className="font-semibold mb-4">Daily Timeline</h4>
                  <div className="space-y-4">
                    {dailyTimeline.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground w-20">{item.time}</span>
                        <div className={`w-2 h-2 rounded-full ${item.color}`} />
                        <Badge variant="outline" className="bg-cyan-50 text-cyan-700 border-cyan-200 gap-1">
                          <item.icon className="h-3 w-3" />
                          {item.event}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Meeting Logs */}
                <div>
                  <h4 className="font-semibold mb-4">Meeting Logs</h4>
                  <div className="space-y-3">
                    {meetingLogs.map((meeting, idx) => (
                      <div key={idx} className="bg-muted/30 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs text-muted-foreground">{meeting.time}</div>
                            <div className="font-medium text-sm">{meeting.title}</div>
                            <div className="text-xs text-muted-foreground">Host: {meeting.host}</div>
                          </div>
                          <div className="text-right">
                            <Badge 
                              variant="outline" 
                              className={`${
                                meeting.status === "Attended" ? "bg-green-100 text-green-700 border-green-200" :
                                meeting.status === "Missed" ? "bg-red-100 text-red-700 border-red-200" :
                                "bg-blue-100 text-blue-700 border-blue-200"
                              }`}
                            >
                              {meeting.status}
                            </Badge>
                            <div className="text-xs text-muted-foreground mt-1">{meeting.duration}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Daily Report */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-semibold">Daily Report</CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-md">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">5 Nov, 2025</span>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Key Tasks */}
            <div>
              <h4 className="font-medium mb-3">Key Tasks</h4>
              <div className="space-y-2">
                {keyTasks.map((task, idx) => (
                  <div key={idx} className="bg-muted/30 rounded-lg p-3 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-primary font-medium">[{task.category}]</span>
                      <span className="text-sm ml-2">{task.task}</span>
                    </div>
                    {task.link ? (
                      <Button variant="link" size="sm" className="text-primary gap-1">
                        {task.link}
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    ) : (
                      <Badge className="bg-green-100 text-green-700 border-green-200">
                        (In Progress)
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Time Allocation */}
            <div>
              <h4 className="font-medium mb-3">Time Allocation</h4>
              <div className="space-y-2">
                {timeAllocation.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-muted/30 rounded-lg p-3">
                    <span className="text-sm">{item.task}</span>
                    <span className="font-medium">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Blockers/Issue */}
            <div>
              <h4 className="font-medium mb-3">Blockers/Issue</h4>
              <div className="bg-muted/30 rounded-lg p-3 text-sm text-muted-foreground">
                Waiting for confirmation on typography style for mobile view on the login page and attendance page
              </div>
            </div>

            {/* HR/Manager Feedback */}
            <div>
              <h4 className="font-medium mb-3">HR/Manager Feedback</h4>
              <div className="bg-cyan-50 rounded-lg p-3 text-sm text-cyan-700 border border-cyan-200">
                Received Feedback from HR and updated Card layout hover status
              </div>
            </div>

            <div className="flex justify-end">
              <Button variant="outline" className="gap-2">
                <Upload className="h-4 w-4" />
                Export
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
