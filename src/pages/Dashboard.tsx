import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { AttendanceChart } from "@/components/dashboard/AttendanceChart";
import { WeeklyAISummary } from "@/components/dashboard/WeeklyAISummary";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { UpcomingInterviews } from "@/components/dashboard/UpcomingInterviews";
import { OnboardingProgress } from "@/components/dashboard/OnboardingProgress";
import { Notifications } from "@/components/dashboard/Notifications";
import { LeaveRequestDialog } from "@/components/dashboard/LeaveRequestDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, UserCheck, Briefcase, Award, Clock, Upload, Calendar } from "lucide-react";

const mockLeaveRequests = [
  {
    id: "1",
    name: "John Doe",
    role: "Web Intern",
    email: "john.doe@company.com",
    leaveType: "Sick Leave",
    startDate: "1 Nov, 2025",
    endDate: "3, Nov, 2025",
    reason: "I am not feeling well and doctor suggested complete rest for three days",
  },
  {
    id: "2",
    name: "Priya Verma",
    role: "Design Intern",
    email: "priya.verma@company.com",
    leaveType: "Personal Leave",
    startDate: "5 Nov, 2025",
    endDate: "6, Nov, 2025",
    reason: "Family function to attend",
  },
];

export default function Dashboard() {
  const [leaveDialogOpen, setLeaveDialogOpen] = useState(false);
  const [selectedLeaveRequest, setSelectedLeaveRequest] = useState<typeof mockLeaveRequests[0] | null>(null);

  const handleViewLeaveRequest = (request: typeof mockLeaveRequests[0]) => {
    setSelectedLeaveRequest(request);
    setLeaveDialogOpen(true);
  };

  return (
    <DashboardLayout title="Dashboard">
      {/* Quick Stats Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Quick Stats</h2>
          <p className="text-sm text-muted-foreground">Today's summary</p>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Upload className="h-4 w-4" />
          Export
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <StatCard
          icon={<FileText className="h-5 w-5" />}
          value="53"
          label="Total Applicants"
          change="+8% from yesterday"
          changeType="positive"
          variant="blue"
        />
        <StatCard
          icon={<Users className="h-5 w-5" />}
          value="26"
          label="Active Interns"
          change="0.5% from yesterday"
          changeType="neutral"
          variant="cyan"
        />
        <StatCard
          icon={<UserCheck className="h-5 w-5" />}
          value="8"
          label="Managers"
          change="0.5% from yesterday"
          changeType="neutral"
          variant="cyan"
        />
        <StatCard
          icon={<Briefcase className="h-5 w-5" />}
          value="8"
          label="Projects"
          change="0.5% from yesterday"
          changeType="neutral"
          variant="orange"
        />
        <StatCard
          icon={<Award className="h-5 w-5" />}
          value="12"
          label="Pending Certificates"
          change="0.5% from yesterday"
          changeType="neutral"
          variant="pink"
        />
        <StatCard
          icon={<Clock className="h-5 w-5" />}
          value="82%"
          label="Avg. Attendance"
          change="0.5% from yesterday"
          changeType="neutral"
          variant="cyan"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Charts & Activity */}
        <div className="col-span-2 space-y-6">
          <AttendanceChart />
          <RecentActivity />
          
          {/* Leave Applications Section */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold">Leave Applications</CardTitle>
                <Button variant="outline" size="sm">View All</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockLeaveRequests.map((request) => (
                <div 
                  key={request.id}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted transition-colors"
                  onClick={() => handleViewLeaveRequest(request)}
                >
                  <div>
                    <p className="font-medium text-foreground">{request.name}</p>
                    <p className="text-sm text-muted-foreground">{request.leaveType} • {request.startDate} - {request.endDate}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-primary">Review</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Summaries & Progress */}
        <div className="space-y-6">
          <WeeklyAISummary />
          <UpcomingInterviews />
          <OnboardingProgress />
          <Notifications />
        </div>
      </div>

      {/* Leave Request Dialog */}
      <LeaveRequestDialog
        open={leaveDialogOpen}
        onOpenChange={setLeaveDialogOpen}
        request={selectedLeaveRequest}
      />
    </DashboardLayout>
  );
}
