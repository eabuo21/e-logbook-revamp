import React from "react";
import Logbook from "../../src/assets/images/logbook.jpeg";
import { Link } from "react-router-dom";

const Welcome: React.FC = () => {
  return (
    <>
      <div className="  p-2 w-full h-screen m-auto bg-gradient-to-br from-blue-950 to-red  flex flex-col justify-center items-center">
        <section className="welcome-screen  p-2 flex flex-col  gap-6 justify-center items-center m-auto">
          <img
            src={Logbook}
            alt="logbook"
            className="w-auto h-auto rounded-md"
          />
          <h1 className="text-white  font-bold font-dm text-4xl ">
            <span className="font-cur"> ELECTRONIC </span>LOGBOOK REVAMP
          </h1>

          <button className="bg-gradient-to-br from red via-blue-950 to-green-950 p-2 w-fixed  text-white font-bold font-serif ">
            <Link to="/logbook">Go to Logbook</Link>
          </button>
        </section>
      </div>
    </>
  );
};

export default Welcome;
