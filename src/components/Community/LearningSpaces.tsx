import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LearningSpaces() {
  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest mb-3 flex items-center gap-2 text-[#22c55e]">
              <span className="w-8 h-[2px] bg-[#22c55e]"></span> Our Learning Spaces
            </h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              A Unique, <span className="text-[#22c55e]">Activity-Based</span> Learning Environment
            </h3>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              Students come together in vibrant learning spaces designed to foster collaboration, creativity, and hands-on skill development. No traditional classrooms. No boring lectures. Just real learning — done together.
            </p>

            <div className="space-y-4">
              {[
                { icon: "🎯", text: "Explore their interest domains" },
                { icon: "🛠️", text: "Build real projects" },
                { icon: "🎮", text: "Participate in fun challenges" },
                { icon: "👥", text: "Learn collaboratively with peers" },
                { icon: "🎓", text: "Attend micro-workshops & mentor hours" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <p className="text-white font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div
                className="relative h-64 rounded-2xl overflow-hidden border border-zinc-800"
              >
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop"
                  alt="Students working on projects"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-bold text-sm">Project Building</p>
                </div>
              </div>

              <div
                className="relative h-64 rounded-2xl overflow-hidden border border-zinc-800 mt-8"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                  alt="Collaborative learning"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-bold text-sm">Team Collaboration</p>
                </div>
              </div>

              <div
                className="relative h-64 rounded-2xl overflow-hidden border border-zinc-800 col-span-2"
              >
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
                  alt="Workshops and events"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-bold text-sm">Workshops & Mentor Sessions</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -top-4 -right-4 bg-[#22c55e] text-black font-bold px-6 py-3 rounded-full shadow-lg"
            >
              <p className="text-sm">Active & Engaged</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
