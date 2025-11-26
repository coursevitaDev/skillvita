"use client"

export function SkillsMarquee() {
  const skills = [
    { name: "React", color: "border-blue-500 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300" },
    { name: "TypeScript", color: "border-indigo-500 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300" },
    { name: "UI Design", color: "border-purple-500 bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300" },
    { name: "Next.js", color: "border-cyan-500 bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300" },
    { name: "Figma", color: "border-pink-500 bg-pink-50 dark:bg-pink-950 text-pink-700 dark:text-pink-300" },
    { name: "Node.js", color: "border-green-500 bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300" },
    { name: "UX Research", color: "border-violet-500 bg-violet-50 dark:bg-violet-950 text-violet-700 dark:text-violet-300" },
    { name: "Python", color: "border-yellow-500 bg-yellow-50 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-300" },
    { name: "GraphQL", color: "border-rose-500 bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300" },
    { name: "Docker", color: "border-sky-500 bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300" },
    { name: "Vue.js", color: "border-emerald-500 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300" },
    { name: "Adobe XD", color: "border-fuchsia-500 bg-fuchsia-50 dark:bg-fuchsia-950 text-fuchsia-700 dark:text-fuchsia-300" },
    { name: "AWS", color: "border-orange-500 bg-orange-50 dark:bg-orange-950 text-orange-700 dark:text-orange-300" },
    { name: "Angular", color: "border-red-500 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300" },
    { name: "Prototyping", color: "border-teal-500 bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300" },
    { name: "MongoDB", color: "border-lime-500 bg-lime-50 dark:bg-lime-950 text-lime-700 dark:text-lime-300" },
    { name: "Sketch", color: "border-amber-500 bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300" },
    { name: "PostgreSQL", color: "border-slate-500 bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300" },
    { name: "Django", color: "border-green-600 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" },
    { name: "Wireframing", color: "border-purple-600 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200" },
    { name: "REST API", color: "border-blue-600 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
    { name: "User Testing", color: "border-pink-600 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200" },
    { name: "Git", color: "border-orange-600 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200" },
    { name: "Design Systems", color: "border-indigo-600 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200" },
    { name: "Flask", color: "border-gray-500 bg-gray-50 dark:bg-gray-950 text-gray-700 dark:text-gray-300" },
    { name: "Framer", color: "border-violet-600 bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200" },
    { name: "CI/CD", color: "border-cyan-600 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200" },
    { name: "Swift", color: "border-red-600 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200" },
    { name: "Interaction Design", color: "border-fuchsia-600 bg-fuchsia-100 dark:bg-fuchsia-900 text-fuchsia-800 dark:text-fuchsia-200" },
    { name: "Kotlin", color: "border-purple-700 bg-purple-200 dark:bg-purple-800 text-purple-900 dark:text-purple-100" },
    { name: "Tailwind CSS", color: "border-sky-600 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200" },
    { name: "Visual Design", color: "border-rose-600 bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200" },
    { name: "Testing", color: "border-emerald-600 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200" },
    { name: "React Native", color: "border-blue-700 bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100" },
    { name: "Design Thinking", color: "border-pink-700 bg-pink-200 dark:bg-pink-800 text-pink-900 dark:text-pink-100" },
    { name: "Agile", color: "border-teal-600 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200" },
    { name: "Flutter", color: "border-indigo-700 bg-indigo-200 dark:bg-indigo-800 text-indigo-900 dark:text-indigo-100" },
    { name: "JavaScript", color: "border-yellow-600 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200" },
    { name: "Scrum", color: "border-lime-600 bg-lime-100 dark:bg-lime-900 text-lime-800 dark:text-lime-200" },
    { name: "DevOps", color: "border-amber-600 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200" },
    { name: "HTML/CSS", color: "border-orange-700 bg-orange-200 dark:bg-orange-800 text-orange-900 dark:text-orange-100" },
  ]

  // Divide skills into 5 rows
  const row1 = skills.slice(0, 8)
  const row2 = skills.slice(8, 16)
  const row3 = skills.slice(16, 24)
  const row4 = skills.slice(24, 32)
  const row5 = skills.slice(32, 41)

  const renderRow = (skills: typeof row1, animationClass: string, rowNum: number) => (
    <div className="relative flex overflow-hidden">
      <div className={`flex ${animationClass} whitespace-nowrap`}>
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <span
            key={`row${rowNum}-${index}`}
            className={`mx-2 px-4 py-2 rounded-full border-2 ${skill.color} font-medium text-sm`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  )

  return (
    <div className="w-full h-full flex flex-col justify-around overflow-hidden py-8 space-y-6">
      {renderRow(row1, "animate-marquee", 1)}
      {renderRow(row2, "animate-marquee-reverse", 2)}
      {renderRow(row3, "animate-marquee", 3)}
      {renderRow(row4, "animate-marquee-reverse", 4)}
      {renderRow(row5, "animate-marquee", 5)}
      {renderRow(row1, "animate-marquee", 6)}
      {renderRow(row2, "animate-marquee-reverse", 7)}
      {renderRow(row3, "animate-marquee", 8)}
    </div>
  )
}
