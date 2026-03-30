"use client";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (!switchMenu) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [switchMenu]);

  return (
    <div>
      <div className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/75 px-4 py-4 text-green-400 shadow-lg shadow-black/20 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.25em] text-green-300">
            Portfolio
          </p>
          <h1 className="text-sm font-bold tracking-wide text-white">
            Tunde Abdulkareem Olumoh
          </h1>
          <button
            onClick={toggleSwitch}
            aria-label="Toggle navigation menu"
            aria-expanded={switchMenu}
            aria-controls="mobile-navigation"
            className="rounded-xl border border-green-500/40 bg-green-500/10 p-3 text-lg transition hover:bg-green-500/20"
          >
            <MenuOutlined />
          </button>
        </div>
      </div>

      {switchMenu ? (
        <>
          <button
            aria-label="Close navigation menu"
            className="fixed inset-0 z-20 bg-black/70 backdrop-blur-[2px]"
            onClick={closeMenu}
          />
          <div id="mobile-navigation">
            <Navbar mobile onNavigate={closeMenu} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default TopNavbar;
