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
        "https://media.licdn.com/dms/image/C5603AQHd8thu6_dOGg/profile-displayphoto-shrink_800_800/0/1574122461702?e=1708560000&v=beta&t=6ft6-g7GR7rM0jY1Ahc8tLedyJqURoFzNDwNoyg5XGA",
      testimony:
        "Tunde is a dynamic and committed engineer with a robust foundation in web development. His passion for software engineering is evident in his continuous pursuit of knowledge and his proactive approach to solving complex challenges. Tunde's quick learning abilities and unwavering enthusiasm make him a valuable asset to any project. His dedication and drive set him apart as a standout software engineer, consistently delivering high-quality solutions and contributing positively to the success of every endeavor.",
    },
    {
      id: "2",
      name: "Majid Kareem",
      role: "Fullstack developer and React enthusiast",
      image:
        "https://media.licdn.com/dms/image/C4D03AQG0MvxjV-pE-Q/profile-displayphoto-shrink_800_800/0/1662375034226?e=1708560000&v=beta&t=1fZcVkYMUVZSINziczK0oh78gq5flqMPydVyfKB80Z0",
      testimony:
        "Tunde is an exceptional team player with a profound understanding of web development. His passion, open communication, and collaborative spirit contribute significantly to the success of any project. Tunde's ability to seamlessly integrate into diverse teams and his innovative problem-solving make him a valuable asset in achieving shared goals.",
    },
    {
      id: "3",
      name: "Abdulgafar Tajudeen",
      role: "Frontend Developer",
      image:
        "https://media.licdn.com/dms/image/D4D35AQE3sbV-71sslg/profile-framedphoto-shrink_800_800/0/1692878322753?e=1703955600&v=beta&t=SdKmX0G-iu6nNYiMlPs4fC3aNnGAhsDV51r-z9Cv1ts",
      testimony:
        "With extensive knowledge and a collaborative spirit, Tunde proves to be a valuable team member. His commitment to excellence and proactive mindset significantly contribute to shared successes, making him an excellent addition to any team.",
    },
    {
      id: "4",
      name: "Moshood Shabi",
      role: "Full-Stack Developer",
      image:
        "https://media.licdn.com/dms/image/D4D35AQHMvW4-7aaHFQ/profile-framedphoto-shrink_200_200/0/1687098840977?e=1703984400&v=beta&t=0MYuNVZy3PkUkizpzbFimWNNIS98c4Ablg4kS_WqX9Y",
      testimony:
        "With a sharp mind for problem-solving and a dedication to open communication, this developer seamlessly integrates into diverse teams, contributing significantly to shared goals.",
    },
  ];

  const testimonys = testimonial.map((testimony, index) => (
    <div key={index}>
      <p className="bg-black text-white rounded-tl-3xl rounded-br-3xl p-4 lg:p12 flex gap-8 items-center">
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
