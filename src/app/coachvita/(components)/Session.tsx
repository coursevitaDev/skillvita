/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import Image from "next/image";
import DatePicker from "./DatePicker";

const avatars = [
  "/images/mock-interview/a1.svg",
  "/images/mock-interview/a2.svg",
  "/images/mock-interview/a3.svg",
  "/images/mock-interview/a4.svg",
];

const sessionsData = [
  {
    image: "/images/mock-interview/hero-interview.jpg",
    title: "One to One Career counselling",
    desc: `Provide personalized coaching for learners, guide them on skills, career paths, and job readiness, enhance your leadership and mentoring skills.`,
    badge: "Free",
    enrolled: "+60 Enrolled",
  },
  {
    image: "/images/mock-interview/zoom-meet.jpg",
    title: "Mock Interview and Resume Reviews",
    desc: `Help job seekers practice real-world interview scenarios, Provide actionable feedback to boost resume quality, Assist candidates in acing top tech & business roles.`,
    badge: "Free",
    enrolled: "+45 Enrolled",
  },
  {
    image: "/images/mock-interview/hero-interview.jpg",
    title: "Host Group Coaching & Webinars",
    desc: `Conduct live masterclasses & cohort-based training, Reach a wider audience and establish authority in your domain, Create a community of learners & professionals.`,
    badge: "Free",
    enrolled: "+60 Enrolled",
  },
];

