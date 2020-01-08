import React from 'react';
import './Hello.css';

const Hello = () => {
  return React.createElement("div", {
    className: "hello"
  }, React.createElement("p", null, "Hello World, NPM!"), React.createElement("p", null, "Update 3"));
};

export default Hello;