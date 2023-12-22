import { DatabaseOutlined } from "@ant-design/icons";
import Image from "next/image";
// import Tenzies from "../"

const Portfolio = () => {
  return (
    <div>
      <div className="m-12 ">
        <div className="flex justify-between items-baseline font-bold text-3xl border-b-4 border-dotted border-green-400 mb-4">
          <h1>Portfolio</h1>
          <p>
            <DatabaseOutlined />
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 m-12">
          <div className="p-4 border-4 rounded-xl max-w-fit m-4 shadow-xl ">
            <Image
              src={"/images/Tenzies.jpg"}
              alt="tenzies"
              width={500}
              height={500}
              className="rounded-xl m-2 hover:scale-105 mx-auto"
            />
            <h1 className="m-4 font-semibold text-center">Tenzies</h1>
            <button className="py-2 px-4 border rounded-xl border-green-500 flex mx-auto">
              <a href="https://tenziiesgame.netlify.app/" target="_blank">
                View site
              </a>
            </button>
          </div>
          <div className="p-4 border-4 rounded-xl max-w-fit m-4 shadow-xl">
            <Image
              src={"/images/quizzcal.jpg"}
              alt="tenzies"
              width={500}
              height={500}
              className="rounded-xl m-2 hover:scale-105 mx-auto"
            />
            <h1 className="m-4 font-semibold text-center">Quizzcal</h1>

            <button className="py-2 px-4 border rounded-xl border-green-500 flex mx-auto">
              <a href="https://quizzcalapp.netlify.app/" target="_blank">
                View site
              </a>
            </button>
          </div>
          <div className="p-4 border-4 rounded-xl max-w-fit m-4 shadow-xl">
            <Image
              src={"/images/VanLife.jpg"}
              alt="tenzies"
              width={500}
              height={500}
              className="rounded-xl m-2 hover:scale-105 mx-auto"
            />
            <h1 className="m-4 font-semibold text-center">VanLife</h1>
            <button className="py-2 px-4 border rounded-xl border-green-500 flex mx-auto">
              <a href="https://vanslifeapp.netlify.app/" target="_blank">
                View site
              </a>
            </button>
          </div>
          <div className="p-4 border-4 rounded-xl max-w-fit m-4 shadow-xl">
            <Image
              src={"/images/trendecho.jpg"}
              alt="tenzies"
              width={500}
              height={500}
              className="rounded-xl m-2 hover:scale-105 mx-auto"
            />
            <h1 className="m-4 font-semibold text-center">Trendecho</h1>

            <button className="py-2 px-4 border rounded-xl border-green-500 flex mx-auto">
              <a href="https://trendecho.netlify.app/" target="_blank">
                View site
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
