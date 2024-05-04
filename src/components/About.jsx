const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#191919] text-gray-300">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <br />
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I m Aditya, glad you came here. Please take a look around.
            </p>
          </div>
          <div className="mt-3">
            <p>
              A Motivated Full Stack Developer (Next.js, React, Node.js,
              MongoDB) seeking opportunities to apply skills and collaborate on
              impactful projects. Eager learner thriving in dynamic environments
              and tackling challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
