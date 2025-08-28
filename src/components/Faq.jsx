import { useState } from "react";
import { ChevronDown, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Discovery & Planning",
    description: "Understand your goals and create a tailored strategy.",
    substeps: [
      "Deep-dive into your business objectives and pain points",
      "Identify high-impact opportunities for innovation",
      "Craft a roadmap aligned with your goals",
    ],
  },
  {
    number: "2",
    title: "Design & Prototyping",
    description: "UI/UX that combines beauty and functionality.",
    substeps: [
      "Wireframing key user journeys",
      "Designing clean, intuitive interfaces",
      "Validating ideas through clickable prototypes",
    ],
  },
  {
    number: "3",
    title: "Development & Integration",
    description: "Agile development cycles with continuous feedback.",
    substeps: [
      "Building scalable, maintainable applications",
      "Integrating APIs and third-party services",
      "Testing and refining features iteratively",
    ],
  },
  {
    number: "4",
    title: "Launch & Scale",
    description: "Deploy, monitor, and improve based on real user insights.",
    substeps: [
      "Deploying to secure, reliable environments",
      "Monitoring performance & analytics",
      "Scaling based on user feedback and growth",
    ],
  },
];

export default function Process() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative max-w-4xl mx-auto text-center py-20 px-6 bg-transperant from-white to-gray-50">
      {/* Tag */}
      <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium tracking-wide">
        OUR PROCESS
      </span>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold mt-6 mb-4 leading-tight">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        We follow a structured approach that turns your vision into reality.
        With clarity at every step, our team ensures you see measurable results—fast.
      </p>

      {/* Accordion */}
      <div className="space-y-6 text-left">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 ${
              openIndex === index ? "shadow-md ring-1 ring-indigo-100" : "hover:shadow-md hover:-translate-y-0.5"
            }`}
          >
            {/* Button */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <div className="flex items-start space-x-4">
                {/* Gradient Number Circle */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.description}</p>
                </div>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-indigo-500" : ""
                }`}
              />
            </button>

            {/* Substeps */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto", paddingBottom: 24 }}
                  exit={{ opacity: 0, height: 0, paddingBottom: 0 }}
                  transition={{ duration: 0.35 }}
                  className="px-16 text-gray-600 text-sm leading-relaxed"
                >
                  <ul className="space-y-3">
                    {step.substeps.map((sub, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
