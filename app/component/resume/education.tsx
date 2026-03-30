const educationDetails = [
  {
    id: "1",
    institution: "Docs & Self-Learning",
    program: "Full-Stack Software Development",
    courses: [
      "Next.js",
      "React Native",
      "NestJS",
      "Prisma ORM",
      "PostgreSQL",
      "Cloudinary",
      "Firebase",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    id: "2",
    institution: "Coursera",
    program: "Meta Front-End Developer Professional Certificate",
    courses: [
      "Advanced React",
      "Front-End Developer Capstone",
      "Introduction to Front-End Development",
      "Version Control",
      "Coding Interview Preparation",
      "React Basics",
      "Principles of UX/UI Design",
      "Programming with JavaScript",
      "HTML and CSS in Depth",
    ],
  },
  {
    id: "3",
    institution: "freeCodeCamp",
    program: "Backend Development & APIs",
    courses: [
      "Node.js & Express",
      "REST API Design",
      "Authentication & Security",
      "Database Integration",
    ],
  },
  {
    id: "4",
    institution: "freeCodeCamp",
    program: "Responsive Web Design",
    courses: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: "5",
    institution: "Federal University of Technology, Minna",
    program: "B.Eng. Civil Engineering - Second Class Upper (2016)",
    courses: [],
  },
];

const Education = () => {
  return (
    <div className="space-y-4">
      {educationDetails.map((edu) => (
        <article
          key={edu.id}
          className="rounded-2xl border border-green-500/25 bg-gray-950/60 p-5"
        >
          <div className="border-l-2 border-green-400 pl-4">
            <p className="text-sm uppercase tracking-[0.16em] text-green-300">
              {edu.institution}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">
              {edu.program}
            </h3>
          </div>

          {edu.courses.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {edu.courses.map((course) => (
                <span
                  className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm text-green-100"
                  key={course}
                >
                  {course}
                </span>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
};

export default Education;
