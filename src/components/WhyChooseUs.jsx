import { Brain, Rocket, MessageSquare, BarChart3 } from "lucide-react";
import { motion } from "framer-motion"; // animation

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      title: "Deep AI & SaaS Expertise",
      description:
        "Years of hands-on experience delivering scalable AI and SaaS solutions tailored to real-world business needs, across multiple industries.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-purple-600" />,
      title: "Fast Delivery with Agile Teams",
      description:
        "Lean, agile squads that move fast—turning ideas into production-ready solutions in record time, with continuous iteration and improvement.",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-purple-600" />,
      title: "Transparent Communication",
      description:
        "Clear, consistent updates at every stage. No surprises, just alignment and clarity through open, proactive collaboration.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: "Data-Driven Decision Making",
      description:
        "We rely on insights—not guesswork—to guide strategies, optimize results continuously, and ensure measurable business impact.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-purple-700"
        >
          Why Choose ImaginaryWeb
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-3 mb-10 w-24 h-1 bg-purple-500 mx-auto rounded-full origin-left"
        ></motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-16 text-base md:text-lg"
        >
          We combine cutting-edge technology with strategic insight to deliver
          transformative solutions.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start space-x-5 p-6 bg-white shadow-md rounded-2xl hover:shadow-xl transition duration-300"
            >
              {/* Icon */}
              <div className="p-4 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                {feature.icon}
              </div>

              {/* Text */}
              <div className="text-left">
                <h3 className="text-lg font-semibold text-purple-700">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
