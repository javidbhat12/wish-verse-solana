
import React from "react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Home, User, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", icon: Home, path: "/" },
  { label: "My Wishes", icon: User, path: "/my-wishes" },
  { label: "Others' Wishes", icon: Users, path: "/others-wishes" },
];

export function AppSidebar() {
  const location = useLocation();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>WishVerse</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map(({ label, icon: Icon, path }) => (
                <SidebarMenuItem key={label}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={path}
                      className={`flex items-center gap-2 ${location.pathname === path ? "text-primary" : ""}`}
                    >
                      <Icon size={18} />
                      <span>{label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
