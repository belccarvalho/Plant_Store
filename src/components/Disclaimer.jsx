import React from "react";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
export default function Disclaimer() {
  return (
    <div>
      <p className='disclaimer'>
        <span>Disclaimer:</span> This is a mock-up of an online-shop developed
        during a one-year Web Development course.{" "}
        <span>
          {" "}
          Aim: use of <FaReact /> React and <SiRedux /> Redux{" "}
        </span>
      </p>
    </div>
  );
}