export default function Sessions() {
  const [isIOnToOneframeVisible, setisIOnToOneframeVisible] = useState(false);
  const [isIMockInterviewframeVisible, setisIMockInterviewframeVisible] =
    useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [preferredMode, setPreferredMode] = useState("");
  const [showModeDropdown, setShowModeDropdown] = useState(false);
  const [showModeDropdown2, setShowModeDropdown2] = useState(false);
  const [activeMonth, setActiveMonth] = useState<MonthName>("August");
  // Add these state variables to your component
  const [experience, setExperience] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [showExperienceDropdown, setShowExperienceDropdown] = useState(false);
  const [showTimeSlotDropdown, setShowTimeSlotDropdown] = useState(false);

  // Add these functions to your component
  const selectExperience = (exp: string) => {
    setExperience(exp);
    setShowExperienceDropdown(false);
  };

  const selectTimeSlot = (slot: string) => {
    setTimeSlot(slot);
    setShowTimeSlotDropdown(false);
  };

  // Update your existing handleCloseClick function to include the new dropdowns
  const handleCloseClick = () => {
    setisIOnToOneframeVisible(false);
    setisIMockInterviewframeVisible(false);
    setShowCalendar(false);
    setShowModeDropdown(false);
    setShowExperienceDropdown(false);
    setShowTimeSlotDropdown(false);
  };

  // Update your existing toggleModeDropdown function
  const toggleModeDropdown = () => {
    setShowModeDropdown(!showModeDropdown);
    setShowExperienceDropdown(false);
    setShowTimeSlotDropdown(false);
    if (showCalendar) setShowCalendar(false);
  };

  const handleOneToOneButtonClick = () => {
    setisIOnToOneframeVisible(!isIOnToOneframeVisible);
  };

  const handleMockInterviewButtonClick = () => {
    setisIMockInterviewframeVisible(!isIMockInterviewframeVisible);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
    if (showModeDropdown) setShowModeDropdown(false);
  };

  interface ModeOption {
    value: string;
    label: string;
  }

  const selectMode = (mode: string): void => {
    setPreferredMode(mode);
    setShowModeDropdown(false);
    setShowModeDropdown2(false);
  };

  interface CalendarDay {
    day: number;
    active: boolean;
  }

  interface MonthData {
    days: CalendarDay[];
  }

  type MonthName = "August" | "September" | "October" | "November" | "December";

  interface CalendarDataType {
    [key: string]: MonthData;
  }

  const selectDate = (month: string, day: number): void => {
    setSelectedDate(`${day} ${month}`);
    setShowCalendar(false);
  };

  const months: MonthName[] = [
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handlePrevMonth = () => {
    const currentIndex = months.indexOf(activeMonth);
    if (currentIndex > 0) {
      setActiveMonth(months[currentIndex - 1]);
    }
  };

  const handleNextMonth = () => {
    const currentIndex = months.indexOf(activeMonth);
    if (currentIndex < months.length - 1) {
      setActiveMonth(months[currentIndex + 1]);
    }
  };

  // Calendar data structure with days for each month
  const calendarData: CalendarDataType = {
    August: {
      days: [
        { day: 4, active: true },
        { day: 5, active: false },
        { day: 6, active: false },
        { day: 11, active: false },
        { day: 12, active: false },
        { day: 13, active: false },
        { day: 18, active: false },
        { day: 19, active: false },
        { day: 20, active: false },
        { day: 25, active: false },
        { day: 26, active: false },
        { day: 27, active: false },
      ],
    },
    September: {
      days: [
        { day: 1, active: false },
        { day: 2, active: false },
        { day: 3, active: false },
        { day: 8, active: false },
        { day: 9, active: false },
        { day: 10, active: false },
      ],
    },
    October: {
      days: [
        { day: 6, active: false },
        { day: 7, active: false },
        { day: 8, active: false },
      ],
    },
    November: {
      days: [
        { day: 3, active: false },
        { day: 4, active: false },
        { day: 5, active: false },
      ],
    },
    December: {
      days: [
        { day: 1, active: false },
        { day: 2, active: false },
        { day: 3, active: false },
      ],
    },
  };

  return (
    <>
      {/* Join Sessions */}
      <div className="bg-brand-950">
        <section className="mb-3 mx-5">
          <h2 className="text-center text-3xl md:text-[36px] font-bold py-12 text-white">
            <span className="text-accent-500">Join</span> Sessions
          </h2>

          <div className="space-y-4 md:space-y-6 mx-auto max-w-[1200px] px-2 md:px-4">
            {sessionsData.map((s, i) => (
              <div
                key={i}
                className="bg-brand-900/40 flex flex-col md:flex-row items-center md:items-start rounded-[20px] border border-brand-800 p-4 md:p-8 gap-4 md:gap-8 backdrop-blur-sm"
              >
                {/* Left side - Image */}
                <div className="relative flex-none w-full md:w-[326px] h-[180px] md:h-[200px] overflow-hidden border border-brand-800 rounded-xl">
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={326}
                    height={200}
                    className="object-cover w-full h-full opacity-90"
                  />
                </div>

                {/* Right side - Content */}
                <div className="flex-1 flex flex-col w-full">
                  {/* Top row with badge and avatars */}
                  <div className="flex flex-wrap items-center justify-between w-full mb-3 md:mb-5 gap-y-3">
                    <span
                      className={`py-1 px-4 md:px-6 font-normal text-[14px] rounded-full border border-brand-700 text-brand-100 text-center bg-brand-950/50`}
                    >
                      {s.badge}
                    </span>

                    <div className="flex items-center border border-brand-700 rounded-full px-2 py-1 bg-brand-950/30">
                      <div className="flex -space-x-2 md:-space-x-2.5 mr-2 md:mr-3 relative">
                        {/* Avatar images */}
                        {[...Array(3)].map((_, idx) => (
                          <div
                            key={idx}
                            className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-center bg-cover border border-brand-900"
                          >
                            <Image
                              src={`/images/mock-interview/a${idx + 1}.svg`}
                              alt={`Avatar ${idx + 1}`}
                              width={32}
                              height={32}
                              className="rounded-full w-full h-full"
                            />
                          </div>
                        ))}

                        {/* Blurred "+60" overlay circle */}
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-brand-950/80 backdrop-blur-sm flex items-center justify-center text-white font-semibold text-[10px] md:text-xs z-10 border border-brand-700">
                          {s.enrolled.split(" ")[0]}
                        </div>
                      </div>
                      <span className="text-xs md:text-[15px] font-medium text-brand-100 mr-1">
                        Enrolled
                      </span>
                    </div>
                  </div>

                  {/* Title - Using data from s.title */}
                  <h3 className="text-lg md:text-[24px] font-semibold md:font-[600] leading-tight md:leading-normal text-white mb-2 md:mb-3">
                    {s.title}
                  </h3>

                  {/* Description - Using data from s.desc */}
                  <p className="text-sm md:text-[16px] font-normal leading-relaxed text-brand-200 mb-4 md:mb-6 max-w-full md:max-w-[90%]">
                    {s.desc}
                  </p>

                  {/* Button positioned at the center for mobile, right for desktop */}
                  <div className="flex justify-center md:justify-end">
                    <button
                      onClick={handleOneToOneButtonClick}
                      className="text-[16px] font-[600] leading-normal text-accent-500 rounded-[8px] bg-brand-600 px-6 md:px-10 py-2 md:py-3 hover:bg-brand-500 transition shadow-[0_4px_14px_0_rgba(1,64,81,0.39)]"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* One to One Career Counselling Modal */}
          {isIOnToOneframeVisible && (
            <div className="fixed inset-0 bg-brand-950 bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div
                className="relative w-full max-w-[480px] bg-brand-900 border border-brand-700 rounded-lg shadow-2xl animate-fadeIn"
                style={{ maxHeight: "calc(100vh - 40px)", height: "auto" }}
              >
                {/* Close button */}
                <button
                  className="absolute right-4 top-4 text-brand-400 hover:text-white z-20"
                  onClick={handleCloseClick}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L13 13M1 13L13 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                {/* Modal content */}
                <div
                  className="p-5 md:p-7 overflow-y-auto custom-scrollbar"
                  style={{ maxHeight: "calc(100vh - 40px)" }}
                >
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h2 className="text-xl md:text-2xl font-semibold text-white">
                      Mock Interviews and Resume Reviews
                    </h2>
                    <p className="text-sm text-brand-300 mt-1">
                      Please fill out the form.
                    </p>
                  </div>

                  {/* Form */}
                  <form className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-brand-200 mb-1">
                        Full Name<span className="text-accent-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Prem Jones"
                        className="w-full px-4 py-2.5 bg-brand-950 border border-brand-700 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-accent-500 focus:border-accent-500 placeholder-brand-700"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-brand-200 mb-1">
                        Email<span className="text-accent-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="premjones@gmail.com"
                        className="w-full px-4 py-2.5 bg-brand-950 border border-brand-700 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-accent-500 focus:border-accent-500 placeholder-brand-700"
                        required
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="block text-sm font-medium text-brand-200 mb-1">
                        Mobile Number<span className="text-accent-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="852290XX07"
                        className="w-full px-4 py-2.5 bg-brand-950 border border-brand-700 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-accent-500 focus:border-accent-500 placeholder-brand-700"
                        required
                      />
                    </div>

                    {/* Career Goal */}
                    <div>
                      <label className="block text-sm font-medium text-brand-200 mb-1">
                        Career Role and Company
                        <span className="text-accent-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Software Engineer at Google"
                        className="w-full px-4 py-2.5 bg-brand-950 border border-brand-700 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-accent-500 focus:border-accent-500 placeholder-brand-700"
                        required
                      />
                    </div>

                    {/* Years of experience */}
                    <div>
                      <label className="block text-sm font-medium text-brand-200 mb-1">
                        Years of Experience
                        <span className="text-accent-500">*</span>
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => {
                            setShowExperienceDropdown(!showExperienceDropdown);
                            setShowModeDropdown(false);
                            setShowTimeSlotDropdown(false);
                          }}
                          className="w-full flex items-center justify-between px-4 py-2.5 bg-brand-950 border border-brand-700 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-accent-500 focus:border-accent-500"
                        >
                          <span
                            className={`${experience ? "text-white" : "text-brand-500"}`}
                          >
                            {experience || "--Select--"}
                          </span>
                          <svg
                            className="w-4 h-4 text-brand-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </button>

                        {/* Dropdown */}
                        {showExperienceDropdown && (
                          <div className="absolute z-20 w-full mt-1 bg-brand-800 border border-brand-600 rounded-md shadow-lg text-white">
                            <div
                              className="px-4 py-2 hover:bg-brand-700 cursor-pointer"
                              onClick={() =>
                                selectExperience("Less than 1 year")
                              }
                            >
                              Less than 1 year
                            </div>
                            <div
                              className="px-4 py-2 hover:bg-brand-700 cursor-pointer"
                              onClick={() => selectExperience("1-3 years")}
                            >
                              1-3 years
                            </div>
                            <div
                              className="px-4 py-2 hover:bg-brand-700 cursor-pointer"
                              onClick={() => selectExperience("3-5 years")}
                            >
                              3-5 years
                            </div>
                            <div
                              className="px-4 py-2 hover:bg-brand-700 cursor-pointer"
                              onClick={() => selectExperience("5+ years")}
                            >
                              5+ years
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Two-column layout for Preferred Mode and Schedule */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Preferred Mode */}
                      <div className="relative">
                        <label className="block text-sm font-medium text-brand-200 mb-1">
                          Preferred Mode
                          <span className="text-accent-500">*</span>
                        </label>
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => {
                              setShowModeDropdown(!showModeDropdown);
                              setShowExperienceDropdown(false);
                              setShowTimeSlotDropdown(false);
                            }}
                            className="w-full flex items-center justify-between px-4 py-2.5 bg-brand-950 border border-brand-700 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-accent-500 focus:border-accent-500"
                          >
                            <span
                              className={`${preferredMode ? "text-white" : "text-brand-500"}`}
                            >
                              {preferredMode || "--Select--"}
                            </span>
                            <svg
                              className="w-4 h-4 text-brand-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              ></path>
                            </svg>
                          </button>

                          {/* Dropdown */}
                          {showModeDropdown && (
                            <div className="absolute z-20 w-full mt-1 bg-brand-800 border border-brand-600 rounded-md shadow-lg text-white">
                              <div
                                className="px-4 py-2 hover:bg-brand-700 cursor-pointer"
                                onClick={() => selectMode("Video call")}
                              >
                                Video call
                              </div>
                              <div
                                className="px-4 py-2 hover:bg-brand-700 cursor-pointer"
                                onClick={() => selectMode("Phone Call")}
                              >
                                Phone Call
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Schedule */}
                      <div className="relative">
                        <DatePicker
                          onDateSelect={setSelectedDate}
                          selectedDate={selectedDate}
                        />
                      </div>
                    </div>

                    {/* Available Time Slots */}
                    <div>
                      <label className="block text-sm font-medium text-brand-200 mb-1">
                        Available Time Slots
                        <span className="text-accent-500">*</span>
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => {
                            setShowTimeSlotDropdown(!showTimeSlotDropdown);
                            setShowModeDropdown(false);
                            setShowExperienceDropdown(false);
                          }}
                          className="w-full flex items-center justify-between px-4 py-2.5 bg-brand-950 border border-brand-700 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-accent-500 focus:border-accent-500"
                        >
                          <span
                            className={`${timeSlot ? "text-white" : "text-brand-500"}`}
                          >
                            {timeSlot || "--Select--"}
                          </span>
                          <svg
                            className="w-4 h-4 text-brand-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </button>

                        {/* Dropdown */}
                        {showTimeSlotDropdown && (
                          <div className="absolute z-20 w-full mt-1 bg-brand-800 border border-brand-600 rounded-md shadow-lg text-white">
                            <div
                              className="px-4 py-2 hover:bg-brand-700 cursor-pointer"
                              onClick={() => selectTimeSlot("Weekends")}
                            >
                              Weekends
                            </div>
                            <div
                              className="px-4 py-2 hover:bg-brand-700 cursor-pointer"
                              onClick={() => selectTimeSlot("Weekdays")}
                            >
                              Weekdays
                            </div>
                            <div
                              className="px-4 py-2 hover:bg-brand-700 cursor-pointer"
                              onClick={() => selectTimeSlot("Flexible")}
                            >
                              Flexible
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Remarks */}
                    <div>
                      <label className="block text-sm font-medium text-brand-200 mb-1">
                        Remarks
                      </label>
                      <textarea
                        placeholder="Any additional information you'd like to share..."
                        rows={3}
                        className="w-full px-4 py-2.5 bg-brand-950 border border-brand-700 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-accent-500 focus:border-accent-500 placeholder-brand-700"
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="w-full mt-2 py-3 px-4 bg-accent-600 text-brand-950 font-bold rounded-md hover:bg-accent-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
                    >
                      Join Now
                    </button>
                  </form>

                  {/* Terms text */}
                  <p className="mt-4 text-xs text-center text-brand-400 px-2">
                    By filling this form, you agree to our Terms and Privacy
                    Policy
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        <div>
          {/* Career Success Coaching Section */}
          <section className="relative py-12 md:py-[107px] px-4 md:px-[34px] bg-gradient-to-b from-transparent via-transparent to-brand-500/[0.05]">
            {/* Watermark */}
            <div className="absolute right-0 top-0 max-w-[120px] md:max-w-full mix-blend-overlay opacity-30">
              <Image
                src="/images/mock-interview/watermark-mid.svg"
                alt="Background decoration"
                width={269}
                height={188}
                className="md:w-[269px] md:h-[188px] w-[120px] h-auto"
              />
            </div>

            {/* Content */}
            <div className="flex md:flex-row flex-col-reverse items-center md:gap-[25px] gap-6 max-w-[1200px] mx-auto">
              {/* Image Container */}
              <div className="relative w-full md:w-auto">
                <div className="relative z-10 w-full md:w-auto rounded-[10px] overflow-hidden border border-brand-800">
                  <Image
                    src="/images/mock-interview/career_pic1.jpg"
                    alt="Career coaching session"
                    width={673}
                    height={350}
                    className="w-full h-auto md:w-[673px] md:h-[300px] object-cover opacity-90"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-center items-center gap-4 md:gap-[26px] px-3 md:px-0">
                <h2 className="text-center text-xl md:text-[36px] font-[600] leading-tight md:leading-normal text-accent-500">
                  Who Can Become a Coach?
                </h2>
                <p className="text-center text-base md:text-[20px] font-[400] leading-normal text-white">
                  Industry Experts – Software Engineers, Data Scientists,
                  Marketers, Financial Analysts, and more
                </p>
              </div>
            </div>
          </section>

          {/* Practice Interview Sessions */}
          <section className="relative py-12 md:py-[107px] px-4 md:px-[34px]">
            {/* Watermark */}
            <div className="absolute left-0 bottom-0 md:top-0 md:bottom-auto max-w-[120px] md:max-w-full mix-blend-overlay opacity-30">
              <Image
                src="/images/mock-interview/watermark-mid2.svg"
                alt="Background decoration"
                width={269}
                height={188}
                className="md:w-[269px] md:h-[188px] w-[120px] h-auto"
              />
            </div>

            {/* Content */}
            <div className="flex md:flex-row-reverse flex-col-reverse items-center md:gap-[25px] gap-6 max-w-[1200px] mx-auto">
              {/* Image Container */}
              <div className="relative w-full md:w-auto">
                <div className="relative z-10 w-full md:w-auto rounded-[10px] overflow-hidden border border-brand-800">
                  <Image
                    src="/images/mock-interview/career_pic2.jpg"
                    alt="Practice interview session"
                    width={673}
                    height={350}
                    className="w-full h-auto md:w-[673px] md:h-[300px] object-cover opacity-90"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-center items-center gap-4 md:gap-[26px] px-3 md:px-0">
                <h2 className="text-center text-xl md:text-[36px] font-[600] leading-tight md:leading-normal text-accent-500">
                  Practice Interview Sessions
                </h2>
                <p className="text-center text-base md:text-[20px] font-[400] leading-normal text-white">
                  Don&apos;t waste countless hours searching for the right
                  resources. Practice mock interviews and get personalized
                  feedback directly from experienced interviewers.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
