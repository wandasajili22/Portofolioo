import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/5 bg-black/50 backdrop-blur-md relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-2xl font-display font-bold tracking-tighter mb-2">
              Wanda
            </div>
            <p className="text-sm text-zinc-500 italic max-w-xs text-center md:text-left">
              "Great design is making things clear, not just making them beautiful."
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all">
              <Github size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all">
              <Twitter size={18} />
            </a>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-600">
            &copy; {currentYear} Wanda. All rights reserved.
          </p>
          <div className="text-sm text-zinc-600">
            Designed & Built with passion
          </div>
        </div>
      </div>
    </footer>
  );
}
