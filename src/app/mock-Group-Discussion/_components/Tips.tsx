"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    title: "Practice Before the Discussion",
    icon: "/images/mockGroupDiscussion/step1-icon.svg",
    refName: "section1",
    description: (
      <>
        Possessing quality knowledge in your domain and the ability to
        articulate that expertise are both equally important aspects of acing a
        group discussion. Delivering pre-learned knowledge demands a lot of
        practice in terms of speech presentation, using the right keywords, and
        being humble while countering conflicting perspectives.
        <div className="w-full my-2">
          <Image
            src="/images/mockGroupDiscussion/tipImage1.png"
            alt="tip"
            width={600}
            height={200}
            className="w-full rounded-md"
          />
        </div>
      </>
    ),
  },
  {
    title: "Awareness of Topics",
    icon: "/images/mockGroupDiscussion/step2-icon.svg",
    refName: "section2",
    description: (
      <>
        Core subject knowledge is important. But often, the topics in a group
        discussion steer you away from your field of expertise to bring their
        applications into the foreground. So, let’s say, in a Machine Learning
        (ML) discussion, the topic could be the economic and sociological impact
        of self-driving cars. This would entail an understanding of self-driving
        cars in different contexts, such as ecology, politics, and culture, and
        linking it with technical knowledge about the subject.
        <div>
          <div className="font-semibold my-2">
            Common Group Discussion Topics for Interviews:
          </div>
          <ul className="list-disc pl-6 text-[14px]">
            <li>Role of Technology in Today&apos; World</li>
            <li>Impact of Social Media</li>
            <li>Climate Change and Environmental Conservation</li>
            <li>Leadership Styles</li>
            <li>Remote Work</li>
            <li>Ethical Dilemmas in Business</li>
            <li>Gender Equality in the Workplace</li>
            <li>Education System Reforms</li>
            <li>Healthcare Reforms</li>
            <li>Artificial Intelligence and Job Displacement</li>
            <li>The impact of Coronavirus on the world economy</li>
            <li>Mental Health Awareness in the Workplace</li>
            <li>Diversity and Inclusion in Corporate Culture</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: "Listen Actively",
    icon: "/images/mockGroupDiscussion/step3-icon.svg",
    refName: "section3",
    description: (
      <>
        Pay close attention to what others are saying. This not only shows
        respect but also helps you build on or counter their arguments
        effectively.
        <div className="w-full my-2">
          <Image
            src="/images/mockGroupDiscussion/tipImage2.png"
            alt="tip"
            width={600}
            height={200}
            className="w-full rounded-md"
          />
        </div>
      </>
    ),
  },
  {
    title: "Engage with Others",
    icon: "/images/mockGroupDiscussion/step4-icon.svg",
    refName: "section4",
    description: (
      <>
        Engage with other participants by asking questions, providing feedback,
        and building on their ideas. This can help demonstrate your active
        participation and engagement in the discussion.
        <div className="w-full my-2">
          <Image
            src="/images/mockGroupDiscussion/tipImage3.png"
            alt="tip"
            width={600}
            height={200}
            className="w-full rounded-md"
          />
        </div>
      </>
    ),
  },
  {
    title: "Speak Clearly and Confidently",
    icon: "/images/mockGroupDiscussion/step5-icon.svg",
    refName: "section5",
    description: (
      <>
        Speaking clearly and confidently can help you make your points
        effectively and be heard by other participants. Be concise and
        articulate your thoughts in a way that is easy to understand.
      </>
    ),
  },
  {
    title: "Respect Others' Opinions",
    icon: "/images/mockGroupDiscussion/step6-icon.svg",
    refName: "section6",
    description: (
      <>
        Being respectful and professional can help build a positive atmosphere
        for the discussion. Respect other participants’ opinions, avoid
        interrupting or talking over them and maintain a positive tone
        throughout the discussion.
      </>
    ),
  },
  {
    title: "Show Confidence",
    icon: "/images/mockGroupDiscussion/step7-icon.svg",
    refName: "section7",
    description: (
      <>
        Speak with confidence. Maintain good posture, make eye contact, and use
        a steady voice to convey your points assertively.
      </>
    ),
  },
  {
    title: "Manage Time",
    icon: "/images/mockGroupDiscussion/step8-icon.svg",
    refName: "section8",
    description: (
      <>
        Managing time effectively can help ensure that the discussion stays on
        track and that all important points are covered. Be mindful of the
        remaining time and encourage other participants to stay focused on the
        topic.
      </>
    ),
  },
  {
    title: "Do’s of the Group Discussion",
    icon: "/images/mockGroupDiscussion/step9-icon.svg",
    refName: "section9",
    description: (
      <>
        The successful “do’s” of a GD include being prepared, listening
        actively, speaking clearly and confidently, respecting others,
        collaborating and building on ideas, taking notes, and summarising and
        concluding.
        <ul className="list-disc pl-6 text-[14px] mt-2">
          <li className="font-semibold">Listen Actively</li>
          <p>
            A good listener is an essential soft skill to help you clear the GD
            successfully. Listening actively means paying attention to what
            others are saying, understanding their perspectives, and asking
            questions for clarification. This will help you better understand
            the topic and the points of view of the other participants.
          </p>
          <li className="font-semibold">Initiate the Discussion</li>
          <p>
            The first move is to start the discussion when you know the topic
            and are confident. There are various forms of group discussion, such
            as case studies, opinion-based, factual, etc. Therefore, ensure you
            understand the type and begin it confidently.
          </p>
          <li className="font-semibold">Collaborate and Build on Ideas</li>
          <p>
            Group discussions are meant to be collaborative, so try to build on
            the ideas of others. If someone presents an idea, ask questions or
            suggest ways to expand on it.
          </p>
        </ul>
      </>
    ),
  },
  {
    title: "Dont’s of the Group Discussion",
    icon: "/images/mockGroupDiscussion/step9-icon.svg",
    refName: "section10",
    description: (
      <>
        Along with the successful “tips” of a group discussion, there are also
        some “don’ts” that should be avoided...
        <ul className="list-disc pl-6 text-[14px] mt-2">
          <li className="font-semibold">Don’t Dominate the Conversation</li>
          <p>
            It’s important to allow everyone to have an opportunity to speak and
            share their thoughts. Avoid dominating the conversation or
            interrupting others.
          </p>
          <li className="font-semibold">
            Don’t Dismiss or Disrespect other’s Opinions
          </li>
          <p>
            The participant should respect everyone’s opinions and perspectives,
            even if they disagree. Avoid dismissing or belittling others’
            opinions, as this can make them feel undervalued and unimportant.
          </p>
          <li className="font-semibold">Don’t Get Personal or Emotional</li>
          <p>
            Keep the discussion professional and focused on the topic. Avoid
            getting personal or emotional, leading to arguments and unproductive
            discussions.
          </p>
          <li className="font-semibold">Don’t Interrupt or Talk Over Others</li>
          <p>
            Interrupting or talking over others can be seen as disrespectful and
            can prevent productive discussion. Wait for your turn to speak and
            allow others to finish their thoughts. By avoiding these successful
            “dont’s” can ensure you that the group discussion is productive,
            respectful, and effective.
          </p>
        </ul>
      </>
    ),
  },
];

