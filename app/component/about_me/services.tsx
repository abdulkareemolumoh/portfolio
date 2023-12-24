import { EyeOutlined, LaptopOutlined, MobileOutlined } from "../antd";

const Services = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold underline my-8">
        SERVICES
      </h1>
      <div className="flex justify-evenly text-center m-2 gap-8 ">
        <div>
          <LaptopOutlined
            className="text-6xl "
            style={{ color: "rgb(34 197 94" }}
          />
          <h1 className="text-xl font-semibold my-4">Web Development</h1>
          {/* <h2>
            Amet aspernatur delectus maxime ducimus similique Ratione asperiores
            corporis provident aut libero.
          </h2> */}
        </div>
        <div>
          <EyeOutlined
            className="text-6xl "
            style={{ color: "rgb(34 197 94" }}
          />
          <h1 className="text-xl font-semibold my-4">Web Design</h1>
          {/* <h2>
            Amet aspernatur delectus maxime ducimus similique Ratione asperiores
            corporis provident aut libero.
          </h2> */}
        </div>
        <div>
          <MobileOutlined
            className="text-6xl "
            style={{ color: "rgb(34 197 94" }}
          />
          <h1 className="text-xl font-semibold my-4">Responsive Design</h1>
          {/* <h2>
            Amet aspernatur delectus maxime ducimus similique Ratione asperiores
            corporis provident aut libero.
          </h2> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
