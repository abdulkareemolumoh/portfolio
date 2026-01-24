const Projects = () => {
  const projectDetails = [
    {
      id: "1",
      title: "MechLink",
      description:
        "MechLink is a location-based platform that connects vehicle owners with verified mechanics and spare-part vendors in real time. The system allows users to submit repair requests, receive quotes from nearby mechanics, chat in-app, and track job progress from start to finish. I designed and built the backend using NestJS, PostgreSQL, and Prisma, implementing secure authentication, role-based access, real-time messaging, and a scalable request–quote workflow. I’m currently developing the frontend with Next.js and Tailwind CSS, focusing on performance, responsiveness, and clean UX. MechLink is built to solve real automotive service challenges in Nigeria by improving trust, speed, and transparency.",
    },
    {
      id: "2",
      title: "CarTrims",
      description:
        "CarTrims is a modern vehicle marketplace built for the Nigerian market, enabling users to buy, sell, and bid on verified cars with confidence. The platform features advanced search filters, secure bidding, real-time notifications, and a wallet system that allows users to fund their accounts through uniquely generated bank account numbers. I contributed significantly to both the web and mobile platforms, building responsive user interfaces, integrating frontend components with backend APIs, and optimizing the overall user experience. The frontend was built with Next.js, TypeScript, Tailwind CSS, and Material UI, while the mobile app was developed with React Native (Expo). CarTrims currently maintains a 4.8/5 rating with over 10,000 downloads.",
    },
    {
      id: "3",
      title: "TrendEcho",
      description:
        "TrendEcho is a lightweight news application built with Next.js and Tailwind CSS, focused on speed, clarity, and responsiveness. The app delivers up-to-date news content through a clean interface optimized for both desktop and mobile devices, ensuring a smooth reading experience across screen sizes.",
    },
    {
      id: "4",
      title: "Tenzies",
      description:
        "Tenzies is a fast-paced dice game built with React that challenges players to roll ten identical numbers as quickly as possible. The game features dynamic state management, interactive UI elements, and responsive design. It showcases clean component architecture and effective handling of user interactions.",
    },
    {
      id: "5",
      title: "Quizzical",
      description:
        "Quizzical is an interactive quiz application built with React, Tailwind CSS, and Firebase. It allows users to create profiles, store quiz progress, and explore quizzes across multiple subjects. The app combines modern UI design with real-time data handling to deliver an engaging learning experience.",
    },
    {
      id: "6",
      title: "VanLife",
      description:
        "VanLife is a simple and intuitive van rental application developed with React and pure CSS. Users can easily browse available vans and complete rentals through a clean, responsive interface. The project emphasizes usability, component reusability, and minimalist design principles.",
    },
  ];

  const projects = projectDetails.map((project) => (
    <div
      className="border-l-4 border-green-500 text-justify p-4 m-4 lg:p-8 lg:m-8"
      key={project.id}
    >
      <h1 className="text-xl font-semibold mb-4 underline decoration-green-500 underline-offset-4">
        {project.title}
      </h1>
      <p className="leading-relaxed">{project.description}</p>
    </div>
  ));

  return <div>{projects}</div>;
};

export default Projects;
