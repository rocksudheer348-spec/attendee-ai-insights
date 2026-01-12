import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { AttendanceChart } from "@/components/dashboard/AttendanceChart";
import { WeeklyAISummary } from "@/components/dashboard/WeeklyAISummary";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { UpcomingInterviews } from "@/components/dashboard/UpcomingInterviews";
import { OnboardingProgress } from "@/components/dashboard/OnboardingProgress";
import { Notifications } from "@/components/dashboard/Notifications";
import { Button } from "@/components/ui/button";
import { FileText, Users, UserCheck, Briefcase, Award, Clock, Upload } from "lucide-react";

export default function Dashboard() {
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
        </div>

        {/* Right Column - Summaries & Progress */}
        <div className="space-y-6">
          <WeeklyAISummary />
          <UpcomingInterviews />
          <OnboardingProgress />
          <Notifications />
        </div>
      </div>
    </DashboardLayout>
  );
}
