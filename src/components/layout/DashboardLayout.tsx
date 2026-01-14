import { ReactNode, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { ChatBot, ChatBotButton } from "@/components/chatbot/ChatBot";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
}

export function DashboardLayout({ children, title }: DashboardLayoutProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="pl-[200px]">
        <Header title={title} />
        <main className="p-6">
          {children}
        </main>
      </div>
      
      {/* Chatbot */}
      <ChatBotButton onClick={() => setIsChatOpen(true)} />
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}
