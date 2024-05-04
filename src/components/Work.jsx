import { data } from "../data/data.js";

import PropTypes from "prop-types";

const ProjectItem = ({ item }) => {
  const { image, name, github, live } = item;

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Dark overlay color
    opacity: 1, // Initially visible
    transition: "opacity 0.3s ease", // Transition effect
  };

  const containerStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    width: "300px",
    height: "200px",
    position: "relative", // Set container to relative for overlay positioning
  };

  return (
    <div className="relative">
      <div
        style={containerStyle}
        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
      >
        {/* Overlay for tint effect */}
        <div style={overlayStyle}></div>

        <div className="opacity-0 group-hover:opacity-100 relative z-10">
          <span className="text-2xl font-bold text-white tracking-wider">
            {name}
          </span>
          <div className="pt-8 text-center">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noopener noreferrer">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const Work = () => {
  const projects = data;

  return (
    <div
      id="work"
      name="work"
      className="flex flex-col w-full md:h-screen text-gray-300 bg-[#191919]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((item, index) => (
            <ProjectItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
