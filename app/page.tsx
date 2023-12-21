"use client";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main>
      <div className="w-full h-screen bg-[url('../public/images/background.jpg')] bg-cover ">
        <div className="flex flex-col items-center justify-center h-full text-4xl font-bold text-white gap-4">
          <h1>OLUMOH TUNDE ABDULKAREEM</h1>
          <h2>
            I am a
            <span style={{ color: "green", fontWeight: "bold" }}>
              <Typewriter
                words={[" Software Engineer", " Community Manager"]}
                loop={5}
                cursor
                cursorStyle=""
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
        </div>
      </div>
    </main>
  );
}
