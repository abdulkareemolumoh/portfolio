import { Typewriter } from "./component/antd";

export default function Home() {
  return (
    <main>
      <div className="w-full h-screen bg-[url('../public/images/background.jpg')]  bg-cover bg-center object-contain">
        <div className="flex flex-col items-center justify-center h-full text-4xl font-bold text-white gap-12">
          <h1 className="text-center">TUNDE ABDULKAREEM OLUMOH</h1>
          <h2>
            I am a
            <span
              style={{
                color: "green",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              <Typewriter
                words={[" Software Engineer", " Technical Support Engineer"]}
                loop={5}
                cursor
                cursorStyle=""
                typeSpeed={90}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
          </h2>
        </div>
      </div>
    </main>
  );
}
