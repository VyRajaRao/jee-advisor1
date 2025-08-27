import React from "react";
import { Link } from "wouter";
import { GraduationCap, Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-4 w-4 text-gray-900" />
              </div>
              <span className="text-xl font-bold neon-text text-cyan-400" data-testid="footer-logo">
                JEE Insight
              </span>
            </div>
            <p className="text-muted-foreground">
              Empowering JEE aspirants with comprehensive cutoff data and intelligent guidance tools.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Features</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link 
                  href="/explorer" 
                  className="hover:text-cyan-400 transition-colors duration-200"
                  data-testid="footer-explorer"
                >
                  Cutoff Explorer
                </Link>
              </li>
              <li>
                <Link 
                  href="/trends" 
                  className="hover:text-cyan-400 transition-colors duration-200"
                  data-testid="footer-trends"
                >
                  Trends Analysis
                </Link>
              </li>
              <li>
                <Link 
                  href="/compare" 
                  className="hover:text-cyan-400 transition-colors duration-200"
                  data-testid="footer-compare"
                >
                  College Comparison
                </Link>
              </li>
              <li>
                <Link 
                  href="/predictor" 
                  className="hover:text-cyan-400 transition-colors duration-200"
                  data-testid="footer-predictor"
                >
                  Rank Predictor
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Data</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>JEE Advanced Cutoffs</li>
              <li>2016-2024 Records</li>
              <li>All IIT Institutes</li>
              <li>Category-wise Data</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-cyan-400 transition-colors duration-200"
                data-testid="footer-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-cyan-400 transition-colors duration-200"
                data-testid="footer-github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-cyan-400 transition-colors duration-200"
                data-testid="footer-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 JEE Insight. Built with ❤️ for JEE aspirants.</p>
        </div>
      </div>
    </footer>
  );
}
