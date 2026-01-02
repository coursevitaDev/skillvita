"use client";
import React, { useState } from "react";
import FAQs from "@/components/course-overview/faqs";
import { CheckCircle2, User } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FinalYearQAProps {
    faqs: FAQItem[];
}

const communityQuestions = [
    {
        id: 1,
        question: "How to choose a unique abstract?",
        shortDesc: "Struggling to find a valid base paper.",
        answer: "Focus on solving a local problem or automating a specific manual process rather than just copying an existing IEEE paper. Uniqueness comes from your specific execution and added features.",
        author: "Rahul S.",
        time: "2h ago"
    },
    {
        id: 2,
        question: "Best tech stack for E commerce final year project?",
        shortDesc: "MERN Stack vs Next.js?",
        answer: "Next.js is currently preferred for its SEO benefits and server side rendering specific capabilities, which external evaluators appreciate for performance scores and modern architecture.",
        author: "Priya M.",
        time: "5h ago"
    },
    {
        id: 3,
        question: "Tips for professional documentation?",
        shortDesc: "Format for the black book report?",
        answer: "Follow your university guidelines strictly. Crucially, include clear UML diagrams (Class, Sequence, ER) and ensure your references follow the standard IEEE citation format.",
        author: "Amit K.",
        time: "1d ago"
    },
    {
        id: 4,
        question: "Where to host the live demo?",
        shortDesc: "Free hosting options for external viva?",
        answer: "Use Vercel or Netlify for frontend, and Render or Railway for backend services. MongoDB Atlas is great for the database. This gives you a reliable live link to show externals on any device.",
        author: "Sneha P.",
        time: "2d ago"
    },
    {
        id: 5,
        question: "Handling slow training in ML projects?",
        shortDesc: "My laptop crashes with large datasets.",
        answer: "Use Google Colab or Kaggle Kernels for training your models on the cloud using their free T4 GPUs. Once trained, export the .h5 or .pkl model file to use in your web application.",
        author: "Vikram R.",
        time: "3d ago"
    },
    {
        id: 6,
        question: "Common viva questions for Full Stack?",
        shortDesc: "What do externals usually ask?",
        answer: "They often ask about your database schema relationships (Normalisation), how your API authentication works (JWT flow), and will ask you to explain the logic behind your most complex function.",
        author: "Arjun D.",
        time: "4d ago"
    }
];

const FinalYearQA: React.FC<FinalYearQAProps> = ({ faqs }) => {
    const [visibleCount, setVisibleCount] = useState(2);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 4);
    };

    return (
        <>
            {/* Community Q&A Section */}
            <div className="max-w-7xl mx-auto my-16 px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-outfit text-black dark:text-white">
                        Community Q&A
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Common technical questions discussed by our community
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {communityQuestions.slice(0, visibleCount).map((q) => (
                        <div key={q.id} className="bg-white dark:bg-[#18181B] rounded-2xl p-6 border border-gray-200 dark:border-[#27272A] shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-[#014051]/10 dark:bg-[#014051]/30 flex items-center justify-center text-[#014051] dark:text-[#32fe6b] font-bold text-lg">
                                        Q
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-lg font-semibold mb-2 text-black dark:text-white hover:text-brand-500 transition-colors">
                                            {q.question}
                                        </h3>
                                        <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">
                                            {q.time}
                                        </span>
                                    </div>
                                    <p className="text-[#014051] dark:text-gray-400 mb-4 text-sm">
                                        {q.shortDesc}
                                    </p>

                                    <div className="bg-gray-50 dark:bg-black/40 rounded-xl p-4 border border-gray-100 dark:border-gray-800">
                                        <div className="flex items-start gap-3">
                                            <div className="flex-shrink-0 mt-0.5">
                                                <div className="w-6 h-6 rounded-full bg-[#32fe6b]/20 flex items-center justify-center">
                                                    <CheckCircle2 className="w-4 h-4 text-[#014051] dark:text-[#32fe6b]" />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                                    {q.answer}
                                                </p>
                                                <span className="block mt-2 text-xs text-[#014051] dark:text-[#32fe6b] font-medium">
                                                    ✓ Accepted Answer
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex items-center justify-end pt-4 border-t border-gray-100 dark:border-gray-800">
                                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                            <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                                <User className="w-3 h-3" />
                                            </div>
                                            <span>{q.author}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {visibleCount < communityQuestions.length && (
                    <div className="mt-10 text-center">
                        <button
                            onClick={handleLoadMore}
                            className="px-6 py-2.5 rounded-full bg-[#014051] text-[#32fe6b] font-medium text-sm hover:bg-[#014051]/90 transition-colors shadow-lg shadow-[#014051]/20"
                        >
                            View All Discussions
                        </button>

                    </div>
                )}
            </div>

            <FAQs faqs={faqs} />
        </>
    );
};

export default FinalYearQA;
