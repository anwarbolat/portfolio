'use client';

import { motion } from 'framer-motion';
import AnimatedSphere from './AnimatedSphere';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovation Labs',
    period: '2020 - Present',
    description: 'Lead developer for enterprise-level web applications, focusing on scalable architecture and modern technologies.',
    achievements: [
      'Implemented microservices architecture reducing system load by 40%',
      'Led a team of 5 developers in delivering major platform updates',
      'Introduced automated testing improving code coverage to 90%'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Inc',
    period: '2018 - 2020',
    description: 'Developed and maintained multiple client websites and web applications using React and Node.js.',
    achievements: [
      'Built responsive web applications for 20+ clients',
      'Reduced page load time by 60% through optimization',
      'Implemented CI/CD pipelines for automated deployments'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'Creative Web Agency',
    period: '2016 - 2018',
    description: 'Created engaging user interfaces and interactive web experiences for various clients.',
    achievements: [
      'Developed mobile-first websites for 30+ clients',
      'Increased user engagement by 45% through UI improvements',
      'Mentored junior developers in modern frontend practices'
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-white/5 relative overflow-hidden">
      {/* AnimatedSphere positioned as background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
        <AnimatedSphere />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">Professional Experience</h2>
          <p className="text-xl text-dimWhite max-w-2xl mx-auto">
            Here's a brief overview of my professional journey and the impact I've made along the way.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 rounded-xl p-8 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <p className="text-dimWhite mt-2 md:mt-0">{exp.period}</p>
              </div>
              <p className="text-dimWhite mb-4">{exp.description}</p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-dimWhite">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
