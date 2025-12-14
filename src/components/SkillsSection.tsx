import { motion } from 'motion/react';
import { Server, Monitor, Cloud, Plug } from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend Development',
    icon: Server,
    color: 'from-blue-500 to-blue-600',
    skills: [
      'NestJS',
      'Node.js',
      'Express.js',
      'RESTful API',
      'WebSocket',
      'MongoDB',
      'Mongoose',
      'Redis',
    ],
  },
  {
    title: 'Frontend Development',
    icon: Monitor,
    color: 'from-cyan-500 to-cyan-600',
    skills: [
      'React',
      'Vue.js',
      'Ant Design',
      'Tailwind CSS',
      'State Management',
      'Responsive Design',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-purple-500 to-purple-600',
    skills: [
      'AWS S3',
      'Docker (basic)',
      'Git',
      'CI/CD basics',
      'Postman',
      'ESLint',
    ],
  },
  {
    title: 'Integrations',
    icon: Plug,
    color: 'from-pink-500 to-pink-600',
    skills: [
      'Stripe Payment Gateway',
      'Agora (Real-time)',
      'Socket.IO',
      'Third-party APIs',
    ],
  },
];

export function SkillsSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <h4 className="text-gray-900 mb-4">{category.title}</h4>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg border border-gray-200 hover:border-gray-300 transition-all cursor-default"
                    style={{ fontSize: '13px', fontWeight: '500' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
