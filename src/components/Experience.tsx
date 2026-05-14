import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Code, GraduationCap, Award, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'TechNova Startup',
    period: '2022 - Present',
    description: 'Lead the frontend architecture using React and TailwindCSS. Improved performance scores by 40% and mentored junior developers.',
    icon: Code
  },
  {
    title: 'Fullstack Freelancer',
    company: 'Self-Employed',
    period: '2020 - 2022',
    description: 'Designed and developed custom web solutions for international clients. Built scalable e-commerce backends with Laravel and Node.js.',
    icon: Briefcase
  },
  {
    title: 'UI/UX Designer',
    company: 'Creative Studio',
    period: '2018 - 2020',
    description: 'Created premium user interfaces and interactive prototypes. Bridged the gap between design and technical implementation.',
    icon: GraduationCap
  }
];

const certificates = [
  {
    title: 'Linux Fundametal',
    issuer: 'Coursera',
    date: 'Dec 2024',
    link: '#',
    image: 'Sertifikat_Linux.jpg'
  },
  {
    title: 'Virtual Machin Fundametal',
    issuer: 'Coursera',
    date: 'Aug 2024',
    link: '#',
    image: 'Sertifikat_Machin.jpg'
  },
  {
    title: 'Network Fundametal',
    issuer: 'Coursera',
    date: 'Jan 2024',
    link: '#',
    image: 'Sertifikat_Network.jpg'
  },
  {
    title: 'Simulasi Jaringan Dengan Pnetlab',
    issuer: 'Coursera',
    date: 'Mar 2024',
    link: '#',
    image: 'Sertifikat_Pnetlab.jpg'
  },
  {
    title: 'Google',
    issuer: 'FreeCodeCamp',
    date: 'Feb 2025',
    link: '#',
    image: 'sertifikat.jpg'
  },
  {
    title: 'Gema Foundation',
    issuer: 'Praktek Kerja Lapangan ',
    date: 'Nov 2025',
    link: '#',
    image: 'gemaa.png'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-surface border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="flex flex-col items-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold mb-4"
            >
              My <span className="text-primary">Journey</span>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-1 bg-primary rounded-full"
            />
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent -translate-x-1/2" />

            <div className="space-y-16">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl glass border border-primary/30 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                      <Icon size={24} className="text-primary" />
                    </div>

                    {/* Content */}
                    <div className={`w-full pl-24 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                      <div className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-colors">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                          {exp.period}
                        </span>
                        <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                        <h4 className="text-lg text-muted-foreground mb-4 font-medium">{exp.company}</h4>
                        <p className="text-zinc-400 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div>
          <div className="flex flex-col items-center mb-16">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold mb-4 text-center"
            >
              Licenses & <span className="text-primary">Certifications</span>
            </motion.h3>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-1 bg-primary rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass rounded-3xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Award className="text-primary" size={20} />
                  </div>
                </div>
                
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <div className="text-sm font-medium text-primary mb-3">{cert.date}</div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{cert.title}</h4>
                  <p className="text-muted-foreground mb-6 flex-grow">{cert.issuer}</p>
                  
                  <div className="mt-auto pt-6 border-t border-white/5">
                    <a href={cert.link} className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                      View Credential <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
