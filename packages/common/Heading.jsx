import React from "react";

function Heading({ level = "1", title }) {
  // return React.createElement(`h${level}`, {}, `title`);
  return React.createElement(`div`, {}, `title`);
}

export default Heading;