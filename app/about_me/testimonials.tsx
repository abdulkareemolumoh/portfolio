import Image from "next/image";
import { CommentOutlined } from "@ant-design/icons";
import { Carousel } from "antd";

const Tesimonials = () => {
  const testimonial = [
    {
      id: "1",
      name: "Ishola",
      role: "Software Engineer",
      image: "/picture.jpg",
      testimony:
        "Ishola is a passionate software engineer with a strong background in web development. He is a quick learner and always eager to",
    },
    {
      id: "1",
      name: "Ishola",
      role: "Software Engineer",
      image: "/picture.jpg",
      testimony:
        "Ishola is a passionate software engineer with a strong background in web development. He is a quick learner and always eager to",
    },
    {
      id: "1",
      name: "Ishola",
      role: "Software Engineer",
      image: "/picture.jpg",
      testimony:
        "Ishola is a passionate software engineer with a strong background in web development. He is a quick learner and always eager to",
    },
  ];

  const testimonys = testimonial.map((testimony) => (
    <div key={testimony.id} className="">
      <p className="bg-green-500 rounded-tl-3xl rounded-br-3xl p-8 flex gap-2 items-center ">
        <CommentOutlined className="text-6xl" /> {testimony.testimony}
      </p>
      <div className="m-4 flex gap-4">
        <Image
          src={testimony.image}
          alt={testimony.name}
          width={100}
          height={100}
          className="rounded-tl-3xl rounded-br-3xl"
        />
        <div>
          <p className="font-bold">{testimony.name}</p>
          <p className="font-bold">{testimony.role}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="p-8">
      <Carousel effect="fade" autoplay>
        <div>
          <p className="grid grid-cols-2 gap-4">
            <p className="col-span-1"> {testimonys[0]}</p>
            <p className="col-span-1"> {testimonys[1]}</p>
          </p>
        </div>
        <div>
          <p className="grid grid-cols-2 gap-4">
            <p className="col-span-1"> {testimonys[2]}</p>
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Tesimonials;
