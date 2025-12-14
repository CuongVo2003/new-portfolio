import { motion } from "motion/react";
import { Download, Briefcase } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const techStack = [
  { name: "NestJS", color: "#E0234E" },
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "MongoDB", color: "#47A248" },
  { name: "TypeScript", color: "#3178C6" },
];

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-100 to-cyan-100 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl w-full grid lg:grid-cols-[60%_40%] gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Available Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span
              className="text-green-700"
              style={{ fontSize: "14px", fontWeight: "500" }}
            >
              Available for Work
            </span>
          </div>

          {/* Name & Title */}
          <div className="space-y-4">
            <h1 className="text-gray-900">Võ Chí Cường</h1>
            <h2
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              style={{ fontSize: "32px", fontWeight: "700" }}
            >
              Font-end Developer
            </h2>
            <p
              className="text-gray-900"
              style={{ fontSize: "20px", fontWeight: "500" }}
            >
              Building Scalable Web Applications with Modern Technologies
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-600 max-w-2xl">
            1+ year of professional experience specializing in real-time
            systems, RESTful APIs, and intuitive frontend interfaces. Passionate
            about clean code and user-centric design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/30"
              style={{ fontSize: "16px", fontWeight: "600" }}
            >
              <Briefcase className="w-5 h-5" />
              View My Work
            </motion.a>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <p
              className="text-gray-500"
              style={{ fontSize: "14px", fontWeight: "500" }}
            >
              TECH STACK
            </p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 rounded-full border-2 transition-all cursor-default"
                  style={{
                    borderColor: tech.color,
                    backgroundColor: `${tech.color}10`,
                  }}
                >
                  <span
                    style={{
                      color: tech.color,
                      fontSize: "14px",
                      fontWeight: "600",
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="./21a00d34-4736-466e-90c1-3bf2dad66ae9.png"
              alt="3D Coding Illustration"
              className="w-full h-auto object-cover"
            />
            {/* Glassmorphism overlay */}
            <div className="absolute from-purple-600/20 to-cyan-600/20 " />
          </div>

          {/* Floating accent */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-3xl opacity-60 blur-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
