import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function footer() {
  return (
    <div>
      <footer>
        <p>
          Made by Isabel Costa{" "}
          <a href="https://github.com/belcosta" target="_blank">
            <FaGithub />
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/belcosta-webdeveloper/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </p>
      </footer>
    </div>
  );
}
