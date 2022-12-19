import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav >
      <h3>Waves</h3>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
      </button>
    </nav>
  );
};

export default Nav;