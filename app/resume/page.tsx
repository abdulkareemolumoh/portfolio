import { Skills } from "../component/resume";
import { ProfileOutlined } from "../component/antd";

const Resume = () => {
  return (
    <div className="m-4 sm:m-8 ">
      <div className="flex justify-between items-baseline font-bold text-3xl border-b-4 border-dotted text-green-500 border-green-500 mb-4">
        <h1>My Resume</h1>
        <ProfileOutlined />
      </div>
      <div className="flex flex-col lg:grid grid-cols-2  p-0 lg:p-4">
        <div className="col-span-1">
          <h1 className="text-center text-3xl font-bold underline m-4">
            Projects
          </h1>
          <div className="border-l-4 border-green-500 text-justify p-4 m-4 lg:p-8 lg:m-8">
            <h1 className="text-xl font-semibold mb-4">Tenzies</h1>
            <p>
              Tenzies app, a dynamic project developed using React, with a
              modern design and responsive capabilities.
              <br /> Tenzies is a fast-paced dice game where you race to roll
              ten identical numbers from their set of ten colorful dice.
              It&apos;s a frenzy of rolling, grabbing, and yelling
              &quot;Tenzies&quot;&quot; before your opponents, requiring both
              luck and lightning-fast reflexes.
            </p>
          </div>
          <div className="border-l-4 border-green-500 text-justify p-4 m-4 lg:p-8 lg:m-8">
            <h1 className="text-xl font-semibold mb-4">Quizzical</h1>
            <p>
              Quizzical is an application skillfully crafted with React,
              Tailwind CSS, and Firebase for a robust backend. Boasting a
              contemporary design and responsive features, Quizzical goes beyond
              traditional quiz apps by offering users personalized profiles with
              stored data. Engage in a seamless and interactive learning
              experience as you explore a variety of quizzes across different
              subjects. With its modern design and dynamic functionalities,
              Quizzical transforms education into an enjoyable journey.
            </p>
          </div>
          <div className="border-l-4 border-green-500 text-justify p-4 m-4 lg:p-8 lg:m-8">
            <h1 className="text-xl font-semibold mb-4">VanLife</h1>
            <p>
              VanLife is a user-friendly application developed using React and
              Pure CSS, designed to simplify the process of renting vans for
              memorable tours. With a clean and intuitive interface, users can
              effortlessly browse through a variety of van options, making the
              rental process straightforward and enjoyable. The app seamlessly
              combines the power of React for dynamic functionality and Pure CSS
              for a sleek and responsive design.
            </p>
          </div>
          <div className="border-l-4 border-green-500 text-justify p-4 m-4 lg:p-8 lg:m-8">
            <h1 className="text-xl font-semibold mb-4">TrendEcho</h1>
            <p>
              TrendEcho is a cutting-edge application crafted with Next.js and
              Tailwind CSS, dedicated to delivering the latest news and updates
              in a sleek and efficient manner. Seamlessly blending the power of
              Next.js for optimized performance and Tailwind CSS for a polished
              user interface, TrendEcho provides a user-friendly platform for
              staying informed about current trends. With its responsive design,
              users can enjoy a seamless news-browsing experience across various
              devices.
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <h1 className="text-center text-3xl font-bold underline m-4">
            Education
          </h1>
          <div className="border-l-4 border-green-500 p-4 m-4 lg:p-8 lg:m-8">
            <h1 className="text-xl font-semibold ">Docs</h1>
            <h2 className="">Software Development</h2>
            <h2>
              <button className="p-2 bg-green-500 rounded-xl m-2">
                NEXT.js
              </button>
              <button className="p-2 bg-green-500 rounded-xl m-2">
                Firebase
              </button>
              <button className="p-2 bg-green-500 rounded-xl m-2">
                tailwindcss
              </button>
              <button className="p-2 bg-green-500 rounded-xl m-2">
                Bootstrap
              </button>
            </h2>
          </div>
          <div className="border-l-4 border-green-500 p-4 m-4 lg:p-8 lg:m-8">
            <h1 className="text-xl font-semibold ">Coursera</h1>
            <h2 className="">Meta Front-End Developer</h2>
            <h2>
              <button className="p-2 bg-green-500 rounded-xl m-2">
                Advanced React
              </button>

              <button className="p-2 bg-green-500 rounded-xl m-2">
                Front-End Developer Capstone
              </button>

              <button className="p-2 bg-green-500 rounded-xl m-2">
                Introduction to Front-End Development
              </button>

              <button className="p-2 bg-green-500 rounded-xl m-2">
                Version Control
              </button>

              <button className="p-2 bg-green-500 rounded-xl m-2">
                Coding Interview Preparation
              </button>

              <button className="p-2 bg-green-500 rounded-xl m-2">
                React Basics
              </button>

              <button className="p-2 bg-green-500 rounded-xl m-2">
                Principles of UX/UI Design
              </button>

              <button className="p-2 bg-green-500 rounded-xl m-2">
                Programming with JavaScript
              </button>

              <button className="p-2 bg-green-500 rounded-xl m-2">
                HTML and CSS in depth
              </button>
            </h2>
          </div>
          <div className="border-l-4 border-green-500 p-4 m-4 lg:p-8 lg:m-8">
            <h1 className="text-xl font-semibold ">freeCodeCamp</h1>
            <h2 className="">Responsive Web Design</h2>
            <h2>
              <button className="p-2 bg-green-500 rounded-xl m-2">HTML</button>
              <button className="p-2 bg-green-500 rounded-xl m-2">CSS</button>
              <button className="p-2 bg-green-500 rounded-xl m-2">
                JavaScript
              </button>
            </h2>
          </div>
          <div className="border-l-4 border-green-500 p-4 m-4 lg:p-8 lg:m-8">
            <h1 className="text-xl font-semibold ">Scrimba</h1>
            <h2 className="">Responsive Web Design</h2>
            <h2>
              <button className="p-2 bg-green-500 rounded-xl m-2">React</button>
              <button className="p-2 bg-green-500 rounded-xl m-2">
                Advanced React
              </button>
            </h2>
          </div>
          <div className="border-l-4 border-green-500 p-4 m-4 lg:p-8 lg:m-8">
            <h1 className="text-xl font-semibold ">
              Federal University of Technology
            </h1>
            <h2 className="">Civil Engineering: Second Class Upper 2016</h2>
          </div>
        </div>
      </div>
      <h1 className="text-center text-2xl font-bold underline m-4">SKILLS</h1>
      <div className="flex flex-col lg:flex-row p-0 m-0 lg:p-8 lg:m-8 ">
        <div>
          <Skills label="HTML" percent={95} />
          <Skills label="CSS" percent={95} />
          <Skills label="JavaScript" percent={85} />
          <Skills label="React" percent={88} />
        </div>
        <div>
          <Skills label="Firebase" percent={92} />
          <Skills label="Next.js" percent={75} />
          <Skills label="TypeScript" percent={80} />
          <Skills label="Github" percent={90} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
