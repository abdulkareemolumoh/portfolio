"use client";
import { useState } from "react";
import { MenuOutlined } from "../antd";
import { Navbar } from ".";

const TopNavbar = () => {
  const [switchMenu, setSwitchMenu] = useState(false);
  function toggleSwitch() {
    setSwitchMenu(!switchMenu);
    console.log("hello");
  }
  return (
    <div>
      <div className="flex justify-between items-center bg-black text-green-500 px-6 py-4 font-bold sticky">
        <h1>TUNDE ABDULKAREEM OLUMOH</h1>
        <button onClick={toggleSwitch}>
          <MenuOutlined />
        </button>
      </div>
      {switchMenu ? <Navbar /> : null}
    </div>
  );
};

export default TopNavbar;
