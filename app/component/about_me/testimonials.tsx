import Image from "next/image";
import { CommentOutlined } from "../antd";
import { Carousel } from "../antd";

const Testimonials = () => {
  const testimonial = [
    {
      id: "1",
      name: "Ishola",
      role: "Software Engineer",
      image: "/images/picture.jpg",
      testimony:
        "Ishola is a passionate software engineer with a strong background in web development. He is a quick learner and always eager to",
    },
    {
      id: "2",
      name: "Ishola",
      role: "Software Engineer",
      image: "/images/picture.jpg",
      testimony:
        "Ishola is a passionate software engineer with a strong background in web development. He is a quick learner and always eager to",
    },
    {
      id: "3",
      name: "Ishola",
      role: "Software Engineer",
      image: "/images/picture.jpg",
      testimony:
        "Ishola is a passionate software engineer with a strong background in web development. He is a quick learner and always eager to",
    },
  ];

  const testimonys = testimonial.map((testimony, index) => (
    <div key={index} className="">
      <p className="bg-green-100 rounded-tl-3xl rounded-br-3xl  p-4 lg:p12 flex gap-8 items-center ">
        <CommentOutlined className="text-3xl lg:text-6xl" /> {testimony.testimony}
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
          <div className="font-bold">{testimony.name}</div>
          <div className="font-bold">{testimony.role}</div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="p-8">
      <Carousel effect="fade" autoplay>
        <div>
          <div className="flex flex-col gap-0 lg:grid grid-cols-2 lg:gap-4">
            <div className="col-span-1"> {testimonys[0]}</div>
            <div className="col-span-1"> {testimonys[1]}</div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-0 lg:grid grid-cols-2 lg:gap-4">
            <div className="col-span-1"> {testimonys[2]}</div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
