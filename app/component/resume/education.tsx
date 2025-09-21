const Education = () => {
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
      "TailwindCSS",
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
      "Version Control (Git & GitHub)",
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
    program: "B.Eng. Civil Engineering – Second Class Upper (2016)",
    courses: [],
  },
];


  const education = educationDetails.map((edu) => (
    <div
      className="border-l-4 border-green-500 p-4 m-4 lg:p-8 lg:m-8"
      key={edu.id}
    >
      <h1 className="text-xl font-semibold ">{edu.institution}</h1>
      <h2 className="">{edu.program}</h2>
      <h2>
        {edu.courses.map((cousrse, index) => (
          <button className="p-2 bg-green-500 rounded-xl m-2" key={index}>
            {cousrse}
          </button>
        ))}
      </h2>
    </div>
  ));
  return <div>{education}</div>;
};

export default Education;
