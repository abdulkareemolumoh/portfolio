import Image from "next/image";
import { CommentOutlined } from "../antd";
import { Carousel } from "../antd";

const Testimonials = () => {
  const testimonial = [
    {
      id: "1",
      name: "Kolawole Tajudeen",
      role: "Senior Software Engineer at Clipboard Health",
      image:
        "https://media.licdn.com/dms/image/v2/D4D35AQHmsze-jlPTmg/profile-framedphoto-shrink_800_800/B4DZb6HtjvGkAk-/0/1747953048057?e=1759068000&v=beta&t=WW8khic6ls5HbyrLb_b1ibH-2SYUuPpk-yWm5BKJLtU",
      testimony:
        "Tunde is a dynamic and committed full-stack engineer with a robust foundation across frontend and backend development. His passion for software engineering is evident in his continuous pursuit of knowledge and proactive approach to solving complex challenges. Tunde’s quick learning abilities and enthusiasm make him a valuable asset to any project, consistently delivering high-quality solutions end-to-end.",
    },
    {
      id: "2",
      name: "Majid Kareem",
      role: "Full-Stack Developer and React Enthusiast",
      image:
        "https://media.licdn.com/dms/image/v2/C4D03AQG0MvxjV-pE-Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1662375034226?e=1761177600&v=beta&t=CzfDSwUg-zYGZXhW7kMbrcnp7wx_vpKA8yjH3Zlj1Gs",
      testimony:
        "Tunde is an exceptional team player with a profound understanding of full-stack development. From designing APIs to crafting intuitive interfaces, his passion, open communication, and collaborative spirit contribute significantly to the success of any project.",
    },
    {
      id: "3",
      name: "Abdulgafar Tajudeen",
      role: "Frontend Developer",
      image:
        "https://media.licdn.com/dms/image/v2/D4D35AQEIsn7SB6AIcA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1738214632402?e=1759068000&v=beta&t=-JHN0ZTH6mrVa-YTtstsU6Nm5niNfsOoLWoEfFO-7xs",
      testimony:
        "With extensive full-stack knowledge and a collaborative spirit, Tunde proves to be a valuable team member. His ability to work across the stack, combined with his commitment to excellence, makes him an excellent addition to any team.",
    },
    {
      id: "4",
      name: "Moshood Shabi",
      role: "Full-Stack Developer",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQHfOqYwx6ODUQ/profile-displayphoto-shrink_800_800/B4DZhmkvNBGkAc-/0/1754067567280?e=1761177600&v=beta&t=JvTEYAWHX6KpCMq2vtUfYCpFS_LpKNAHMbf2Qn705gY",
      testimony:
        "With a sharp mind for problem-solving and a dedication to open communication, Tunde thrives as a full-stack developer. He seamlessly integrates into teams, contributing significantly to both frontend and backend goals.",
    },
  ];

  const testimonys = testimonial.map((testimony, index) => (
    <div key={index}>
      <p className="bg-black text-white rounded-tl-3xl rounded-br-3xl p-4 lg:p12 flex gap-8 items-center italic">
        <CommentOutlined
          className="text-3xl lg:text-4xl"
          style={{ color: "rgb(34 197 94)" }}
        />{" "}
        {testimony.testimony}
      </p>
      <div className="m-4 flex gap-4">
        <Image
          src={testimony.image}
          alt={testimony.name}
          width={75}
          height={75}
          style={{
            width: "auto",
            height: "auto",
          }}
          className="rounded-tl-3xl rounded-br-3xl w-8 h-8"
        />
        <div>
          <div className="font-bold text-white">{testimony.name}</div>
          <div className="font-bold text-white">{testimony.role}</div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="p-8 ">
      <Carousel effect="fade" autoplay dots={false}>
        <div>
          <div className="flex flex-col gap-0 lg:grid grid-cols-2 lg:gap-4">
            <div className="col-span-1"> {testimonys[0]}</div>
            <div className="col-span-1"> {testimonys[1]}</div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-0 lg:grid grid-cols-2 lg:gap-4">
            <div className="col-span-1"> {testimonys[2]}</div>
            <div className="col-span-1"> {testimonys[3]}</div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
