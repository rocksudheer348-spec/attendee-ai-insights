import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  UserCog, 
  Clock, 
  Award, 
  BarChart3, 
  Bot, 
  Settings, 
  LogOut 
} from "lucide-react";
import logo from "@/assets/smaran-logo.png";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Users, label: "Applicants", path: "/applicants" },
  { icon: UserCog, label: "Users", path: "/users" },
  { icon: Clock, label: "Attendance", path: "/attendance" },
  { icon: Award, label: "Certificates", path: "/certificates" },
  { icon: BarChart3, label: "Reports", path: "/reports" },
  { icon: Bot, label: "AI Config", path: "/ai-config" },
];

const bottomNavItems = [
  { icon: Settings, label: "Settings", path: "/settings" },
  { icon: LogOut, label: "Logout", path: "/logout" },
];

export function Sidebar() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-[200px] border-r border-sidebar-border bg-sidebar flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-6">
        <img src={logo} alt="SmaranAI" className="h-14 w-auto" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              isActive(item.path)
                ? "bg-primary text-primary-foreground shadow-soft"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom Navigation */}
      <div className="px-3 py-4 border-t border-sidebar-border space-y-1">
        {bottomNavItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
