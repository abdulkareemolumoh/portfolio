const projectDetails = [
  {
    id: "1",
    title: "MechLink",
    description:
      "Location-based auto-service platform connecting vehicle owners with verified mechanics and spare-parts vendors in real time. I led backend architecture with NestJS, PostgreSQL, and Prisma, and also shaped the responsive frontend MVP with Next.js and Tailwind CSS.",
  },
  {
    id: "2",
    title: "CarTrims",
    description:
      "Modern vehicle marketplace for buying, selling, and bidding on verified cars. I contributed across web and mobile experiences, building responsive interfaces, integrating backend APIs, and refining the user journey.",
  },
  {
    id: "3",
    title: "TrendEcho",
    description:
      "Lightweight news application built around speed, clarity, and readability. The interface was designed to stay clean and responsive across desktop and mobile devices.",
  },
  {
    id: "4",
    title: "Tenzies",
    description:
      "Interactive React dice game focused on quick gameplay loops, component state management, and responsive feedback for a more engaging experience.",
  },
  {
    id: "5",
    title: "Quizzical",
    description:
      "Interactive quiz application with user profiles, stored progress, and a modern interface powered by React, Tailwind CSS, and Firebase.",
  },
  {
    id: "6",
    title: "VanLife",
    description:
      "Van rental application built with React and CSS, emphasizing usability, reusable components, and a streamlined responsive browsing flow.",
  },
];

const Projects = () => {
  return (
    <div className="space-y-4">
      {projectDetails.map((project) => (
        <article
          className="rounded-2xl border border-green-500/25 bg-gray-950/60 p-5"
          key={project.id}
        >
          <div className="border-l-2 border-green-400 pl-4">
            <p className="text-sm uppercase tracking-[0.16em] text-green-300">
              Selected Project
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              {project.title}
            </h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
            {project.description}
          </p>
        </article>
      ))}
    </div>
  );
};

export default Projects;
