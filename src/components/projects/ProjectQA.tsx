import React, { useState } from "react";
import FAQs from "@/components/course-overview/faqs";
import { CheckCircle2, User } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

interface ProjectQAProps {
    faqs: FAQItem[];
}

const communityQuestions = [
    {
        id: 1,
        question: "How does Redis help JWT authentication?",
        shortDesc: "Why is Redis used with JWT tokens?",
        answer: "Redis helps by storing token blacklists and session metadata. It provides fast access to check if a token has been revoked before its expiration time.",
        author: "Alex M.",
        time: "2h ago"
    },
    {
        id: 2,
        question: "Best practices for API Key security?",
        shortDesc: "Where should I store my API keys in a React app?",
        answer: "Never store sensitive keys in your frontend code. Use environment variables (.env) and access them via your build tool. For highly sensitive keys, proxy requests through your backend.",
        author: "Sarah J.",
        time: "5h ago"
    },
    {
        id: 3,
        question: "SQL vs NoSQL for a chat application?",
        shortDesc: "Which database type is better for real-time messages?",
        answer: "NoSQL (like MongoDB or Cassandra) is generally preferred for chat apps due to its ability to handle large volumes of unstructured data and write-heavy workloads efficiently.",
        author: "David K.",
        time: "1d ago"
    },
    {
        id: 4,
        question: "Optimizing React performance?",
        shortDesc: "My app is slow when rendering large lists.",
        answer: "Use virtualization (like react-window) to render only visible items. Also, use React.memo, useMemo, and useCallback to prevent unnecessary re-renders of valid components.",
        author: "Emily R.",
        time: "2d ago"
    },
    {
        id: 5,
        question: "Difference between Docker and Virtual Machines?",
        shortDesc: "When should I use which?",
        answer: "Docker containers share the host OS kernel and are lightweight, while VMs include a full OS. Use Docker for microservices and consistent dev environments; VMs for complete isolation.",
        author: "Michael T.",
        time: "3d ago"
    },
    {
        id: 6,
        question: "How to handle state in large applications?",
        shortDesc: "Redux vs Context API vs Zustand?",
        answer: "Context API is great for low-frequency updates (theme, user). For complex global state with frequent updates, libraries like Redux (with Toolkit) or Zustand provide better performance and dev tools.",
        author: "Jessica L.",
        time: "4d ago"
    }
];

const ProjectQA: React.FC<ProjectQAProps> = ({ faqs }) => {
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

export default ProjectQA;
