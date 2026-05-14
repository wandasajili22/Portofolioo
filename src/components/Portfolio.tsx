import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Lima Bintang Home Care',
    description: 'Lima Bintang Home Care is a professional home care service platform dedicated to providing high-quality, compassionate, and reliable healthcare assistance for patients at home. The service is designed to support individuals who need medical care, elderly assistance, or recovery support in a comfortable and familiar environment.',
    image: './public/bintang.png',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Recharts'],
    links: { demo: 'https://tutelagesdnbhdindo.com/', github: '#' }
  },
  {
    title: 'Pustaka Digital',
    description: 'Pustaka Digital is a modern digital library platform that simplifies book management and borrowing for schools and educational institutions. It allows users to easily browse, search, and manage book collections through a responsive and user-friendly interface.',
    image: './public/perpus.png',
    tags: ['Next.js', 'Framer Motion', 'TailwindCSS'],
    links: { demo: 'https://pustaka-digital-gray.vercel.app/', github: '#' }
  },
  {
    title: 'E-Commerce Platform',
    description: 'UMKM PRO is a modern digital platform designed to help small and medium enterprises (UMKM) manage and grow their businesses more efficiently. It provides tools for product management, sales tracking, and business promotion in one integrated system.',
    image: './public/umkmpro.png',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'Stripe'],
    links: { demo: 'https://umkmpro.vercel.app/', github: '#' }
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Featured <span className="text-primary">Work</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass rounded-3xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-3 py-1 bg-white/5 rounded-full text-zinc-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.links.demo} className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white font-medium hover:bg-blue-600 transition-colors text-sm">
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a href={project.links.github} className="inline-flex items-center justify-center p-2.5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors text-white">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
