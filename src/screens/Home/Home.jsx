import React, { useEffect, useState } from "react";
import HeroSection from "../../components/Home/HeroSection";
import "./home.css";
import TailScrollSection from "../../components/Home/TailScrollSection";
import Loading from "../../components/Generic/Loading";
import HoverCardItems from "../../components/Generic/HoverCardItems";
export default function Home() {
  return (
    <>
      <div className="home_screen-main-cont">
        <HeroSection />
        <TailScrollSection />
        <HoverCardItems />
      </div>
    </>
  );
}