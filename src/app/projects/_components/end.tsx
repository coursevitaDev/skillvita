"use client";

import { useState } from "react";
import axios from "axios";

const End = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleClick = async () => {
    setLoading(true);

    if (!validateEmail(email)) {
      setSuccessMessage("Please enter a valid email address");
      setLoading(false);
      return;
    }

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_LINK}/api/addProjectRequirement`,
        { email }
      );
      setEmail("");
      setSuccessMessage("You have been subscribed successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setSuccessMessage(
          error.response?.data?.message || "Something went wrong."
        );
        console.error("Axios error subscribing:", error);
      } else {
        setSuccessMessage("An unexpected error occurred.");
        console.error("Unknown error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-12 mt-10 px-4">
      <div className="relative w-full max-w-7xl mx-auto rounded-2xl px-4 py-10 sm:px-8 sm:py-16 text-center border border-[#E4E4E7] dark:border-[#27272A] overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-accent-50 dark:from-brand-950 dark:to-black" />

        {/* SVG background — GREEN ICONS */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-20 text-[#32fe6b]"
          style={{
            backgroundImage: "url('/images/ProjectsPage/background.svg')",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <h2 className="font-outfit text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            Let&apos;s Build{" "}
            <span className="text-accent-500">
              Great <span className="text-[#32fe6b]">Projects</span>
            </span>{" "}
            Together
          </h2>

          <p className="font-outfit text-sm sm:text-base md:text-lg font-normal mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
            Inviting startups and students to collaborate and help in building
            innovative <span className="text-[#32fe6b]">projects</span> with
            real-world impact.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-lg w-full mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full sm:w-auto flex-1 rounded-lg
                border-2 border-gray-300 dark:border-gray-600
                bg-white dark:bg-gray-900
                text-black dark:text-white
                px-5 py-3 font-outfit text-sm
                placeholder-gray-500 dark:placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500
                transition-all
              "
            />
            <button
              onClick={handleClick}
              disabled={loading}
              className="
                w-full sm:w-auto bg-brand-500 hover:bg-brand-600
                text-accent-500 px-6 py-3 font-outfit text-sm font-semibold rounded-lg
                transition-all transform hover:scale-105 active:scale-95
                disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                shadow-lg hover:shadow-xl
              "
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>

          {successMessage && (
            <div
              className={`
                mt-6 font-outfit text-sm font-medium px-4 py-2 rounded-lg inline-block
                ${successMessage.includes("successfully")
                  ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                  : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                }
              `}
            >
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default End;
