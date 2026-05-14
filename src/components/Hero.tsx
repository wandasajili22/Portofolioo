import React from 'react';
import { motion } from 'motion/react';
import { Download, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <div className="order-2 lg:order-1 flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Available for work
              </div>

              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight">
                Hi, I'm <span className="text-white">Wanda</span>
                <br />
                <span className="text-gradient">Fullstack Developer</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mix-blend-lighten">
                I build professional, modern, and elegant digital experiences. Passionate about creating premium tech startup-like interfaces with clean code and smooth animations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black hover:bg-gray-200 transition-colors font-medium text-lg lg:w-auto w-full group">
                Hire Me
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <button className="inline-flex items-center justify-center px-8 py-4 rounded-full glass hover:bg-white/10 transition-colors font-medium text-lg text-white border border-white/10 lg:w-auto w-full group">
                <Download className="mr-2 group-hover:-translate-y-1 transition-transform" size={20} />
                Download CV
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-6 pt-4 text-muted-foreground"
            >
              <a href="#" className="hover:text-primary transition-colors"><Github size={24} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter size={24} /></a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          >
            {/* Decoration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-[80px] -z-10 w-[80%] h-[80%] m-auto" />

            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 glass border border-white/10 overflow-hidden group">
              <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-[spin_10s_linear_infinite]" style={{ borderStyle: 'dashed' }}></div>
              <img
                src="./public/profile.png"
                alt="Profile"
                className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 lg:-right-4 glass px-4 py-3 rounded-2xl border border-white/10 backdrop-blur-md flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                <span className="font-bold">UI</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">Designer</span>
                <span className="text-sm font-bold">Expertise</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-0 lg:-left-4 glass px-4 py-3 rounded-2xl border border-white/10 backdrop-blur-md flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold">
                {"</>"}
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">Developer</span>
                <span className="text-sm font-bold">Fullstack</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
