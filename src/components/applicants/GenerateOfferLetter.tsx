import { useState } from "react";
import { Applicant } from "@/pages/Applicants";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Mail, CalendarIcon, Upload, Eye } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface GenerateOfferLetterProps {
  applicant: Applicant | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GenerateOfferLetter({ applicant, open, onOpenChange }: GenerateOfferLetterProps) {
  const [startDate, setStartDate] = useState<Date>();
  const [duration, setDuration] = useState<string>("3");
  const [stipend, setStipend] = useState<string>("12000");
  const [manager, setManager] = useState<string>("ravi");
  const [template, setTemplate] = useState<string>("standard");

  if (!applicant) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-6 bg-card border-0 shadow-soft">
        <DialogHeader className="pb-0">
          <DialogTitle className="flex items-center gap-3 text-xl font-semibold text-foreground">
            <Mail className="h-6 w-6 text-primary" />
            Generate Offer Letter
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Candidate Details */}
          <div>
            <h3 className="text-base font-semibold text-primary mb-3">Candidates Details</h3>
            <div className="space-y-2">
              <div className="flex">
                <span className="text-muted-foreground w-20">Name :</span>
                <span className="font-medium text-foreground">{applicant.name}</span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-20">Role :</span>
                <span className="font-medium text-foreground">{applicant.project}</span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-20">Email :</span>
                <span className="font-medium text-foreground">{applicant.email}</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Offer Specifics */}
          <div>
            <h3 className="text-base font-semibold text-primary mb-4">Offer Specifics</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Start Date */}
              <div className="space-y-2">
                <Label className="text-muted-foreground">Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal border-border",
                        !startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "d MMM, yyyy") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Duration */}
              <div className="space-y-2">
                <Label className="text-muted-foreground">Duration</Label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger className="border-border">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Month</SelectItem>
                    <SelectItem value="2">2 Months</SelectItem>
                    <SelectItem value="3">3 Months</SelectItem>
                    <SelectItem value="6">6 Months</SelectItem>
                    <SelectItem value="12">12 Months</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Stipend */}
              <div className="space-y-2">
                <Label className="text-muted-foreground">Stipend</Label>
                <div className="relative">
                  <Input
                    value={stipend}
                    onChange={(e) => setStipend(e.target.value)}
                    className="border-border pr-16"
                    placeholder="Amount"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                    / month
                  </span>
                </div>
              </div>

              {/* Reporting Manager */}
              <div className="space-y-2">
                <Label className="text-muted-foreground">Reporting Manager</Label>
                <Select value={manager} onValueChange={setManager}>
                  <SelectTrigger className="border-border">
                    <SelectValue placeholder="Select manager" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ravi">Ravi kumar</SelectItem>
                    <SelectItem value="priya">Priya Sharma</SelectItem>
                    <SelectItem value="amit">Amit Patel</SelectItem>
                    <SelectItem value="sneha">Sneha Reddy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Separator />

          {/* Template Selection */}
          <div className="space-y-2">
            <Label className="text-muted-foreground">Template Selection</Label>
            <Select value={template} onValueChange={setTemplate}>
              <SelectTrigger className="border-border">
                <SelectValue placeholder="Select template" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard Internship Offer</SelectItem>
                <SelectItem value="premium">Premium Internship Offer</SelectItem>
                <SelectItem value="fulltime">Full-Time Offer</SelectItem>
                <SelectItem value="contract">Contract Offer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-2">
            <Button variant="outline" className="border-border">
              <Upload className="h-4 w-4 mr-2" />
              Export
            </Button>
            <div className="flex gap-3">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Generate & Send
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
