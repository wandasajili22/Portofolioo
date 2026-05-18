import React from 'react';
import { motion } from 'motion/react';
import { Award, Briefcase, Users } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '5+', icon: Briefcase },
  { label: 'Completed Projects', value: '20+', icon: Award },
  { label: 'Happy Clients', value: '5+', icon: Users },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-muted-foreground text-lg leading-relaxed"
          >
            <p>
             I am a passionate technologist dedicated to building elegant, high-performance web applications. My journey started with a deep curiosity for how things work, evolving into a career where I blend design aesthetics with robust engineering.
            </p>
            <p>
              I specialize in bridging the gap between design and development, ensuring that every product I build not only looks premium but also performs exceptionally under the hood. From fluid animations to scalable backend architectures, I handle the entire stack with precision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`glass p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-colors group ${
                    i === 2 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Icon size={32} />
                    </div>
                    <div>
                      <div className="text-4xl font-display font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
