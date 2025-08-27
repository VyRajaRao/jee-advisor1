import React from "react";
import { Link, useLocation } from "wouter";
import { Moon, Sun, GraduationCap, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ui/theme-provider";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/explorer", label: "Explorer" },
  { href: "/trends", label: "Trends" },
  { href: "/compare", label: "Compare" },
  { href: "/predictor", label: "Predictor" },
];

export function Navbar() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-4 w-4 text-gray-900" />
              </div>
              <span className="text-xl font-bold neon-text text-cyan-400" data-testid="logo-text">
                JEE Insight
              </span>
            </Link>
            
            <div className="hidden md:flex space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-300 ${
                    location === item.href
                      ? "text-cyan-400"
                      : "text-foreground hover:text-cyan-400"
                  }`}
                  data-testid={`nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors duration-300"
              data-testid="theme-toggle"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Moon className="h-4 w-4 text-muted-foreground" />
              )}
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden p-2 rounded-lg bg-secondary hover:bg-accent transition-colors duration-300"
                  data-testid="mobile-menu"
                >
                  <Menu className="h-4 w-4 text-muted-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg transition-colors duration-300 ${
                        location === item.href
                          ? "text-cyan-400"
                          : "text-foreground hover:text-cyan-400"
                      }`}
                      data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
