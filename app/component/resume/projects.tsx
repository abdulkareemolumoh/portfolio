const Projects = () => {
  const projectDetails = [
    {
      id: "1",
      title: "CarTrims",
      description:
        "CarTrims is a modern car marketplace built specifically for the Nigerian market, designed to simplify the process of buying, selling, and bidding on verified vehicles. The platform connects users with trusted dealers, offering features like advanced search filters, a secure bidding system, real-time notifications, and a wallet integration that allows users to fund their account using a uniquely generated bank account number. I was actively involved in the development of both the web and mobile platforms, working with a team to bring the product to life from concept to launch. My contributions focused on building responsive, intuitive user interfaces, integrating the frontend with backend APIs, and ensuring a smooth user experience across devices. I used technologies like Next.js, TypeScript, Tailwind CSS, and Material UI for the frontend, and collaborated on the React Native mobile app using Expo. We also implemented third-party APIs for payments, account generation, and notifications. CarTrims currently holds a 4.8/5 rating with over 10,000 downloads and has become a trusted solution for Nigerians looking to buy and sell quality vehicles with confidence.",
    },
    {
      id: "2",
      title: "TrendEcho",
      description:
        "TrendEcho is a cutting-edge application crafted with Next.js and Tailwind CSS, dedicated to delivering the latest news and updates in a sleek and efficient manner. Seamlessly blending the power of Next.js for optimized performance and Tailwind CSS for a polished user interface, TrendEcho provides a user-friendly platform for staying informed about current trends. With its responsive design, users can enjoy a seamless news-browsing experience across various devices.",
    },
    {
      id: "3",
      title: "Tenzies",
      description: `Tenzies app is a dynamic project developed using React, featuring a modern design and responsive capabilities. \n Tenzies is a fast-paced dice game where players race to roll ten identical numbers from their set of ten colorful dice. It's a frenzy of rolling, grabbing, and yelling 'Tenzies' before your opponents, requiring both luck and lightning-fast reflexes.`,
    },
    {
      id: "4",
      title: "Quizzical",
      description:
        "Quizzical is an application skillfully crafted with React, Tailwind CSS, and Firebase for a robust backend. Boasting a contemporary design and responsive features, Quizzical goes beyond traditional quiz apps by offering users personalized profiles with stored data. Engage in a seamless and interactive learning experience as you explore a variety of quizzes across different subjects. With its modern design and dynamic functionalities, Quizzical transforms education into an enjoyable journey.",
    },
    {
      id: "5",
      title: "VanLife",
      description:
        "VanLife is a user-friendly application developed using React and Pure CSS, designed to simplify the process of renting vans for memorable tours. With a clean and intuitive interface, users can effortlessly browse through a variety of van options, making the rental process straightforward and enjoyable. The app seamlessly combines the power of React for dynamic functionality and Pure CSS for a sleek and responsive design.",
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
      <p>{project.description}</p>
    </div>
  ));
  return <div>{projects}</div>;
};

export default Projects;
