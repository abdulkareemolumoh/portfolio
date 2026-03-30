import Image from "next/image";
import { Carousel, CommentOutlined } from "../antd";

const testimonial = [
  {
    id: "1",
    name: "Kolawole Tajudeen",
    role: "Senior Software Engineer at Clipboard Health",
    image:
      "https://media.licdn.com/dms/image/v2/D4D35AQHmsze-jlPTmg/profile-framedphoto-shrink_800_800/B4DZb6HtjvGkAk-/0/1747953048057?e=1759068000&v=beta&t=WW8khic6ls5HbyrLb_b1ibH-2SYUuPpk-yWm5BKJLtU",
    testimony:
      "Tunde is a dynamic and committed full-stack engineer with strong frontend and backend foundations. His proactive approach, quick learning ability, and consistency make him a valuable contributor across complex product work.",
  },
  {
    id: "2",
    name: "Majid Kareem",
    role: "Full-Stack Developer and React Enthusiast",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQG0MvxjV-pE-Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1662375034226?e=1761177600&v=beta&t=CzfDSwUg-zYGZXhW7kMbrcnp7wx_vpKA8yjH3Zlj1Gs",
    testimony:
      "Tunde is an exceptional team player with a strong full-stack skill set. From API design to intuitive interfaces, he brings clarity, collaboration, and high standards to every project.",
  },
  {
    id: "3",
    name: "Abdulgafar Tajudeen",
    role: "Frontend Developer",
    image:
      "https://media.licdn.com/dms/image/v2/D4D35AQEIsn7SB6AIcA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1738214632402?e=1759068000&v=beta&t=-JHN0ZTH6mrVa-YTtstsU6Nm5niNfsOoLWoEfFO-7xs",
    testimony:
      "With strong cross-stack knowledge and a collaborative mindset, Tunde consistently contributes meaningfully to team success. He combines technical depth with a clear commitment to excellence.",
  },
  {
    id: "4",
    name: "Moshood Shabi",
    role: "Full-Stack Developer",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQHfOqYwx6ODUQ/profile-displayphoto-shrink_800_800/B4DZhmkvNBGkAc-/0/1754067567280?e=1761177600&v=beta&t=JvTEYAWHX6KpCMq2vtUfYCpFS_LpKNAHMbf2Qn705gY",
    testimony:
      "Tunde brings sharp problem-solving, dependable communication, and the ability to move smoothly between frontend and backend priorities. He is a strong addition to any product team.",
  },
];

const slides = [
  [testimonial[0], testimonial[1]],
  [testimonial[2], testimonial[3]],
];

const Testimonials = () => {
  return (
    <section className="space-y-6 rounded-3xl border border-green-500/35 bg-black/25 p-5 shadow-xl shadow-black/20 backdrop-blur-sm sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-green-300">
            Social Proof
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">Testimonials</h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base">
          A few words from engineers and collaborators who have worked closely
          with me.
        </p>
      </div>

      <Carousel effect="fade" autoplay dots={{ className: "!bottom-[-0.5rem]" }}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="grid gap-4 lg:grid-cols-2">
              {slide.map((item) => (
                <article
                  key={item.id}
                  className="flex h-full flex-col rounded-2xl border border-green-500/25 bg-gray-950/70 p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-green-500/10 text-xl text-green-300">
                      <CommentOutlined />
                    </div>
                    <p className="text-sm italic leading-relaxed text-gray-200 sm:text-base">
                      {item.testimony}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={72}
                      height={72}
                      className="h-14 w-14 rounded-2xl object-cover"
                    />
                    <div>
                      <p className="font-semibold text-white">{item.name}</p>
                      <p className="text-sm text-gray-400">{item.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Testimonials;
