import { FaCode, FaLink, FaServer } from "react-icons/fa";
const Projects = () => {
  return (
    <div>
      <h2 className="text-4xl mb-20 font-bold text-center">Projects</h2>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="md:w-1/2">
          <img src="project1.jpeg" alt="Album" />
        </figure>
        <div className="ml-8">
          <div className="card-body">
            <h2 className="card-title">Project 1</h2>
            <p>Toy World</p>
          </div>
          <p>Feature</p>
          <ul className="list-disc list-inside mb-5 capitalize">
            <li>
              in this site you can add toy and edit after getting any error or
              delete.
            </li>
            <li>in this site you can login or logout. </li>
          </ul>
          <div>
            <ul className="flex justify-between">
              <li className="flex items-center">
                <a href="https://assignment-11-c4a98.web.app/">Live link</a>
                <FaLink className="m-2" />
              </li>
              <li className="flex items-center">
                <a href="https://github.com/jahed121421/Toy-shop-clint">
                  Github link
                </a>
                <FaCode className="m-2" />
              </li>
              <li className="flex items-center">
                <a href="https://github.com/jahed121421/Toy-shop-server">
                  Server link
                </a>
                <FaServer className="m-2" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card mt-5 lg:card-side bg-base-100 shadow-xl">
        <figure className="md:w-1/2">
          <img src="project2.jpeg" alt="Album" />
        </figure>
        <div className="ml-8">
          <div className="card-body">
            <h2 className="card-title">Project 2</h2>
            <p>Ai Universe Hub</p>
          </div>
          <p>Feature</p>
          <ul className="list-disc list-inside mb-5 capitalize">
            <li>in this site we use modal to show details</li>
            <li>in this site you can see show more function.</li>
          </ul>
          <div>
            <ul className="w-full flex justify-between">
              <li className="flex items-center">
                <a href="https://loquacious-duckanoo-83ce04.netlify.app/">
                  Live link
                </a>
                <FaLink className="m-2" />
              </li>
              <li className="flex items-center">
                <a href="https://github.com/jahed121421/AI-univers">
                  Github link
                </a>
                <FaCode className="m-2" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card mt-5 lg:card-side bg-base-100 shadow-2xl">
        <figure className="md:w-1/2">
          <img src="project3.jpeg" alt="Album" />
        </figure>
        <div className="ml-8">
          <div className="card-body">
            <h2 className="card-title">Project 3</h2>
            <p>Knowladge Cafe</p>
          </div>
          <p>Feature</p>
          <ul className="list-disc list-inside mb-5 capitalize">
            <li>in this site you can see add book mark function.</li>
            <li>
              after added to book mark function time will count in dash board.
            </li>
            <li>
              after added to book mark function you will see how much you add
              card to book mark.
            </li>
          </ul>
          <div>
            <ul className="flex justify-between">
              <li className="flex items-center">
                <a href="https://snazzy-bavarois-cf60d7.netlify.app/">
                  Live link
                </a>
                <FaLink className="m-2" />
              </li>
              <li className="flex items-center">
                <a href="https://github.com/jahed121421/Knowladge_cafe">
                  Github link
                </a>
                <FaCode className="m-2" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
