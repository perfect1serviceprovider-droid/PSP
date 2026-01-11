import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

// User-provided YouTube Shorts
const testimonials = [
    {
        id: 1,
        videoId: "cf3jDNCeiGs",
        title: "Client Testimonial",
        author: "Happy Client",
        role: "Neerja",
    },
    {
        id: 2,
        videoId: "Qk5EPzMCV9s",
        title: "Project Success",
        author: "Satisfied Customer",
        role: "Mukesh Rani",
    },
    {
        id: 3,
        videoId: "01L2q4Rty2E",
        title: "Great Experience",
        author: "Valued Partner",
        role: "Jk Rathwa",
    },
];

export default function VideoTestimonials() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-6 py-3 bg-red-100 text-red-600 rounded-full text-sm font-bold mb-6 shadow-sm"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Play className="h-4 w-4 fill-current" />
                        CLIENT STORIES
                    </motion.div>

                    <h2 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
                        <span className="text-gray-900">See What They</span>
                        <br />
                        <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                            Have To Say
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Hear directly from our satisfied clients about their experience working with us.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            className="group bg-gray-50 rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                        >
                            {/* Video Container */}
                            <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
                                <iframe
                                    src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                                    title={testimonial.title}
                                    className="absolute inset-0 w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">
                                    {testimonial.title}
                                </h3>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-semibold text-gray-900 text-sm">
                                            {testimonial.author}
                                        </div>
                                        <div className="text-xs text-gray-500">{testimonial.role}</div>
                                    </div>
                                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                        <Play className="h-5 w-5 text-red-600 fill-current ml-1" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
