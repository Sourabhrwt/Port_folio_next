import Image from "next/image";
import Link from "next/link";
import React from "react";
import Twitter from "../public/assets/projects/Twitter.png";
import Food from "../public/assets/projects/Foodcity.png";
import House from "../public/assets/projects/House.png";
import Movies from "../public/assets/projects/Moives.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Projects</p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem title="Twitter" backgroundImg={Twitter} projectUrl="https://twitter-v4-defw.vercel.app/" tech="Next JS" />
          <ProjectItem title="House Marketplace" backgroundImg={House} projectUrl="https://house-marketplace-pi-seven.vercel.app/" tech="React JS" />
          <ProjectItem title="Food City App" backgroundImg={Food} projectUrl="https://foody-peach.vercel.app/" tech="React JS" />
          <ProjectItem title="Movies App" backgroundImg={Movies} projectUrl="https://r-movies-six.vercel.app/" tech="Next JS" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
