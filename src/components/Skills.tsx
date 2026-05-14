import React from 'react';
import { motion } from 'motion/react';

const skills = [
  { name: 'HTML & CSS', level: 95, category: 'Frontend' },
  { name: 'JavaScript / TypeScript', level: 90, category: 'Frontend' },
  { name: 'React.js', level: 90, category: 'Frontend' },
  { name: 'TailwindCSS', level: 95, category: 'Frontend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'Laravel', level: 85, category: 'Backend' },
  { name: 'Python', level: 75, category: 'Backend' },
  { name: 'UI/UX Design (Figma)', level: 85, category: 'Design' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-surface border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Technical <span className="text-primary">Expertise</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-3"
            >
              <div className="flex justify-between items-end">
                <h4 className="text-lg font-medium tracking-wide">{skill.name}</h4>
                <span className="text-sm text-primary font-mono">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-black/50 rounded-full overflow-hidden border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-blue-600 to-primary rounded-full relative"
                >
                  <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/30" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
