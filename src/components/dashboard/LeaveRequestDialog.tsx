import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Download } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface LeaveRequest {
  id: string;
  name: string;
  role: string;
  email: string;
  leaveType: string;
  startDate: string;
  endDate: string;
  reason: string;
}

interface LeaveRequestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  request: LeaveRequest | null;
}

export function LeaveRequestDialog({ open, onOpenChange, request }: LeaveRequestDialogProps) {
  const [remarks, setRemarks] = useState("");

  if (!request) return null;

  const handleApprove = () => {
    toast.success(`Leave approved for ${request.name}`);
    onOpenChange(false);
    setRemarks("");
  };

  const handleReject = () => {
    toast.error(`Leave rejected for ${request.name}`);
    onOpenChange(false);
    setRemarks("");
  };

  const handleDecideLater = () => {
    toast.info("Decision postponed");
    onOpenChange(false);
    setRemarks("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <div className="p-6">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-2xl font-bold text-primary">Leave request</DialogTitle>
            <p className="text-muted-foreground text-sm">
              {request.name} | {request.role} | {request.email}
            </p>
          </DialogHeader>

          <div className="border-t border-border pt-4 space-y-4">
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="font-semibold text-foreground">Leave Type :</span>
              <span className="text-muted-foreground">{request.leaveType}</span>
            </div>

            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="font-semibold text-foreground">Duration :</span>
              <span className="text-muted-foreground">{request.startDate} → {request.endDate}</span>
            </div>

            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="font-semibold text-foreground">Reason :</span>
              <span className="text-muted-foreground">{request.reason}</span>
            </div>

            <Button 
              variant="outline" 
              className="bg-red-500 hover:bg-red-600 text-white border-none gap-2"
            >
              <Download className="h-4 w-4" />
              Download Attachments
            </Button>

            <div className="space-y-2">
              <label className="text-foreground font-medium">
                Remarks <span className="text-muted-foreground font-normal">(Optional)</span>
              </label>
              <Textarea
                placeholder="Enter remarks..."
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                className="min-h-[100px] resize-none"
              />
            </div>
          </div>

          <div className="border-t border-border pt-4 mt-4 flex items-center justify-center gap-3">
            <Button
              variant="outline"
              className="border-green-500 text-green-600 hover:bg-green-50 rounded-full px-6"
              onClick={handleApprove}
            >
              Approve Leave
            </Button>
            <Button
              variant="outline"
              className="border-red-400 bg-red-100 text-red-600 hover:bg-red-200 rounded-full px-6"
              onClick={handleReject}
            >
              Reject Leave
            </Button>
            <Button
              variant="outline"
              className="border-blue-500 text-blue-600 hover:bg-blue-50 rounded-full px-6"
              onClick={handleDecideLater}
            >
              Decide Later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
