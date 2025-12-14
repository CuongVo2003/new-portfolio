import { motion } from "motion/react";
import {
  ExternalLink,
  Github,
  Radio,
  CreditCard,
  Cloud,
  FileImage,
  Upload,
  FolderOpen,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "XFans – Creator Platform",
    company: "TGR FUSION Co., Ltd.",
    badge: "Production",
    badgeColor: "green",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&q=80",
    description:
      "Production-scale creator platform connecting fans and content creators. Responsible for frontend development including API integration, form validation, and real-time user interaction features.",
    features: [
      { icon: Radio, text: "Real-time Interaction (Socket.IO)" },
      { icon: CreditCard, text: "Payment Flow Integration" },
      { icon: Cloud, text: "Media Upload & Management" },
    ],
    responsibilities: [
      "Developed and maintained frontend features using React",
      "Integrated REST APIs from NestJS backend",
      "Implemented real-time features using Socket.IO",
      "Handled client-side validation and user input processing",
      "Collaborated with backend team to align API contracts",
      "Optimized UI for responsiveness and user experience",
    ],
    techStack: ["React", "Socket.IO", "REST API", "AWS S3", "Stripe"],
    liveUrl: "https://v4.xfans.xscripts.info/",
    featured: true,
  },
  {
    title: "Vault – Media Storage System",
    company: "Personal Project (Experience Demo)",
    badge: "Personal",
    badgeColor: "blue",
    image:
      "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?w=1200&q=80",
    description:
      "End-to-end media storage system built to demonstrate real-world experience in designing and implementing a reusable media library. Users can upload once and reuse images/videos across multiple modules.",
    features: [
      { icon: FolderOpen, text: "Centralized Media Library" },
      { icon: Upload, text: "AWS S3 Upload Pipeline" },
      { icon: FileImage, text: "Reusable Media Assets" },
    ],
    responsibilities: [
      "Designed system architecture for media storage and reuse",
      "Built backend APIs using NestJS and MongoDB",
      "Implemented secure media upload flow with AWS S3",
      "Developed frontend demo interface using React",
      "Processed and optimized images using Sharp",
      "Deployed frontend and backend for live demonstration",
    ],
    techStack: ["React", "NestJS", "TypeScript", "MongoDB", "AWS S3", "Sharp"],
    githubUrl: "https://github.com/CuongVo2003/Vault-demo",
    liveUrl: "https://vault-demo-new.vercel.app/",
    featured: false,
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real-world applications & experience-driven demo projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)",
              }}
              className={`bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 transition-all duration-300 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-100 to-cyan-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold text-white backdrop-blur-md ${
                      project.badgeColor === "green"
                        ? "bg-green-500/90"
                        : "bg-blue-500/90"
                    }`}
                  >
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                {/* Title */}
                <div>
                  <h3 className="text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-gray-500 text-sm">{project.company}</p>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-base">{project.description}</p>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-gray-700 text-sm font-medium">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Responsibilities */}
                {project.responsibilities && (
                  <div className="space-y-2">
                    <h4 className="text-gray-900 text-sm font-semibold">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-1.5">
                      {project.responsibilities.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-700 text-sm"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg border border-purple-200 text-xs font-semibold hover:bg-purple-100 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-xl hover:bg-purple-50 text-sm font-semibold"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </motion.a>
                  )}

                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 text-sm font-semibold"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
