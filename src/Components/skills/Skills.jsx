import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
const Skills = () => {
  return (
    <div>
      <div className="w-full text-5xl font-semibold my-6 flex justify-center items-center">
        <h1>Skills</h1>
      </div>
      <div className="md:flex p-10">
        <div className="md:w-1/2">
          <div className="pr-8">
            <h1>HTML </h1>
            <Progress percent={95} />
          </div>
          <div className="pr-8">
            <h1>CSS </h1>
            <Progress percent={90} />
          </div>
          <div className="pr-8">
            <h1>Tailwind CSS </h1>
            <Progress percent={89} />
          </div>
          <div className="pr-8">
            <h1>Bootstrape CSS </h1>
            <Progress percent={80} />
          </div>
          <div className="pr-8">
            <h1>MongoDB </h1>
            <Progress percent={70} />
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="pr-8">
            <h1>Javascript </h1>
            <Progress percent={70} />
          </div>
          <div className="pr-8">
            <h1>Node Js </h1>
            <Progress percent={50} />
          </div>
          <div className="pr-8">
            <h1>Firebase</h1>
            <Progress percent={90} />
          </div>
          <div className="pr-8">
            <h1>React Js</h1>
            <Progress percent={90} />
          </div>
          <div className="pr-8">
            <h1>Express Js</h1>
            <Progress percent={75} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
