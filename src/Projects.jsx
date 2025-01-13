import React from "react";
import useProjectStore from "./Store/ProjectStore";
import Carousel from "./Carousel";

const Projects = () => {
  const items = useProjectStore((state) => state.items);

  return (
    <>
      <h1 className="text-center mb-5">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-x-6 gap-y-10 mx-7">
        {items.map((item) => (
          <div
            key={item.title}
            className="border rounded-lg shadow-md p-5 bg-white"
          >
            <h3 className="text-lg text-center font-semibold mb-5">
              {item.title}
            </h3>
            <Carousel images={item.images} />
            <div className="mt-4 mx-4">
              <h4 className="font-medium">
                <b>Description:</b>
              </h4>
              <p className="mb-2">{item.description}</p>

              <div className="flex items-center mb-2">
                <h4 className="font-medium mr-2">
                  <b>Tech Stack:</b>
                </h4>
                <ul className="list-none flex flex-wrap flex-row space-x-5">
                  {item.techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center mb-4">
                <h4 className="font-medium mr-2">
                  <b>Github Link:</b>
                </h4>
                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline italic"
                >
                  {item.github}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
