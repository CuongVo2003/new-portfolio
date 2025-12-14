import { motion } from 'motion/react';
import { CheckCircle2, Building2 } from 'lucide-react';

const highlights = [
  'Developed real-time features serving 50K+ active users',
  'Optimized performance: 30% faster feed rendering',
  'Integrated AWS S3, Stripe, WebSocket for production features',
  'Led end-to-end delivery of multiple core modules',
];

const techStack = [
  'NestJS',
  'React',
  'MongoDB',
  'AWS S3',
  'Socket.IO',
  'Stripe',
];

export function ExperienceSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4">Professional Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -4, boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.25)' }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Company Logo/Icon */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-gray-900 mb-2">Full-Stack Developer</h3>
                  <p className="text-purple-600" style={{ fontSize: '18px', fontWeight: '600' }}>
                    TGR FUSION
                  </p>
                </div>
                <div className="px-4 py-2 bg-purple-50 border border-purple-200 rounded-xl">
                  <span className="text-purple-700" style={{ fontSize: '14px', fontWeight: '600' }}>
                    2024 - Present
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700" style={{ fontSize: '16px' }}>
                      {highlight}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="pt-6 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-purple-50 to-cyan-50 text-purple-700 rounded-xl border border-purple-200 cursor-default transition-transform"
                      style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        fontFamily: 'JetBrains Mono, monospace',
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
