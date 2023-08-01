import { Typewriter } from "react-simple-typewriter";

const Slider = () => {
  return (
    <div className="md:flex ">
      <div className="md:w-1/2 flex ml-6 lg:ml-20 items-center">
        <div>
          <h1 className="md:text-5xl text-3xl font-bold">
            Hello I am <br />
            <span className="text-green-600 font-bold">
              <Typewriter
                words={[
                  "Jahed Ahmed",
                  "Web Developer",
                  "MERN Developer",
                  "Full-stack web developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={80}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <div className="my-5">
            <p className="text-xl">
              MERN stack Developer with high level of exprience in web
              development.
            </p>
          </div>
          <div className="my-5">
            <button className="btn mr-2 btn-success">Hire me</button>
            <a href="Jahed_Resume.pdf" download>
              <button className="btn btn-success">Download CV</button>
            </a>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 h-full">
        <img
          className="h-100"
          src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=740&t=st=1688101692~exp=1688102292~hmac=b3c1236828ab6a0e0e93f57bc97dcc6cbf06f9b1fe8dd17651b5d19a4538bc80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Slider;
