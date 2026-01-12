import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, MessageSquare, Calendar } from "lucide-react";

interface Notification {
  id: string;
  type: "certificate" | "message" | "leave";
  text: string;
  date: string;
  time: string;
  refId: string;
}

const notifications: Notification[] = [
  { id: "1", type: "certificate", text: "Certificate requested by Ravi Kumar (AI Intern)", date: "4 November 2025", time: "05:30 PM", refId: "304WEB" },
  { id: "2", type: "certificate", text: "Certificate requested by Ravi Kumar (AI Intern)", date: "4 November 2025", time: "05:30 PM", refId: "304WEB" },
  { id: "3", type: "message", text: "Message from Ravi Kumar (AI Intern)", date: "4 November 2025", time: "05:30 PM", refId: "" },
  { id: "4", type: "leave", text: "Leave request from John Doe (Web Intern)", date: "4 November 2025", time: "05:30 PM", refId: "304WEB" },
];

const getIcon = (type: string) => {
  switch (type) {
    case "certificate": return Award;
    case "message": return MessageSquare;
    case "leave": return Calendar;
    default: return MessageSquare;
  }
};

export function Notifications() {
  return (
    <Card className="shadow-card border-0">
      <CardHeader className="pb-2 flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Notifications</CardTitle>
        <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs h-7 px-3">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {notifications.map((notification) => {
          const Icon = getIcon(notification.type);
          return (
            <div key={notification.id} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-stat-purple flex items-center justify-center">
                <Icon className="h-4 w-4 text-stat-icon-purple" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground">{notification.text}</p>
                <p className="text-xs text-muted-foreground">
                  {notification.date} &nbsp;&nbsp; {notification.time}
                  {notification.refId && <> &nbsp;&nbsp; ID: {notification.refId}</>}
                </p>
              </div>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs px-3 py-1 h-7">
                View
              </Button>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
