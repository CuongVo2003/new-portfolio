import { motion } from 'motion/react';
import { GraduationCap, Mail, Linkedin, MapPin, Send } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-gray-900 mb-8">Education</h3>
              <div className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-3xl p-8 border border-purple-100">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-gray-900">Software Applications</h4>
                    <p className="text-purple-600" style={{ fontSize: '16px', fontWeight: '600' }}>
                      FPT Polytechnic
                    </p>
                    <p className="text-gray-600" style={{ fontSize: '14px' }}>
                      2021 - 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-gray-900 mb-3">Let's Build Something Together</h3>
              <p className="text-gray-600 mb-8">
                I'm open to new opportunities and exciting projects
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:cuongvcmfj2003@gmail.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-colors group"
                >
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                    <Mail className="w-5 h-5 text-purple-600" />
                  </div>
                  <span style={{ fontSize: '16px' }}>cuongvcmfj2003@gmail.com</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-colors group"
                >
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                    <Linkedin className="w-5 h-5 text-purple-600" />
                  </div>
                  <span style={{ fontSize: '16px' }}>LinkedIn Profile</span>
                </a>

                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <span style={{ fontSize: '16px' }}>Ho Chi Minh City, Vietnam</span>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-600/30 transition-all"
                style={{ fontSize: '16px', fontWeight: '600' }}
              >
                <Send className="w-5 h-5" />
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