export default function Tips() {
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState("section1");
  const [reachedArr, setReachedArr] = useState(steps.map(() => false));
  const [isMobile, setIsMobile] = useState(false);
  type Blog = {
    _id: string;
    title: string;
    headerImageUrl: string;
  };
  const [randomBlogs, setRandomBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomBlogs = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_LINK}/blogs/getallblogs`,
        );
        const data = await response.json();
        const blogs: Blog[] = data.data || [];
        const shuffled = blogs.sort(() => 0.5 - Math.random());
        setRandomBlogs(shuffled.slice(0, 2));
      } catch {
        setRandomBlogs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchRandomBlogs();
  }, []);

  // --- Detect Mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // --- Framer Motion Scroll Progress for vertical line ---
  const { scrollYProgress } = useScroll({
    target: containerRef, // make sure this div is scrollable or tall enough!
    offset: ["start end", "end start"],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // --- Mark step as reached when progress line crosses it ---
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const container = containerRef.current;
      if (!container) return;
      const containerRect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const progressPx = v * containerHeight;
      const newReached = steps.map((_, idx) => {
        const section = stepRefs.current[idx];
        if (!section) return false;
        const sectionRect = section.getBoundingClientRect();
        const relativeTop = sectionRect.top - containerRect.top;
        return progressPx >= relativeTop;
      });
      setReachedArr(newReached);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);
  // After all your other useEffects
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-40% 0px -55% 0px",
      },
    );

    const currentRefs = stepRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleClick = (idx: number) => {
    const el = stepRefs.current[idx];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto bg-brand-950">
      <h2 className="text-3xl md:text-4xl font-outfit text-center text-accent-500 font-medium mb-2">
        Tips To Improve
      </h2>
      <h3 className="text-3xl md:text-4xl font-outfit text-center font-medium mb-8 text-white">
        Your Group Discussion Skills
      </h3>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Table of Contents */}
        <div className="hide-on-small hidden md:flex flex-col flex-1 max-w-xs rounded-xl p-4 border border-brand-800 bg-brand-900 sticky top-24 h-fit">
          <div className="text-xl text-center font-outfit mt-4 mb-2 font-semibold text-white">
            Table of Contents
          </div>
          <ol className="list-decimal px-5 pb-4 ">
            {steps.map((step, idx) => (
              <li
                key={step.refName}
                className={`
        cursor-pointer py-2 px-2 rounded-md font-medium transition relative
        md:whitespace-nowrap
        ${
          activeSection === step.refName
            ? " text-accent-500" // highlight styles
            : "hover:bg-brand-800"
        }
      `}
                onClick={() => handleClick(idx)}
              >
                {/* Add the left bar only when active */}
                {activeSection === step.refName && (
                  <span
                    className="absolute -left-9 top-1/2 -translate-y-1/2 h-8 w-1 bg-accent-500 rounded-r-lg shadow-lg"
                    aria-hidden
                  />
                )}
                {step.title}
              </li>
            ))}
          </ol>
        </div>

        {/* Main Steps with animated progress line */}
        <div
          ref={containerRef}
          className="flex-[2.5] bg-brand-900 rounded-xl md:px-8 py-6 relative overflow-visible border border-brand-800"
        >
          {/* Static vertical line */}
          <div
            className=" md:block absolute bg-brand-800 z-10"
            style={{
              left: isMobile ? 21 : 52,
              top: 24, // Offset for icon center (for 48px icon)
              bottom: 24, // Same here
              width: "4px",
            }}
          />
          {/* Animated progress line */}
          <motion.div
            style={{
              height: progressHeight, // Animate only height
            }}
            className={`
    absolute z-20
    rounded-full
    bg-brand-500
    w-1
    left-[52px] top-6
    ${isMobile ? "left-[21px]" : "left-[52px]"}
    md:block
  `}
          />

          <div className="space-y-10">
            {steps.map((step, idx) => (
              <div
                key={step.refName}
                ref={(el) => {
                  stepRefs.current[idx] = el;
                }}
                id={step.refName}
                className="flex gap-4 md:gap-8 items-start mb-6 scroll-mt-32"
              >
                {/* Icon with no enlargement, just border effect */}
                <div
                  className={`
    flex-shrink-0 rounded-xl border-2 flex items-center justify-center shadow-md z-30 transition-all duration-300
    ${
      reachedArr[idx]
        ? "border-brand-600 bg-brand-500"
        : "border-brand-700 bg-brand-800"
    }
    min-w-[48px] min-h-[48px] w-[48px] h-[48px]
  `}
                >
                  <Image
                    src={step.icon}
                    alt=""
                    width={28}
                    height={28}
                    className={
                      reachedArr[idx]
                        ? "brightness-0 invert"
                        : "opacity-70 invert brightness-0"
                    }
                  />
                </div>

                <div>
                  <div className="text-xs font-poppins mb-1">
                    Step-{idx + 1}
                  </div>
                  <div className="font-outfit text-lg md:text-2xl font-bold text-accent-500 mb-2">
                    {step.title}
                  </div>
                  <div className="text-[15px] md:text-base font-poppins">
                    {step.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="
    hide-on-small
    hidden md:flex flex-col flex-[1.5] w-full max-w-lg
    rounded-2xl
    py-6 px-6 sticky top-24 h-fit gap-4 transition-all
    bg-gradient-to-br from-brand-900 to-brand-950 border border-brand-800
    "
        >
          <div className="border border-accent-500 text-accent-500 text-sm rounded-md px-3 py-1 font-outfit mb-3 bg-accent-500/10 backdrop-blur-sm w-fit">
            Blog Articles
          </div>
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="w-7 h-7 border-4 border-t-accent-500 border-brand-700 rounded-full animate-spin"></div>
              <span className="ml-3 text-accent-500 font-medium">
                Loading...
              </span>
            </div>
          ) : randomBlogs.length === 0 ? (
            <div className="text-center text-brand-400">No blogs found.</div>
          ) : (
            randomBlogs.map((blog) => (
              <div
                key={blog._id}
                className="flex gap-2 items-center bg-brand-800 rounded-lg p-2 mb-1 shadow-sm w-full transition border border-brand-700 hover:border-brand-600"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={blog.headerImageUrl}
                    alt={blog.title}
                    width={90}
                    height={60}
                    className="rounded-md opacity-90 hover:opacity-100 transition-opacity"
                    style={{ minWidth: 60, minHeight: 40, objectFit: "cover" }}
                  />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div className="font-outfit font-medium text-sm break-words mb-1 line-clamp-2 text-white">
                    {blog.title}
                  </div>
                  <Link href={`/blogs/${blog._id}`} passHref>
                    <span className="ad-btn text-xs text-accent-400 hover:text-accent-300 hover:underline self-start cursor-pointer">
                      Read Blog &gt;
                    </span>
                  </Link>
                </div>
              </div>
            ))
          )}
          <button className="text-base text-brand-300 hover:text-white font-medium underline mx-auto transition-colors">
            <Link href="/blogs">View More &gt;</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
