"use client";
import { useState } from "react";
import { MenuOutlined } from "../antd";
import { Navbar } from ".";

const TopNavbar = () => {
  const [switchMenu, setSwitchMenu] = useState(false);

  function toggleSwitch() {
    setSwitchMenu((prev) => !prev);
  }

  function closeMenu() {
    setSwitchMenu(false);
  }

  return (
    <div>
      <div className="fixed z-40 flex w-full items-center justify-between border-b border-green-500/30 bg-black/95 px-4 py-4 text-green-400 backdrop-blur-sm">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-green-300">
            Portfolio
          </p>
          <h1 className="text-sm font-bold tracking-wide text-white">
            Tunde Abdulkareem Olumoh
          </h1>
        </div>

        <button
          onClick={toggleSwitch}
          aria-label="Toggle navigation menu"
          className="rounded-xl border border-green-500/40 bg-green-500/10 p-3 text-lg transition hover:bg-green-500/20"
        >
          <MenuOutlined />
        </button>
      </div>

      {switchMenu ? (
        <>
          <button
            aria-label="Close navigation menu"
            className="fixed inset-0 z-20 bg-black/60 backdrop-blur-[2px]"
            onClick={closeMenu}
          />
          <Navbar mobile onNavigate={closeMenu} />
        </>
      ) : null}
    </div>
  );
};

export default TopNavbar;
