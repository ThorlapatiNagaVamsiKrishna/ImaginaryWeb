"use client";
import { motion } from "framer-motion";
import {
  Brain,
  Globe,
  Smartphone,
  ShieldCheck,
  Cloud,
  Database,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Transform your business with cutting-edge artificial intelligence",
    points: [
      "Custom machine learning models",
      "Predictive analytics",
      "Natural language processing",
      "Computer vision integration",
    ],
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Scalable and responsive web applications for your business",
    points: [
      "React & Next.js development",
      "Progressive web apps",
      "API integrations",
      "Cloud deployment",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Powerful cross-platform mobile experiences for iOS & Android",
    points: [
      "React Native & Flutter",
      "Offline capabilities",
      "Push notifications",
      "App Store optimization",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Comprehensive testing to ensure flawless performance",
    points: [
      "Automated testing",
      "Performance optimization",
      "Security audits",
      "Continuous integration",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Robust cloud-based infrastructure and deployment solutions",
    points: [
      "AWS, Azure & GCP expertise",
      "Serverless architecture",
      "CI/CD pipelines",
      "Cloud security",
    ],
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Efficient data pipelines to power business intelligence",
    points: [
      "ETL processes",
      "Data warehouses",
      "Real-time streaming",
      "Big Data analytics",
    ],
  },
];

const OurServices = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Header */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="px-5 py-2 text-sm font-medium rounded-full bg-purple-100 text-purple-700"
        >
          OUR SERVICES
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mt-6"
        >
          Comprehensive <span className="text-purple-600">Technology</span> Solutions
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 mb-14 w-28 h-1 bg-purple-500 mx-auto rounded"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-20"
        >
          We offer a wide range of technology services to help businesses innovate, grow, 
          and succeed in the digital age.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateX: 2, rotateY: -2 }}
                className="group flex flex-col justify-between bg-white rounded-2xl shadow-lg hover:shadow-purple-200 transition-all overflow-hidden p-8 border border-transparent hover:border-purple-400 hover:shadow-xl"
              >
                {/* Icon + Title */}
                <div className="flex items-center space-x-3 mb-4">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600 shadow-lg"
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-purple-600">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                {/* Bullet Points */}
                <ul className="space-y-2 text-gray-700 flex-1">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Footer */}
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 px-6 py-3 mt-6 text-left rounded-lg transition-all duration-300 group-hover:from-purple-600 group-hover:to-indigo-600">
                  <a
                    href="#"
                    className="text-sm font-medium text-purple-600 group-hover:text-white flex items-center transition-colors"
                  >
                    Learn more →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
