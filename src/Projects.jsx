import React from "react";
import useProjectStore from "./Store/ProjectStore";
import Carousel from "./Carousel";

const Projects = () => {
  const items = useProjectStore((state) => state.items);

  return (
    <>
      <h2 className="text-3xl font-bold text-center my-5">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="border rounded-lg shadow-md p-5 bg-white"
          >
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <Carousel images={item.images} />
            <div className="mt-4 mx-4">
              <h4 className="font-medium">Description:</h4>
              <p className="mb-2">{item.description}</p>

              <div className="flex items-center mb-2">
                <h4 className="font-medium mr-2">Tech Stack:</h4>
                <ul className="list-none flex space-x-5">
                  {item.techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center mb-4">
                <h4 className="font-medium mr-2">Github Link:</h4>
                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline italic"
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
